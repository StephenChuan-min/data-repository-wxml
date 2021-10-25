(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/default/index"],{

/***/ "./node_modules/_@tarojs_taro-loader@3.3.9@@tarojs/taro-loader/lib/raw.js!./src/pages/default/index.vue":
/*!**************************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_taro-loader@3.3.9@@tarojs/taro-loader/lib/raw.js!./src/pages/default/index.vue ***!
  \**************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_a85f3ca0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=a85f3ca0 */ "./src/pages/default/index.vue?vue&type=template&id=a85f3ca0");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/pages/default/index.vue?vue&type=script&lang=js");
/* harmony import */ var E_wangchuan_work_projects_data_repository_wxml_node_modules_vue_loader_16_8_1_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./node_modules/_vue-loader@16.8.1@vue-loader/dist/exportHelper.js */ "./node_modules/_vue-loader@16.8.1@vue-loader/dist/exportHelper.js");
/* harmony import */ var E_wangchuan_work_projects_data_repository_wxml_node_modules_vue_loader_16_8_1_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(E_wangchuan_work_projects_data_repository_wxml_node_modules_vue_loader_16_8_1_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2__);





const __exports__ = /*#__PURE__*/E_wangchuan_work_projects_data_repository_wxml_node_modules_vue_loader_16_8_1_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_2___default()(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], [['render',_index_vue_vue_type_template_id_a85f3ca0__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]],['__file',"src/pages/default/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./node_modules/_vue-loader@16.8.1@vue-loader/dist/index.js?!./src/pages/default/index.vue?vue&type=script&lang=js":
/*!******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.1@babel-loader/lib!./node_modules/_vue-loader@16.8.1@vue-loader/dist??ref--10-0!./src/pages/default/index.vue?vue&type=script&lang=js ***!
  \******************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_@vue_runtime-core@3.2.20@@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.3.9@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");



/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Default',
  setup: function setup() {
    Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* onMounted */ "t"])(function () {
      var session = _utils__WEBPACK_IMPORTED_MODULE_2__[/* storage */ "c"].getItem('session');

      if (session) {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.switchTab({
          url: '/pages/index/index'
        });
      } else {
        _tarojs_taro__WEBPACK_IMPORTED_MODULE_1___default.a.reLaunch({
          url: '/pages/login/index'
        });
      }
    });
  }
});

/***/ }),

/***/ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./node_modules/_vue-loader@16.8.1@vue-loader/dist/templateLoader.js?!./node_modules/_vue-loader@16.8.1@vue-loader/dist/index.js?!./src/pages/default/index.vue?vue&type=template&id=a85f3ca0":
/*!****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.1@babel-loader/lib!./node_modules/_vue-loader@16.8.1@vue-loader/dist/templateLoader.js??ref--6!./node_modules/_vue-loader@16.8.1@vue-loader/dist??ref--10-0!./src/pages/default/index.vue?vue&type=template&id=a85f3ca0 ***!
  \****************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_@vue_runtime-core@3.2.20@@vue/runtime-core/dist/runtime-core.esm-bundler.js");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "w"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "g"])("view");
}

/***/ }),

/***/ "./src/pages/default/index.vue":
/*!*************************************!*\
  !*** ./src/pages/default/index.vue ***!
  \*************************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.9@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_3_3_9_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_@tarojs_taro-loader@3.3.9@@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/_@tarojs_taro-loader@3.3.9@@tarojs/taro-loader/lib/raw.js!./src/pages/default/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_3_3_9_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/default/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/default/index.vue?vue&type=script&lang=js":
/*!*************************************************************!*\
  !*** ./src/pages/default/index.vue?vue&type=script&lang=js ***!
  \*************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_node_modules_vue_loader_16_8_1_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.2.1@babel-loader/lib!../../../node_modules/_vue-loader@16.8.1@vue-loader/dist??ref--10-0!./index.vue?vue&type=script&lang=js */ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./node_modules/_vue-loader@16.8.1@vue-loader/dist/index.js?!./src/pages/default/index.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_node_modules_vue_loader_16_8_1_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/pages/default/index.vue?vue&type=template&id=a85f3ca0":
/*!*******************************************************************!*\
  !*** ./src/pages/default/index.vue?vue&type=template&id=a85f3ca0 ***!
  \*******************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_node_modules_vue_loader_16_8_1_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_16_8_1_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_a85f3ca0__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.2.1@babel-loader/lib!../../../node_modules/_vue-loader@16.8.1@vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/_vue-loader@16.8.1@vue-loader/dist??ref--10-0!./index.vue?vue&type=template&id=a85f3ca0 */ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./node_modules/_vue-loader@16.8.1@vue-loader/dist/templateLoader.js?!./node_modules/_vue-loader@16.8.1@vue-loader/dist/index.js?!./src/pages/default/index.vue?vue&type=template&id=a85f3ca0");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_node_modules_vue_loader_16_8_1_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_16_8_1_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_a85f3ca0__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ })

},[["./src/pages/default/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map