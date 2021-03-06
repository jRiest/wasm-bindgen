use wasm_bindgen::prelude::*;
use wasm_bindgen_test::*;

#[wasm_bindgen(module = "tests/wasm/imports.js")]
extern "C" {
    fn test_simple();

    fn simple_foo(s: &str);
    fn simple_another(a: u32) -> i32;
    fn simple_take_and_return_bool(a: bool) -> bool;
    fn simple_return_object() -> JsValue;
    #[allow(dead_code)]
    fn missing_symbol(s: &str);
    fn return_string() -> String;
    fn take_and_ret_string(s: String) -> String;
    #[wasm_bindgen(js_name = take_and_ret_string)]
    fn take_and_ret_string2(s: &str) -> String;

    fn exceptions_throw();
    #[wasm_bindgen(catch)]
    fn exceptions_throw2() -> Result<(), JsValue>;
    fn test_exception_propagates();

    fn assert_valid_error(val: JsValue);

    static IMPORT: JsValue;

    #[wasm_bindgen(js_name = return_three)]
    fn rust_name_for_return_three() -> u32;

    fn underscore(_: u8);

    #[wasm_bindgen(js_name = self)]
    fn js_function_named_rust_keyword() -> u32;

    type bar;
    #[wasm_bindgen(js_namespace = bar, js_name = foo)]
    static FOO: JsValue;

    fn take_custom_type(f: CustomType) -> CustomType;
    fn touch_custom_type();
    fn custom_type_return_2() -> CustomType;
    #[wasm_bindgen(js_name = interpret_2_as_custom_type)]
    fn js_interpret_2_as_custom_type();

    #[wasm_bindgen(js_name = "baz$")]
    fn renamed_with_dollar_sign();
    #[wasm_bindgen(js_name = "$foo")]
    static RENAMED: JsValue;

    fn unused_import();
    fn assert_dead_import_not_generated();
}

#[wasm_bindgen]
extern "C" {
    fn parseInt(a: &str) -> u32;
}

#[wasm_bindgen_test]
fn simple() {
    test_simple();
}

#[wasm_bindgen]
pub fn simple_take_str(s: &str) {
    simple_foo(s);
}

#[wasm_bindgen]
pub fn simple_another_thunk(a: u32) -> i32 {
    simple_another(a)
}

#[wasm_bindgen]
pub fn simple_bool_thunk(a: bool) -> bool {
    simple_take_and_return_bool(a)
}

#[wasm_bindgen]
pub fn simple_get_the_object() -> JsValue {
    simple_return_object()
}

#[wasm_bindgen_test]
fn string_ret() {
    assert_eq!(return_string(), "bar");
}

#[wasm_bindgen_test]
fn strings() {
    assert_eq!(take_and_ret_string(String::from("a")), "ab");
    assert_eq!(take_and_ret_string2("b"), "bb");
}

#[wasm_bindgen_test]
fn exceptions() {
    test_exception_propagates();
    assert!(exceptions_throw2().is_err());
}

#[wasm_bindgen]
pub fn exceptions_propagate() {
    exceptions_throw();
}

#[wasm_bindgen_test]
fn exn_caught() {
    assert_valid_error(exceptions_throw2().unwrap_err());
}

#[wasm_bindgen_test]
fn free_imports() {
    assert_eq!(parseInt("3"), 3);
}

#[wasm_bindgen_test]
fn import_a_field() {
    assert_eq!(IMPORT.as_f64(), Some(1.0));
}

#[wasm_bindgen_test]
fn rename() {
    assert_eq!(rust_name_for_return_three(), 3);
}

#[wasm_bindgen_test]
fn underscore_pattern() {
    underscore(2);
}

#[wasm_bindgen_test]
fn rust_keyword() {
    assert_eq!(js_function_named_rust_keyword(), 2);
}

#[wasm_bindgen_test]
fn rust_keyword2() {
    assert_eq!(FOO.as_f64(), Some(3.0));
}

#[wasm_bindgen_test]
fn custom_type() {
    take_custom_type(CustomType(()));
    touch_custom_type();
    js_interpret_2_as_custom_type();
}

#[wasm_bindgen]
pub fn interpret_2_as_custom_type() {
    custom_type_return_2();
}

#[wasm_bindgen]
pub struct CustomType(());

#[wasm_bindgen]
impl CustomType {
    pub fn touch(&self) {
        panic!()
    }
}

#[wasm_bindgen_test]
fn rename_with_string() {
    renamed_with_dollar_sign();
}

#[wasm_bindgen_test]
fn rename_static_with_string() {
    assert_eq!(RENAMED.as_f64(), Some(1.0));
}

#[wasm_bindgen_test]
fn dead_imports_not_generated() {
    assert_dead_import_not_generated();
}

#[wasm_bindgen_test]
#[cfg(feature = "nightly")]
fn import_inside_function_works() {
    #[wasm_bindgen(module = "tests/wasm/imports.js")]
    extern {
        fn import_inside_function_works();
    }
    import_inside_function_works();
}

#[wasm_bindgen_test]
#[cfg(feature = "nightly")]
fn private_module_imports_work() {
    private::foo();
}

mod private {
    use wasm_bindgen::prelude::*;

    pub fn foo() {
        #[wasm_bindgen(module = "tests/wasm/imports.js")]
        extern {
            fn import_inside_private_module();
        }
        import_inside_private_module();
    }
}
