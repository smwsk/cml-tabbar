var __CML__GLOBAL = require("../../manifest.js");
__CML__GLOBAL.webpackJsonp([12],{

/***/ "../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"D:\\\\Study\\\\NodeJs\\\\nvm\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/footer/footer.cml":
/***/ (function(module, exports, __webpack_require__) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _chameleonRuntime = __webpack_require__("./node_modules/chameleon-runtime/index.js");

var _chameleonRuntime2 = _interopRequireDefault(_chameleonRuntime);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Footer = function () {
  function Footer() {
    _classCallCheck(this, Footer);

    this.props = {
      navbarInfoList: {
        type: Array,
        default: []
      }
    };
    this.data = {
      clickIndex: 0
    };
    this.computed = {};
    this.watch = {};
    this.methods = {
      triggerCustomEvent: function triggerCustomEvent(e) {
        this.$cmlEmit('customevent', {
          clickIndex: e.currentTarget.id
        });
        this.clickIndex = e.currentTarget.id;
      },
      initData: function initData() {},
      imageLoad: function imageLoad(e) {
        console.log(e);
      },
      imageError: function imageError(e) {}
    };
  }

  _createClass(Footer, [{
    key: 'beforeCreate',
    value: function beforeCreate() {}
  }, {
    key: 'created',
    value: function created() {}
  }, {
    key: 'beforeMount',
    value: function beforeMount() {}
  }, {
    key: 'mounted',
    value: function mounted() {
      this.initData();
    }
  }, {
    key: 'beforeDestroy',
    value: function beforeDestroy() {}
  }, {
    key: 'destroyed',
    value: function destroyed() {}
  }]);

  return Footer;
}();

exports.default = new Footer();


exports.default = _chameleonRuntime2.default.createComponent(exports.default).getOptions();

/***/ }),

/***/ "../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"D:\\\\Study\\\\NodeJs\\\\nvm\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\baidu\\\\.postcssrc.js\"}}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/footer/footer.cml":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "./src/components/footer/footer.cml":
/***/ (function(module, exports, __webpack_require__) {

var __cml__style0 = __webpack_require__("../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/extract-text-webpack-plugin/dist/loader.js?{\"omit\":1,\"remove\":true}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/vue-style-loader/index.js!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/css-loader/index.js?{\"sourceMap\":false}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"platform\":\"miniapp\",\"cmlType\":\"baidu\"}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/postcss-loader/lib/index.js?{\"sourceMap\":false,\"config\":{\"path\":\"D:\\\\Study\\\\NodeJs\\\\nvm\\\\npm\\\\node_modules\\\\chameleon-tool\\\\configs\\\\postcss\\\\baidu\\\\.postcssrc.js\"}}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/less-loader/dist/cjs.js?{\"sourceMap\":false}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-css-loader/index.js?{\"media\":true,\"cmlType\":\"baidu\"}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=styles&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/footer/footer.cml");
var __cml__script = __webpack_require__("../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/babel-loader/lib/index.js?{\"filename\":\"D:\\\\Study\\\\NodeJs\\\\nvm\\\\npm\\\\node_modules\\\\chameleon-tool\\\\chameleon.js\"}!../../../../NodeJs/nvm/npm/node_modules/chameleon-tool/node_modules/chameleon-loader/src/selector.js?type=script&index=0&fileType=component&media=dev&cmlType=baidu&isInjectBaseStyle=true&check={\"enable\":true,\"enableTypes\":[]}!./src/components/footer/footer.cml");


/***/ })

},["./src/components/footer/footer.cml"]);