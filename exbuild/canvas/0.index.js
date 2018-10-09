(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./canvas.js":
/*!*******************!*\
  !*** ./canvas.js ***!
  \*******************/
/*! exports provided: draw, __widl_instanceof_CanvasRenderingContext2D, __widl_f_begin_path_CanvasRenderingContext2D, __widl_f_stroke_CanvasRenderingContext2D, __widl_f_arc_CanvasRenderingContext2D, __widl_f_move_to_CanvasRenderingContext2D, __widl_f_get_element_by_id_Document, __widl_instanceof_HTMLCanvasElement, __widl_f_get_context_HTMLCanvasElement, __widl_instanceof_Window, __widl_f_document_Window, __wbg_newnoargs_7b645db1166d5db3, __wbg_call_acb354df3e54038a, __wbindgen_object_clone_ref, __wbindgen_object_drop_ref, __wbindgen_number_get, __wbindgen_is_null, __wbindgen_is_undefined, __wbindgen_boolean_get, __wbindgen_is_symbol, __wbindgen_string_get, __wbindgen_throw */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(TextDecoder, TextEncoder) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"draw\", function() { return draw; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_CanvasRenderingContext2D\", function() { return __widl_instanceof_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_begin_path_CanvasRenderingContext2D\", function() { return __widl_f_begin_path_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_stroke_CanvasRenderingContext2D\", function() { return __widl_f_stroke_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_arc_CanvasRenderingContext2D\", function() { return __widl_f_arc_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_move_to_CanvasRenderingContext2D\", function() { return __widl_f_move_to_CanvasRenderingContext2D; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_element_by_id_Document\", function() { return __widl_f_get_element_by_id_Document; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_HTMLCanvasElement\", function() { return __widl_instanceof_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_get_context_HTMLCanvasElement\", function() { return __widl_f_get_context_HTMLCanvasElement; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_instanceof_Window\", function() { return __widl_instanceof_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__widl_f_document_Window\", function() { return __widl_f_document_Window; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_newnoargs_7b645db1166d5db3\", function() { return __wbg_newnoargs_7b645db1166d5db3; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_call_acb354df3e54038a\", function() { return __wbg_call_acb354df3e54038a; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_clone_ref\", function() { return __wbindgen_object_clone_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_object_drop_ref\", function() { return __wbindgen_object_drop_ref; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_number_get\", function() { return __wbindgen_number_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_null\", function() { return __wbindgen_is_null; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_undefined\", function() { return __wbindgen_is_undefined; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_boolean_get\", function() { return __wbindgen_boolean_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_is_symbol\", function() { return __wbindgen_is_symbol; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_string_get\", function() { return __wbindgen_string_get; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbindgen_throw\", function() { return __wbindgen_throw; });\n/* harmony import */ var _canvas_bg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./canvas_bg */ \"./canvas_bg.wasm\");\n/* tslint:disable */\n\n\n/**\n* @returns {void}\n*/\nfunction draw() {\n    return _canvas_bg__WEBPACK_IMPORTED_MODULE_0__[\"draw\"]();\n}\n\nconst stack = [];\n\nconst slab = [{ obj: undefined }, { obj: null }, { obj: true }, { obj: false }];\n\nfunction getObject(idx) {\n    if ((idx & 1) === 1) {\n        return stack[idx >> 1];\n    } else {\n        const val = slab[idx >> 1];\n\n        return val.obj;\n\n    }\n}\n\nfunction __widl_instanceof_CanvasRenderingContext2D(idx) {\n    return getObject(idx) instanceof CanvasRenderingContext2D ? 1 : 0;\n}\n\nconst __widl_f_begin_path_CanvasRenderingContext2D_target = CanvasRenderingContext2D.prototype.beginPath || function() {\n    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.prototype.beginPath does not exist`);\n};\n\nfunction __widl_f_begin_path_CanvasRenderingContext2D(arg0) {\n    __widl_f_begin_path_CanvasRenderingContext2D_target.call(getObject(arg0));\n}\n\nconst __widl_f_stroke_CanvasRenderingContext2D_target = CanvasRenderingContext2D.prototype.stroke || function() {\n    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.prototype.stroke does not exist`);\n};\n\nfunction __widl_f_stroke_CanvasRenderingContext2D(arg0) {\n    __widl_f_stroke_CanvasRenderingContext2D_target.call(getObject(arg0));\n}\n\nconst __widl_f_arc_CanvasRenderingContext2D_target = CanvasRenderingContext2D.prototype.arc || function() {\n    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.prototype.arc does not exist`);\n};\n\nlet cachegetUint32Memory = null;\nfunction getUint32Memory() {\n    if (cachegetUint32Memory === null || cachegetUint32Memory.buffer !== _canvas_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint32Memory = new Uint32Array(_canvas_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint32Memory;\n}\n\nlet slab_next = slab.length;\n\nfunction addHeapObject(obj) {\n    if (slab_next === slab.length) slab.push(slab.length + 1);\n    const idx = slab_next;\n    const next = slab[idx];\n\n    slab_next = next;\n\n    slab[idx] = { obj, cnt: 1 };\n    return idx << 1;\n}\n\nfunction __widl_f_arc_CanvasRenderingContext2D(arg0, arg1, arg2, arg3, arg4, arg5, exnptr) {\n    try {\n        __widl_f_arc_CanvasRenderingContext2D_target.call(getObject(arg0), arg1, arg2, arg3, arg4, arg5);\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nconst __widl_f_move_to_CanvasRenderingContext2D_target = CanvasRenderingContext2D.prototype.moveTo || function() {\n    throw new Error(`wasm-bindgen: CanvasRenderingContext2D.prototype.moveTo does not exist`);\n};\n\nfunction __widl_f_move_to_CanvasRenderingContext2D(arg0, arg1, arg2) {\n    __widl_f_move_to_CanvasRenderingContext2D_target.call(getObject(arg0), arg1, arg2);\n}\n\nconst __widl_f_get_element_by_id_Document_target = Document.prototype.getElementById || function() {\n    throw new Error(`wasm-bindgen: Document.prototype.getElementById does not exist`);\n};\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8');\n\nlet cachegetUint8Memory = null;\nfunction getUint8Memory() {\n    if (cachegetUint8Memory === null || cachegetUint8Memory.buffer !== _canvas_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer) {\n        cachegetUint8Memory = new Uint8Array(_canvas_bg__WEBPACK_IMPORTED_MODULE_0__[\"memory\"].buffer);\n    }\n    return cachegetUint8Memory;\n}\n\nfunction getStringFromWasm(ptr, len) {\n    return cachedTextDecoder.decode(getUint8Memory().subarray(ptr, ptr + len));\n}\n\nfunction isLikeNone(x) {\n    return x === undefined || x === null;\n}\n\nfunction __widl_f_get_element_by_id_Document(arg0, arg1, arg2) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n\n    const val = __widl_f_get_element_by_id_Document_target.call(getObject(arg0), varg1);\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __widl_instanceof_HTMLCanvasElement(idx) {\n    return getObject(idx) instanceof HTMLCanvasElement ? 1 : 0;\n}\n\nconst __widl_f_get_context_HTMLCanvasElement_target = HTMLCanvasElement.prototype.getContext || function() {\n    throw new Error(`wasm-bindgen: HTMLCanvasElement.prototype.getContext does not exist`);\n};\n\nfunction __widl_f_get_context_HTMLCanvasElement(arg0, arg1, arg2, exnptr) {\n    let varg1 = getStringFromWasm(arg1, arg2);\n    try {\n\n        const val = __widl_f_get_context_HTMLCanvasElement_target.call(getObject(arg0), varg1);\n        return isLikeNone(val) ? 0 : addHeapObject(val);\n\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __widl_instanceof_Window(idx) {\n    return getObject(idx) instanceof Window ? 1 : 0;\n}\n\nconst __widl_f_document_Window_target = function() {\n    return this.document;\n};\n\nfunction __widl_f_document_Window(arg0) {\n\n    const val = __widl_f_document_Window_target.call(getObject(arg0));\n    return isLikeNone(val) ? 0 : addHeapObject(val);\n\n}\n\nfunction __wbg_newnoargs_7b645db1166d5db3(arg0, arg1) {\n    let varg0 = getStringFromWasm(arg0, arg1);\n    return addHeapObject(new Function(varg0));\n}\n\nconst __wbg_call_acb354df3e54038a_target = Function.prototype.call || function() {\n    throw new Error(`wasm-bindgen: Function.prototype.call does not exist`);\n};\n\nfunction __wbg_call_acb354df3e54038a(arg0, arg1, exnptr) {\n    try {\n        return addHeapObject(__wbg_call_acb354df3e54038a_target.call(getObject(arg0), getObject(arg1)));\n    } catch (e) {\n        const view = getUint32Memory();\n        view[exnptr / 4] = 1;\n        view[exnptr / 4 + 1] = addHeapObject(e);\n\n    }\n}\n\nfunction __wbindgen_object_clone_ref(idx) {\n    // If this object is on the stack promote it to the heap.\n    if ((idx & 1) === 1) return addHeapObject(getObject(idx));\n\n    // Otherwise if the object is on the heap just bump the\n    // refcount and move on\n    const val = slab[idx >> 1];\n    val.cnt += 1;\n    return idx;\n}\n\nfunction dropRef(idx) {\n\n    idx = idx >> 1;\n    if (idx < 4) return;\n    let obj = slab[idx];\n\n    obj.cnt -= 1;\n    if (obj.cnt > 0) return;\n\n    // If we hit 0 then free up our space in the slab\n    slab[idx] = slab_next;\n    slab_next = idx;\n}\n\nfunction __wbindgen_object_drop_ref(i) {\n    dropRef(i);\n}\n\nfunction __wbindgen_number_get(n, invalid) {\n    let obj = getObject(n);\n    if (typeof(obj) === 'number') return obj;\n    getUint8Memory()[invalid] = 1;\n    return 0;\n}\n\nfunction __wbindgen_is_null(idx) {\n    return getObject(idx) === null ? 1 : 0;\n}\n\nfunction __wbindgen_is_undefined(idx) {\n    return getObject(idx) === undefined ? 1 : 0;\n}\n\nfunction __wbindgen_boolean_get(i) {\n    let v = getObject(i);\n    if (typeof(v) === 'boolean') {\n        return v ? 1 : 0;\n    } else {\n        return 2;\n    }\n}\n\nfunction __wbindgen_is_symbol(i) {\n    return typeof(getObject(i)) === 'symbol' ? 1 : 0;\n}\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? __webpack_require__(/*! util */ \"../../node_modules/util/util.js\").TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nfunction passStringToWasm(arg) {\n\n    const buf = cachedTextEncoder.encode(arg);\n    const ptr = _canvas_bg__WEBPACK_IMPORTED_MODULE_0__[\"__wbindgen_malloc\"](buf.length);\n    getUint8Memory().set(buf, ptr);\n    return [ptr, buf.length];\n}\n\nfunction __wbindgen_string_get(i, len_ptr) {\n    let obj = getObject(i);\n    if (typeof(obj) !== 'string') return 0;\n    const [ptr, len] = passStringToWasm(obj);\n    getUint32Memory()[len_ptr / 4] = len;\n    return ptr;\n}\n\nfunction __wbindgen_throw(ptr, len) {\n    throw new Error(getStringFromWasm(ptr, len));\n}\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextDecoder\"], __webpack_require__(/*! text-encoding */ \"../../node_modules/text-encoding/index.js\")[\"TextEncoder\"]))\n\n//# sourceURL=webpack:///./canvas.js?");

/***/ }),

/***/ "./canvas_bg.wasm":
/*!************************!*\
  !*** ./canvas_bg.wasm ***!
  \************************/
/*! exports provided: memory, __indirect_function_table, __heap_base, __data_end, __rustc_debug_gdb_scripts_section__, draw, __wbindgen_malloc */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./canvas */ \"./canvas.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///./canvas_bg.wasm?");

/***/ })

}]);