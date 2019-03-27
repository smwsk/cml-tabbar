var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([1],{

/***/ "../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"D:\\\\Study\\\\NodeJs\\\\nvm\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = __webpack_require__("../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/babel-runtime/regenerator/index.js");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _index = __webpack_require__("./node_modules/chameleon-api/src/interfaces/getSystemInfo/index.js");

var _index2 = _interopRequireDefault(_index);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _index3 = __webpack_require__("./src/constant/index.js");

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var CLayout = function () {
  function CLayout() {
    _classCallCheck(this, CLayout);

    this.data = {
      navbarList: _index3.navbarList,
      viewportHeight: 0,
      currentCompName: 'home'
      // 计算属性
    };
    this.computed = {
      currentComp: function currentComp() {
        return this.currentCompName;
      },
      allViewHeight: function allViewHeight() {
        return 'height:' + this.viewportHeight + 'cpx';
      },
      mainViewHeight: function mainViewHeight() {
        return 'height:' + (this.viewportHeight - 100) + 'cpx';
      },
      footerViewHeight: function footerViewHeight() {
        return 'height:100cpx';
      }
    };
    this.methods = {
      getViewportHeight: function getViewportHeight() {
        var _this = this;

        return _asyncToGenerator( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
          var res;
          return _regenerator2.default.wrap(function _callee$(_context) {
            while (1) {
              switch (_context.prev = _context.next) {
                case 0:
                  _context.next = 2;
                  return (0, _index2.default)();

                case 2:
                  res = _context.sent;

                  _this.viewportHeight = res.viewportHeight;

                case 4:
                case 'end':
                  return _context.stop();
              }
            }
          }, _callee, _this);
        }))();
      },
      customEventHandler: function customEventHandler(e) {
        var index = e.detail.clickIndex;
        this.currentCompName = this.navbarList[index].componentName;
        console.log(e);
      }
    };
  }

  _createClass(CLayout, [{
    key: 'mounted',

    // cml模板编译完成,且渲染到dom中完成
    value: function mounted() {
      this.getViewportHeight();
    }
  }]);

  return CLayout;
}();

exports.default = new CLayout();


exports.default = _chameleonRuntime2.default.createPage(exports.default).getOptions();

/***/ }),

/***/ "../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"D:\\\\Study\\\\NodeJs\\\\nvm\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\baidu\\\\.postcssrc.js\"}}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/assets/icon/home/home_normal.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/home_normal_6d66fd8.png";

/***/ }),

/***/ "./src/assets/icon/home/home_show.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/home_show_609277b.png";

/***/ }),

/***/ "./src/assets/icon/my/my_normal.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/my_normal_89eb03e.png";

/***/ }),

/***/ "./src/assets/icon/my/my_show.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/my_show_bc0b275.png";

/***/ }),

/***/ "./src/assets/icon/type/type_normal.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/type_normal_5b30279.png";

/***/ }),

/***/ "./src/assets/icon/type/type_show.png":
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "static/img/type_show_e08c65a.png";

/***/ }),

/***/ "./src/constant/index.js":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});
var navbarList = exports.navbarList = [{
  "content": "主页",
  "info": [__webpack_require__("./src/assets/icon/home/home_normal.png"), __webpack_require__("./src/assets/icon/home/home_show.png")],
  "componentName": "home"
}, {
  "content": "类别",
  "info": [__webpack_require__("./src/assets/icon/type/type_normal.png"), __webpack_require__("./src/assets/icon/type/type_show.png")],
  "componentName": "type"
}, {
  "content": "个人",
  "info": [__webpack_require__("./src/assets/icon/my/my_normal.png"), __webpack_require__("./src/assets/icon/my/my_show.png")],
  "componentName": "my"
}];

/***/ }),

/***/ "./src/pages/index/index.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"D:\\\\Study\\\\NodeJs\\\\nvm\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\baidu\\\\.postcssrc.js\"}}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml");
var __cml__script = __webpack_require__("../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"D:\\\\Study\\\\NodeJs\\\\nvm\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=page&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/pages/index/index.cml");


/***/ })

},["./src/pages/index/index.cml"]);