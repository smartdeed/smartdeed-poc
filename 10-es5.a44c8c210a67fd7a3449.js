(function () {
  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

  (window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10], {
    /***/
    "amuR":
    /*!************************************************************!*\
      !*** ./src/app/pages/simple-page/simple-page.component.ts ***!
      \************************************************************/

    /*! exports provided: SimplePageComponent */

    /***/
    function amuR(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimplePageComponent", function () {
        return SimplePageComponent;
      });
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      "fXoL");
      /* harmony import */


      var _shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ../../shared/card/card.component */
      "Fe25");

      var SimplePageComponent = /*@__PURE__*/function () {
        var SimplePageComponent = /*#__PURE__*/function () {
          function SimplePageComponent() {
            _classCallCheck(this, SimplePageComponent);
          }

          _createClass(SimplePageComponent, [{
            key: "ngOnInit",
            value: function ngOnInit() {}
          }]);

          return SimplePageComponent;
        }();

        SimplePageComponent.ɵfac = function SimplePageComponent_Factory(t) {
          return new (t || SimplePageComponent)();
        };

        SimplePageComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({
          type: SimplePageComponent,
          selectors: [["app-simple-page"]],
          decls: 5,
          vars: 1,
          consts: [[1, "row"], [1, "col-sm-12"], [3, "title"]],
          template: function SimplePageComponent_Template(rf, ctx) {
            if (rf & 1) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "app-card", 2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " \"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.\" ");

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
            }

            if (rf & 2) {
              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);

              _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("title", "Hello card");
            }
          },
          directives: [_shared_card_card_component__WEBPACK_IMPORTED_MODULE_1__["CardComponent"]],
          styles: ["\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzaW1wbGUtcGFnZS5jb21wb25lbnQuc2NzcyJ9 */"]
        });
        return SimplePageComponent;
      }();
      /***/

    },

    /***/
    "c1db":
    /*!*****************************************************************!*\
      !*** ./src/app/pages/simple-page/simple-page-routing.module.ts ***!
      \*****************************************************************/

    /*! exports provided: SimplePageRoutingModule */

    /***/
    function c1db(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimplePageRoutingModule", function () {
        return SimplePageRoutingModule;
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


      var _simple_page_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./simple-page.component */
      "amuR");

      var routes = [{
        path: '',
        component: _simple_page_component__WEBPACK_IMPORTED_MODULE_2__["SimplePageComponent"],
        data: {
          breadcrumb: 'Sample Page',
          icon: 'icofont icofont-file-document bg-c-pink',
          breadcrumb_caption: 'Lorem Ipsum Dolor Sit Amet, Consectetur Adipisicing Elit - Sample Page',
          status: true
        }
      }];

      var SimplePageRoutingModule = /*@__PURE__*/function () {
        var SimplePageRoutingModule = function SimplePageRoutingModule() {
          _classCallCheck(this, SimplePageRoutingModule);
        };

        SimplePageRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: SimplePageRoutingModule
        });
        SimplePageRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function SimplePageRoutingModule_Factory(t) {
            return new (t || SimplePageRoutingModule)();
          },
          imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forChild(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
        return SimplePageRoutingModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SimplePageRoutingModule, {
          imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]],
          exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
        });
      })();
      /***/

    },

    /***/
    "h8UV":
    /*!*********************************************************!*\
      !*** ./src/app/pages/simple-page/simple-page.module.ts ***!
      \*********************************************************/

    /*! exports provided: SimplePageModule */

    /***/
    function h8UV(module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export (binding) */


      __webpack_require__.d(__webpack_exports__, "SimplePageModule", function () {
        return SimplePageModule;
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


      var _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! ./simple-page-routing.module */
      "c1db");
      /* harmony import */


      var _simple_page_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./simple-page.component */
      "amuR");
      /* harmony import */


      var _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ../../shared/shared.module */
      "PCNd");

      var SimplePageModule = /*@__PURE__*/function () {
        var SimplePageModule = function SimplePageModule() {
          _classCallCheck(this, SimplePageModule);
        };

        SimplePageModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
          type: SimplePageModule
        });
        SimplePageModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
          factory: function SimplePageModule_Factory(t) {
            return new (t || SimplePageModule)();
          },
          imports: [[_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SimplePageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]]
        });
        return SimplePageModule;
      }();

      (function () {
        (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](SimplePageModule, {
          declarations: [_simple_page_component__WEBPACK_IMPORTED_MODULE_3__["SimplePageComponent"]],
          imports: [_angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"], _simple_page_routing_module__WEBPACK_IMPORTED_MODULE_2__["SimplePageRoutingModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_4__["SharedModule"]]
        });
      })();
      /***/

    }
  }]);
})();
//# sourceMappingURL=10-es5.a44c8c210a67fd7a3449.js.map