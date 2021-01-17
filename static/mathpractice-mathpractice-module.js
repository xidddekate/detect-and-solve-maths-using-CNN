(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["mathpractice-mathpractice-module"],{

/***/ "./src/app/mathpractice/components/practice-default/practice-default.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/mathpractice/components/practice-default/practice-default.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"questionForm\">\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class='py-24'>\r\n    <div class='font-size-28 pb-24 primary-text-color '>Practice Math Problems</div>\r\n    <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"12px\">\r\n      <div matTooltip=\"Select how many questions you want to practice\">\r\n        <mat-form-field appearance=\"outline\" >\r\n          <mat-label>Number of Questions</mat-label>\r\n          <mat-select formControlName='questionNumbers'>\r\n            <mat-option *ngFor=\"let num of questionNumbers\" [value]=\"num.value\">\r\n              {{num.viewValue}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error\r\n            *ngIf=\"questionForm.get('questionNumbers').touched && questionForm.get('questionNumbers').hasError('required')\">\r\n            How many questions do you want?</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n      <div matTooltip=\"Select a difficulty\">\r\n        <mat-form-field appearance=\"outline\">\r\n          <mat-label>Difficulty</mat-label>\r\n          <mat-select formControlName='difficulty'>\r\n            <mat-option *ngFor=\"let num of difficulty\" [value]=\"num.value\">\r\n              {{num.viewValue}}\r\n            </mat-option>\r\n          </mat-select>\r\n          <mat-error\r\n            *ngIf=\"questionForm.get('difficulty').touched && questionForm.get('difficulty').hasError('required')\">Choose\r\n            Difficulty</mat-error>\r\n        </mat-form-field>\r\n      </div>\r\n    </div>\r\n    <div>\r\n      <button matTooltip=\"Generate random question to practice\" mat-raised-button color='primary' class='w-220 h-40'\r\n        (click)='generateQuestions()'>GENERATE\r\n        QUESTIONS</button>\r\n    </div>\r\n    <div *ngIf='IsQuizRunning' class='pt-16'>\r\n      <button (click)='finishQuiz()' matTooltip=\"Finish Quiz and see results\" mat-raised-button color='accent'\r\n        class='w-220 h-40'>FINISH QUIZ</button>\r\n    </div>\r\n\r\n  </div>\r\n\r\n</form>\r\n\r\n<div *ngIf='IsQuizRunning' fxLayout=\"column\" fxLayoutAlign=\"center center\" class='pb-16'>\r\n  <div class='p-12 border-radius-10-p font-size-20 custom-border' matTooltip=\"Turned in answers and total question count\" >Answered / Total : {{solvedAnswerCount}} /\r\n    {{GeneratedQuestions.length}}</div>\r\n</div>\r\n\r\n<div *ngIf='isQuizFinished' fxLayout=\"column\" fxLayoutAlign=\"center center\" class='pb-16'>\r\n  <div class='p-12 border-radius-10-p font-size-20 custom-border' matTooltip=\"Your score\">Score : {{correctAnswer}} /\r\n    {{GeneratedQuestions.length}}</div>\r\n</div>\r\n\r\n\r\n<div *ngIf='GeneratedQuestions' fxLayout=\"column\" fxLayoutAlign=\"center center\">\r\n\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"24px\">\r\n    <div>\r\n      <div *ngFor='let content of GeneratedQuestions.slice(first, last);let i=index;  '>\r\n\r\n        <mat-card [class.mat-elevation-z10]=\"true\" class=\"font-size-12 w-470 mb-12\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start start\" fxLayoutGap=\"16px\">\r\n            <div class='font-size-16' matTooltip=\"Select question so that drawn solution on canvas can be set in solution\">\r\n              <button *ngIf='selected!=content.questionNumber' (click)='selectQuestion(content.questionNumber)'\r\n                mat-mini-fab>{{content.questionNumber}}</button>\r\n              <button *ngIf='selected==content.questionNumber' mat-mini-fab\r\n                color='primary'>{{content.questionNumber}}</button>\r\n\r\n            </div>\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center start\" fxLayoutGap=\"8px\">\r\n              <div class='font-size-16'>  {{content.question.parsed}} </div>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"54px\">\r\n\r\n\r\n\r\n\r\n\r\n\r\n                <div>\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <input matInput [formControl]=\"answer[first+i]\" type='text' class='font-size-16'>\r\n\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n                <div *ngIf='!content.isAnswered && !isQuizFinished' class='pb-16'> <button\r\n                    (click)='turnInAnswer(content.questionNumber)' matTooltip=\"Turn in current answer\" mat-mini-fab\r\n                    color=\"primary\" class='font-size-12 accepted-color-background'><i class=\"material-icons\">\r\n                      get_app\r\n                    </i></button>\r\n                </div>\r\n                <div *ngIf='content.isAnswered && !isQuizFinished' class='pb-16'> <button matTooltip=\"Turned in\"\r\n                    mat-mini-fab color=\"accent\" class='font-size-12 '><i class=\"material-icons\">\r\n                      done_outline\r\n                    </i></button>\r\n                </div>\r\n                <div *ngIf='content.isCorrect && isQuizFinished' class='pb-16'> <button matTooltip=\"Turned in\"\r\n                    mat-mini-fab class='font-size-12 accepted-color-background'><i class=\"material-icons\">\r\n                      done_outline\r\n                    </i></button>\r\n                </div>\r\n                <div *ngIf='!content.isCorrect && isQuizFinished' class='pb-16'> <button matTooltip=\"Turned in\"\r\n                    mat-mini-fab class='font-size-12 rejected-color-background'><i class=\"material-icons\">\r\n                      highlight_off\r\n                    </i></button>\r\n                </div>\r\n              </div>\r\n              <div *ngIf='isQuizFinished' class='font-size-16 '>\r\n                Given Answer: <span *ngIf='content.isCorrect ' class='accepted-color'>{{content.givenAnswer}} </span>\r\n                <span *ngIf='!content.isCorrect ' class='rejected-color'>{{content.givenAnswer}} </span>\r\n\r\n              </div>\r\n              <div *ngIf='isQuizFinished' class='font-size-16 '>\r\n                Correct Answers: <span class='accepted-color'>{{content.question.solution}} </span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </mat-card>\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <!-- Canvas -->\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"12px\">\r\n      <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"12px\" class='font-size-16'>\r\n        <div>Drawn answer will be parsed </div>\r\n        <div>in the selected question</div>\r\n      </div>\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"12px\">\r\n        <canvas #canvas id='myCanvas' class='mat-elevation-z8 dropzone '\r\n          [ngClass]=\"mode=='pen' ? 'crosshair' : 'rubber' \"></canvas>\r\n\r\n\r\n        <div fxLayout=\"column\" fxLayout.lt-md=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"16px\" class='pb-16'>\r\n          <button  matTooltip=\"Eraser\" mat-mini-fab (click)='changeMode(\"eraser\")' class=' font-size-16 cornsilk-background'>\r\n\r\n            <i class=\"material-icons font-size-16 \">\r\n              crop_16_9\r\n            </i>\r\n\r\n          </button>\r\n          <button  matTooltip=\"Pencil\" mat-mini-fab color=\"primary\" (click)='changeMode(\"pen\")' class=' black-color-background font-size-16'>\r\n            <i class=\"material-icons font-size-16 \">\r\n              create\r\n            </i>\r\n\r\n\r\n\r\n          </button>\r\n          <button  matTooltip=\"Refresh canvas\" mat-mini-fab color=\"warn\" (click)='clearCanvas()' class='  font-size-16'>\r\n            <i class=\"material-icons font-size-16 \">\r\n              close\r\n            </i>\r\n\r\n          </button>\r\n          <button  matTooltip=\"Retry parsing image\" mat-mini-fab color='primary' (click)='saveImage()' class=' font-size-16 '>\r\n\r\n            <i class=\"material-icons font-size-16 \">\r\n              loop\r\n            </i>\r\n\r\n          </button>\r\n\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div *ngIf='GeneratedQuestions.length>0' fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"48px\"\r\n    class='py-24'>\r\n    <button matTooltip=\"Go to previous page\" mat-fab (click)='Back()'><i class=\"material-icons\">\r\n        keyboard_arrow_left\r\n      </i></button>\r\n    <button matTooltip=\"Go to next page\" mat-fab (click)='Forward()'><i class=\"material-icons\">\r\n        keyboard_arrow_right\r\n      </i></button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/mathpractice/components/practice-default/practice-default.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/mathpractice/components/practice-default/practice-default.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".custom-border {\n  border: 4px solid #222858; }\n\n.crosshair {\n  cursor: crosshair; }\n\n.rubber {\n  cursor: cell; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbWF0aHByYWN0aWNlL2NvbXBvbmVudHMvcHJhY3RpY2UtZGVmYXVsdC9DOlxcVXNlcnNcXFN1ZGhhbnNodVxcLnZzY29kZVxcUFJPSkVDVFNcXE1MXFxhbmd1bGFyLWZsYXNrXFxhbmd1bGFyL3NyY1xcYXBwXFxtYXRocHJhY3RpY2VcXGNvbXBvbmVudHNcXHByYWN0aWNlLWRlZmF1bHRcXHByYWN0aWNlLWRlZmF1bHQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSx5QkFBeUIsRUFBQTs7QUFFN0I7RUFDSSxpQkFBaUIsRUFBQTs7QUFFckI7RUFDSSxZQUFZLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9tYXRocHJhY3RpY2UvY29tcG9uZW50cy9wcmFjdGljZS1kZWZhdWx0L3ByYWN0aWNlLWRlZmF1bHQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY3VzdG9tLWJvcmRlcntcclxuICAgIGJvcmRlcjogNHB4IHNvbGlkICMyMjI4NTg7XHJcbn1cclxuLmNyb3NzaGFpcntcclxuICAgIGN1cnNvcjogY3Jvc3NoYWlyO1xyXG59XHJcbi5ydWJiZXJ7XHJcbiAgICBjdXJzb3I6IGNlbGw7XHJcbiAgICBcclxufSJdfQ== */"

/***/ }),

/***/ "./src/app/mathpractice/components/practice-default/practice-default.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/mathpractice/components/practice-default/practice-default.component.ts ***!
  \****************************************************************************************/
/*! exports provided: PracticeDefaultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeDefaultComponent", function() { return PracticeDefaultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../config/constants/defaultConstants */ "./src/app/config/constants/defaultConstants.ts");
/* harmony import */ var _services_practice_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../../services/practice.service */ "./src/app/mathpractice/services/practice.service.ts");
/* harmony import */ var _core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../core/utility-service/utility.service */ "./src/app/core/utility-service/utility.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _mathsolver_services_mathsolver_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../mathsolver/services/mathsolver.service */ "./src/app/mathsolver/services/mathsolver.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");










var PracticeDefaultComponent = /** @class */ (function () {
    function PracticeDefaultComponent(fb, sharedService, utility, practiceService, mathsolver, utilityService) {
        this.fb = fb;
        this.sharedService = sharedService;
        this.utility = utility;
        this.practiceService = practiceService;
        this.mathsolver = mathsolver;
        this.utilityService = utilityService;
        this.mode = 'pen';
        this.widthMinus = 300;
        this.canvasHeight = 300;
        this.perPageShow = 4;
        this.questionNumbers = [
            { value: '12', viewValue: '12' },
            { value: '24', viewValue: '24' },
            { value: '32', viewValue: '32' }
        ];
        this.difficulty = [
            { value: 'easy', viewValue: 'Easy' },
            { value: 'average', viewValue: 'Average' },
            { value: 'hard', viewValue: 'Hard' }
        ];
        this.selected = 1;
        this.Difficulty = _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_1__["DifficultyLevel"];
        this.IsQuizRunning = false;
        // IsQuizRunningSubject: Subject<boolean>;
        this.GeneratedQuestions = [];
        this.solvedAnswerCount = 0;
        this.correctAnswer = 0;
        this.first = 0;
        this.last = this.perPageShow;
        this.isQuizFinished = false;
        this.answer = [];
        this.width = this.widthMinus;
        this.height = this.canvasHeight;
    }
    PracticeDefaultComponent.prototype.ngOnInit = function () {
        this.makeQuestionForm();
        this.start();
    };
    PracticeDefaultComponent.prototype.start = function () {
        this.questionForm.get('difficulty').patchValue('easy');
        this.questionForm.get('questionNumbers').patchValue('12');
        this.questionNumber = 12;
        this.minimumDifficulty = this.Difficulty['easy'].minimum;
        this.maximumDifficulty = this.Difficulty['easy'].maximum;
        this.generate();
    };
    PracticeDefaultComponent.prototype.generateQuestions = function () {
        if (!this.questionForm.invalid) {
            this.questionNumber = this.questionForm.get('questionNumbers').value;
            this.minimumDifficulty = this.Difficulty[this.questionForm.get('difficulty').value].minimum;
            this.maximumDifficulty = this.Difficulty[this.questionForm.get('difficulty').value].maximum;
            this.generate();
        }
        else {
            this.utility.touchAllFieldsOfForm(this.questionForm);
        }
    };
    PracticeDefaultComponent.prototype.generate = function () {
        this.first = 0;
        this.last = this.perPageShow;
        var loop = this.questionNumber;
        this.GeneratedQuestions = [];
        this.isQuizFinished = false;
        this.IsQuizRunning = true;
        var changeQuestion = loop / 2;
        for (var i = 0; i < loop; i++) {
            this.GeneratedQuestions.push({
                questionNumber: i + 1,
                question: i >= changeQuestion ? this.makeRandomExpression() : this.makeRandomEquation(),
                isAnswered: false,
                givenAnswer: '',
                isCorrect: false,
                type: i >= changeQuestion ? 'expression' : 'equation'
            });
        }
        this.solvedAnswerCount = 0;
        this.generateAnswerForm();
    };
    PracticeDefaultComponent.prototype.generateAnswerForm = function () {
        for (var i = 0; i < this.questionNumber; i++) {
            this.answer[i] = new _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormControl"]('');
        }
    };
    PracticeDefaultComponent.prototype.makeQuestionForm = function () {
        this.questionForm = this.fb.group({
            questionNumbers: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required],
            difficulty: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_6__["Validators"].required]
        });
    };
    PracticeDefaultComponent.prototype.makeRandomEquation = function () {
        var a, x, b, d, c;
        a = this.practiceService.getRandomIntWithinRange(this.minimumDifficulty, this.maximumDifficulty);
        b = this.practiceService.getRandomIntWithinRange(this.minimumDifficulty, this.maximumDifficulty);
        x = this.practiceService.getRandomIntWithinRange(this.minimumDifficulty, this.maximumDifficulty);
        d = this.practiceService.getRandomIntWithinRange(this.minimumDifficulty, this.maximumDifficulty);
        c = this.practiceService.getCGivenabxd(a, b, x, d);
        var equ = this.practiceService.makeStringGivenABCD(a, b, c, d);
        var answers = this.practiceService.solveEquationConfirmed(equ);
        // answers.push(x);
        var par = "Solve for x for the following equation " + equ;
        var EquObject = {
            parsed: par,
            solution: answers
        };
        return EquObject;
    };
    PracticeDefaultComponent.prototype.makeRandomExpression = function () {
        var a, b, c, d;
        a = this.practiceService.getRandomIntWithinRange(this.minimumDifficulty, this.maximumDifficulty);
        b = this.practiceService.getRandomIntWithinRange(this.minimumDifficulty, this.maximumDifficulty);
        c = this.practiceService.getRandomIntWithinRange(this.minimumDifficulty, this.maximumDifficulty);
        var equ = this.practiceService.makeExpression(a, b, c);
        d = this.practiceService.solveExpression(equ);
        var par = "Solve the following expression " + equ;
        var EquObject = {
            parsed: par,
            solution: d
        };
        return EquObject;
    };
    PracticeDefaultComponent.prototype.makeDifferentiationExpression = function () { };
    PracticeDefaultComponent.prototype.makeIntegrationExpression = function () { };
    PracticeDefaultComponent.prototype.Forward = function () {
        if (this.last < this.questionNumber) {
            this.first += this.perPageShow;
            this.last += this.perPageShow;
        }
    };
    PracticeDefaultComponent.prototype.Back = function () {
        if (this.first > 0) {
            this.first -= this.perPageShow;
            this.last -= this.perPageShow;
        }
    };
    PracticeDefaultComponent.prototype.turnInAnswer = function (number) {
        if (this.answer[number - 1].value != '') {
            this.GeneratedQuestions[number - 1].isAnswered = true;
            this.GeneratedQuestions[number - 1].givenAnswer = this.answer[number - 1].value;
            var ans = this.GeneratedQuestions[number - 1].question.solution;
            var givenAns1 = Number(this.answer[number - 1].value);
            var givenAns2 = String(this.answer[number - 1].value);
            if (ans.includes(givenAns2) || ans.includes(givenAns1)) {
                this.GeneratedQuestions[number - 1].isCorrect = true;
            }
            else {
                this.GeneratedQuestions[number - 1].isCorrect = false;
            }
            this.countGivenAnswer();
        }
        else {
            this.sharedService.openSnackBar({
                data: {
                    message: 'Enter an answer or finish quiz',
                    isAccepted: false
                },
                duration: 3,
                panelClass: ['recovery-snackbar']
            });
        }
    };
    PracticeDefaultComponent.prototype.countGivenAnswer = function () {
        var loop = this.questionNumber;
        var count = 0;
        for (var i = 0; i < loop; i++) {
            if (this.GeneratedQuestions[i].isAnswered == true) {
                count += 1;
            }
        }
        this.solvedAnswerCount = count;
    };
    PracticeDefaultComponent.prototype.finishQuiz = function () {
        var _this = this;
        this.sharedService
            .openConfirmationDialog({
            icon: 'error_outline',
            message: 'Are you sure to finish quiz?',
            noButton: 'Cancel',
            yesButton: 'Confirm'
        })
            .subscribe(function (res) {
            if (res) {
                var loop = _this.questionNumber;
                _this.correctAnswer = 0;
                for (var i = 0; i < loop; i++) {
                    if (_this.GeneratedQuestions[i].isCorrect) {
                        _this.correctAnswer += 1;
                    }
                }
                _this.countGivenAnswer();
                _this.IsQuizRunning = false;
                _this.isQuizFinished = true;
            }
        });
    };
    PracticeDefaultComponent.prototype.selectQuestion = function (num) {
        this.selected = num;
    };
    PracticeDefaultComponent.prototype.onResize = function (event) {
        if (event.target.innerWidth - this.widthMinus > 500) {
            this.canvasEl.width = this.widthMinus;
        }
        else {
            this.canvasEl.width = this.canvasHeight;
        }
        this.canvasEl.height = this.canvasHeight;
    };
    PracticeDefaultComponent.prototype.ngAfterViewInit = function () {
        this.canvasEl = this.canvas.nativeElement;
        this.cx = this.canvasEl.getContext('2d');
        this.canvasEl.width = this.widthMinus;
        this.canvasEl.height = this.canvasHeight;
        this.cx.fillStyle = '#ffffff';
        this.cx.fillRect(0, 0, this.canvasEl.width, this.canvasEl.height);
        this.cx.lineWidth = 5;
        this.cx.lineCap = 'round';
        this.cx.strokeStyle = '#000';
        this.captureEvents(this.canvasEl);
    };
    PracticeDefaultComponent.prototype.captureEvents = function (canvasEl) {
        var _this = this;
        Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(canvasEl, 'mousedown')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["switchMap"])(function (e) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(canvasEl, 'mousemove').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(canvasEl, 'mouseup')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["takeUntil"])(Object(rxjs__WEBPACK_IMPORTED_MODULE_7__["fromEvent"])(canvasEl, 'mouseleave')), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_9__["pairwise"])());
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
            // this.saveImage();
        });
    };
    PracticeDefaultComponent.prototype.drawOnCanvas = function (prevPos, currentPos) {
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
        this.saveImage();
    };
    PracticeDefaultComponent.prototype.changeMode = function (name) {
        this.mode = name;
    };
    PracticeDefaultComponent.prototype.clearCanvas = function () {
        this.cx.clearRect(0, 0, this.cx.canvas.width, this.cx.canvas.height);
        this.cx.fillStyle = '#ffffff';
        this.cx.fillRect(0, 0, this.cx.canvas.width, this.cx.canvas.height); // Clears the canvas
        // this.clearAll();
    };
    PracticeDefaultComponent.prototype.saveImage = function () {
        var _this = this;
        var base64 = this.canvasEl.toDataURL('image/png');
        var base64Data = base64.slice(22);
        var blobfile = this.utilityService.b64toBlob(base64Data, 'image/png');
        var f = new File([blobfile], 'test.jpg', { type: 'image/jpeg', lastModified: Date.now() });
        this.croppedImageFile = f;
        this.mathsolver
            .predictBase64({
            base64: base64Data
        })
            .subscribe(function (res) {
            if (_this.IsQuizRunning) {
                _this.answer[_this.selected - 1].patchValue(res.equation);
            }
            // this.equationForm.patchValue({
            // 	equation: res.equation
            // });
            // this.solve();
            // this.solveMathjs();
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["ViewChild"])('canvas'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_5__["ElementRef"])
    ], PracticeDefaultComponent.prototype, "canvas", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PracticeDefaultComponent.prototype, "width", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], PracticeDefaultComponent.prototype, "height", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["HostListener"])('window:resize', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], PracticeDefaultComponent.prototype, "onResize", null);
    PracticeDefaultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_5__["Component"])({
            selector: 'app-practice-default',
            template: __webpack_require__(/*! ./practice-default.component.html */ "./src/app/mathpractice/components/practice-default/practice-default.component.html"),
            styles: [__webpack_require__(/*! ./practice-default.component.scss */ "./src/app/mathpractice/components/practice-default/practice-default.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"],
            _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_4__["SharedService"],
            _core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"],
            _services_practice_service__WEBPACK_IMPORTED_MODULE_2__["PracticeService"],
            _mathsolver_services_mathsolver_service__WEBPACK_IMPORTED_MODULE_8__["MathsolverService"],
            _core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_3__["UtilityService"]])
    ], PracticeDefaultComponent);
    return PracticeDefaultComponent;
}());



/***/ }),

/***/ "./src/app/mathpractice/mathpractice.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/mathpractice/mathpractice.module.ts ***!
  \*****************************************************/
/*! exports provided: MathpracticeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MathpracticeModule", function() { return MathpracticeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../config/config.module */ "./src/app/config/config.module.ts");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_practice_default_practice_default_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/practice-default/practice-default.component */ "./src/app/mathpractice/components/practice-default/practice-default.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");








var routes = [
    {
        path: '',
        component: _components_practice_default_practice_default_component__WEBPACK_IMPORTED_MODULE_5__["PracticeDefaultComponent"]
    }
];
var MathpracticeModule = /** @class */ (function () {
    function MathpracticeModule() {
    }
    MathpracticeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_3__["NgModule"])({
            declarations: [_components_practice_default_practice_default_component__WEBPACK_IMPORTED_MODULE_5__["PracticeDefaultComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_4__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_2__["CoreModule"],
                _config_config_module__WEBPACK_IMPORTED_MODULE_1__["ConfigModule"]
            ]
        })
    ], MathpracticeModule);
    return MathpracticeModule;
}());



/***/ }),

/***/ "./src/app/mathpractice/services/practice.service.ts":
/*!***********************************************************!*\
  !*** ./src/app/mathpractice/services/practice.service.ts ***!
  \***********************************************************/
/*! exports provided: PracticeService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PracticeService", function() { return PracticeService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _mathsolver_services_mathsolver_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../mathsolver/services/mathsolver.service */ "./src/app/mathsolver/services/mathsolver.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");



var PracticeService = /** @class */ (function () {
    function PracticeService(mathSolver) {
        this.mathSolver = mathSolver;
        this.mathsteps = __webpack_require__(/*! mathsteps */ "./node_modules/mathsteps/index.js");
        this.algebra = __webpack_require__(/*! algebra.js */ "./node_modules/algebra.js/algebra.js");
    }
    PracticeService.prototype.getRandomIntWithinRange = function (min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        var final = Math.floor(Math.random() * (max - min)) + min;
        if (final == 0) {
            return final + 1;
        }
        else {
            return final; //The maximum is exclusive and the minimum is inclusive
        }
    };
    PracticeService.prototype.makeStringGivenABCD = function (a, b, c, d) {
        var finalEquation = "";
        var dif = c - d;
        if (a == 1) {
            finalEquation += "x^2";
        }
        else if (a == -1) {
            finalEquation += "-x^2";
        }
        else {
            finalEquation += a + "x^2";
        }
        if (b > 0) {
            if (b == 1) {
                finalEquation += "+x";
            }
            else {
                finalEquation += "+" + b + "x";
            }
        }
        if (b < 0) {
            if (b == -1) {
                finalEquation += "-x";
            }
            else {
                finalEquation += b + "x";
            }
            // finalEquation += `${b}x`;
        }
        if (dif > 0) {
            finalEquation += "+" + dif;
        }
        if (dif < 0) {
            finalEquation += "" + dif;
        }
        finalEquation += '=0';
        return finalEquation;
    };
    PracticeService.prototype.getCGivenabxd = function (a, b, x, d) {
        var c;
        c = d - (a * Math.pow(x, 2) + b * x);
        return c;
    };
    PracticeService.prototype.solveEquationConfirmed = function (parsed) {
        parsed = this.algebra.parse(parsed);
        var X = parsed.solveFor('x');
        var answer = [];
        if (X && X[0]) {
            answer.push(X[0].toString());
        }
        if (X && X[1]) {
            answer.push(X[1].toString());
        }
        return answer;
    };
    PracticeService.prototype.makeExpression = function (a, b, c) {
        var exp = ['+', '-', '*'];
        if (a < 0) {
            a = (-1) * a;
        }
        if (b < 0) {
            b = (-1) * b;
        }
        if (c < 0) {
            c = (-1) * c;
        }
        var i = this.getRandomIntWithinRange(0, 3);
        var j = this.getRandomIntWithinRange(0, 3);
        return String("" + a + exp[i] + b + exp[j] + c);
    };
    PracticeService.prototype.solveExpression = function (equ) {
        return this.mathSolver.solve(equ);
    };
    PracticeService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_mathsolver_services_mathsolver_service__WEBPACK_IMPORTED_MODULE_1__["MathsolverService"]])
    ], PracticeService);
    return PracticeService;
}());



/***/ })

}]);
//# sourceMappingURL=mathpractice-mathpractice-module.js.map