(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["common"],{

/***/ "./src/assets/img/logo_loading2.gif":
/*!******************************************!*\
  !*** ./src/assets/img/logo_loading2.gif ***!
  \******************************************/
/*! no static exports found */
/*! exports used: default */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "assets/img/logo_loading2.gif";

/***/ }),

/***/ "./src/pages/index/source.js":
/*!***********************************!*\
  !*** ./src/pages/index/source.js ***!
  \***********************************/
/*! exports provided: auctionDataType, creditorDataType */
/*! exports used: auctionDataType, creditorDataType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return auctionDataType; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return creditorDataType; });
var auctionDataType = {
  '0': '普通数据',
  '1': '普通数据',
  '2': '相似数据',
  '3': '非初标数据'
};
var creditorDataType = {
  '0': '普通数据',
  '1': '非初标数据'
};

/***/ }),

/***/ "./src/server/api/index.js":
/*!*********************************!*\
  !*** ./src/server/api/index.js ***!
  \*********************************/
/*! exports provided: userView, userEdit */
/*! exports used: userEdit, userView */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return userView; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return userEdit; });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request */ "./src/server/request.js");

var userView = function userView(data) {
  var urlPlus = '';

  for (var key in data) {
    urlPlus = "".concat(urlPlus + key, "=").concat(data[key], "&");
  }

  urlPlus = urlPlus.substring(0, urlPlus.length - 1);
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: "/api/asset/admin/userView?".concat(urlPlus),
    method: 'get'
  });
};
var userEdit = function userEdit(id, data) {
  return Object(_request__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
    url: "/api/asset/admin/".concat(id, "/userEdit"),
    method: 'post',
    data: data
  });
};

/***/ }),

/***/ "./src/server/base.js":
/*!****************************!*\
  !*** ./src/server/base.js ***!
  \****************************/
/*! exports provided: baseUrl */
/*! exports used: baseUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return baseUrl; });
// export const baseUrl = 'https://wechat-data.yczcjk.com';
var baseUrl = 'http://172.18.255.8:38510'; // export const baseUrl = 'https://wechat-test.yczcjk.com'; // 测试环境

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
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utils */ "./src/utils/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.3.9@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_3__);





var request = function request(options) {
  return new Promise(function (resolve, reject) {
    var session = _utils__WEBPACK_IMPORTED_MODULE_2__[/* storage */ "c"].getItem('session') || '';
    var setting = {
      url: _base__WEBPACK_IMPORTED_MODULE_1__[/* baseUrl */ "a"] + options.url,
      data: options.data,
      method: options.method.toUpperCase() || 'GET',
      timeout: 1000 * 30,
      header: Object(E_wangchuan_work_projects_data_repository_wxml_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({
        Cookie: session
      }, options.header),
      success: function success(res) {
        if (res.data.code === 401) {
          _utils__WEBPACK_IMPORTED_MODULE_2__[/* storage */ "c"].removeItem('session');
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.reLaunch({
            url: '/pages/login/index'
          });
        }

        if (res.data.success == false) {
          _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.showToast({
            icon: "none",
            title: res.data.message
          });
        }

        resolve(res);
      }
    };

    if (options.header) {
      setting.header = Object.assign(setting.header, options.header);
    }

    _tarojs_taro__WEBPACK_IMPORTED_MODULE_3___default.a.request(setting);
  });
};

/* harmony default export */ __webpack_exports__["a"] = (request);

/***/ }),

/***/ "./src/utils/index.js":
/*!****************************!*\
  !*** ./src/utils/index.js ***!
  \****************************/
/*! exports provided: clearEmpty, storage, toast, debounce */
/*! exports used: clearEmpty, debounce, storage, toast */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return clearEmpty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return storage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "d", function() { return toast; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return debounce; });
/* harmony import */ var E_wangchuan_work_projects_data_repository_wxml_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/objectSpread2 */ "./node_modules/_@babel_runtime@7.15.4@@babel/runtime/helpers/esm/objectSpread2.js");
/* harmony import */ var E_wangchuan_work_projects_data_repository_wxml_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/typeof */ "./node_modules/_@babel_runtime@7.15.4@@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @tarojs/taro */ "./node_modules/_@tarojs_taro@3.3.9@@tarojs/taro/index.js");
/* harmony import */ var _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_tarojs_taro__WEBPACK_IMPORTED_MODULE_2__);



/**
 * 去除对象中空值
 * @param obj
 * @returns {*}
 */

var clearEmpty = function clearEmpty(obj) {
  if (Object(E_wangchuan_work_projects_data_repository_wxml_node_modules_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_1__[/* default */ "a"])(obj) === 'object') {
    var l = Object.keys(obj);

    var _obj = Object(E_wangchuan_work_projects_data_repository_wxml_node_modules_babel_runtime_helpers_esm_objectSpread2__WEBPACK_IMPORTED_MODULE_0__[/* default */ "a"])({}, obj);

    l.forEach(function (item) {
      if (_obj[item] === '' || _obj[item] === undefined || _obj[item] === null) delete _obj[item];else if (typeof _obj[item] === 'string') _obj[item] = _obj[item].replace(/^\s+|\s+$/g, '');
    });
    return _obj;
  }

  return obj;
};
var storage = {
  getItem: function getItem(name) {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.getStorageSync(name);
  },
  removeItem: function removeItem(name) {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.removeStorageSync(name);
  },
  setItem: function setItem(name, data) {
    return _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.setStorageSync(name, data);
  }
};
var toast = function toast(msg) {
  var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'none';
  _tarojs_taro__WEBPACK_IMPORTED_MODULE_2___default.a.showToast({
    title: msg,
    icon: icon
  });
};
/**
 * 函数防抖 created by wchuan  date:2021-10-22
 * @param func
 * @param wait
 * @returns {function(): void}
 */

var debounce = function debounce(func, wait) {
  var timer;
  return function () {
    var _this = this;

    var args = arguments;
    if (timer) clearTimeout(timer);
    timer = setTimeout(function () {
      func.apply(_this, args);
    }, wait);
  };
};

/***/ })

}]);
//# sourceMappingURL=common.js.map