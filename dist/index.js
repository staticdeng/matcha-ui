// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"uF4Z":[function(require,module,exports) {
!function (t) {
  var e,
      l,
      _c,
      a,
      n,
      o,
      _i,
      d = '<svg><symbol id="icon-loading" viewBox="0 0 1024 1024"><path d="M512.32 282.944c-31.872 0-57.664-25.792-57.664-57.664L454.656 57.984c0-31.808 25.792-57.6 57.664-57.6s57.664 25.792 57.664 57.6l0 167.424C569.984 257.216 544.192 282.944 512.32 282.944zM512.32 1023.616c-20.608 0-37.312-16.704-37.312-37.248l0-209.536c0-20.544 16.704-37.248 37.312-37.248 20.544 0 37.312 16.704 37.312 37.248l0 209.536C549.632 1006.912 532.864 1023.616 512.32 1023.616zM370.368 323.264c-19.328 0-38.08-10.048-48.448-28.032L234.176 145.792C218.752 119.04 227.968 84.8 254.656 69.312c26.752-15.36 60.992-6.272 76.416 20.48L418.752 239.36c15.36 26.752 6.272 60.928-20.48 76.352C389.44 320.832 379.904 323.264 370.368 323.264zM750.016 959.936c-11.776 0-22.848-6.016-29.12-16.768l-106.176-186.176c-9.344-16-3.968-36.544 12.16-45.888 16-9.344 36.48-3.84 45.888 12.16l106.112 186.112c9.344 16 3.904 36.608-12.096 45.952C761.344 958.528 755.648 959.936 750.016 959.936zM269.632 424.896c-8.96 0-17.856-2.176-26.048-6.912l-155.072-89.6C63.488 313.856 54.912 281.984 69.376 257.088c14.4-25.088 46.336-33.6 71.296-19.2l155.072 89.536C320.832 341.76 329.344 373.696 315.008 398.72 305.28 415.552 287.744 424.896 269.632 424.896L269.632 424.896zM928.768 783.168c-4.864 0-9.984-1.344-14.72-3.968l-193.344-112.128c-14.4-8.256-19.136-26.496-10.88-40.768 8.128-14.272 26.496-19.136 40.768-11.008l193.28 112.064c14.4 8.448 19.136 26.496 11.008 40.96C949.248 777.792 939.008 783.168 928.768 783.168L928.768 783.168zM235.264 561.92 48.768 561.92c-26.752 0-48.512-21.76-48.512-48.576s21.696-48.512 48.512-48.512l186.496 0c26.88 0 48.512 21.696 48.512 48.512S262.08 561.92 235.264 561.92zM993.856 542.528 993.856 542.528l-223.744 0c-16.512 0-29.888-13.376-29.888-29.824 0-16.448 13.376-29.824 29.888-29.824l0 0 223.744 0c16.512 0 29.888 13.376 29.888 29.824C1023.744 529.152 1010.368 542.528 993.856 542.528zM108.416 789.44c-15.488 0-30.656-8-38.784-22.464-12.224-21.504-5.056-48.896 16.384-61.12l169.088-96C276.544 597.632 303.808 604.864 316.16 626.304c12.288 21.504 4.992 48.832-16.448 61.056l-169.024 96C123.712 787.456 116.032 789.44 108.416 789.44zM736.576 414.272c-10.24 0-20.288-5.376-25.792-14.912-8.256-14.272-3.328-32.512 11.008-40.768l193.216-112.064c14.336-8.256 32.512-3.392 40.832 10.88 8.256 14.336 3.392 32.512-10.944 40.832L751.36 410.368C746.816 412.992 741.568 414.336 736.576 414.272L736.576 414.272zM278.144 960c-6.912 0-14.016-1.856-20.48-5.504-19.648-11.456-26.304-36.48-14.912-56.128l99.776-173.504c11.456-19.84 36.416-26.304 56.128-15.04 19.712 11.456 26.304 36.48 14.976 56.128l-99.84 173.44C306.176 952.64 292.352 960 278.144 960zM641.728 318.4c-4.928 0-10.048-1.28-14.784-3.968C612.608 306.176 607.808 287.872 615.936 273.536l110.976-192c8.384-14.272 26.496-19.136 40.96-10.944 14.272 8.192 19.136 26.496 10.88 40.768l-110.976 192C662.144 313.024 652.032 318.336 641.728 318.4L641.728 318.4z"  ></path></symbol><symbol id="icon-right" viewBox="0 0 1024 1024"><path d="M744.383 534.162l-450.038 450.083c-10.254 10.342-27.12 10.342-37.483 0-10.32-10.386-10.32-27.229 0-37.505l432.038-432.061-432.038-432.038c-10.32-10.342-10.32-27.142 0-37.505 10.363-10.342 27.229-10.342 37.483 0l450.038 450.017c5.367 5.346 7.789 12.48 7.593 19.527 0.218 7.047-2.226 14.138-7.593 19.483z"  ></path></symbol><symbol id="icon-left" viewBox="0 0 1024 1024"><path d="M258.407 492.516l450.066-450.066c10.233-10.342 27.098-10.342 37.462 0 10.342 10.364 10.342 27.207 0 37.506l-432.044 432.044 432.044 432.044c10.342 10.364 10.342 27.142 0 37.506-10.364 10.364-27.229 10.364-37.462 0l-450.066-450.022c-5.389-5.346-7.811-12.48-7.614-19.527-0.196-7.047 2.247-14.138 7.614-19.484z"  ></path></symbol><symbol id="icon-settings" viewBox="0 0 1024 1024"><path d="M512 70.13093706h3.59018571a55.23363335 55.23363335 0 0 1 49.15793416 35.62569323l45.56774716 115.43829238a55.23363335 55.23363335 0 0 0 51.36727862 35.07335647 55.23363335 55.23363335 0 0 0 16.29392085-2.48551348l118.19997489-36.1780287a59.65232355 59.65232355 0 0 1 17.12242663-2.48551348 53.30045535 53.30045535 0 0 1 41.70139243 19.05560336l4.14252246 4.97102696a55.23363335 55.23363335 0 0 1 3.31401798 61.30933254l-61.86166931 107.15324744a55.23363335 55.23363335 0 0 0 16.84625891 73.18456319l101.90605274 69.87054651a55.23363335 55.23363335 0 0 1 23.19812583 58.82381906 55.23363335 55.23363335 0 0 1-46.39625166 43.08223367l-122.34249735 18.77943434a55.23363335 55.23363335 0 0 0-46.6724194 58.54765132l9.11354944 123.72333732a55.23363335 55.23363335 0 0 1-29.2738263 53.57662436l-5.79953146 2.76168122a53.30045535 53.30045535 0 0 1-21.81728458 4.69485923 58.2714823 58.2714823 0 0 1-38.66354347-15.18924863l-90.85932529-82.85044939a55.23363335 55.23363335 0 0 0-75.11774121 0l-90.85932659 82.85044939a58.2714823 58.2714823 0 0 1-38.66354219 15.18924863 53.30045535 53.30045535 0 0 1-21.81728586-4.69485923l-5.79953146-2.76168122a55.23363335 55.23363335 0 0 1-29.27382501-53.57662436l9.11354943-123.72333732a55.23363335 55.23363335 0 0 0-46.6724194-58.54765132l-122.34249734-18.77943434a55.23363335 55.23363335 0 0 1-46.39625166-43.08223367 55.23363335 55.23363335 0 0 1 23.19812583-58.82381906l101.90605274-69.87054651a55.23363335 55.23363335 0 0 0 16.84625761-73.18456319l-61.86166801-107.15324744a55.23363335 55.23363335 0 0 1 3.31401798-61.30933254l4.14252247-4.97102696a53.30045535 53.30045535 0 0 1 41.70139243-19.05560336 59.65232355 59.65232355 0 0 1 17.12242662 2.48551348L346.29910124 253.78276566a55.23363335 55.23363335 0 0 0 16.29392213 2.48551348 55.23363335 55.23363335 0 0 0 51.36727861-35.07335647l45.56774717-115.43829238A55.23363335 55.23363335 0 0 1 508.40981429 70.13093706H512m0-55.23363336h-4.14252247a110.46726541 110.46726541 0 0 0-99.97287602 70.69904971l-45.56774716 115.43829367-118.47614262-36.17802999a104.94390299 104.94390299 0 0 0-33.14017975-4.97102696A108.25792096 108.25792096 0 0 0 125.36456912 199.10146907l-4.69485794 5.79953145a110.46726541 110.46726541 0 0 0-7.73270947 122.89483413l61.58550158 107.42941515-101.07754826 69.87054652A110.46726541 110.46726541 0 0 0 27.60103885 622.46726541a110.46726541 110.46726541 0 0 0 91.96399881 85.6121319l122.34249736 18.50326659-9.11354944 123.72333732a110.46726541 110.46726541 0 0 0 59.92849128 107.15324873l6.35186823 3.03784895a106.32474294 106.32474294 0 0 0 45.56774716 10.21822295 112.40044342 112.40044342 0 0 0 75.9462457-29.82616179l91.13549432-82.85044937 91.13549432 82.85044937a112.40044342 112.40044342 0 0 0 75.94624441 29.82616179 106.32474294 106.32474294 0 0 0 45.56774715-10.21822295l6.35186822-3.03784895a110.46726541 110.46726541 0 0 0 59.92849129-107.15324873l-9.11354943-123.72333732 122.34249735-18.50326659a110.46726541 110.46726541 0 0 0 92.24016655-85.6121319 110.46726541 110.46726541 0 0 0-45.84391489-116.5429646l-101.90605274-69.87054651 61.58550027-107.42941516a110.46726541 110.46726541 0 0 0-7.73270818-122.89483413l-3.59018571-6.62803594a108.25792096 108.25792096 0 0 0-84.50745837-39.21587894 104.94390299 104.94390299 0 0 0-33.14017975 4.97102696l-118.47614262 36.17802999-46.39625165-115.43829367A110.46726541 110.46726541 0 0 0 516.14252247 14.8973037z"  ></path><path d="M512 373.91591727a138.08408273 138.08408273 0 1 1-138.08408273 138.08408273 138.08408273 138.08408273 0 0 1 138.08408273-138.08408273m0-55.23363206a193.31771479 193.31771479 0 1 0 193.31771479 193.31771479 193.31771479 193.31771479 0 0 0-193.31771479-193.31771479z"  ></path></symbol></svg>',
      s = (e = document.getElementsByTagName("script"))[e.length - 1].getAttribute("data-injectcss");

  if (s && !t.__iconfont__svg__cssinject__) {
    t.__iconfont__svg__cssinject__ = !0;

    try {
      document.write("<style>.svgfont {display: inline-block;width: 1em;height: 1em;fill: currentColor;vertical-align: -0.1em;font-size:16px;}</style>");
    } catch (t) {
      console && console.log(t);
    }
  }

  function m() {
    o || (o = !0, a());
  }

  l = function l() {
    var t,
        e,
        l,
        c,
        a,
        n = document.createElement("div");
    n.innerHTML = d, d = null, (t = n.getElementsByTagName("svg")[0]) && (t.setAttribute("aria-hidden", "true"), t.style.position = "absolute", t.style.width = 0, t.style.height = 0, t.style.overflow = "hidden", e = t, (l = document.body).firstChild ? (c = e, (a = l.firstChild).parentNode.insertBefore(c, a)) : l.appendChild(e));
  }, document.addEventListener ? ~["complete", "loaded", "interactive"].indexOf(document.readyState) ? setTimeout(l, 0) : (_c = function c() {
    document.removeEventListener("DOMContentLoaded", _c, !1), l();
  }, document.addEventListener("DOMContentLoaded", _c, !1)) : document.attachEvent && (a = l, n = t.document, o = !1, (_i = function i() {
    try {
      n.documentElement.doScroll("left");
    } catch (t) {
      return void setTimeout(_i, 50);
    }

    m();
  })(), n.onreadystatechange = function () {
    "complete" == n.readyState && (n.onreadystatechange = null, m());
  });
}(window);
},{}],"wFXB":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("./icon/iconfont");

//
//
//
//
//
// iconfont的symbol引用方式在vue中使用
var _default = {
  name: 'icon',
  props: ['name'] // icon名称：loading | left | right  | setting

};
exports.default = _default;
        var $12e644 = exports.default || module.exports;
      
      if (typeof $12e644 === 'function') {
        $12e644 = $12e644.options;
      }
    
        /* template */
        Object.assign($12e644, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('svg',{staticClass:"g-icon"},[_c('use',{attrs:{"xlink:href":("#icon-" + _vm.name)}})])}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{"./icon/iconfont":"uF4Z"}],"iM1m":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _icon = _interopRequireDefault(require("./icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//
//
//
//
//
//
//
//
//
var _default = {
  name: 'g-button',
  components: {
    'g-icon': _icon.default
  },
  props: {
    icon: {
      type: String
    },
    // icon名称
    loading: {
      type: Boolean,
      default: false
    },
    // 是否显示loading icon: true | false
    iconPosition: {
      // icon的位置：left | right
      type: String,
      default: 'left',
      validator: function validator(value) {
        return value === 'left' || value === 'right';
      }
    }
  }
};
exports.default = _default;
        var $2a765e = exports.default || module.exports;
      
      if (typeof $2a765e === 'function') {
        $2a765e = $2a765e.options;
      }
    
        /* template */
        Object.assign($2a765e, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('button',{staticClass:"g-button",class:[_vm.icon ? ("icon-" + _vm.iconPosition) : ''],on:{"click":function($event){return _vm.$emit('click')}}},[(_vm.loading)?_c('g-icon',{staticClass:"spin",attrs:{"name":"loading"}}):_vm._e(),_vm._v(" "),(_vm.icon && !_vm.loading)?_c('g-icon',{attrs:{"name":_vm.icon}}):_vm._e(),_vm._v(" "),_c('div',{staticClass:"content"},[_vm._t("default")],2)],1)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: "data-v-2a765e",
            functional: undefined
          };
        })());
      
},{"./icon":"wFXB"}],"h0wh":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === "undefined" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

//
//
//
//
//
var _default = {
  name: 'g-button-group',
  mounted: function mounted() {
    var _iterator = _createForOfIteratorHelper(this.$el.children),
        _step;

    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var node = _step.value;
        var name = node.nodeName.toLowerCase();

        if (name !== 'button') {
          console.warn('g-button-group的子元素应该全是g-button，而不是${name}');
        }
      }
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
  }
};
exports.default = _default;
        var $5b2300 = exports.default || module.exports;
      
      if (typeof $5b2300 === 'function') {
        $5b2300 = $5b2300.options;
      }
    
        /* template */
        Object.assign($5b2300, (function () {
          var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"g-button-group"},[_vm._t("default")],2)}
var staticRenderFns = []

          return {
            render: render,
            staticRenderFns: staticRenderFns,
            _compiled: true,
            _scopeId: null,
            functional: undefined
          };
        })());
      
},{}],"Focm":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
Object.defineProperty(exports, "Button", {
  enumerable: true,
  get: function () {
    return _button.default;
  }
});
Object.defineProperty(exports, "ButtonGroup", {
  enumerable: true,
  get: function () {
    return _buttonGroup.default;
  }
});
Object.defineProperty(exports, "Icon", {
  enumerable: true,
  get: function () {
    return _icon.default;
  }
});

var _button = _interopRequireDefault(require("./src/button"));

var _buttonGroup = _interopRequireDefault(require("./src/button-group"));

var _icon = _interopRequireDefault(require("./src/icon"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
},{"./src/button":"iM1m","./src/button-group":"h0wh","./src/icon":"wFXB"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map