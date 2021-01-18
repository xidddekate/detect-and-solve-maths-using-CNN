(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mathsolver-mathsolver-module"],{

/***/ "./src/app/mathsolver/components/draw/draw.component.html":
/*!****************************************************************!*\
  !*** ./src/app/mathsolver/components/draw/draw.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='margin-auto p-64'>\r\n  <div fxLayout='row' fxLayoutAlign=\"center center\" class='font-size-24'>Draw Below</div>\r\n  <div fxLayout='row' fxLayoutAlign=\"center center\" class='p-24 margin-auto w-100-p'>\r\n    <canvas #canvas id='myCanvas' class='mat-elevation-z8 dropzone '\r\n      [ngClass]=\"mode=='pen' ? 'crosshair' : 'rubber' \"></canvas>\r\n\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"16px\" class='pb-16'>\r\n    <button mat-stroked-button color=\"primary\" (click)='changeMode(\"eraser\")'\r\n      class='w-170 font-size-16 cornsilk-background'>\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"16px\">\r\n        <i class=\"material-icons font-size-16 pl-22\">\r\n          crop_16_9\r\n        </i>\r\n        <div>Eraser</div>\r\n      </div>\r\n    </button>\r\n    <button mat-raised-button color=\"primary\" (click)='changeMode(\"pen\")'\r\n      class='w-170 black-color-background font-size-16'>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"16px\">\r\n        <i class=\"material-icons font-size-16 pl-22\">\r\n          create\r\n        </i>\r\n        <div>Pencil</div>\r\n      </div>\r\n\r\n\r\n    </button>\r\n    <button mat-raised-button color=\"warn\" (click)='clearCanvas()' class='w-170  font-size-16'>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"16px\">\r\n        <i class=\"material-icons font-size-16 pl-22\">\r\n          close\r\n        </i>\r\n        <div>Clear</div>\r\n      </div>\r\n    </button>\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"16px\" class='pb-16'>\r\n    <button mat-raised-button (click)='saveImage()' class='w-224 accepted-color-background font-size-16'>Upload</button>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <form [formGroup]=\"equationForm\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"center stretch\" fxLayoutGap=\"12px\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div fxFlex='20' ngClass='mat-icon-for-input font-size-20'\r\n          [ngClass.lt-lg]=\"['font-size-14' ,'mat-icon-for-input']\">\r\n          Equation: </div>\r\n        <div fxFlex='80'>\r\n          <mat-form-field appearance=\"outline\">\r\n            <input matInput type='text' formControlName='equation' class='font-size-20'>\r\n            <mat-error *ngIf=\"equationForm.get('equation').touched && equationForm.get('equation').invalid\">Invalid\r\n              Equation</mat-error>\r\n            <mat-error\r\n              *ngIf=\"!equationForm.get('equation').touched && equationForm.get('equation').hasError('required')\">\r\n              Equation Required</mat-error>\r\n\r\n          </mat-form-field>\r\n        </div>\r\n        \r\n\r\n\r\n      </div>\r\n\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div fxFlex='20' ngClass='mat-icon-for-input font-size-20'\r\n          [ngClass.lt-lg]=\"['font-size-14' ,'mat-icon-for-input']\">\r\n        </div>\r\n\r\n        <div fxFlex='80' >\r\n          <div *ngIf='isSolved==true' class=' px-24 pt-24 pb-12'>\r\n            \r\n           \r\n              <div *ngFor='let i of solutionSteps'>\r\n                <div fxLayout=\"row\" fxLayoutAlign=\"start center\"  class=' mb-12'>\r\n                  <div fxFlex.lt-md='50' fxFlex='40' class='font-size-20'><i class=\"material-icons font-size-16 mr-12\">adjust</i> {{i.newEquation}}</div>\r\n                  <div fxFlex.lt-md='50' fxFlex='60' class='font-size-16'>{{i.change}}</div>\r\n                </div>\r\n              </div>\r\n              \r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div fxFlex='20' ngClass='mat-icon-for-input font-size-20'\r\n          [ngClass.lt-lg]=\"['font-size-14','mat-icon-for-input']\">Solution:\r\n        </div>\r\n        <div fxFlex='80'>\r\n\r\n          <mat-form-field appearance=\"outline\">\r\n\r\n            <input matInput type='text' formControlName='solution' class='font-size-20'>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <button mat-raised-button color=\"primary\" class='w-200' (click)='solveMathjs()'>SOLVE</button>\r\n      </div>\r\n      <div *ngIf='isAuthenticated && isSavable' fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <button mat-stroked-button color=\"primary\" class='w-200' (click)='save()'>SAVE</button>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </form>\r\n\r\n\r\n\r\n\r\n\r\n\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/mathsolver/components/draw/draw.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/mathsolver/components/draw/draw.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".crosshair {\n  cursor: crosshair; }\n\n.rubber {\n  cursor: cell; }\n\n.custom-border {\n  border: 4px solid #222858; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0aHNvbHZlci9jb21wb25lbnRzL2RyYXcvQzpcXFVzZXJzXFxTdWRoYW5zaHVcXC52c2NvZGVcXFBST0pFQ1RTXFxNTFxcRURJVEVEIGVxdWF0aW9uIHNvbHZlciAtIENvcHlcXEZyb250ZW5kXFxjcmFja215a3dlcnkvc3JjXFxhcHBcXG1hdGhzb2x2ZXJcXGNvbXBvbmVudHNcXGRyYXdcXGRyYXcuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBR0E7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxZQUFZLEVBQUE7O0FBSWhCO0VBQ0kseUJBQXlCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYXRoc29sdmVyL2NvbXBvbmVudHMvZHJhdy9kcmF3LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY2FudmFzIHsgXHJcbi8vICAgICBjdXJzb3I6IGNyb3NzaGFpcjtcclxuLy8gfVxyXG4uY3Jvc3NoYWlye1xyXG4gICAgY3Vyc29yOiBjcm9zc2hhaXI7XHJcbn1cclxuLnJ1YmJlcntcclxuICAgIGN1cnNvcjogY2VsbDtcclxuICAgIFxyXG59XHJcblxyXG4uY3VzdG9tLWJvcmRlcntcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMyMjI4NTg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/mathsolver/components/draw/draw.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/mathsolver/components/draw/draw.component.ts ***!
  \**************************************************************/
/*! exports provided: DrawComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrawComponent", function() { return DrawComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _services_mathsolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/mathsolver.service */ "./src/app/mathsolver/services/mathsolver.service.ts");
/* harmony import */ var src_app_core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/core/utility-service/utility.service */ "./src/app/core/utility-service/utility.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");









var DrawComponent = /** @class */ (function () {
    function DrawComponent(utilityService, fb, mathSolver, sharedService) {
        this.utilityService = utilityService;
        this.fb = fb;
        this.mathSolver = mathSolver;
        this.sharedService = sharedService;
        this.widthMinus = 300;
        this.canvasHeight = 300;
        this.mode = 'pen';
        this.isAuthenticated = false;
        this.isSavable = false;
        this.userId = '';
        this.croppedImageFile = null;
        this.isSolved = false;
        this.solutionSteps = [];
        this.width = this.widthMinus;
        this.height = this.canvasHeight;
    }
    DrawComponent.prototype.ngOnInit = function () {
        this.makeEquationForm();
        this.makeUploadForm();
        this.checkUser();
    };
    DrawComponent.prototype.makeEquationForm = function () {
        this.equationForm = this.fb.group({
            equation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            solution: ['']
        });
    };
    DrawComponent.prototype.makeUploadForm = function () {
        this.uploadForm = this.fb.group({
            picture: [null]
        });
    };
    DrawComponent.prototype.checkUser = function () {
        var _this = this;
        this.mathSolver.isUserLoggedIn().subscribe(function (res) {
            if (res) {
                _this.isAuthenticated = true;
            }
            else {
                _this.isAuthenticated = false;
            }
        });
    };
    DrawComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth - this.widthMinus > 500) {
            this.canvasEl.width = event.target.innerWidth - this.widthMinus;
        }
        else {
            this.canvasEl.width = event.target.innerWidth - 100;
        }
        this.canvasEl.height = this.canvasHeight;
    };
    DrawComponent.prototype.ngAfterViewInit = function () {
        this.canvasEl = this.canvas.nativeElement;
        this.cx = this.canvasEl.getContext('2d');
        this.canvasEl.width = screen.width - this.widthMinus;
        this.canvasEl.height = this.canvasHeight;
        this.cx.fillStyle = '#ffffff';
        this.cx.fillRect(0, 0, this.canvasEl.width, this.canvasEl.height);
        this.cx.lineWidth = 5;
        this.cx.lineCap = 'round';
        this.cx.strokeStyle = '#000';
        this.captureEvents(this.canvasEl);
    };
    DrawComponent.prototype.captureEvents = function (canvasEl) {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'mousedown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["switchMap"])(function (e) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'mouseup')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["fromEvent"])(canvasEl, 'mouseleave')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["pairwise"])());
        }))
            .subscribe(function (res) {
            var rect = canvasEl.getBoundingClientRect();
            var prevPos = {
                x: res[0].clientX - rect.left,
                y: res[0].clientY - rect.top
            };
            var currentPos = {
                x: res[1].clientX - rect.left,
                y: res[1].clientY - rect.top
            };
            _this.drawOnCanvas(prevPos, currentPos);
        });
    };
    DrawComponent.prototype.drawOnCanvas = function (prevPos, currentPos) {
        if (!this.cx) {
            return;
        }
        this.cx.beginPath();
        if (prevPos && this.mode == 'pen') {
            this.cx.globalCompositeOperation = 'source-over';
            this.cx.lineWidth = 5;
            this.cx.strokeStyle = '#000';
            this.cx.moveTo(prevPos.x, prevPos.y); // from
            this.cx.lineTo(currentPos.x, currentPos.y);
            this.cx.stroke();
        }
        else if (prevPos && this.mode == 'eraser') {
            this.cx.globalCompositeOperation = 'source-over';
            this.cx.lineWidth = 20;
            this.cx.strokeStyle = '#ffffff';
            this.cx.moveTo(prevPos.x, prevPos.y); // from
            this.cx.lineTo(currentPos.x, currentPos.y);
            this.cx.stroke();
        }
    };
    DrawComponent.prototype.changeMode = function (name) {
        this.mode = name;
    };
    DrawComponent.prototype.clearCanvas = function () {
        this.cx.clearRect(0, 0, this.cx.canvas.width, this.cx.canvas.height);
        this.cx.fillStyle = '#ffffff';
        this.cx.fillRect(0, 0, this.cx.canvas.width, this.cx.canvas.height); // Clears the canvas
        this.clearAll();
    };
    DrawComponent.prototype.clearAll = function () {
        this.croppedImageFile = null;
        this.isSavable = false;
        this.equationForm.patchValue({
            equation: '',
            solution: ''
        });
        this.isSolved = false;
    };
    DrawComponent.prototype.saveImage = function () {
        var _this = this;
        var base64 = this.canvasEl.toDataURL('image/png');
        var base64Data = base64.slice(22);
        var blobfile = this.utilityService.b64toBlob(base64Data, 'image/png');
        var f = new File([blobfile], 'test.jpg', { type: 'image/jpeg', lastModified: Date.now() });
        this.croppedImageFile = f;
        this.mathSolver
            .predictBase64({
            base64: base64Data
        })
            .subscribe(function (res) {
            _this.equationForm.patchValue({
                equation: res.equation
            });
            // this.solve();
            _this.solveMathjs();
        });
    };
    DrawComponent.prototype.tryDerivative = function () {
        // debugger;
        var equ = this.equationForm.get('solution').value;
        var x, y;
        for (var _i = 0, equ_1 = equ; _i < equ_1.length; _i++) {
            var i = equ_1[_i];
            if (i == 'x') {
                x = this.mathSolver.solveDerivative(equ, 'x');
            }
            else if (i == 'y') {
                y = this.mathSolver.solveDerivative(equ, 'y');
            }
        }
        this.derivativeX = x;
        this.derivativeY = y;
        if (this.derivativeX) {
            var sol = this.equationForm.get('solution').value;
            this.equationForm.patchValue({
                solution: sol + ", Derivation with respect to x : " + this.derivativeX
            });
        }
        if (this.derivativeY) {
            var sol = this.equationForm.get('solution').value;
            this.equationForm.patchValue({
                solution: sol + ", Derivation with respect to y : " + this.derivativeY
            });
        }
        // console.log(x,y);
    };
    DrawComponent.prototype.solveMathjs = function () {
        var _this = this;
        var equation = this.equationForm.get('equation').value;
        var solutions = this.mathSolver.solveEquationWithMathJs(equation);
        var solution;
        this.solutionSteps = [];
        solutions.forEach(function (step) {
            if (step && step.newNode) {
                solution = step.newNode.toString();
                _this.solutionSteps.push({
                    'change': step.changeType,
                    'newEquation': step.newNode.toString()
                });
            }
            else if (step && step.newEquation) {
                solution = step.newEquation.ascii();
                _this.solutionSteps.push({
                    'change': step.changeType,
                    'newEquation': step.newEquation.ascii()
                });
            }
        });
        this.isSolved = true;
        if (!solution) {
            this.solve();
            // solution = 'Sorry No Solution found';
            // this.isSolved=false;
        }
        else {
            this.equationForm.patchValue({
                solution: solution
            });
        }
        if (this.croppedImageFile) {
            this.isSavable = true;
        }
        this.tryDerivative();
    };
    DrawComponent.prototype.solve = function () {
        var equation = this.equationForm.get('equation').value;
        var solution = this.mathSolver.solve(equation);
        if (!solution) {
            solution = 'Sorry No Solution found';
        }
        this.equationForm.patchValue({
            solution: solution
        });
        if (this.croppedImageFile) {
            this.isSavable = true;
        }
    };
    // solve() {
    // 	let equation = this.equationForm.get('equation').value;
    // 	let solution = this.mathSolver.solve(equation);
    // 	debugger;
    // 	if (!solution) {
    // 		solution = 'Sorry No Solution found';
    // 	}
    // 	this.equationForm.patchValue({
    // 		solution: solution
    // 	});
    // 	if(this.croppedImageFile){
    // 		this.isSavable = true;
    // 	}
    // }
    DrawComponent.prototype.uploadFileToFirebase = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_2__["Observable"](function (obs) {
            var filepath = _this.userId + "/" + _this.croppedImageFile.name + "_" + new Date().getTime();
            _this.mathSolver.uploadFileToFirebase(filepath, _this.croppedImageFile).subscribe(function (res) {
                _this.imageLink = res;
                obs.next(res);
            }, function (err) {
                obs.error(err);
            });
        });
    };
    DrawComponent.prototype.save = function () {
        var _this = this;
        this.mathSolver.getUserId().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["first"])()).subscribe(function (res) {
            _this.sharedService.startSpinner();
            _this.userId = res;
            _this.uploadFileToFirebase().subscribe(function (res) {
                var con = {
                    userId: _this.userId,
                    createdTime: new Date(),
                    equation: _this.equationForm.get('equation').value,
                    solution: _this.equationForm.get('solution').value,
                    uid: _this.sharedService.generateGUID(),
                    imageLink: _this.imageLink
                };
                if (con.userId && con.equation && con.solution) {
                    _this.mathSolver.saveContent(con);
                    _this.sharedService.openSnackBar({
                        data: {
                            message: 'Saved into account',
                            isAccepted: true
                        },
                        duration: 3,
                        panelClass: ['recovery-snackbar']
                    });
                    _this.sharedService.hideSpinner();
                }
                else {
                    _this.sharedService.openSnackBar({
                        data: {
                            message: 'Please Give a equation and solution',
                            isAccepted: false
                        },
                        duration: 3,
                        panelClass: ['recovery-snackbar']
                    });
                    _this.sharedService.hideSpinner();
                }
            }, function (err) {
                _this.sharedService.hideSpinner();
                _this.sharedService.openSnackBar({
                    data: {
                        message: 'Internal server error',
                        isAccepted: false
                    },
                    duration: 3,
                    panelClass: ['recovery-snackbar']
                });
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], DrawComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DrawComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DrawComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DrawComponent.prototype, "onResize", null);
    DrawComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-draw',
            template: __webpack_require__(/*! ./draw.component.html */ "./src/app/mathsolver/components/draw/draw.component.html"),
            styles: [__webpack_require__(/*! ./draw.component.scss */ "./src/app/mathsolver/components/draw/draw.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _services_mathsolver_service__WEBPACK_IMPORTED_MODULE_4__["MathsolverService"],
            src_app_shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], DrawComponent);
    return DrawComponent;
}());



/***/ }),

/***/ "./src/app/mathsolver/components/solve/solve.component.html":
/*!******************************************************************!*\
  !*** ./src/app/mathsolver/components/solve/solve.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"equationForm\">\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center stretch\" fxLayoutGap=\"12px\">\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <div fxFlex='20' ngClass='mat-icon-for-input font-size-20' [ngClass.lt-lg]=\"['font-size-14' ,'mat-icon-for-input']\">\r\n        Equation: </div>\r\n      <div fxFlex='80'>\r\n        <mat-form-field appearance=\"outline\">\r\n          <!-- <mat-label>Parsed Equation</mat-label> -->\r\n          <input matInput type='text' formControlName='equation' class='font-size-20'>\r\n          <mat-error *ngIf=\"equationForm.get('equation').touched && equationForm.get('equation').invalid\">Invalid Equation</mat-error>\r\n          <mat-error *ngIf=\"!equationForm.get('equation').touched && equationForm.get('equation').hasError('required')\">Equation Required</mat-error>\r\n\r\n        </mat-form-field>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <div fxFlex='20' ngClass='mat-icon-for-input font-size-20' [ngClass.lt-lg]=\"['font-size-14','mat-icon-for-input']\">Solution:\r\n      </div>\r\n      <div fxFlex='80'>\r\n\r\n        <mat-form-field appearance=\"outline\">\r\n          <!-- <mat-label>Solution</mat-label> -->\r\n\r\n          <input matInput type='text' formControlName='solution' class='font-size-20'>\r\n        </mat-form-field>\r\n      </div>\r\n\r\n    </div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <button mat-raised-button color=\"primary\" class='w-200' (click)='solve()'>SOLVE</button>\r\n    </div>\r\n    <div *ngIf='isAuthenticated && isSavable' fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n      <button mat-stroked-button color=\"primary\" class='w-200' (click)='save()'>SAVE</button>\r\n    </div>\r\n  </div>\r\n</form>"

/***/ }),

/***/ "./src/app/mathsolver/components/solve/solve.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/mathsolver/components/solve/solve.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGhzb2x2ZXIvY29tcG9uZW50cy9zb2x2ZS9zb2x2ZS5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/mathsolver/components/solve/solve.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/mathsolver/components/solve/solve.component.ts ***!
  \****************************************************************/
/*! exports provided: SolveComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SolveComponent", function() { return SolveComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../core/utility-service/utility.service */ "./src/app/core/utility-service/utility.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _services_mathsolver_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../services/mathsolver.service */ "./src/app/mathsolver/services/mathsolver.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");






var SolveComponent = /** @class */ (function () {
    function SolveComponent(utilityService, fb, mathSolver, sharedService) {
        this.utilityService = utilityService;
        this.fb = fb;
        this.mathSolver = mathSolver;
        this.sharedService = sharedService;
        this.isAuthenticated = false;
        this.isSavable = false;
    }
    SolveComponent.prototype.ngOnInit = function () {
        this.makeEquationForm();
        this.checkUser();
    };
    SolveComponent.prototype.makeEquationForm = function () {
        this.equationForm = this.fb.group({
            equation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            solution: ['']
        });
    };
    SolveComponent.prototype.checkUser = function () {
        var _this = this;
        this.mathSolver.isUserLoggedIn().subscribe(function (res) {
            if (res) {
                _this.isAuthenticated = true;
            }
            else {
                _this.isAuthenticated = false;
            }
        });
    };
    SolveComponent.prototype.solve = function () {
        var equation = this.equationForm.get('equation').value;
        var solution = this.mathSolver.solveEquation(equation);
        if (!solution) {
            solution = 'Sorry No Solution found';
        }
        this.equationForm.patchValue({
            solution: solution
        });
        this.isSavable = true;
    };
    SolveComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-solve',
            template: __webpack_require__(/*! ./solve.component.html */ "./src/app/mathsolver/components/solve/solve.component.html"),
            styles: [__webpack_require__(/*! ./solve.component.scss */ "./src/app/mathsolver/components/solve/solve.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_2__["UtilityService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _services_mathsolver_service__WEBPACK_IMPORTED_MODULE_4__["MathsolverService"],
            _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_5__["SharedService"]])
    ], SolveComponent);
    return SolveComponent;
}());



/***/ }),

/***/ "./src/app/mathsolver/components/upload/upload.component.html":
/*!********************************************************************!*\
  !*** ./src/app/mathsolver/components/upload/upload.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"column\" fxLayoutAlign=\"center stretch \" class='margin-auto p-64' fxLayoutGap=\"16px\">\r\n\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center stretch \" fxLayoutGap=\"24px\">\r\n    <div>\r\n\r\n      <div *ngIf='!isValid' fxLayout=\"column\" fxLayoutAlign=\"center center \" fxLayoutGap=\"12px\"\r\n        class='dropzone p-24 margin-auto h-200' dropZone (hovered)=\"toggleHover($event)\"\r\n        (dropped)=\"fileSelected($event)\" [class.hovering]=\"isHovering\" (change)=\"fileSelected($event)\">\r\n        <div class='font-size-20'>\r\n          Drag and Drop your picture\r\n        </div>\r\n        <div class=\"file\">\r\n          <label class=\"file-label\">\r\n            <input class=\"file-input\" type=\"file\" (change)=\"fileSelected($event)\">\r\n\r\n            <span class=\"file-cta\">\r\n              <span class=\"file-icon\">\r\n                <i class=\"fa fa-upload\"></i>\r\n              </span>\r\n              <span class=\"file-label\">\r\n                or choose a file…\r\n              </span>\r\n            </span>\r\n          </label>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <div *ngIf='isValid' fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"16px\">\r\n        <div class='w-100-p'>\r\n          <image-cropper [imageChangedEvent]=\"imageChangedEvent\" [imageBase64]=\"initialBase64pic\"\r\n            [maintainAspectRatio]=\"false\" format=\"jpeg\" (imageCropped)=\"imageCropped($event)\"\r\n            (imageLoaded)=\"imageLoaded()\" (cropperReady)=\"cropperReady()\" (loadImageFailed)=\"loadImageFailed()\"\r\n            [aspectRatio]=\"4 / 3\" [autoCrop]=\"true\">\r\n          </image-cropper>\r\n        </div>\r\n        <div>\r\n          <img [src]=\"croppedImage\" id='croppedImage' />\r\n\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"12px\">\r\n      <button mat-raised-button color=\"warn\" class='w-200' (click)='upload()'>UPLOAD</button>\r\n      <button *ngIf='isValid' mat-stroked-button color=\"primary\" class='w-200' (click)='reupload()'>REUPLOAD</button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <form [formGroup]=\"equationForm\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"center stretch\" fxLayoutGap=\"12px\">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div fxFlex='20' ngClass='mat-icon-for-input font-size-20'\r\n          [ngClass.lt-lg]=\"['font-size-14' ,'mat-icon-for-input']\">\r\n          Equation: </div>\r\n        <div fxFlex='80'>\r\n          <mat-form-field appearance=\"outline\">\r\n            <input matInput type='text' formControlName='equation' class='font-size-20'>\r\n            <mat-error *ngIf=\"equationForm.get('equation').touched && equationForm.get('equation').invalid\">Invalid\r\n              Equation</mat-error>\r\n            <mat-error\r\n              *ngIf=\"!equationForm.get('equation').touched && equationForm.get('equation').hasError('required')\">\r\n              Equation Required</mat-error>\r\n\r\n          </mat-form-field>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div fxFlex='20' ngClass='mat-icon-for-input font-size-20'\r\n          [ngClass.lt-lg]=\"['font-size-14' ,'mat-icon-for-input']\">\r\n        </div>\r\n\r\n        <div fxFlex='80'>\r\n          <div *ngIf='isSolved==true' class=' px-24 pt-24 pb-12'>\r\n\r\n\r\n            <div *ngFor='let i of solutionSteps'>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"start center\" class=' mb-12'>\r\n                <div fxFlex.lt-md='50' fxFlex='40' class='font-size-20'><i\r\n                    class=\"material-icons font-size-16 mr-12\">adjust</i> {{i.newEquation}}</div>\r\n                <div fxFlex.lt-md='50' fxFlex='60' class='font-size-16'>{{i.change}}</div>\r\n              </div>\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n      </div>\r\n\r\n\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n        <div fxFlex='20' ngClass='mat-icon-for-input font-size-20'\r\n          [ngClass.lt-lg]=\"['font-size-14','mat-icon-for-input']\">Solution:\r\n        </div>\r\n        <div fxFlex='80'>\r\n\r\n          <mat-form-field appearance=\"outline\">\r\n\r\n            <input matInput type='text' formControlName='solution' class='font-size-20'>\r\n          </mat-form-field>\r\n        </div>\r\n\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <button mat-raised-button color=\"primary\" class='w-200' (click)='solveMathjs()'>SOLVE</button>\r\n      </div>\r\n      <div *ngIf='isAuthenticated && isSavable' fxLayout=\"row\" fxLayoutAlign=\"center center\">\r\n        <button mat-stroked-button color=\"primary\" class='w-200' (click)='save()'>SAVE</button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <!-- <app-solve></app-solve> -->\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/mathsolver/components/upload/upload.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/mathsolver/components/upload/upload.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21hdGhzb2x2ZXIvY29tcG9uZW50cy91cGxvYWQvdXBsb2FkLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/mathsolver/components/upload/upload.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/mathsolver/components/upload/upload.component.ts ***!
  \******************************************************************/
/*! exports provided: UploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UploadComponent", function() { return UploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _services_mathsolver_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/mathsolver.service */ "./src/app/mathsolver/services/mathsolver.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../core/utility-service/utility.service */ "./src/app/core/utility-service/utility.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");








// import { type } from 'os';
var UploadComponent = /** @class */ (function () {
    function UploadComponent(utilityService, fb, mathSolver, sharedService) {
        this.utilityService = utilityService;
        this.fb = fb;
        this.mathSolver = mathSolver;
        this.sharedService = sharedService;
        this.imageChangedEvent = '';
        this.imageblob = '';
        this.croppedImage = '';
        this.croppedImageFile = null;
        this.isValid = false;
        this.initialBase64pic = '';
        this.formData = new FormData();
        this.isAuthenticated = false;
        this.userId = '';
        this.isSavable = false;
        this.solutionSteps = [];
        this.isSolved = false;
    }
    UploadComponent.prototype.ngOnInit = function () {
        this.makeEquationForm();
        this.makeUploadForm();
        this.checkUser();
    };
    UploadComponent.prototype.makeEquationForm = function () {
        this.equationForm = this.fb.group({
            equation: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]],
            solution: ['']
        });
    };
    UploadComponent.prototype.makeUploadForm = function () {
        this.uploadForm = this.fb.group({
            picture: [null]
        });
    };
    UploadComponent.prototype.checkUser = function () {
        var _this = this;
        this.mathSolver.isUserLoggedIn().subscribe(function (res) {
            if (res) {
                _this.isAuthenticated = true;
            }
            else {
                _this.isAuthenticated = false;
            }
        });
    };
    UploadComponent.prototype.fileSelected = function (event) {
        if (event && event.target && event.target.files.length > 0) {
            if (this.utilityService.ifFileImage(event.target.files[0])) {
                this.imageblob = event.target.files[0];
                this.convertFiletoBase64(this.imageblob);
                this.isValid = true;
            }
        }
        else if (event instanceof FileList) {
            if (this.utilityService.ifFileImage(event[0])) {
                this.imageblob = event[0];
                this.convertFiletoBase64(this.imageblob);
                this.isValid = true;
            }
        }
    };
    UploadComponent.prototype.imageCropped = function (event) {
        this.croppedImage = event.base64;
        var blobfile = event.file;
        var f = new File([blobfile], 'test.jpg', { type: 'image/jpeg', lastModified: Date.now() });
        this.croppedImageFile = f;
    };
    UploadComponent.prototype.upload = function () {
        var _this = this;
        var f = new FormData();
        if (this.croppedImageFile != null) {
            f.append('file', this.croppedImageFile, 'test.jpg');
            this.mathSolver.predictImage(f).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (res) {
                _this.equationForm.patchValue({
                    equation: res.equation
                });
                _this.solveMathjs();
            });
        }
        else {
            this.sharedService.openSnackBar({
                data: {
                    message: 'Please Select a file',
                    isAccepted: false
                },
                duration: 3,
                panelClass: ['recovery-snackbar']
            });
        }
    };
    UploadComponent.prototype.reupload = function () {
        this.isValid = !this.isValid;
        this.imageblob = '';
        this.croppedImage = '';
        this.croppedImageFile = null;
        this.isSavable = false;
        this.isSolved = false;
        this.equationForm.patchValue({
            equation: '',
            solution: ''
        });
    };
    UploadComponent.prototype.solve = function () {
        var equation = this.equationForm.get('equation').value;
        var solution = this.mathSolver.solve(equation);
        if (!solution) {
            solution = 'Sorry No Solution found';
        }
        this.equationForm.patchValue({
            solution: solution
        });
        if (this.croppedImageFile) {
            this.isSavable = true;
        }
    };
    UploadComponent.prototype.solveMathjs = function () {
        var _this = this;
        var equation = this.equationForm.get('equation').value;
        var solutions = this.mathSolver.solveEquationWithMathJs(equation);
        var solution;
        this.solutionSteps = [];
        solutions.forEach(function (step) {
            if (step && step.newNode) {
                solution = step.newNode.toString();
                _this.solutionSteps.push({
                    'change': step.changeType,
                    'newEquation': step.newNode.toString()
                });
            }
            else if (step && step.newEquation) {
                solution = step.newEquation.ascii();
                _this.solutionSteps.push({
                    'change': step.changeType,
                    'newEquation': step.newEquation.ascii()
                });
            }
        });
        this.isSolved = true;
        if (!solution) {
            this.solve();
            // solution = 'Sorry No Solution found';
            // this.isSolved=false;
        }
        else {
            this.equationForm.patchValue({
                solution: solution
            });
        }
        if (this.croppedImageFile) {
            this.isSavable = true;
        }
        this.tryDerivative();
    };
    UploadComponent.prototype.tryDerivative = function () {
        var equ = this.equationForm.get('solution').value;
        var x, y;
        for (var _i = 0, equ_1 = equ; _i < equ_1.length; _i++) {
            var i = equ_1[_i];
            if (i == 'x') {
                x = this.mathSolver.solveDerivative(equ, 'x');
            }
            else if (i == 'y') {
                y = this.mathSolver.solveDerivative(equ, 'y');
            }
        }
        if (x) {
            var sol = this.equationForm.get('solution').value;
            this.equationForm.patchValue({
                solution: sol + ", Derivation with respect to x : " + x
            });
        }
        if (y) {
            var sol = this.equationForm.get('solution').value;
            this.equationForm.patchValue({
                solution: sol + ", Derivation with respect to y : " + y
            });
        }
        // console.log(x,y);
    };
    UploadComponent.prototype.toggleHover = function (event) {
        this.isHovering = event;
    };
    UploadComponent.prototype.imageLoaded = function () {
        // console.log('Cropper Loaded');
    };
    UploadComponent.prototype.cropperReady = function () {
        // console.log('Cropper ready to use');
    };
    UploadComponent.prototype.loadImageFailed = function () {
        // console.log('Image Loading failed');
    };
    UploadComponent.prototype.convertFiletoBase64 = function (fileInput) {
        var _this = this;
        var myReader = new FileReader();
        myReader.onloadend = function (e) {
            _this.initialBase64pic = myReader.result;
        };
        myReader.readAsDataURL(fileInput);
    };
    UploadComponent.prototype.uploadFileToFirebase = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (obs) {
            var filepath = _this.userId + "/" + _this.croppedImageFile.name + "_" + new Date().getTime();
            _this.mathSolver.uploadFileToFirebase(filepath, _this.croppedImageFile).subscribe(function (res) {
                _this.imageLink = res;
                obs.next(res);
            }, function (err) {
                obs.error(err);
            });
        });
    };
    UploadComponent.prototype.save = function () {
        var _this = this;
        this.mathSolver.getUserId().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["first"])()).subscribe(function (res) {
            _this.sharedService.startSpinner();
            _this.userId = res;
            _this.uploadFileToFirebase().subscribe(function (res) {
                var con = {
                    userId: _this.userId,
                    createdTime: new Date(),
                    equation: _this.equationForm.get('equation').value,
                    solution: _this.equationForm.get('solution').value,
                    uid: _this.sharedService.generateGUID(),
                    imageLink: _this.imageLink
                };
                if (con.userId && con.equation && con.solution) {
                    _this.mathSolver.saveContent(con);
                    _this.sharedService.openSnackBar({
                        data: {
                            message: 'Saved into account',
                            isAccepted: true
                        },
                        duration: 3,
                        panelClass: ['recovery-snackbar']
                    });
                    _this.sharedService.hideSpinner();
                }
                else {
                    _this.sharedService.openSnackBar({
                        data: {
                            message: 'Please Give a equation and solution',
                            isAccepted: false
                        },
                        duration: 3,
                        panelClass: ['recovery-snackbar']
                    });
                    _this.sharedService.hideSpinner();
                }
            }, function (err) {
                _this.sharedService.hideSpinner();
                _this.sharedService.openSnackBar({
                    data: {
                        message: 'Internal server error',
                        isAccepted: false
                    },
                    duration: 3,
                    panelClass: ['recovery-snackbar']
                });
            });
        });
    };
    UploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["Component"])({
            selector: 'app-upload',
            template: __webpack_require__(/*! ./upload.component.html */ "./src/app/mathsolver/components/upload/upload.component.html"),
            styles: [__webpack_require__(/*! ./upload.component.scss */ "./src/app/mathsolver/components/upload/upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _services_mathsolver_service__WEBPACK_IMPORTED_MODULE_2__["MathsolverService"],
            _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], UploadComponent);
    return UploadComponent;
}());



/***/ }),

/***/ "./src/app/mathsolver/mathsolver.module.ts":
/*!*************************************************!*\
  !*** ./src/app/mathsolver/mathsolver.module.ts ***!
  \*************************************************/
/*! exports provided: MathsolverModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathsolverModule", function() { return MathsolverModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/upload/upload.component */ "./src/app/mathsolver/components/upload/upload.component.ts");
/* harmony import */ var _components_draw_draw_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/draw/draw.component */ "./src/app/mathsolver/components/draw/draw.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _components_solve_solve_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/solve/solve.component */ "./src/app/mathsolver/components/solve/solve.component.ts");









var routes = [
    {
        path: '',
        redirectTo: 'upload',
    },
    {
        path: 'upload',
        component: _components_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"],
    },
    {
        path: 'draw',
        component: _components_draw_draw_component__WEBPACK_IMPORTED_MODULE_4__["DrawComponent"],
    },
];
var MathsolverModule = /** @class */ (function () {
    function MathsolverModule() {
    }
    MathsolverModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_upload_upload_component__WEBPACK_IMPORTED_MODULE_3__["UploadComponent"], _components_draw_draw_component__WEBPACK_IMPORTED_MODULE_4__["DrawComponent"], _components_solve_solve_component__WEBPACK_IMPORTED_MODULE_8__["SolveComponent"]],
            imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_7__["CoreModule"]]
        })
    ], MathsolverModule);
    return MathsolverModule;
}());



/***/ })

}]);
//# sourceMappingURL=mathsolver-mathsolver-module.js.map