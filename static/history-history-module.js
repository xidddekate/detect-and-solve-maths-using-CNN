(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["history-history-module"],{

/***/ "./src/app/history/components/history-default/history-default.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/history/components/history-default/history-default.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div fxLayout='column' fxLayoutAlign='center center' fxLayoutGap=\"16px\" class='p-48'>\r\n  <div *ngFor='let i of data'>\r\n    <mat-card fxLayout='column' fxLayoutGap=\"24px\">\r\n      <div class='font-size-24'>\r\n        Created Date: {{i.createdTime.seconds* 1000 | date:'dd/MM/yyyy(EEE) - hh:mmaaa' }}\r\n      </div>\r\n      <div>\r\n        <img [src]='i.imageLink' class='w-500 h-100'>\r\n      </div>\r\n      <div fxLayout='row' fxLayoutAlign='start center' fxLayoutGap=\"16px\" class='font-size-24'>\r\n        <div>Equation:</div>\r\n        <div>{{i.equation}}</div>\r\n\r\n      </div>\r\n      <div fxLayout='row' fxLayoutAlign='start center' fxLayoutGap=\"16px\" class='font-size-24'>\r\n        <div>Solution: </div>\r\n        <div>{{i.solution}}</div>\r\n\r\n      </div>\r\n    </mat-card>\r\n  </div>\r\n</div> -->\r\n<div class='mx-40 mt-40'>\r\n  <mat-form-field appearance=\"outline\">\r\n    <input matInput (keyup)=\"applyFilter($event.target.value)\" placeholder=\"Search\">\r\n    <mat-icon matPrefix class='mr-16'>search</mat-icon>\r\n  </mat-form-field>\r\n</div>\r\n\r\n<div fxLayout=\"column\" class=\"mx-40 mb-40 mt-20 mat-elevation-z8\">\r\n\r\n  <mat-table #table [dataSource]=\"equations\" matSort matSortActive=\"createdTime\" matSortDirection=\"desc\"\r\n    [class.isMobile]=\"isMobile\">\r\n\r\n    <ng-container matColumnDef=\"equation\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"primary-background white-color-foreground font-size-16\">\r\n        Equation\r\n      </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" class='font-size-18 primary-text-color '>\r\n        <span class=\"mobile-label\">Equation:</span>\r\n        {{ element.equation }}\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"solution\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"primary-background white-color-foreground font-size-16\">\r\n        Solution\r\n      </mat-header-cell>\r\n      <mat-cell  *matCellDef=\"let element\" class='font-size-16'>\r\n        <span class=\"mobile-label\">Solution:</span>\r\n<!-- <div fxLayout='row' fxLayoutAlign='start center' fxLayoutGap='12px'> -->\r\n        <div>{{ element.solution }} </div>\r\n        <!-- <div>\r\n          <mat-icon class='cursor-pointer'>delete_outline</mat-icon>\r\n        </div> -->\r\n      <!-- </div> -->\r\n      </mat-cell>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container matColumnDef=\"createdTime\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"primary-background white-color-foreground font-size-16\">\r\n        Created Time\r\n      </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\" class='font-size-16'>\r\n        <span class=\"mobile-label\">Created at:</span>\r\n        <!-- {{element.createdTime.seconds * 1000}} -->\r\n        {{ element.createdTime.seconds * 1000 | date:'dd/MM/yyyy(EEE) - hh:mmaaa' }}\r\n      </mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"imageLink\">\r\n      <mat-header-cell *matHeaderCellDef mat-sort-header class=\"primary-background white-color-foreground font-size-16\">\r\n        Image\r\n      </mat-header-cell>\r\n      <mat-cell *matCellDef=\"let element\">\r\n        <img [src]='element.imageLink' class='my-8 h-80 w-500'>\r\n        <!-- {{ element.imageLink }}  -->\r\n      </mat-cell>\r\n    </ng-container>\r\n    <ng-container matColumnDef=\"delete\">\r\n        <mat-header-cell *matHeaderCellDef mat-sort-header class=\"primary-background white-color-foreground font-size-16\">\r\n          \r\n        </mat-header-cell>\r\n        <mat-cell *matCellDef=\"let element\">\r\n          <mat-icon class='cursor-pointer rejected-color' (click)='delete(element)'>delete_outline</mat-icon>\r\n        </mat-cell>\r\n      </ng-container>\r\n\r\n\r\n\r\n    <mat-header-row *matHeaderRowDef=\"displayedColumns\"></mat-header-row>\r\n    <mat-row *matRowDef=\"let row; columns: displayedColumns\"></mat-row>\r\n  </mat-table>\r\n  <mat-paginator [pageSize]=\"5\" [pageSizeOptions]=\"[5, 10, 20]\" showFirstLastButtons></mat-paginator>\r\n</div>"

/***/ }),

/***/ "./src/app/history/components/history-default/history-default.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/history/components/history-default/history-default.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "mat-cell {\n  display: flex !important;\n  justify-content: center !important; }\n\nmat-header-cell {\n  display: flex;\n  justify-content: center; }\n\nmat-paginator {\n  height: 64px !important; }\n\nmat-table {\n  width: 100% !important; }\n\ntable {\n  width: 100% !important; }\n\n.mat-column-createdTime {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 23% !important;\n  width: 23% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto; }\n\n.mat-column-equation {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 25% !important;\n  width: 25% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto; }\n\n.mat-column-solution {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 23% !important;\n  width: 23% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto; }\n\n.mat-column-imageLink {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 25% !important;\n  width: 25% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto; }\n\n.mat-column-delete {\n  word-wrap: break-word !important;\n  white-space: unset !important;\n  flex: 0 0 4% !important;\n  width: 4% !important;\n  overflow-wrap: break-word;\n  word-wrap: break-word;\n  word-break: break-word;\n  -webkit-hyphens: auto;\n  hyphens: auto; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGlzdG9yeS9jb21wb25lbnRzL2hpc3RvcnktZGVmYXVsdC9DOlxcVXNlcnNcXFN1ZGhhbnNodVxcLnZzY29kZVxcUFJPSkVDVFNcXE1MXFxFRElURUQgZXF1YXRpb24gc29sdmVyIC0gQ29weVxcRnJvbnRlbmRcXGNyYWNrbXlrd2VyeS9zcmNcXGFwcFxcaGlzdG9yeVxcY29tcG9uZW50c1xcaGlzdG9yeS1kZWZhdWx0XFxoaXN0b3J5LWRlZmF1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDQyx3QkFBd0I7RUFDeEIsa0NBQWtDLEVBQUE7O0FBR25DO0VBQ0MsYUFBYTtFQUNiLHVCQUF1QixFQUFBOztBQUV4QjtFQUNDLHVCQUF1QixFQUFBOztBQUd4QjtFQUNDLHNCQUFzQixFQUFBOztBQUd2QjtFQUNDLHNCQUFzQixFQUFBOztBQUd2QjtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBRXJCLHNCQUFzQjtFQUl0QixxQkFBcUI7RUFDckIsYUFBYSxFQUFBOztBQUdkO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix3QkFBd0I7RUFDeEIscUJBQXFCO0VBQ3JCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFFckIsc0JBQXNCO0VBSXRCLHFCQUFxQjtFQUNyQixhQUFhLEVBQUE7O0FBR2Q7RUFDQyxnQ0FBZ0M7RUFDaEMsNkJBQTZCO0VBQzdCLHdCQUF3QjtFQUN4QixxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLHFCQUFxQjtFQUVyQixzQkFBc0I7RUFJdEIscUJBQXFCO0VBQ3JCLGFBQWEsRUFBQTs7QUFHZDtFQUNDLGdDQUFnQztFQUNoQyw2QkFBNkI7RUFDN0Isd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQix5QkFBeUI7RUFDekIscUJBQXFCO0VBRXJCLHNCQUFzQjtFQUl0QixxQkFBcUI7RUFDckIsYUFBYSxFQUFBOztBQUdkO0VBQ0MsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3Qix1QkFBdUI7RUFDcEIsb0JBQW9CO0VBQ3ZCLHlCQUF5QjtFQUN6QixxQkFBcUI7RUFFckIsc0JBQXNCO0VBSXRCLHFCQUFxQjtFQUNyQixhQUFhLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9oaXN0b3J5L2NvbXBvbmVudHMvaGlzdG9yeS1kZWZhdWx0L2hpc3RvcnktZGVmYXVsdC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIm1hdC1jZWxsIHtcclxuXHRkaXNwbGF5OiBmbGV4ICFpbXBvcnRhbnQ7XHJcblx0anVzdGlmeS1jb250ZW50OiBjZW50ZXIgIWltcG9ydGFudDtcclxufVxyXG5cclxubWF0LWhlYWRlci1jZWxsIHtcclxuXHRkaXNwbGF5OiBmbGV4O1xyXG5cdGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG59XHJcbm1hdC1wYWdpbmF0b3Ige1xyXG5cdGhlaWdodDogNjRweCAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5tYXQtdGFibGUge1xyXG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbnRhYmxle1xyXG5cdHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcbi5tYXQtY29sdW1uLWNyZWF0ZWRUaW1lIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgMjMlICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDIzJSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWVxdWF0aW9uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgMjUlICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDI1JSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLXNvbHV0aW9uIHtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQgIWltcG9ydGFudDtcclxuXHR3aGl0ZS1zcGFjZTogdW5zZXQgIWltcG9ydGFudDtcclxuXHRmbGV4OiAwIDAgMjMlICFpbXBvcnRhbnQ7XHJcblx0d2lkdGg6IDIzJSAhaW1wb3J0YW50O1xyXG5cdG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkO1xyXG5cclxuXHR3b3JkLWJyZWFrOiBicmVhay13b3JkO1xyXG5cclxuXHQtbXMtaHlwaGVuczogYXV0bztcclxuXHQtbW96LWh5cGhlbnM6IGF1dG87XHJcblx0LXdlYmtpdC1oeXBoZW5zOiBhdXRvO1xyXG5cdGh5cGhlbnM6IGF1dG87XHJcbn1cclxuXHJcbi5tYXQtY29sdW1uLWltYWdlTGluayB7XHJcblx0d29yZC13cmFwOiBicmVhay13b3JkICFpbXBvcnRhbnQ7XHJcblx0d2hpdGUtc3BhY2U6IHVuc2V0ICFpbXBvcnRhbnQ7XHJcblx0ZmxleDogMCAwIDI1JSAhaW1wb3J0YW50O1xyXG5cdHdpZHRoOiAyNSUgIWltcG9ydGFudDtcclxuXHRvdmVyZmxvdy13cmFwOiBicmVhay13b3JkO1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZDtcclxuXHJcblx0d29yZC1icmVhazogYnJlYWstd29yZDtcclxuXHJcblx0LW1zLWh5cGhlbnM6IGF1dG87XHJcblx0LW1vei1oeXBoZW5zOiBhdXRvO1xyXG5cdC13ZWJraXQtaHlwaGVuczogYXV0bztcclxuXHRoeXBoZW5zOiBhdXRvO1xyXG59XHJcblxyXG4ubWF0LWNvbHVtbi1kZWxldGUge1xyXG5cdHdvcmQtd3JhcDogYnJlYWstd29yZCAhaW1wb3J0YW50O1xyXG5cdHdoaXRlLXNwYWNlOiB1bnNldCAhaW1wb3J0YW50O1xyXG5cdGZsZXg6IDAgMCA0JSAhaW1wb3J0YW50O1xyXG4gICAgd2lkdGg6IDQlICFpbXBvcnRhbnQ7XHJcblx0b3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuXHR3b3JkLXdyYXA6IGJyZWFrLXdvcmQ7XHJcblxyXG5cdHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcblxyXG5cdC1tcy1oeXBoZW5zOiBhdXRvO1xyXG5cdC1tb3otaHlwaGVuczogYXV0bztcclxuXHQtd2Via2l0LWh5cGhlbnM6IGF1dG87XHJcblx0aHlwaGVuczogYXV0bztcclxufVxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/history/components/history-default/history-default.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/history/components/history-default/history-default.component.ts ***!
  \*********************************************************************************/
/*! exports provided: HistoryDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryDefaultComponent", function() { return HistoryDefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _services_history_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/history.service */ "./src/app/history/services/history.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/sort */ "./node_modules/@angular/material/esm5/sort.es5.js");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm5/table.es5.js");
/* harmony import */ var _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/paginator */ "./node_modules/@angular/material/esm5/paginator.es5.js");







var HistoryDefaultComponent = /** @class */ (function () {
    // data= [];
    function HistoryDefaultComponent(historyService, sharedService) {
        this.historyService = historyService;
        this.sharedService = sharedService;
        this.displayedColumns = ['createdTime', 'imageLink', 'equation', 'solution', 'delete'];
        this.equations = new _angular_material_table__WEBPACK_IMPORTED_MODULE_5__["MatTableDataSource"]();
    }
    HistoryDefaultComponent.prototype.ngOnInit = function () {
        this.setData();
    };
    HistoryDefaultComponent.prototype.setData = function () {
        var _this = this;
        this.historyService.getUserId().subscribe(function (res1) {
            _this.sharedService.startSpinner();
            _this.historyService.getHistory(res1).subscribe(function (res) {
                res.sort(function (a, b) { return (a.createdTime < b.createdTime) ? 1 : -1; });
                _this.equations.data = res;
                _this.equations.sort = _this.sort;
                _this.equations.paginator = _this.paginator;
                _this.sharedService.hideSpinner();
            });
        });
    };
    HistoryDefaultComponent.prototype.applyFilter = function (filterValue) {
        this.equations.filter = filterValue.trim().toLowerCase();
    };
    HistoryDefaultComponent.prototype.delete = function (e) {
        var _this = this;
        this.sharedService.openConfirmationDialog({
            message: 'Are you sure to delete the content?',
            noButton: 'CANCEL',
            yesButton: 'CONFIRM',
            icon: 'error_outlined'
        }).subscribe(function (res) {
            if (res) {
                _this.historyService.deleteData(e.uid);
            }
        });
        // 
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_sort__WEBPACK_IMPORTED_MODULE_4__["MatSort"])
    ], HistoryDefaultComponent.prototype, "sort", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["ViewChild"])(_angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_material_paginator__WEBPACK_IMPORTED_MODULE_6__["MatPaginator"])
    ], HistoryDefaultComponent.prototype, "paginator", void 0);
    HistoryDefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-history-default',
            template: __webpack_require__(/*! ./history-default.component.html */ "./src/app/history/components/history-default/history-default.component.html"),
            styles: [__webpack_require__(/*! ./history-default.component.scss */ "./src/app/history/components/history-default/history-default.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_history_service__WEBPACK_IMPORTED_MODULE_2__["HistoryService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], HistoryDefaultComponent);
    return HistoryDefaultComponent;
}());



/***/ }),

/***/ "./src/app/history/history.module.ts":
/*!*******************************************!*\
  !*** ./src/app/history/history.module.ts ***!
  \*******************************************/
/*! exports provided: HistoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryModule", function() { return HistoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../config/config.module */ "./src/app/config/config.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_history_default_history_default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/history-default/history-default.component */ "./src/app/history/components/history-default/history-default.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _components_history_default_history_default_component__WEBPACK_IMPORTED_MODULE_5__["HistoryDefaultComponent"]
    }
];
var HistoryModule = /** @class */ (function () {
    function HistoryModule() {
    }
    HistoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_components_history_default_history_default_component__WEBPACK_IMPORTED_MODULE_5__["HistoryDefaultComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                _config_config_module__WEBPACK_IMPORTED_MODULE_1__["ConfigModule"]
            ]
        })
    ], HistoryModule);
    return HistoryModule;
}());



/***/ }),

/***/ "./src/app/history/services/history.service.ts":
/*!*****************************************************!*\
  !*** ./src/app/history/services/history.service.ts ***!
  \*****************************************************/
/*! exports provided: HistoryService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HistoryService", function() { return HistoryService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _config_enums_default_enum__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../config/enums/default.enum */ "./src/app/config/enums/default.enum.ts");
/* harmony import */ var _core_database_service_query_database_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./../../core/database-service/query-database.service */ "./src/app/core/database-service/query-database.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_core_database_service_mutation_database_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/database-service/mutation-database.service */ "./src/app/core/database-service/mutation-database.service.ts");






var HistoryService = /** @class */ (function () {
    function HistoryService(queryService, mutateService) {
        this.queryService = queryService;
        this.mutateService = mutateService;
    }
    HistoryService.prototype.getHistory = function (id) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (obs) {
            _this.queryService.getListDataWhereEquals(_config_enums_default_enum__WEBPACK_IMPORTED_MODULE_2__["Entities"].Content, 'userId', id).subscribe(function (res) {
                obs.next(res);
            }, function (err) {
                obs.error(err);
            });
        });
    };
    HistoryService.prototype.getUserId = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_1__["Observable"](function (obs) {
            _this.queryService.getLoggedInUserID().subscribe(function (res) {
                obs.next(res);
            }, function (err) {
                obs.error(err);
            });
        });
    };
    HistoryService.prototype.deleteData = function (uid) {
        this.mutateService.deleteDataWithUID(_config_enums_default_enum__WEBPACK_IMPORTED_MODULE_2__["Entities"].Content, uid);
    };
    HistoryService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_4__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_database_service_query_database_service__WEBPACK_IMPORTED_MODULE_3__["QueryDatabaseService"], src_app_core_database_service_mutation_database_service__WEBPACK_IMPORTED_MODULE_5__["MutationDatabaseService"]])
    ], HistoryService);
    return HistoryService;
}());



/***/ })

}]);
//# sourceMappingURL=history-history-module.js.map