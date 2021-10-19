(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/server/base.js":
/*!****************************!*\
  !*** ./src/server/base.js ***!
  \****************************/
/*! exports provided: baseUrl */
/*! exports used: baseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
// export const baseUrl = 'https://data.yczcjk.com';
var baseUrl = 'http://172.18.255.8:38510';

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var E_wangchuan_work_projects_data_repository_wxml_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.15.4@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var _base__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./base */ "./src/server/base.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.3.9@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);




var request = function request(options) {
  return new Promise(function (resolve, reject) {
    var setting = {
      url: _base__WEBPACK_IMPORTED_MODULE_1__[/* baseUrl */ "a"] + options.url,
      data: options.data,
      method: options.method.toUpperCase() || 'GET',
      timeout: 1000 * 30,
      header: Object(E_wangchuan_work_projects_data_repository_wxml_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, options.header),
      success: function success(res) {
        if (res.data.code === 401) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.reLaunch({
            url: 'pages/login/index'
          });
        }

        if (res.data.success == false) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.showToast({
            icon: "none",
            title: res.data.message
          });
        }

        resolve(res.data);
      }
    }; // const token = Taro.getStorageSync("token");
    // if(token){
    //     setting.header.token = '' + token;
    // }

    if (options.header) {
      setting.header = Object.assign(setting.header, options.header);
    }

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.request(setting);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ })

}]);
//# sourceMappingURL=common.js.map