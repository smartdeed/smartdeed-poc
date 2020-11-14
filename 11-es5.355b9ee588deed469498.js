(function () {
  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[11], {
    /***/
    "eSyo":
    /*!*********************************************************!*\
      !*** ./src/app/pages/ui-elements/basic/basic.module.ts ***!
      \*********************************************************/

    /*! exports provided: BasicModule */

    /***/
    function eSyo(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicModule", function () {
        return BasicModule;
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


      var _basic_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./basic-routing.module */
      "vjDQ");
      /* harmony import */


      var _basic_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./basic.component */
      "x9CD");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../../shared/shared.module */
      "PCNd");

      var BasicModule = /*@__PURE__*/function () {
        var BasicModule = function BasicModule() {
          _classCallCheck(this, BasicModule);
        };

        BasicModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: BasicModule
        });
        BasicModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function BasicModule_Factory(t) {
            return new (t || BasicModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
        });
        return BasicModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicModule, {
          declarations: [_basic_component__WEBPACK_IMPORTED_MODULE_3__["BasicComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _basic_routing_module__WEBPACK_IMPORTED_MODULE_2__["BasicRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        });
      })();
      /***/

    },

    /***/
    "vjDQ":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/ui-elements/basic/basic-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: BasicRoutingModule */

    /***/
    function vjDQ(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicRoutingModule", function () {
        return BasicRoutingModule;
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
          breadcrumb: 'Basic Components',
          status: false
        },
        children: [{
          path: 'button',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            12).then(__webpack_require__.bind(null,
            /*! ./button/button.module */
            "llfe")).then(function (m) {
              return m.ButtonModule;
            });
          }
        }, {
          path: 'typography',
          loadChildren: function loadChildren() {
            return __webpack_require__.e(
            /*! import() */
            13).then(__webpack_require__.bind(null,
            /*! ./typography/typography.module */
            "20LK")).then(function (m) {
              return m.TypographyModule;
            });
          }
        }]
      }];

      var BasicRoutingModule = /*@__PURE__*/function () {
        var BasicRoutingModule = function BasicRoutingModule() {
          _classCallCheck(this, BasicRoutingModule);
        };

        BasicRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: BasicRoutingModule
        });
        BasicRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function BasicRoutingModule_Factory(t) {
            return new (t || BasicRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return BasicRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](BasicRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "x9CD":
    /*!************************************************************!*\
      !*** ./src/app/pages/ui-elements/basic/basic.component.ts ***!
      \************************************************************/

    /*! exports provided: BasicComponent */

    /***/
    function x9CD(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "BasicComponent", function () {
        return BasicComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/router */
      "tyNb");
      /* harmony import */


      var _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ../../../shared/spinner/spinner.component */
      "f3yp");

      var BasicComponent = /*@__PURE__*/function () {
        var BasicComponent = /*#__PURE__*/function () {
          function BasicComponent() {
            _classCallCheck(this, BasicComponent);
          }

          _createClass(BasicComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return BasicComponent;
        }();

        BasicComponent.ɵfac = function BasicComponent_Factory(t) {
          return new (t || BasicComponent)();
        };

        BasicComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: BasicComponent,
          selectors: [["app-basic"]],
          decls: 2,
          vars: 0,
          template: function BasicComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "router-outlet");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-spinner");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }
          },
          directives: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _shared_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_2__["SpinnerComponent"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJiYXNpYy5jb21wb25lbnQuc2NzcyJ9 */"]
        });
        return BasicComponent;
      }();
      /***/

    }
  }]);
})();
//# sourceMappingURL=11-es5.355b9ee588deed469498.js.map