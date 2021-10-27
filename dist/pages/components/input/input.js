(wx["webpackJsonp"] = wx["webpackJsonp"] || []).push([["pages/components/input/input"],{

/***/ "./src/pages/components/input/input.js":
/*!*********************************************!*\
  !*** ./src/pages/components/input/input.js ***!
  \*********************************************/
/*! no static exports found */
/*! all exports used */
/***/ (function(module, exports) {

Component({
  properties: {
    autoFocus: {
      type: Boolean
    },
    value: {
      type: String
    }
  },
  options: {
    addGlobalClass: true
  },
  data: {
    value: 123
  },
  lifetimes: {
    attached: function attached() {// 在组件实例进入页面节点树时执行
    },
    detached: function detached() {// 在组件实例被从页面节点树移除时执行
    }
  },
  methods: {
    handleInput: function handleInput(e) {
      var value = e.detail.value;
      this.triggerEvent('change', value);
    },
    doConfirm: function doConfirm(e) {
      var value = e.detail.value;
      this.triggerEvent('confirm', value);
    },
    handleFocus: function handleFocus() {
      this.triggerEvent('focus');
    },
    handleBlur: function handleBlur() {
      this.triggerEvent('blur');
    }
  }
});

/***/ })

},[["./src/pages/components/input/input.js","runtime"]]]);
//# sourceMappingURL=input.js.map