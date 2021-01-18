(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["tutorial-tutorial-module"],{

/***/ "./src/app/tutorial/components/tutorial-default/tutorial-default.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/tutorial/components/tutorial-default/tutorial-default.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='p-64'>\r\n\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class='font-size-36 pb-36'>\r\n    Welcome to CrackMyKwery\r\n  </div>\r\n\r\n  <mat-tab-group mat-stretch-tabs class=\"example-stretched-tabs mat-elevation-z4 p-24\">\r\n    <mat-tab label=\" How to use?\">\r\n      <div class='p-40'>\r\n        <!-- <div class='font-size-24 mb-16'>Introduction</div>\r\n        <hr>\r\n        <div class='font-size-20 mb-16'>CrackMyKwery helps solve user’s handwritten equations and expressions.</div>\r\n        <div class='font-size-20 mb-16'>Though there are some drawbacks and lackings due to its development phase, it is\r\n          still quite handy. </div>\r\n        <div class='font-size-20 mb-16'>The following are the major features of CrackMyKwery.</div> -->\r\n\r\n\r\n        <div class='font-size-24 my-20 pt-12'>Upload Module</div>\r\n        <hr>\r\n        <mat-list>\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> Go to upload module by clicking the <span class='rejected-color mx-4'> UPLOAD </span> button on the\r\n            sidenav. </mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> Drag and drop a picture that contains a picture of equation or arithmetic expression. </mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> You can also upload by clicking <span class='rejected-color mx-4'> choose a file </span> and browsing\r\n            for a single picture </mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> Crop the selected picture and click <span class='rejected-color mx-4'> UPLOAD </span> to parse the text\r\n            in the image.</mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> The text will show in the equation field along with solution if it exists.</mat-list-item>\r\n\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> You can manually edit the equation if needed and click <span class='rejected-color mx-4'> SOLVE </span>\r\n            to see different results</mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> Furthermore if you are registered you can save the image and solution by clicking <span\r\n              class='rejected-color mx-4'> SAVE </span> which shows below.</mat-list-item>\r\n        </mat-list>\r\n        <div class='font-size-24 my-20 pt-12'>Draw Module</div>\r\n        <hr>\r\n        <mat-list>\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> Go to draw module by clicking the <span class='rejected-color mx-4'> DRAW </span> button on the\r\n            sidenav. </mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> Draw on the <span class='rejected-color mx-4'> CANVAS </span> </mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> You can select <span class='rejected-color mx-4'> ERASER </span> to remove stroke. <span\r\n              class='rejected-color mx-4'> PENCIL </span> to draw stroke. <span class='rejected-color mx-4'> CLEAR\r\n            </span> to clean the canvas</mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> Click <span class='rejected-color mx-4'> UPLOAD </span> after finishing drawing on the canvas\r\n          </mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> The rest is same as UPLOAD module</mat-list-item>\r\n\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> You can manually edit the equation if needed and click <span class='rejected-color mx-4'> SOLVE </span>\r\n            to see different results</mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> Furthermore if you are registered you can save the image and solution by clicking <span\r\n              class='rejected-color mx-4'> SAVE </span> which shows below.</mat-list-item>\r\n        </mat-list>\r\n\r\n        <div class='font-size-24 my-20 pt-12'>Previous History</div>\r\n        <hr>\r\n        <mat-list>\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> If you are <span class='rejected-color mx-4'> REGISTERED </span> user you can see a <span\r\n              class='rejected-color mx-4'> HISTORY </span> tab which will show your saved contents </mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> You can delete any content by clicking the <span class='rejected-color mx-4'> TRASH </span> icon on the\r\n            right of the content </mat-list-item>\r\n\r\n        </mat-list>\r\n        <div class='font-size-24 my-20 pt-12'>Math practice section</div>\r\n        <hr>\r\n        <mat-list>\r\n          <mat-list-item> <i class=\"material-icons mr-8\">\r\n              fiber_manual_record\r\n            </i> You can practice solving equations and expressions in the <span class='rejected-color mx-4'> PRACTICE\r\n            </span> tab.</mat-list-item>\r\n          <mat-list-item>\r\n            <i class=\"material-icons mr-8\"> fiber_manual_record</i>\r\n            Choose <span class='rejected-color mx-4'> QUESTION NUMBER </span> and <span class='rejected-color mx-4'>\r\n              DIFFICULTY </span> and click <span class='rejected-color mx-4'> GENERATE </span> questions\r\n          </mat-list-item>\r\n          <mat-list-item>\r\n            <i class=\"material-icons mr-8\"> fiber_manual_record</i>\r\n            You can <span class='rejected-color mx-4'> DIRECTLY </span> answer or <span class='rejected-color mx-4'>\r\n              select question number </span> and <span class='rejected-color mx-4'> DRAW </span> on the right canvas.\r\n          </mat-list-item>\r\n          <mat-list-item>\r\n            <i class=\"material-icons mr-8\"> fiber_manual_record</i>\r\n            <span class='rejected-color mx-4'> TURN IN </span> answers if you are sure. Click <span\r\n              class='rejected-color mx-4'> FINISH </span> quiz if you are done practicing.\r\n          </mat-list-item>\r\n          <mat-list-item>\r\n            <i class=\"material-icons mr-8\"> fiber_manual_record</i>\r\n            Click <span class='rejected-color mx-4'> RIGHT </span> and <span class='rejected-color mx-4'> LEFT </span>\r\n            to see more questions\r\n          </mat-list-item>\r\n        </mat-list>\r\n      </div>\r\n\r\n\r\n    </mat-tab>\r\n    <mat-tab label=\"What It CAN do\">\r\n      <div class='p-40'>\r\n        <mat-list>\r\n          <mat-list-item> <i class=\"material-icons mr-8\"> fiber_manual_record </i> Parse image containing the following\r\n            symbols x,y,=,-,+,0,1,2,3,4,5,6,7,8,9 </mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\"> fiber_manual_record </i> Identify multplication between two\r\n            numbers only </mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\"> fiber_manual_record </i> Auto Differentiate if x and y exists\r\n          </mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\"> fiber_manual_record </i> Solve x or y if equal sign exists\r\n          </mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\"> fiber_manual_record </i> Division is possible only by drawing\r\n            denominator and nominator wise</mat-list-item>\r\n\r\n        </mat-list>\r\n      </div>\r\n    </mat-tab>\r\n\r\n    <mat-tab label=\"What It can NOT do\">\r\n      <div class='p-40'>\r\n\r\n        <mat-list>\r\n          <mat-list-item> <i class=\"material-icons mr-8\"> fiber_manual_record </i> Can not do integration\r\n          </mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\"> fiber_manual_record </i> Can not idenitfy most mathematical\r\n            symbols </mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\"> fiber_manual_record </i> Can not check for square if its\r\n            already in a division format </mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\"> fiber_manual_record </i> Can not identify dot or decimal point\r\n          </mat-list-item>\r\n          <mat-list-item> <i class=\"material-icons mr-8\"> fiber_manual_record </i> Can not parse noisy image\r\n          </mat-list-item>\r\n\r\n\r\n        </mat-list>\r\n      </div>\r\n    </mat-tab>\r\n  </mat-tab-group>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/tutorial/components/tutorial-default/tutorial-default.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/tutorial/components/tutorial-default/tutorial-default.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-tab-label {\n  font-size: 20px !important;\n  color: #222858 !important;\n  font-weight: bold; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdHV0b3JpYWwvY29tcG9uZW50cy90dXRvcmlhbC1kZWZhdWx0L0M6XFxVc2Vyc1xcU3VkaGFuc2h1XFwudnNjb2RlXFxQUk9KRUNUU1xcTUxcXEVESVRFRCBlcXVhdGlvbiBzb2x2ZXIgLSBDb3B5XFxGcm9udGVuZFxcY3JhY2tteWt3ZXJ5L3NyY1xcYXBwXFx0dXRvcmlhbFxcY29tcG9uZW50c1xcdHV0b3JpYWwtZGVmYXVsdFxcdHV0b3JpYWwtZGVmYXVsdC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLDBCQUF5QjtFQUN6Qix5QkFBd0I7RUFDeEIsaUJBQWlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC90dXRvcmlhbC9jb21wb25lbnRzL3R1dG9yaWFsLWRlZmF1bHQvdHV0b3JpYWwtZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIjo6bmctZGVlcCAubWF0LXRhYi1sYWJlbHtcclxuICAgIGZvbnQtc2l6ZToyMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBjb2xvcjojMjIyODU4ICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/tutorial/components/tutorial-default/tutorial-default.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/tutorial/components/tutorial-default/tutorial-default.component.ts ***!
  \************************************************************************************/
/*! exports provided: TutorialDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialDefaultComponent", function() { return TutorialDefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var TutorialDefaultComponent = /** @class */ (function () {
    function TutorialDefaultComponent() {
    }
    TutorialDefaultComponent.prototype.ngOnInit = function () {
    };
    TutorialDefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-tutorial-default',
            template: __webpack_require__(/*! ./tutorial-default.component.html */ "./src/app/tutorial/components/tutorial-default/tutorial-default.component.html"),
            styles: [__webpack_require__(/*! ./tutorial-default.component.scss */ "./src/app/tutorial/components/tutorial-default/tutorial-default.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TutorialDefaultComponent);
    return TutorialDefaultComponent;
}());



/***/ }),

/***/ "./src/app/tutorial/tutorial.module.ts":
/*!*********************************************!*\
  !*** ./src/app/tutorial/tutorial.module.ts ***!
  \*********************************************/
/*! exports provided: TutorialModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TutorialModule", function() { return TutorialModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_tutorial_default_tutorial_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/tutorial-default/tutorial-default.component */ "./src/app/tutorial/components/tutorial-default/tutorial-default.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");







var routes = [
    {
        path: '',
        component: _components_tutorial_default_tutorial_default_component__WEBPACK_IMPORTED_MODULE_4__["TutorialDefaultComponent"],
    },
];
var TutorialModule = /** @class */ (function () {
    function TutorialModule() {
    }
    TutorialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [_components_tutorial_default_tutorial_default_component__WEBPACK_IMPORTED_MODULE_4__["TutorialDefaultComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_1__["CoreModule"]
            ]
        })
    ], TutorialModule);
    return TutorialModule;
}());



/***/ })

}]);
//# sourceMappingURL=tutorial-tutorial-module.js.map