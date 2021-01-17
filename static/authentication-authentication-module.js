(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["authentication-authentication-module"],{

/***/ "./src/app/authentication/authentication.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/authentication/authentication.module.ts ***!
  \*********************************************************/
/*! exports provided: AuthenticationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationModule", function() { return AuthenticationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/sign-in/sign-in.component */ "./src/app/authentication/components/sign-in/sign-in.component.ts");
/* harmony import */ var _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/sign-up/sign-up.component */ "./src/app/authentication/components/sign-up/sign-up.component.ts");
/* harmony import */ var _components_account_recovery_account_recovery_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/account-recovery/account-recovery.component */ "./src/app/authentication/components/account-recovery/account-recovery.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");






// import { SignOutComponent } from './components/sign-out/sign-out.component';


var routes = [
    {
        path: '',
        redirectTo: 'sign-in'
    },
    {
        path: 'sign-in',
        component: _components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"]
    },
    {
        path: 'sign-up',
        component: _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"]
    },
    {
        path: 'account-recovery',
        component: _components_account_recovery_account_recovery_component__WEBPACK_IMPORTED_MODULE_5__["AccountRecoveryComponent"]
    },
];
var AuthenticationModule = /** @class */ (function () {
    function AuthenticationModule() {
    }
    AuthenticationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_sign_in_sign_in_component__WEBPACK_IMPORTED_MODULE_3__["SignInComponent"], _components_sign_up_sign_up_component__WEBPACK_IMPORTED_MODULE_4__["SignUpComponent"], _components_account_recovery_account_recovery_component__WEBPACK_IMPORTED_MODULE_5__["AccountRecoveryComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(routes),
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_7__["SharedModule"]
            ]
        })
    ], AuthenticationModule);
    return AuthenticationModule;
}());



/***/ }),

/***/ "./src/app/authentication/components/account-recovery/account-recovery.component.html":
/*!********************************************************************************************!*\
  !*** ./src/app/authentication/components/account-recovery/account-recovery.component.html ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<form [formGroup]=\"recoveryForm\">\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center start\" fxLayoutGap=\"12px\" class=\"py-124\">\r\n    <div fxLayout=\"column\" fxLayoutAlign=\"center center\" class=\"margin-auto\">\r\n    <div  class=\"pb-24 header-1\">\r\n      Welcome to CrackMyKwery\r\n    </div>\r\n    <hr><h3 style=\"color: dodgerblue;font-weight: bolder; ;font-size: large; display:flex; align-items:center; justify-content: center; \">Created with ❤️ by Sudhanshu Dekate</h3><hr>\r\n    <div  class=\"pb-24 header-2\">\r\n      Account Recovery\r\n    </div>\r\n  </div>\r\n    <div fxLayout=\"column\" class=\"margin-auto w-300\" fxLayoutGap=\"12px\">\r\n        <mat-progress-bar *ngIf=\"isLoading\" fxLayout=\"row\" fxLayoutAlign=\"center center\" mode=\"indeterminate\" color='primary' class=\"m-0\"></mat-progress-bar>\r\n\r\n      <mat-card class=\"p-36\" [class.mat-elevation-z4]=\"true\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"16px\">\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"12px\">\r\n            <div fxLayout=\"row\" fxFlexAlign=\"center\" class=\" header-4\">\r\n              Type in your email to change password.\r\n            </div>\r\n            <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"12px\">\r\n              <div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"mat-icon-for-input\">\r\n                <i class=\"material-icons-outlined\">\r\n                  email\r\n                </i>\r\n              </div>\r\n              <div>\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Email</mat-label>\r\n                  <input type=\"email\" matInput placeholder=\"Type in Email\" formControlName=\"email\">\r\n                  <mat-error *ngIf=\"recoveryForm.get('email').touched && recoveryForm.get('email').invalid\">{{emailError()}}</mat-error>\r\n                  <!-- <mat-icon matPrefix>sentiment_very_satisfied</mat-icon> -->\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"16px\">\r\n            <button type=\"submit\" (click)='onSubmit()' mat-raised-button color=\"primary\" class=\"w-240 h-40\">Reset my\r\n              password</button>\r\n            <!-- <button (click)='routeToSignup()' mat-stroked-button color=\"primary\" class=\"w-240 h-40\">Create New Account</button> -->\r\n\r\n          </div>\r\n        </div>\r\n      </mat-card>\r\n      <div fxFlex='15' fxLayout=\"row\" fxFlexAlign=\"start center\">\r\n          <div>\r\n            <a (click)='routeToSignin()' class=\"cursor-pointer secondary-text-color\"> &lt; Back to Login</a>\r\n          </div>\r\n        </div>\r\n    </div>\r\n    \r\n\r\n  </div>\r\n\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/authentication/components/account-recovery/account-recovery.component.scss":
/*!********************************************************************************************!*\
  !*** ./src/app/authentication/components/account-recovery/account-recovery.component.scss ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvYWNjb3VudC1yZWNvdmVyeS9hY2NvdW50LXJlY292ZXJ5LmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/components/account-recovery/account-recovery.component.ts":
/*!******************************************************************************************!*\
  !*** ./src/app/authentication/components/account-recovery/account-recovery.component.ts ***!
  \******************************************************************************************/
/*! exports provided: AccountRecoveryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccountRecoveryComponent", function() { return AccountRecoveryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/authentication/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/constants/defaultConstants */ "./src/app/config/constants/defaultConstants.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/utility-service/utility.service */ "./src/app/core/utility-service/utility.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);










var AccountRecoveryComponent = /** @class */ (function () {
    function AccountRecoveryComponent(authenticationservice, fb, router, sharedService, util) {
        this.authenticationservice = authenticationservice;
        this.fb = fb;
        this.router = router;
        this.sharedService = sharedService;
        this.util = util;
        this.isLoading = false;
    }
    AccountRecoveryComponent.prototype.ngOnInit = function () {
        this.makeRecoveryForm();
    };
    AccountRecoveryComponent.prototype.makeRecoveryForm = function () {
        this.recoveryForm = this.fb.group({
            email: ['']
        });
    };
    AccountRecoveryComponent.prototype.sendPasswordResetEmail = function (user) {
        var _this = this;
        this.authenticationservice.sendPasswordResetEmail(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (res) {
            // console.log(res);
            if (res && res.code) {
                _this.validateForm(res.code);
            }
            else {
                _this.openSnackBar();
            }
            _this.isLoading = false;
        });
    };
    AccountRecoveryComponent.prototype.validateForm = function (errorCode) {
        this.updateform();
        var errobj = {};
        errobj[errorCode] = true;
        this.recoveryForm.controls.email.setErrors(errobj);
    };
    AccountRecoveryComponent.prototype.updateform = function () {
        var _this = this;
        var controlsvalues = this.util.getFormControlsValueFromFormGroup(this.recoveryForm);
        lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](controlsvalues, function (value) {
            _this.recoveryForm.get(value).markAsTouched();
        });
    };
    AccountRecoveryComponent.prototype.openSnackBar = function () {
        this.sharedService.openSnackBar({
            data: { message: _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_6__["defaultConst"].emailsent, isAccepted: true },
            duration: 2,
            panelClass: ['recovery-snackbar'],
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    };
    AccountRecoveryComponent.prototype.onSubmit = function () {
        if (this.recoveryForm.valid) {
            this.isLoading = true;
            this.user = {
                email: this.recoveryForm.value.email,
                password: ''
            };
            this.sendPasswordResetEmail(this.user);
        }
    };
    AccountRecoveryComponent.prototype.routeToSignin = function () {
        this.router.navigate([_config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_6__["urlPaths"].Authentication.Signin.url]);
    };
    AccountRecoveryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-account-recovery',
            template: __webpack_require__(/*! ./account-recovery.component.html */ "./src/app/authentication/components/account-recovery/account-recovery.component.html"),
            styles: [__webpack_require__(/*! ./account-recovery.component.scss */ "./src/app/authentication/components/account-recovery/account-recovery.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"],
            _core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"]])
    ], AccountRecoveryComponent);
    return AccountRecoveryComponent;
}());



/***/ }),

/***/ "./src/app/authentication/components/sign-in/sign-in.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/components/sign-in/sign-in.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<form [formGroup]=\"signinform\">\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"pt-124 pb-48 header-1 \">\r\n    Welcome to CrackMyKwery\r\n  </div>\r\n  <hr><h3 style=\"color: dodgerblue;font-weight: bolder; ;font-size: large; display:flex; align-items:center; justify-content: center; \">Created with ❤️ by Sudhanshu Dekate</h3><hr>\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center start\" fxLayoutGap=\"12px\" class=\"margin-auto w-312 pb-124\">\r\n      <mat-progress-bar *ngIf=\"isLoading\" fxLayout=\"row\" fxLayoutAlign=\"center center\" mode=\"indeterminate\" color='primary' class=\"m-0\"></mat-progress-bar>\r\n\r\n    <mat-card class=\"p-36\" [class.mat-elevation-z4]=\"true\">\r\n        \r\n      <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"32px\">\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"start center\" fxLayoutGap=\"12px\">\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"12px\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"mat-icon-for-input\">\r\n              <i class=\"material-icons-outlined\">\r\n                email\r\n              </i>\r\n            </div>\r\n            <div>\r\n              <mat-form-field appearance=\"outline\">\r\n                <mat-label>Email</mat-label>\r\n                <input type=\"email\" matInput placeholder=\"Type in Email\" formControlName=\"email\">\r\n                <mat-error *ngIf=\"signinform.get('email').touched && signinform.get('email').invalid\">{{emailError()}}</mat-error>\r\n                \r\n                <!-- <mat-error *ngIf=\"signinform.get('email').touched && signinform.get('email').invalid\">{{signinform.get('email').errors|json}}</mat-error> -->\r\n\r\n                <!-- <mat-error *ngIf=\"true\">222</mat-error> -->\r\n                <!-- <mat-icon matPrefix>sentiment_very_satisfied</mat-icon> -->\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"12px\">\r\n            <div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"mat-icon-for-input\">\r\n              <i class=\"material-icons-outlined\">\r\n                lock\r\n              </i>\r\n            </div>\r\n            <div>\r\n              <mat-form-field appearance=\"outline\">\r\n                <mat-label>Password</mat-label>\r\n                <input type=\"password\" matInput placeholder=\"Type in passoword \" formControlName=\"password\">\r\n                <mat-error *ngIf=\"signinform.get('password').touched && signinform.get('password').invalid\">{{passwordError()}}</mat-error>\r\n\r\n                <!-- <mat-icon matPrefix>sentiment_very_satisfied</mat-icon> -->\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"16px\">\r\n          <button type=\"submit\" (click)='onSubmit()' mat-raised-button color=\"primary\" class=\"w-240 h-40\">Login</button>\r\n          <button (click)='routeToSignup()' mat-stroked-button color=\"primary\" class=\"w-240 h-40\">Create New\r\n            Account</button>\r\n\r\n        </div>\r\n      </div>\r\n    </mat-card>\r\n    <div fxFlex='15' fxLayout=\"row\" fxFlexAlign=\"start center\" fxLayoutGap=\"110px\">\r\n      <div>\r\n        <a (click)='routeToAccountRecovery()' class=\"cursor-pointer secondary-text-color\">Forgot Password? </a>\r\n      </div>\r\n      <div>\r\n        <a (click)='routeToHome()' class=\"cursor-pointer secondary-text-color\">Back to Home</a>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n</form>"

/***/ }),

/***/ "./src/app/authentication/components/sign-in/sign-in.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/components/sign-in/sign-in.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2F1dGhlbnRpY2F0aW9uL2NvbXBvbmVudHMvc2lnbi1pbi9zaWduLWluLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/authentication/components/sign-in/sign-in.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/authentication/components/sign-in/sign-in.component.ts ***!
  \************************************************************************/
/*! exports provided: SignInComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignInComponent", function() { return SignInComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/authentication/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../config/constants/defaultConstants */ "./src/app/config/constants/defaultConstants.ts");
/* harmony import */ var _core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../../core/utility-service/utility.service */ "./src/app/core/utility-service/utility.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _root_services_root_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../root/services/root.service */ "./src/app/root/services/root.service.ts");











var SignInComponent = /** @class */ (function () {
    function SignInComponent(authenticationservice, fb, router, util, root, sharedService) {
        this.authenticationservice = authenticationservice;
        this.fb = fb;
        this.router = router;
        this.util = util;
        this.root = root;
        this.sharedService = sharedService;
        this.isLoading = false;
    }
    SignInComponent.prototype.ngOnInit = function () {
        this.makeSignInForm();
    };
    SignInComponent.prototype.makeSignInForm = function () {
        this.signinform = this.fb.group({
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].email]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
        });
    };
    SignInComponent.prototype.onSubmit = function () {
        if (this.signinform.valid) {
            this.isLoading = true;
            this.userInformation = {
                email: this.signinform.value.email,
                password: this.signinform.value.password
            };
            // setTimeout(()=>{
            // 	this.signinUser(this.userInformation);
            // }, 4000);
            this.signinUser(this.userInformation);
        }
    };
    SignInComponent.prototype.signinUser = function (user) {
        var _this = this;
        this.authenticationservice.signin(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (res) {
            if (res && res.code) {
                // console.log(res.code);
                _this.validateSignIn(res.code);
                _this.isLoading = false;
            }
            else {
                _this.router.navigate([_config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_7__["urlPaths"].MathSolver.upload.url]);
                _this.isLoading = false;
                // console.log(this.authenticationservice.getCurrentUser().email);
                // location.reload();
            }
        }, function (err) {
            _this.openErrorBar('Try Again');
        });
    };
    SignInComponent.prototype.routeToSignup = function () {
        this.router.navigate([_config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_7__["urlPaths"].Authentication.Signup.url]);
    };
    SignInComponent.prototype.routeToAccountRecovery = function () {
        this.router.navigate([_config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_7__["urlPaths"].Authentication.AccountRecovery.url]);
    };
    SignInComponent.prototype.routeToHome = function () {
        this.router.navigate([_config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_7__["urlPaths"].MathSolver.upload.url]);
    };
    SignInComponent.prototype.validateSignIn = function (errorCode) {
        this.updateform();
        var errobj = {};
        errobj[errorCode] = true;
        if (errorCode == _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_7__["signinErrorCode"]["Wrong password"].code) {
            this.signinform.controls.password.setErrors(errobj);
        }
        else {
            this.signinform.controls.email.setErrors(errobj);
        }
        this.openErrorBar(String(errorCode));
    };
    SignInComponent.prototype.updateform = function () {
        var _this = this;
        var controlsvalues = this.util.getFormControlsValueFromFormGroup(this.signinform);
        lodash__WEBPACK_IMPORTED_MODULE_9__["forEach"](controlsvalues, function (value) {
            _this.signinform.get(value).markAsTouched();
        });
    };
    SignInComponent.prototype.openErrorBar = function (errorMessage) {
        this.sharedService.openSnackBar({
            data: { message: errorMessage, isAccepted: false },
            duration: 2,
            panelClass: ['default-snackbar'],
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    };
    SignInComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-sign-in',
            template: __webpack_require__(/*! ./sign-in.component.html */ "./src/app/authentication/components/sign-in/sign-in.component.html"),
            styles: [__webpack_require__(/*! ./sign-in.component.scss */ "./src/app/authentication/components/sign-in/sign-in.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_3__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_8__["UtilityService"],
            _root_services_root_service__WEBPACK_IMPORTED_MODULE_10__["RootService"],
            _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_1__["SharedService"]])
    ], SignInComponent);
    return SignInComponent;
}());



/***/ }),

/***/ "./src/app/authentication/components/sign-up/sign-up.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/components/sign-up/sign-up.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='ml-25-p mr-25-p pt-124 pb-64'>\r\n\r\n  <div fxLayout=\"column\" fxLayoutAlign=\"center center\" fxLayoutGap=\"16px\">\r\n    <div class='header-1'>Welcome to CrackMyKwery</div>\r\n    <div class='header-2'>Create a new Account in CrackMyKwery</div>\r\n  </div>\r\n\r\n  <form [formGroup]=\"signupform\" class=\"mt-36\">\r\n    <mat-progress-bar *ngIf=\"isLoading\" fxLayout=\"row\" fxLayoutAlign=\"center center\" mode=\"indeterminate\"\r\n      color='primary' class=\"m-0 \"></mat-progress-bar>\r\n\r\n    <div>\r\n\r\n      <mat-card class=\"p-64 mb-36\" [class.mat-elevation-z10]=\"true\">\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center start\" fxLayoutGap=\"16px\">\r\n          <div class='header-3'>Account Information</div>\r\n          <mat-divider [inset]=\"true\"></mat-divider>\r\n        </div>\r\n\r\n        <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutAlign=\"start center\" fxLayoutAlign.lt-lg=\"center start\"\r\n          class=\"my-40\" fxLayoutGap=\"12px\">\r\n          <div fxLayout=\"column\" fxFlex='50' fxLayoutAlign=\"center\" fxLayoutGap=\"12px\">\r\n            <div>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"12px\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"mat-icon-for-input\">\r\n                  <i class=\"material-icons-outlined \">\r\n                    email\r\n\r\n                  </i>\r\n                </div>\r\n                <div>\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Email</mat-label>\r\n                    <input type=\"email\" matInput placeholder=\"Type in Email\" formControlName=\"email\">\r\n                    <mat-error *ngIf=\"signupform.get('email').touched && signupform.get('email').invalid\">\r\n                      {{errormessages.invalid_email}}</mat-error>\r\n\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"12px\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"mat-icon-for-input\">\r\n                  <i class=\"material-icons-outlined \">\r\n                    perm_identity\r\n                  </i>\r\n                </div>\r\n                <div>\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Display Name</mat-label>\r\n                    <input type=\"text\" matInput placeholder=\"Type in name \" formControlName=\"name\">\r\n                    <mat-error *ngIf=\"signupform.get('name').touched && signupform.get('name').invalid\">\r\n                      {{errormessages.name}}</mat-error>\r\n\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div fxLayout=\"column\" fxFlex='50' fxLayoutAlign=\"center\" fxLayoutGap=\"12px\">\r\n            <div>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"12px\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"mat-icon-for-input\">\r\n                  <i class=\"material-icons-outlined \">\r\n                    lock\r\n                  </i>\r\n                </div>\r\n                <div>\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Password</mat-label>\r\n                    <input type=\"password\" matInput placeholder=\"Type in passoword \" formControlName=\"password\"\r\n                      [errorStateMatcher]=\"matcher\">\r\n                    <mat-error\r\n                      *ngIf=\"signupform.get('password').touched && signupform.get('password').invalid  && !signupform.hasError('notMatching')\">\r\n                      {{errormessages.weak_password}}</mat-error>\r\n                    <mat-error *ngIf=\"signupform.get('password').touched && signupform.hasError('notMatching') \">\r\n                      {{errormessages.password_mismatch}}</mat-error>\r\n\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div>\r\n              <div fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"12px\">\r\n                <div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"mat-icon-for-input\">\r\n                  <i class=\"material-icons-outlined \">\r\n                    vpn_key\r\n                  </i>\r\n                </div>\r\n                <div>\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Confirm Password</mat-label>\r\n                    <input type=\"password\" matInput placeholder=\"Type in passoword again \"\r\n                      formControlName=\"confirmpassword\" [errorStateMatcher]=\"matcher\">\r\n                    <mat-error\r\n                      *ngIf=\"signupform.get('confirmpassword').touched && signupform.get('confirmpassword').invalid && !signupform.hasError('notMatching')\">\r\n                      {{errormessages.weak_password}}</mat-error>\r\n                    <mat-error *ngIf=\"signupform.get('confirmpassword').touched && signupform.hasError('notMatching') \">\r\n                      {{errormessages.password_mismatch}}</mat-error>\r\n\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- <div fxLayout=\"column\" fxLayoutAlign=\"center start\" fxLayoutGap=\"16px\">\r\n          <div class='header-3'>Personal Information</div>\r\n          <mat-divider [inset]=\"true\"></mat-divider>\r\n        </div> -->\r\n\r\n        <!-- <div fxLayout=\"column\" fxLayoutAlign=\" space-around center \" fxLayoutGap=\"12px\" class=\"my-40\">\r\n          <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutAlign=\"start center\" fxLayoutAlign.lt-lg=\"center start\"\r\n            fxLayoutGap=\"12px\">\r\n\r\n            <div fxLayout=\"row\" fxFlex='50' fxLayoutAlign=\"start center\" fxLayoutGap=\"12px\">\r\n              <div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"mat-icon-for-input\">\r\n                <i class=\"material-icons-outlined \">\r\n                  phone\r\n                </i>\r\n              </div>\r\n              <div class=\"mat-form-field-wrapper \">\r\n                <international-phone-number formControlName=\"phoneNumber\" placeholder=\"Enter phone number\"\r\n                  [defaultCountry]=defaultCountryOfPhoneNumber>\r\n                </international-phone-number>\r\n                <mat-error *ngIf=\"signupform.get('phoneNumber').touched && signupform.get('phoneNumber').invalid\">{{errormessages.phonenumber_invalid}}</mat-error>\r\n\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div fxLayout=\"row\" fxFlex='50' fxLayoutAlign=\"start center\" fxLayoutGap=\"12px\">\r\n              <div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"mat-icon-for-input\">\r\n                <i class=\"material-icons-outlined \">\r\n                  security\r\n                </i>\r\n              </div>\r\n              <div>\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>User Type</mat-label>\r\n                  <mat-select formControlName='role' multiple disableOptionCentering>\r\n                    <mat-option *ngFor='let role of roles | keyvalue' [value]='role.key'>{{role.value}}</mat-option>\r\n                  </mat-select>\r\n                  <mat-error *ngIf=\"signupform.get('role').touched && signupform.get('role').invalid\">\r\n                    {{errormessages.roles_required}}</mat-error>\r\n\r\n                </mat-form-field>\r\n\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n          <div fxLayout=\"row\" fxLayout.lt-lg=\"column\" fxLayoutAlign=\"start center\" fxLayoutAlign.lt-lg=\"center start\"\r\n            fxLayoutGap=\"12px\">\r\n\r\n            <div fxLayout=\"row\" fxFlex='50' fxLayoutAlign=\"start center\" fxLayoutGap=\"12px\">\r\n              <div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"mat-icon-for-input\">\r\n                <i class=\"material-icons-outlined \">\r\n                  home\r\n                </i>\r\n              </div>\r\n              <div>\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Home Address</mat-label>\r\n                  <input type=\"text\" matInput placeholder=\"Type in home address \" formControlName=\"homeAddress\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <div fxLayout=\"row\" fxFlex='50' fxLayoutAlign=\"start center\" fxLayoutGap=\"12px\">\r\n              <div fxLayout=\"column\" fxLayoutAlign=\"center\" class=\"mat-icon-for-input\">\r\n                <i class=\"material-icons-outlined \">\r\n                  store\r\n                </i>\r\n              </div>\r\n              <div>\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Shop Address</mat-label>\r\n                  <input type=\"text\" matInput placeholder=\"Type in Shop Address \" formControlName=\"shopAddress\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div> -->\r\n\r\n        <div fxLayout=\"column\" fxLayoutAlign=\"center end\" fxLayoutAlign.lt-lg=\"center center\" fxLayoutGap=\"16px\">\r\n          <div>\r\n            <button type=\"submit\" (click)='onSubmit()' mat-raised-button color=\"primary\" class=\"w-240 h-40\">Create\r\n              Account</button>\r\n          </div>\r\n          <div>\r\n            <a (click)='routeToSignin()' class=\"cursor-pointer secondary-text-color\">Already have an Account?</a>\r\n          </div>\r\n        </div>\r\n\r\n      </mat-card>\r\n    </div>\r\n\r\n  </form>\r\n  <hr><h3 style=\"color: dodgerblue;font-weight: bolder; ;font-size: large; display:flex; align-items:center; justify-content: center; \">Created with ❤️ by Sudhanshu Dekate</h3><hr>\r\n</div>"

/***/ }),

/***/ "./src/app/authentication/components/sign-up/sign-up.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/authentication/components/sign-up/sign-up.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep .mat-select-panel {\n  margin-left: 30px !important;\n  margin-top: 16px !important; }\n\n:host ::ng-deep international-phone-number .input-group {\n  border: 1px solid #ced4da;\n  border-radius: 6px;\n  height: 100%;\n  max-width: 200px;\n  min-width: 200px; }\n\n:host ::ng-deep international-phone-number .input-group .input-group-addon .dropdown {\n  height: 100%; }\n\n:host ::ng-deep international-phone-number .input-group .input-group-addon .dropdown .dropbtn {\n  padding-top: 12px;\n  padding-bottom: 12px;\n  padding-left: 12px;\n  padding-right: 0px;\n  height: 100%; }\n\n:host ::ng-deep international-phone-number .input-group .input-group-addon .dropdown .dropbtn .arrow-down {\n  margin: 8px; }\n\n:host ::ng-deep international-phone-number .form-control {\n  border: none;\n  padding-left: 8px;\n  font-size: 14px; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9zaWduLXVwL0M6XFxVc2Vyc1xcU3VkaGFuc2h1XFwudnNjb2RlXFxQUk9KRUNUU1xcTUxcXGFuZ3VsYXItZmxhc2tcXGFuZ3VsYXIvc3JjXFxhcHBcXGF1dGhlbnRpY2F0aW9uXFxjb21wb25lbnRzXFxzaWduLXVwXFxzaWduLXVwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksNEJBQTJCO0VBQzNCLDJCQUEwQixFQUFBOztBQUk5QjtFQUdZLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsWUFBWTtFQUNaLGdCQUFpQjtFQUVqQixnQkFBaUIsRUFBQTs7QUFSN0I7RUFXWSxZQUFZLEVBQUE7O0FBWHhCO0VBY1ksaUJBQWlCO0VBQ2pCLG9CQUFvQjtFQUNwQixrQkFBa0I7RUFDbEIsa0JBQWtCO0VBQ2xCLFlBQVksRUFBQTs7QUFsQnhCO0VBcUJZLFdBQVcsRUFBQTs7QUFyQnZCO0VBd0JRLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsZUFBYyxFQUFBIiwiZmlsZSI6InNyYy9hcHAvYXV0aGVudGljYXRpb24vY29tcG9uZW50cy9zaWduLXVwL3NpZ24tdXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1zZWxlY3QtcGFuZWx7XHJcbiAgICBtYXJnaW4tbGVmdDozMHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tdG9wOjE2cHggIWltcG9ydGFudDtcclxufVxyXG5cclxuXHJcbjpob3N0e1xyXG4gICAgOjpuZy1kZWVwIGludGVybmF0aW9uYWwtcGhvbmUtbnVtYmVyIHtcclxuICAgICAgICAuaW5wdXQtZ3JvdXAge1xyXG4gICAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjY2VkNGRhO1xyXG4gICAgICAgICAgICBib3JkZXItcmFkaXVzOiA2cHg7XHJcbiAgICAgICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAyMDBweCA7XHJcbiAgICAgICAgICAgIC8vIG1heC13aWR0aDogMTAwJSAhaW1wb3J0YW50O1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDIwMHB4IDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLmlucHV0LWdyb3VwIC5pbnB1dC1ncm91cC1hZGRvbiAuZHJvcGRvd24ge1xyXG4gICAgICAgICAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC5pbnB1dC1ncm91cCAuaW5wdXQtZ3JvdXAtYWRkb24gLmRyb3Bkb3duIC5kcm9wYnRuIHtcclxuICAgICAgICAgICAgcGFkZGluZy10b3A6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctYm90dG9tOiAxMnB4O1xyXG4gICAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDEycHg7XHJcbiAgICAgICAgICAgIHBhZGRpbmctcmlnaHQ6IDBweDtcclxuICAgICAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAuaW5wdXQtZ3JvdXAgLmlucHV0LWdyb3VwLWFkZG9uIC5kcm9wZG93biAuZHJvcGJ0biAuYXJyb3ctZG93biB7XHJcbiAgICAgICAgICAgIG1hcmdpbjogOHB4O1xyXG4gICAgICAgIH1cclxuICAgICAgICAuZm9ybS1jb250cm9sIHtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgcGFkZGluZy1sZWZ0OiA4cHg7XHJcbiAgICAgICAgZm9udC1zaXplOjE0cHg7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdfQ== */"

/***/ }),

/***/ "./src/app/authentication/components/sign-up/sign-up.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/authentication/components/sign-up/sign-up.component.ts ***!
  \************************************************************************/
/*! exports provided: SignUpComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignUpComponent", function() { return SignUpComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../services/authentication.service */ "./src/app/authentication/services/authentication.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../../config/constants/defaultConstants */ "./src/app/config/constants/defaultConstants.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../../core/utility-service/utility.service */ "./src/app/core/utility-service/utility.service.ts");











var SignUpComponent = /** @class */ (function () {
    function SignUpComponent(authenticationService, fb, router, sharedService) {
        this.authenticationService = authenticationService;
        this.fb = fb;
        this.router = router;
        this.sharedService = sharedService;
        this.errormessages = _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_6__["error_messages"];
        this.verificationEmailsent = _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_6__["defaultConst"].checkEmail;
        this.isLoading = false;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_9__["Subject"]();
    }
    SignUpComponent.prototype.ngOnInit = function () {
        this.makeSignUpForm();
        this.setCustomValidation();
    };
    SignUpComponent.prototype.makeSignUpForm = function () {
        this.signupform = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_6__["passwordRegex"])]],
            confirmpassword: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern(_config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_6__["passwordRegex"])]],
        });
    };
    SignUpComponent.prototype.passwordMatchValidator = function (group) {
        if (group) {
            if (group.get('password').value !== group.get('confirmpassword').value) {
                return { notMatching: true };
            }
        }
        return null;
    };
    SignUpComponent.prototype.setCustomValidation = function () {
        this.signupform.setValidators(this.passwordMatchValidator);
        this.signupform.updateValueAndValidity();
        this.matcher = new _core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_10__["ErrorStateMatcherForsignUppage"]();
    };
    SignUpComponent.prototype.onSubmit = function () {
        if (this.signupform.valid) {
            this.isLoading = true;
            this.userInformation = {
                email: this.signupform.value.email,
                password: this.signupform.value.password,
                displayName: this.signupform.value.name,
                metaData: {
                    name: this.signupform.value.name,
                    email: this.signupform.value.email,
                }
            };
            this.registerUser(this.userInformation);
        }
        else {
            this.authenticationService.touchAllfields(this.signupform);
        }
    };
    SignUpComponent.prototype.registerUser = function (user) {
        var _this = this;
        this.authenticationService.signUp(user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (res) {
            if (res && res.code) {
                lodash__WEBPACK_IMPORTED_MODULE_8__["forEach"](_config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_6__["signupErrorCodes"], function (value, key) {
                    if (res.code == value.code) {
                        _this.openErrorBar(value.message);
                    }
                });
            }
            else {
                _this.openVerificationBar();
                _this.routeToHome();
            }
            _this.isLoading = false;
        });
    };
    SignUpComponent.prototype.openVerificationBar = function () {
        this.sharedService.openSnackBar({
            data: { message: this.verificationEmailsent, isAccepted: true },
            duration: 6,
            panelClass: ['default-snackbar'],
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    };
    SignUpComponent.prototype.openErrorBar = function (errorMessage) {
        this.sharedService.openSnackBar({
            data: { message: errorMessage, isAccepted: false },
            duration: 2,
            panelClass: ['default-snackbar'],
            horizontalPosition: 'right',
            verticalPosition: 'top'
        });
    };
    SignUpComponent.prototype.routeToSignin = function () {
        this.router.navigate([_config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_6__["urlPaths"].Authentication.Signin.url]);
    };
    SignUpComponent.prototype.routeToHome = function () {
        this.router.navigate([_config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_6__["urlPaths"].Authentication.Signin.url]);
    };
    SignUpComponent.prototype.ngOnDestroy = function () {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
        this._unsubscribeAll.unsubscribe();
    };
    SignUpComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sign-up',
            template: __webpack_require__(/*! ./sign-up.component.html */ "./src/app/authentication/components/sign-up/sign-up.component.html"),
            styles: [__webpack_require__(/*! ./sign-up.component.scss */ "./src/app/authentication/components/sign-up/sign-up.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
            _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"],
            _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_7__["SharedService"]])
    ], SignUpComponent);
    return SignUpComponent;
}());



/***/ })

}]);
//# sourceMappingURL=authentication-authentication-module.js.map