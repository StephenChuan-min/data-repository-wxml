(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/mine/index"],{

/***/ "./node_modules/_@tarojs_taro-loader@3.3.9@@tarojs/taro-loader/lib/raw.js!./src/pages/mine/index.vue":
/*!***********************************************************************************************************!*\
  !*** ./node_modules/_@tarojs_taro-loader@3.3.9@@tarojs/taro-loader/lib/raw.js!./src/pages/mine/index.vue ***!
  \***********************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _index_vue_vue_type_template_id_355cc69a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=355cc69a */ "./src/pages/mine/index.vue?vue&type=template&id=355cc69a");
/* harmony import */ var _index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js */ "./src/pages/mine/index.vue?vue&type=script&lang=js");
/* harmony import */ var _index_vue_vue_type_style_index_0_id_355cc69a_lang_scss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./index.vue?vue&type=style&index=0&id=355cc69a&lang=scss */ "./src/pages/mine/index.vue?vue&type=style&index=0&id=355cc69a&lang=scss");
/* harmony import */ var E_wangchuan_work_projects_data_repository_wxml_node_modules_vue_loader_16_8_1_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./node_modules/_vue-loader@16.8.1@vue-loader/dist/exportHelper.js */ "./node_modules/_vue-loader@16.8.1@vue-loader/dist/exportHelper.js");
/* harmony import */ var E_wangchuan_work_projects_data_repository_wxml_node_modules_vue_loader_16_8_1_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(E_wangchuan_work_projects_data_repository_wxml_node_modules_vue_loader_16_8_1_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__);







const __exports__ = /*#__PURE__*/E_wangchuan_work_projects_data_repository_wxml_node_modules_vue_loader_16_8_1_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3___default()(_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], [['render',_index_vue_vue_type_template_id_355cc69a__WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"]],['__file',"src/pages/mine/index.vue"]])
/* hot reload */
if (false) {}


/* harmony default export */ __webpack_exports__["a"] = (__exports__);

/***/ }),

/***/ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./node_modules/_vue-loader@16.8.1@vue-loader/dist/index.js?!./src/pages/mine/index.vue?vue&type=script&lang=js":
/*!***************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.1@babel-loader/lib!./node_modules/_vue-loader@16.8.1@vue-loader/dist??ref--10-0!./src/pages/mine/index.vue?vue&type=script&lang=js ***!
  \***************************************************************************************************************************************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_@vue_reactivity@3.2.20@@vue/reactivity/dist/reactivity.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/_@vue_runtime-core@3.2.20@@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.3.9@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils */ "./src/utils/index.js");
/* harmony import */ var _server_api_logout__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../server/api/logout */ "./src/server/api/logout.js");




/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'Mine',
  setup: function setup() {
    var state = Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* reactive */ "k"])({
      userInfo: {},
      modalVisible: false,
      style: {
        marginTop: '',
        lineHeight: ''
      }
    });

    var doLogout = function doLogout() {
      _utils__WEBPACK_IMPORTED_MODULE_3__[/* storage */ "c"].removeItem('session');
      _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.reLaunch({
        url: '/pages/login/index'
      });
      Object(_server_api_logout__WEBPACK_IMPORTED_MODULE_4__[/* logout */ "a"])().then();
    };

    Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* onMounted */ "t"])(function () {
      var _Taro$getMenuButtonBo = _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getMenuButtonBoundingClientRect(),
          height = _Taro$getMenuButtonBo.height,
          top = _Taro$getMenuButtonBo.top;

      state.style.marginTop = top + 'px';
      state.style.lineHeight = height + 'px';
      state.userInfo = _utils__WEBPACK_IMPORTED_MODULE_3__[/* storage */ "c"].getItem('userInfo');
    });
    return {
      state: state,
      doLogout: doLogout
    };
  }
});

/***/ }),

/***/ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./node_modules/_vue-loader@16.8.1@vue-loader/dist/templateLoader.js?!./node_modules/_vue-loader@16.8.1@vue-loader/dist/index.js?!./src/pages/mine/index.vue?vue&type=template&id=355cc69a":
/*!*************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.2.1@babel-loader/lib!./node_modules/_vue-loader@16.8.1@vue-loader/dist/templateLoader.js??ref--6!./node_modules/_vue-loader@16.8.1@vue-loader/dist??ref--10-0!./src/pages/mine/index.vue?vue&type=template&id=355cc69a ***!
  \*************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "./node_modules/_@vue_runtime-core@3.2.20@@vue/runtime-core/dist/runtime-core.esm-bundler.js");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "./node_modules/_@vue_shared@3.2.20@@vue/shared/dist/shared.esm-bundler.js");
/* harmony import */ var _assets_img_head_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../assets/img/head.png */ "./src/assets/img/head.png");
/* harmony import */ var _assets_img_head_png__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_img_head_png__WEBPACK_IMPORTED_MODULE_2__);


var _hoisted_1 = {
  class: "index-wrapper"
};
var _hoisted_2 = {
  key: 0,
  class: "index-wrapper-modal"
};
var _hoisted_3 = {
  class: "modal-content"
};

var _hoisted_4 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", {
  class: "body"
}, "确认退出登录？", -1
/* HOISTED */
);

var _hoisted_5 = {
  class: "footer"
};
var _hoisted_6 = {
  class: "navigationBar"
};
var _hoisted_7 = {
  class: "info-card"
};

var _hoisted_8 = /*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", {
  class: "avatar"
}, [/*#__PURE__*/Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("image", {
  src: _assets_img_head_png__WEBPACK_IMPORTED_MODULE_2___default.a
})], -1
/* HOISTED */
);

var _hoisted_9 = {
  class: "name"
};
var _hoisted_10 = {
  class: "username"
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "w"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "g"])("view", _hoisted_1, [$setup.state.modalVisible ? (Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* openBlock */ "w"])(), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementBlock */ "g"])("view", _hoisted_2, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", _hoisted_3, [_hoisted_4, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", _hoisted_5, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", {
    class: "cancel",
    onClick: _cache[0] || (_cache[0] = function ($event) {
      return $setup.state.modalVisible = false;
    })
  }, "取消"), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", {
    class: "confirm",
    onClick: _cache[1] || (_cache[1] = function () {
      return $setup.doLogout && $setup.doLogout.apply($setup, arguments);
    })
  }, "确定")])])])) : Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createCommentVNode */ "f"])("v-if", true), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", _hoisted_6, [Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", {
    class: "navigationBar-title",
    style: Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* normalizeStyle */ "J"])($setup.state.style)
  }, "源诚数据资产平台", 4
  /* STYLE */
  )]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", _hoisted_7, [_hoisted_8, Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", _hoisted_9, Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toDisplayString */ "L"])($setup.state.userInfo.name), 1
  /* TEXT */
  ), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", _hoisted_10, Object(vue__WEBPACK_IMPORTED_MODULE_1__[/* toDisplayString */ "L"])($setup.state.userInfo.username), 1
  /* TEXT */
  )]), Object(vue__WEBPACK_IMPORTED_MODULE_0__[/* createElementVNode */ "h"])("view", {
    onClick: _cache[2] || (_cache[2] = function ($event) {
      return $setup.state.modalVisible = true;
    }),
    class: "logout-button"
  }, "退出登录")]);
}

/***/ }),

/***/ "./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@16.8.1@vue-loader/dist/stylePostLoader.js!./node_modules/_postcss-loader@4.3.0@postcss-loader/dist/cjs.js?!./node_modules/_resolve-url-loader@4.0.0@resolve-url-loader/index.js!./node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js?!./node_modules/_vue-loader@16.8.1@vue-loader/dist/index.js?!./src/pages/mine/index.vue?vue&type=style&index=0&id=355cc69a&lang=scss":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--1-oneOf-0-1!./node_modules/_vue-loader@16.8.1@vue-loader/dist/stylePostLoader.js!./node_modules/_postcss-loader@4.3.0@postcss-loader/dist/cjs.js??ref--1-oneOf-0-2!./node_modules/_resolve-url-loader@4.0.0@resolve-url-loader!./node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js??ref--1-oneOf-0-4!./node_modules/_vue-loader@16.8.1@vue-loader/dist??ref--10-0!./src/pages/mine/index.vue?vue&type=style&index=0&id=355cc69a&lang=scss ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/assets/img/head.png":
/*!*********************************!*\
  !*** ./src/assets/img/head.png ***!
  \*********************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/head.png";

/***/ }),

/***/ "./src/pages/mine/index.vue":
/*!**********************************!*\
  !*** ./src/pages/mine/index.vue ***!
  \**********************************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @tarojs/runtime */ "./node_modules/_@tarojs_runtime@3.3.9@@tarojs/runtime/dist/runtime.esm.js");
/* harmony import */ var _node_modules_tarojs_taro_loader_3_3_9_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../node_modules/_@tarojs_taro-loader@3.3.9@@tarojs/taro-loader/lib/raw.js!./index.vue */ "./node_modules/_@tarojs_taro-loader@3.3.9@@tarojs/taro-loader/lib/raw.js!./src/pages/mine/index.vue");


var config = {};


var inst = Page(Object(_tarojs_runtime__WEBPACK_IMPORTED_MODULE_0__["createPageConfig"])(_node_modules_tarojs_taro_loader_3_3_9_tarojs_taro_loader_lib_raw_js_index_vue__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"], 'pages/mine/index', {root:{cn:[]}}, config || {}))



/***/ }),

/***/ "./src/pages/mine/index.vue?vue&type=script&lang=js":
/*!**********************************************************!*\
  !*** ./src/pages/mine/index.vue?vue&type=script&lang=js ***!
  \**********************************************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_node_modules_vue_loader_16_8_1_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.2.1@babel-loader/lib!../../../node_modules/_vue-loader@16.8.1@vue-loader/dist??ref--10-0!./index.vue?vue&type=script&lang=js */ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./node_modules/_vue-loader@16.8.1@vue-loader/dist/index.js?!./src/pages/mine/index.vue?vue&type=script&lang=js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_node_modules_vue_loader_16_8_1_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["a"]; });

 

/***/ }),

/***/ "./src/pages/mine/index.vue?vue&type=style&index=0&id=355cc69a&lang=scss":
/*!*******************************************************************************!*\
  !*** ./src/pages/mine/index.vue?vue&type=style&index=0&id=355cc69a&lang=scss ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_16_8_1_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_4_3_0_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_resolve_url_loader_4_0_0_resolve_url_loader_index_js_node_modules_sass_loader_10_1_1_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_16_8_1_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_355cc69a_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!../../../node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js??ref--1-oneOf-0-1!../../../node_modules/_vue-loader@16.8.1@vue-loader/dist/stylePostLoader.js!../../../node_modules/_postcss-loader@4.3.0@postcss-loader/dist/cjs.js??ref--1-oneOf-0-2!../../../node_modules/_resolve-url-loader@4.0.0@resolve-url-loader!../../../node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js??ref--1-oneOf-0-4!../../../node_modules/_vue-loader@16.8.1@vue-loader/dist??ref--10-0!./index.vue?vue&type=style&index=0&id=355cc69a&lang=scss */ "./node_modules/_mini-css-extract-plugin@0.8.0@mini-css-extract-plugin/dist/loader.js!./node_modules/_css-loader@3.6.0@css-loader/dist/cjs.js?!./node_modules/_vue-loader@16.8.1@vue-loader/dist/stylePostLoader.js!./node_modules/_postcss-loader@4.3.0@postcss-loader/dist/cjs.js?!./node_modules/_resolve-url-loader@4.0.0@resolve-url-loader/index.js!./node_modules/_sass-loader@10.1.1@sass-loader/dist/cjs.js?!./node_modules/_vue-loader@16.8.1@vue-loader/dist/index.js?!./src/pages/mine/index.vue?vue&type=style&index=0&id=355cc69a&lang=scss");
/* harmony import */ var _node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_16_8_1_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_4_3_0_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_resolve_url_loader_4_0_0_resolve_url_loader_index_js_node_modules_sass_loader_10_1_1_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_16_8_1_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_355cc69a_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_mini_css_extract_plugin_0_8_0_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_3_6_0_css_loader_dist_cjs_js_ref_1_oneOf_0_1_node_modules_vue_loader_16_8_1_vue_loader_dist_stylePostLoader_js_node_modules_postcss_loader_4_3_0_postcss_loader_dist_cjs_js_ref_1_oneOf_0_2_node_modules_resolve_url_loader_4_0_0_resolve_url_loader_index_js_node_modules_sass_loader_10_1_1_sass_loader_dist_cjs_js_ref_1_oneOf_0_4_node_modules_vue_loader_16_8_1_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_style_index_0_id_355cc69a_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* unused harmony reexport * */


/***/ }),

/***/ "./src/pages/mine/index.vue?vue&type=template&id=355cc69a":
/*!****************************************************************!*\
  !*** ./src/pages/mine/index.vue?vue&type=template&id=355cc69a ***!
  \****************************************************************/
/*! exports provided: render */
/*! exports used: render */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_node_modules_vue_loader_16_8_1_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_16_8_1_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_355cc69a__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.2.1@babel-loader/lib!../../../node_modules/_vue-loader@16.8.1@vue-loader/dist/templateLoader.js??ref--6!../../../node_modules/_vue-loader@16.8.1@vue-loader/dist??ref--10-0!./index.vue?vue&type=template&id=355cc69a */ "./node_modules/_babel-loader@8.2.1@babel-loader/lib/index.js!./node_modules/_vue-loader@16.8.1@vue-loader/dist/templateLoader.js?!./node_modules/_vue-loader@16.8.1@vue-loader/dist/index.js?!./src/pages/mine/index.vue?vue&type=template&id=355cc69a");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "a", function() { return _node_modules_babel_loader_8_2_1_babel_loader_lib_index_js_node_modules_vue_loader_16_8_1_vue_loader_dist_templateLoader_js_ref_6_node_modules_vue_loader_16_8_1_vue_loader_dist_index_js_ref_10_0_index_vue_vue_type_template_id_355cc69a__WEBPACK_IMPORTED_MODULE_0__["a"]; });



/***/ }),

/***/ "./src/server/api/logout.js":
/*!**********************************!*\
  !*** ./src/server/api/logout.js ***!
  \**********************************/
/*! exports provided: logout, userToken */
/*! exports used: logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return logout; });
/* unused harmony export userToken */
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request */ "./src/server/request.js");

var logout = function logout() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/api/logout',
    method: 'get'
  });
};
var userToken = function userToken() {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: '/api/userToken',
    method: 'get'
  });
};

/***/ })

},[["./src/pages/mine/index.vue","runtime","taro","vendors","common"]]]);
//# sourceMappingURL=index.js.map