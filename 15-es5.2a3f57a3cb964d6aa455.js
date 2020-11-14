(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[15], {
    /***/
    "BUwF":
    /*!***************************************************!*\
      !*** ./src/app/pages/auth/auth-routing.module.ts ***!
      \***************************************************/

    /*! exports provided: AuthRoutingModule */

    /***/
    function BUwF(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthRoutingModule", function () {
        return AuthRoutingModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");

      var routes = [{
        path: '',
        data: {
          title: 'Authentication',
          status: false
        },
        children: [{
          path: 'login',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            6).then(__webpack_require__.bind(null,
            /*! ./login/basic-login/basic-login.module */
            "Cyoc")).then(function (m) {
              return m.BasicLoginModule;
            });
          }
        }, {
          path: 'registration',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            7).then(__webpack_require__.bind(null,
            /*! ./registration/basic-reg/basic-reg.module */
            "w4Rk")).then(function (m) {
              return m.BasicRegModule;
            });
          }
        }]
      }];

      var AuthRoutingModule = /*@__PURE__*/function () {
        var AuthRoutingModule = function AuthRoutingModule() {
          _classCallCheck(this, AuthRoutingModule);
        };

        AuthRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AuthRoutingModule
        });
        AuthRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AuthRoutingModule_Factory(t) {
            return new (t || AuthRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return AuthRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "lBUW":
    /*!*******************************************!*\
      !*** ./src/app/pages/auth/auth.module.ts ***!
      \*******************************************/

    /*! exports provided: AuthModule */

    /***/
    function lBUW(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "AuthModule", function () {
        return AuthModule;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      "ofXK");
      /* harmony import */


      var _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./auth-routing.module */
      "BUwF");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");

      var AuthModule = /*@__PURE__*/function () {
        var AuthModule = function AuthModule() {
          _classCallCheck(this, AuthModule);
        };

        AuthModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: AuthModule
        });
        AuthModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function AuthModule_Factory(t) {
            return new (t || AuthModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]]
        });
        return AuthModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AuthModule, {
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _auth_routing_module__WEBPACK_IMPORTED_MODULE_2__["AuthRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_3__["SharedModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=15-es5.2a3f57a3cb964d6aa455.js.map