(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../authentication/authentication.module": [
		"./src/app/authentication/authentication.module.ts",
		"authentication-authentication-module"
	],
	"../history/history.module": [
		"./src/app/history/history.module.ts",
		"history-history-module"
	],
	"../mathpractice/mathpractice.module": [
		"./src/app/mathpractice/mathpractice.module.ts",
		"default~mathpractice-mathpractice-module~mathsolver-mathsolver-module",
		"mathpractice-mathpractice-module"
	],
	"../mathsolver/mathsolver.module": [
		"./src/app/mathsolver/mathsolver.module.ts",
		"default~mathpractice-mathpractice-module~mathsolver-mathsolver-module",
		"mathsolver-mathsolver-module"
	],
	"../tutorial/tutorial.module": [
		"./src/app/tutorial/tutorial.module.ts",
		"tutorial-tutorial-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/authentication/services/authentication.service.ts":
/*!*******************************************************************!*\
  !*** ./src/app/authentication/services/authentication.service.ts ***!
  \*******************************************************************/
/*! exports provided: AuthenticationService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthenticationService", function() { return AuthenticationService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _config_enums_default_enum__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../config/enums/default.enum */ "./src/app/config/enums/default.enum.ts");
/* harmony import */ var src_app_core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/core/utility-service/utility.service */ "./src/app/core/utility-service/utility.service.ts");







var AuthenticationService = /** @class */ (function () {
    function AuthenticationService(angularfireauth, angularfirestore, util) {
        this.angularfireauth = angularfireauth;
        this.angularfirestore = angularfirestore;
        this.util = util;
    }
    AuthenticationService.prototype.signUp = function (user) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.angularfireauth.auth
                .createUserWithEmailAndPassword(user.email, user.password)
                .then(function (accepted) {
                user.metaData.uid = accepted.user.uid;
                _this.createCustomUser(user.metaData);
                _this.sendEmailVerification();
                observer.next(accepted);
            })
                .catch(function (err) {
                observer.next(err);
            });
        });
    };
    AuthenticationService.prototype.sendEmailVerification = function () {
        this.angularfireauth.auth.currentUser.sendEmailVerification();
    };
    AuthenticationService.prototype.signOut = function () {
        this.angularfireauth.auth.signOut();
    };
    AuthenticationService.prototype.createCustomUser = function (user) {
        var personCollection = this.angularfirestore.collection(_config_enums_default_enum__WEBPACK_IMPORTED_MODULE_5__["Entities"].Person);
        personCollection.doc(user.uid).set(user);
    };
    AuthenticationService.prototype.signin = function (user) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.angularfireauth.auth
                .signInWithEmailAndPassword(user.email, user.password)
                .then(function (acc) {
                observer.next(acc);
            })
                .catch(function (err) {
                observer.next(err);
            });
        });
    };
    AuthenticationService.prototype.getCurrentUser = function () {
        return this.angularfireauth.auth.currentUser;
    };
    AuthenticationService.prototype.sendPasswordResetEmail = function (user) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.angularfireauth.auth.sendPasswordResetEmail(user.email).then(function (acc) {
                observer.next(acc);
            }).catch(function (err) {
                observer.next(err);
            });
        });
    };
    AuthenticationService.prototype.touchAllfields = function (group) {
        this.util.touchAllFieldsOfForm(group);
    };
    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], src_app_core_utility_service_utility_service__WEBPACK_IMPORTED_MODULE_6__["UtilityService"]])
    ], AuthenticationService);
    return AuthenticationService;
}());



/***/ }),

/***/ "./src/app/config/config.module.ts":
/*!*****************************************!*\
  !*** ./src/app/config/config.module.ts ***!
  \*****************************************/
/*! exports provided: ConfigModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfigModule", function() { return ConfigModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");



var ConfigModule = /** @class */ (function () {
    function ConfigModule() {
    }
    ConfigModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ],
            providers: []
        })
    ], ConfigModule);
    return ConfigModule;
}());



/***/ }),

/***/ "./src/app/config/constants/defaultConstants.ts":
/*!******************************************************!*\
  !*** ./src/app/config/constants/defaultConstants.ts ***!
  \******************************************************/
/*! exports provided: defaultConst, signinErrorCode, recoverAccountCode, signupErrorCodes, passwordRegex, urlPaths, apiRoutes, httpHeader, error_messages, DifficultyLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "defaultConst", function() { return defaultConst; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signinErrorCode", function() { return signinErrorCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recoverAccountCode", function() { return recoverAccountCode; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signupErrorCodes", function() { return signupErrorCodes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "passwordRegex", function() { return passwordRegex; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlPaths", function() { return urlPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "apiRoutes", function() { return apiRoutes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "httpHeader", function() { return httpHeader; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "error_messages", function() { return error_messages; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DifficultyLevel", function() { return DifficultyLevel; });
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./../../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");


var defaultConst = {
    sidebar: [
        {
            name: 'Tutorial',
            url: 'tutorial',
            icon: 'help_outline',
            mini_name: 'Tutorial'
        },
        {
            name: 'Login to CrackMyKwery',
            url: 'authentication/sign-in',
            icon: 'home',
            mini_name: 'Login'
        },
        {
            name: 'Upload Image',
            url: 'mathsolver/upload',
            icon: 'cloud_upload',
            mini_name: 'Upload'
        },
        {
            name: 'Draw Image',
            url: 'mathsolver/draw',
            icon: 'color_lens',
            mini_name: 'Draw'
        },
        {
            name: 'Practice',
            url: 'mathpractice',
            icon: 'ballot',
            mini_name: 'Practice'
        },
    ],
    sidebarLoggedIn: [
        {
            name: 'Tutorial',
            url: 'tutorial',
            icon: 'help_outline',
            mini_name: 'Tutorial'
        },
        {
            name: 'Upload Image',
            url: 'mathsolver/upload',
            icon: 'cloud_upload',
            mini_name: 'Upload'
        },
        {
            name: 'Draw Image',
            url: 'mathsolver/draw',
            icon: 'color_lens',
            mini_name: 'Draw'
        },
        {
            name: 'Show History',
            url: 'history',
            icon: 'hourglass_empty',
            mini_name: 'History'
        },
        {
            name: 'Practice',
            url: 'mathpractice',
            icon: 'ballot',
            mini_name: 'Practice'
        }
    ],
    menu: {
        logout: {
            name: 'Logout',
            url: 'authentication/sign-in'
        }
    },
    siteName: {
        name: 'CrackMyKwery',
        url: 'https://crackmykwery.firebaseapp.com/'
    },
    emailsent: 'Email sent successfully',
    checkEmail: 'Verification email sent',
    annonymous: 'Annonymous'
};
var signinErrorCode = {
    'Invalid Email': {
        code: 'auth/invalid-email',
        message: 'Enter valid email address'
    },
    'User Disabled': {
        code: 'auth/user-disabled',
        message: 'Account with the corresponding email is disabled'
    },
    'User not found': {
        code: 'auth/user-not-found',
        message: 'No such user found with the corresponding email'
    },
    'Wrong password': {
        code: 'auth/wrong-password',
        message: 'Password does not match'
    }
};
var recoverAccountCode = {
    'Invalid Email': {
        code: 'auth/invalid-email',
        message: 'Enter valid email address'
    },
    'User not found': {
        code: 'auth/user-not-found',
        message: 'No such email is registered'
    }
};
var signupErrorCodes = {
    'Email Already in use': {
        code: 'auth/email-already-in-use',
        message: 'This email is taken'
    },
    'Invalid Email': {
        code: 'auth/invalid-email',
        message: 'Enter valid email address'
    },
    'Invalid Operation': {
        code: 'auth/operation-not-allowed',
        message: 'Site do not have permission'
    },
    'Weak Password': {
        code: 'auth/weak-password',
        message: 'Password is too weak'
    }
};
// export const passwordRegex='/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm';
var passwordRegex = '^(?=.*\\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$';
// This can vary if routes are changed in module so maintain consistency
var urlPaths = {
    Authentication: {
        Signin: {
            url: 'authentication/sign-in'
        },
        Signup: {
            url: 'authentication/sign-up'
        },
        AccountRecovery: {
            url: 'authentication/account-recovery'
        }
    },
    MathSolver: {
        upload: {
            url: 'mathsolver/upload'
        },
        draw: {
            url: 'mathsolver/draw'
        }
    },
    MathPractice: {
        practice: {
            url: 'mathpractice'
        }
    },
    MathTutorial: {
        tutorial: {
            url: 'tutorial'
        }
    },
    MathHistory: {
        history: {
            url: 'history'
        }
    }
};
var apiRoutes = {
    baseURL: "" + _environments_environment__WEBPACK_IMPORTED_MODULE_0__["baseURL"],
    predict: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["baseURL"] + "/predict",
    predictBase64: _environments_environment__WEBPACK_IMPORTED_MODULE_0__["baseURL"] + "/predictBase64"
};
var httpHeader = {
    headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpHeaders"]({
        'Content-Type': 'text/html',
    })
};
var error_messages = {
    updated: 'Updated',
    failed: 'Failed'
};
var DifficultyLevel = {
    easy: {
        minimum: -4,
        maximum: 4
    },
    average: {
        minimum: -10,
        maximum: 10
    },
    hard: {
        minimum: -16,
        maximum: 16
    }
};


/***/ }),

/***/ "./src/app/config/enums/default.enum.ts":
/*!**********************************************!*\
  !*** ./src/app/config/enums/default.enum.ts ***!
  \**********************************************/
/*! exports provided: Entities */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Entities", function() { return Entities; });
var Entities;
(function (Entities) {
    Entities["Person"] = "Person";
    Entities["Content"] = "Content";
})(Entities || (Entities = {}));


/***/ }),

/***/ "./src/app/core/core.module.ts":
/*!*************************************!*\
  !*** ./src/app/core/core.module.ts ***!
  \*************************************/
/*! exports provided: CoreModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CoreModule", function() { return CoreModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _database_service_query_database_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./database-service/query-database.service */ "./src/app/core/database-service/query-database.service.ts");
/* harmony import */ var _utility_service_utility_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utility-service/utility.service */ "./src/app/core/utility-service/utility.service.ts");
/* harmony import */ var _database_service_mutation_database_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./database-service/mutation-database.service */ "./src/app/core/database-service/mutation-database.service.ts");







var CoreModule = /** @class */ (function () {
    function CoreModule() {
    }
    CoreModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_3__["CommonModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_1__["SharedModule"]
            ],
            providers: [
                _database_service_mutation_database_service__WEBPACK_IMPORTED_MODULE_6__["MutationDatabaseService"],
                _database_service_query_database_service__WEBPACK_IMPORTED_MODULE_4__["QueryDatabaseService"],
                _utility_service_utility_service__WEBPACK_IMPORTED_MODULE_5__["UtilityService"],
            ]
        })
    ], CoreModule);
    return CoreModule;
}());



/***/ }),

/***/ "./src/app/core/database-service/mutation-database.service.ts":
/*!********************************************************************!*\
  !*** ./src/app/core/database-service/mutation-database.service.ts ***!
  \********************************************************************/
/*! exports provided: MutationDatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MutationDatabaseService", function() { return MutationDatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/constants/defaultConstants */ "./src/app/config/constants/defaultConstants.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");









var MutationDatabaseService = /** @class */ (function () {
    function MutationDatabaseService(angularfireauth, angularfirestore, http, storage) {
        this.angularfireauth = angularfireauth;
        this.angularfirestore = angularfirestore;
        this.http = http;
        this.storage = storage;
    }
    // setSingleData(){
    //   this.angularfirestore.collection('Person').add({})
    // }
    MutationDatabaseService.prototype.updateSingleData = function (EntityName, id, data) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.angularfirestore
                .collection(EntityName)
                .doc(id)
                .update(data)
                .then(function (acc) {
                observer.next(_config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_7__["error_messages"].updated);
            })
                .catch(function (err) {
                observer.next(_config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_7__["error_messages"].failed);
            });
        });
    };
    MutationDatabaseService.prototype.httpPost = function (apiPath, payload) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.http.post("" + apiPath, payload).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["first"])()).subscribe(function (res) {
                observer.next(res);
            }, function (err) {
                observer.error(err);
            }, function () {
                observer.complete();
            });
        });
    };
    MutationDatabaseService.prototype.createDataWithUID = function (entity, uid, payload) {
        var col = this.angularfirestore.collection(entity);
        col.doc(uid).set(payload);
    };
    MutationDatabaseService.prototype.deleteDataWithUID = function (entity, uid) {
        var col = this.angularfirestore.collection(entity);
        col.doc(uid).delete();
    };
    MutationDatabaseService.prototype.uploadFileToFirebase = function (filepath, file) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (obs) {
            var ref = _this.storage.ref(filepath);
            _this.storage
                .upload(filepath, file)
                .snapshotChanges()
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_6__["finalize"])(function () {
                ref.getDownloadURL().subscribe(function (url) {
                    obs.next(url);
                }, function (err) {
                    obs.error(err);
                });
            }))
                .subscribe();
        });
    };
    MutationDatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"],
            _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_2__["AngularFirestore"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"],
            _angular_fire_storage__WEBPACK_IMPORTED_MODULE_8__["AngularFireStorage"]])
    ], MutationDatabaseService);
    return MutationDatabaseService;
}());



/***/ }),

/***/ "./src/app/core/database-service/query-database.service.ts":
/*!*****************************************************************!*\
  !*** ./src/app/core/database-service/query-database.service.ts ***!
  \*****************************************************************/
/*! exports provided: QueryDatabaseService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QueryDatabaseService", function() { return QueryDatabaseService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");






var QueryDatabaseService = /** @class */ (function () {
    function QueryDatabaseService(angularfireauth, angularfirestore) {
        this.angularfireauth = angularfireauth;
        this.angularfirestore = angularfirestore;
    }
    QueryDatabaseService.prototype.getLoggedInUserID = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            _this.angularfireauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (res) {
                observer.next(res && res.uid ? res.uid : null);
            }, function (err) { return observer.error(err); }, function () { return observer.complete(); });
        });
    };
    QueryDatabaseService.prototype.getSingleData = function (collectionName, documentId) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (observer) {
            _this.angularfirestore.collection(collectionName).doc(documentId).get().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["first"])()).subscribe(function (res) {
                observer.next(res.data() ? res.data() : null);
            }, function (err) { return observer.error(err); }, function () { return observer.complete(); });
        });
    };
    QueryDatabaseService.prototype.getListData = function (collectionName) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (obs) {
            var itemsCollection = _this.angularfirestore.collection(collectionName);
            var items = itemsCollection.valueChanges().subscribe(function (res) {
                obs.next(res);
            });
        });
    };
    QueryDatabaseService.prototype.getListDataWhereEquals = function (collectionName, attribute, value) {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (obs) {
            var itemsCollection = _this.angularfirestore.collection(collectionName, function (ref) { return ref.where(attribute, '==', value); });
            var items = itemsCollection.valueChanges().subscribe(function (res) {
                obs.next(res);
            });
        });
    };
    QueryDatabaseService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_2__["AngularFireAuth"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_3__["AngularFirestore"]])
    ], QueryDatabaseService);
    return QueryDatabaseService;
}());



/***/ }),

/***/ "./src/app/core/security-service/authguard.service.ts":
/*!************************************************************!*\
  !*** ./src/app/core/security-service/authguard.service.ts ***!
  \************************************************************/
/*! exports provided: AuthguardService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthguardService", function() { return AuthguardService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");





var AuthguardService = /** @class */ (function () {
    function AuthguardService(af, router) {
        this.af = af;
        this.router = router;
    }
    AuthguardService.prototype.canActivate = function () {
        var _this = this;
        return new rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"](function (observer) {
            _this.af.authState.subscribe(function (res) {
                if (res) {
                    observer.next(true);
                }
                else if (!res) {
                    observer.next(false);
                    _this.router.navigate(['/authentication']);
                }
            });
        });
        // if(this.af.auth.currentUser) {
        //   return true
        // } 
        // else{
        //   this.router.navigate(['/authentication']);
        //   return false;
        // }
    };
    AuthguardService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], AuthguardService);
    return AuthguardService;
}());



/***/ }),

/***/ "./src/app/core/utility-service/utility.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/core/utility-service/utility.service.ts ***!
  \*********************************************************/
/*! exports provided: UtilityService, ErrorStateMatcherForsignUppage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UtilityService", function() { return UtilityService; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ErrorStateMatcherForsignUppage", function() { return ErrorStateMatcherForsignUppage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");


// import { _foreach as foreach} from 'lodash'


var UtilityService = /** @class */ (function () {
    function UtilityService(angularfireauth) {
        this.angularfireauth = angularfireauth;
    }
    UtilityService.prototype.getFormControlsValueFromFormGroup = function (fg) {
        var controls = [];
        lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"](Object.keys(fg.controls), function (value, key) {
            controls = controls.concat([value]);
        });
        return controls;
    };
    UtilityService.prototype.touchAllFieldsOfForm = function (formgroup) {
        var fields = this.getFormControlsValueFromFormGroup(formgroup);
        lodash__WEBPACK_IMPORTED_MODULE_2__["forEach"](fields, function (value, key) {
            formgroup.controls[value].markAsTouched();
        });
    };
    UtilityService.prototype.resendVerificationEmail = function () {
        this.angularfireauth.auth.currentUser.sendEmailVerification();
    };
    UtilityService.prototype.ifFileImage = function (file) {
        return file && file['type'].split('/')[0] === 'image';
    };
    UtilityService.prototype.b64toBlob = function (b64Data, con) {
        var b64toBlob = __webpack_require__(/*! b64-to-blob */ "./node_modules/b64-to-blob/b64toBlob.js");
        var contentType = con ? con : 'image/jpeg';
        var blob = b64toBlob(b64Data, contentType);
        return blob;
    };
    UtilityService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"]])
    ], UtilityService);
    return UtilityService;
}());

var ErrorStateMatcherForsignUppage = /** @class */ (function () {
    function ErrorStateMatcherForsignUppage() {
    }
    ErrorStateMatcherForsignUppage.prototype.isErrorState = function (control, form) {
        //   const isSubmitted = form && form.submitted;
        //   return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
        return form.hasError('notMatching') && control.touched
            ? form.hasError('notMatching')
            : control && control.invalid && control.touched ? control.invalid : false;
    };
    return ErrorStateMatcherForsignUppage;
}());



/***/ }),

/***/ "./src/app/root/anonymous/anonymous.component.html":
/*!*********************************************************!*\
  !*** ./src/app/root/anonymous/anonymous.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\r\n"

/***/ }),

/***/ "./src/app/root/anonymous/anonymous.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/root/anonymous/anonymous.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb3QvYW5vbnltb3VzL2Fub255bW91cy5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/root/anonymous/anonymous.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/root/anonymous/anonymous.component.ts ***!
  \*******************************************************/
/*! exports provided: AnonymousComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnonymousComponent", function() { return AnonymousComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_authentication_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/authentication/services/authentication.service */ "./src/app/authentication/services/authentication.service.ts");



var AnonymousComponent = /** @class */ (function () {
    function AnonymousComponent(aut) {
        this.aut = aut;
    }
    AnonymousComponent.prototype.ngOnInit = function () {
        // console.log(this.aut.getCurrentUser());
    };
    AnonymousComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-anonymous',
            template: __webpack_require__(/*! ./anonymous.component.html */ "./src/app/root/anonymous/anonymous.component.html"),
            styles: [__webpack_require__(/*! ./anonymous.component.scss */ "./src/app/root/anonymous/anonymous.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_authentication_services_authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"]])
    ], AnonymousComponent);
    return AnonymousComponent;
}());



/***/ }),

/***/ "./src/app/root/app-routing.module.ts":
/*!********************************************!*\
  !*** ./src/app/root/app-routing.module.ts ***!
  \********************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _routes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./routes */ "./src/app/root/routes.ts");




var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(_routes__WEBPACK_IMPORTED_MODULE_3__["routes"])],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/root/app.module.ts":
/*!************************************!*\
  !*** ./src/app/root/app.module.ts ***!
  \************************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/root/app-routing.module.ts");
/* harmony import */ var _root_default_root_default_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./root-default/root-default.component */ "./src/app/root/root-default/root-default.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../shared/shared.module */ "./src/app/shared/shared.module.ts");
/* harmony import */ var _config_config_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../config/config.module */ "./src/app/config/config.module.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/root/not-found/not-found.component.ts");
/* harmony import */ var _angular_fire__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/fire */ "./node_modules/@angular/fire/index.js");
/* harmony import */ var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/fire/auth */ "./node_modules/@angular/fire/auth/index.js");
/* harmony import */ var _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/fire/database */ "./node_modules/@angular/fire/database/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/fire/firestore */ "./node_modules/@angular/fire/firestore/index.js");
/* harmony import */ var _core_core_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../core/core.module */ "./src/app/core/core.module.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/root/navbar/navbar.component.ts");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _anonymous_anonymous_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./anonymous/anonymous.component */ "./src/app/root/anonymous/anonymous.component.ts");
/* harmony import */ var _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/fire/auth-guard */ "./node_modules/@angular/fire/auth-guard/index.js");
/* harmony import */ var _core_security_service_authguard_service__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../core/security-service/authguard.service */ "./src/app/core/security-service/authguard.service.ts");
/* harmony import */ var _services_root_service__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./services/root.service */ "./src/app/root/services/root.service.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _angular_fire_storage__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/fire/storage */ "./node_modules/@angular/fire/storage/index.js");
























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _root_default_root_default_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_8__["NotFoundComponent"],
                _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_15__["NavbarComponent"],
                _anonymous_anonymous_component__WEBPACK_IMPORTED_MODULE_18__["AnonymousComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
                _shared_shared_module__WEBPACK_IMPORTED_MODULE_6__["SharedModule"],
                _config_config_module__WEBPACK_IMPORTED_MODULE_7__["ConfigModule"],
                _core_core_module__WEBPACK_IMPORTED_MODULE_14__["CoreModule"],
                _angular_fire__WEBPACK_IMPORTED_MODULE_9__["AngularFireModule"].initializeApp(_environments_environment__WEBPACK_IMPORTED_MODULE_12__["environment"].firebase),
                _angular_fire_auth__WEBPACK_IMPORTED_MODULE_10__["AngularFireAuthModule"],
                _angular_fire_database__WEBPACK_IMPORTED_MODULE_11__["AngularFireDatabaseModule"],
                _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_13__["AngularFirestoreModule"],
                _angular_fire_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AngularFireAuthGuardModule"],
                _angular_fire_storage__WEBPACK_IMPORTED_MODULE_23__["AngularFireStorageModule"],
                _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_16__["LayoutModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatToolbarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatSidenavModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_17__["MatListModule"]
            ],
            providers: [_core_security_service_authguard_service__WEBPACK_IMPORTED_MODULE_20__["AuthguardService"], _services_root_service__WEBPACK_IMPORTED_MODULE_21__["RootService"], _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_22__["SharedService"]],
            bootstrap: [_root_default_root_default_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/root/navbar/navbar.component.css":
/*!**************************************************!*\
  !*** ./src/app/root/navbar/navbar.component.css ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".sidenav-container {\r\n  height: 100%;\r\n}\r\n\r\n.sidenav {\r\n  width: 70px;\r\n  background-color: #e6e6e6 !important;\r\n}\r\n\r\n.sidenav-opened{\r\n  width: 280px !important;\r\n  background-color: #e6e6e6 !important;\r\n\r\n}\r\n\r\n.sidenav .mat-toolbar {\r\n  background: inherit;\r\n}\r\n\r\n.mat-toolbar.mat-primary {\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n  top: 0;\r\n  z-index: 12;\r\n}\r\n\r\n.mat-drawer-side{\r\n  border-right: none !important;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcm9vdC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsb0NBQW9DO0FBQ3RDOztBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLG9DQUFvQzs7QUFFdEM7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSx3QkFBZ0I7RUFBaEIsZ0JBQWdCO0VBQ2hCLE1BQU07RUFDTixXQUFXO0FBQ2I7O0FBR0E7RUFDRSw2QkFBNkI7QUFDL0IiLCJmaWxlIjoic3JjL2FwcC9yb290L25hdmJhci9uYXZiYXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uc2lkZW5hdiB7XHJcbiAgd2lkdGg6IDcwcHg7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U2ZTZlNiAhaW1wb3J0YW50O1xyXG59XHJcbi5zaWRlbmF2LW9wZW5lZHtcclxuICB3aWR0aDogMjgwcHggIWltcG9ydGFudDtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTZlNmU2ICFpbXBvcnRhbnQ7XHJcblxyXG59XHJcblxyXG4uc2lkZW5hdiAubWF0LXRvb2xiYXIge1xyXG4gIGJhY2tncm91bmQ6IGluaGVyaXQ7XHJcbn1cclxuXHJcbi5tYXQtdG9vbGJhci5tYXQtcHJpbWFyeSB7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxuICB0b3A6IDA7XHJcbiAgei1pbmRleDogMTI7XHJcbn1cclxuXHJcblxyXG4ubWF0LWRyYXdlci1zaWRle1xyXG4gIGJvcmRlci1yaWdodDogbm9uZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4iXX0= */"

/***/ }),

/***/ "./src/app/root/navbar/navbar.component.html":
/*!***************************************************!*\
  !*** ./src/app/root/navbar/navbar.component.html ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner></ngx-spinner>\r\n<mat-sidenav-container class=\"sidenav-container \" autosize>\r\n  <mat-sidenav #drawer [ngClass]=\"isExpanded ? 'sidenav-opened' : 'sidenav-closed' \"\r\n    [opened]=\"(isHandset$ | async) === false\" [mode]=\"(isHandset$ | async) ? 'side' : 'side'\">\r\n    <!-- [attr.role]=\"(isHandset$ | async) ? 'dialog' : 'navigation'\" [mode]=\"(isHandset$ | async) ? 'over' : 'side'\" -->\r\n    <mat-toolbar *ngIf=\"isExpanded\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\">\r\n      <div>{{title}}</div>\r\n\r\n      <div>\r\n        <button mat-mini-fab color='white' mat-icon-button (click)=\"isExpanded = !isExpanded\">\r\n          <mat-icon>menu</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-toolbar>\r\n\r\n    <mat-toolbar *ngIf=\"!isExpanded\" fxLayout=\"row\" fxLayoutAlign=\"space-between center\" class=\"white-color-foreground\">\r\n\r\n      <div>\r\n        <button mat-mini-fab mat-icon-button (click)=\"isExpanded = !isExpanded\" class='mt-8 black-color-background'>\r\n          <mat-icon class=' white-color-foreground'>menu</mat-icon>\r\n        </button>\r\n      </div>\r\n    </mat-toolbar>\r\n\r\n\r\n    <mat-nav-list *ngIf='isExpanded && sidebar' class=\"white-color-foreground\">\r\n      <div *ngFor=\"let content of sidebar;let i = index\">\r\n\r\n        <mat-list-item (click)=\"route(content.url) ; selectRow(i)\" [class.active]=\"i == selectedRow\"\r\n          class=\"cursor-pointer px-24 font-size-16 \">\r\n          <i class=\"material-icons-outlined mr-16\">\r\n            {{content.icon}}\r\n          </i>\r\n          <span> {{content.name}}</span>\r\n\r\n        </mat-list-item>\r\n      </div>\r\n    </mat-nav-list>\r\n\r\n    <mat-nav-list *ngIf='!isExpanded && sidebar' class=\"white-color-foreground\">\r\n\r\n      <div *ngFor=\"let content of sidebar;let i = index\">\r\n\r\n        <div class='my-12' fxLayout='column' fxLayoutAlign=\"center center\" fxLayoutGap=\"4px\">\r\n\r\n          <div fxLayout='column' fxLayoutAlign=\"center center\">\r\n            <button mat-mini-fab color='white' (click)=\"route(content.url); selectRow(i)\"\r\n              [class.active]=\"i == selectedRow\" class=\"cursor-pointer white-color-background\"><i\r\n                class=\"material-icons-outlined \">\r\n                {{content.icon}}\r\n              </i> </button>\r\n          </div>\r\n          <div fxLayout='row' fxLayoutAlign=\"center center\">\r\n            <div class='font-size-14 black-color-foreground'>{{content.mini_name}}</div>\r\n          </div>\r\n\r\n\r\n\r\n        </div>\r\n      </div>\r\n    </mat-nav-list>\r\n\r\n\r\n\r\n  </mat-sidenav>\r\n  <mat-sidenav-content>\r\n\r\n    <mat-toolbar color=\"primary\" class=\"h-64 w-100-p \">\r\n      <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"16px\" class=\"w-100-p\">\r\n        <div fxLayout=\"row\" fxLayoutAlign=\"space-between center\" fxLayoutGap=\"16px\">\r\n          <div *ngIf=\"!drawer.opened\">\r\n            <button type=\"button\" aria-label=\"Toggle sidenav\" mat-icon-button (click)=\"drawer.toggle()\">\r\n              <mat-icon aria-label=\"Side nav toggle icon\">menu</mat-icon>\r\n            </button>\r\n          </div>\r\n          <div class='cursor-pointer'>\r\n            <span *ngIf=\"!drawer.opened\">CrackMyKwery</span>\r\n            <div *ngIf=\"drawer.opened\" fxLayout=\"row\" fxLayoutAlign=\"start center\" fxLayoutGap=\"16px\">\r\n              <div>CrackMyKwery</div>\r\n              <hr><h3 style=\"color: dodgerblue;font-weight: bolder; ;font-size: large; display:flex; align-items:center; justify-content: center; \">Created with ❤️ by Sudhanshu Dekate</h3><hr>\r\n\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n        <!-- [matMenuTriggerFor]=\"menu\" -->\r\n        <div [matMenuTriggerFor]=\"menu\" *ngIf='isAuthenticated' fxLayout=\"row\" fxLayoutAlign=\"center center\"\r\n          class=\"mr-64\">\r\n\r\n          <!-- (click)='route(Username.url)' -->\r\n          <button mat-button class=\"font-size-16\">{{Username}} <i class=\"material-icons\">\r\n              keyboard_arrow_down\r\n            </i></button>\r\n\r\n          <mat-menu #menu=\"matMenu\" class=\"w-180 mt-16\">\r\n\r\n            <button mat-menu-item>\r\n              <div (click)=\"logout()\">{{menuItems.logout.name}}</div>\r\n            </button>\r\n          </mat-menu>\r\n        </div>\r\n\r\n\r\n        <div *ngIf='!isAuthenticated' fxLayout=\"row\" fxLayoutAlign=\"center center\" class=\"mr-64\">\r\n          <mat-icon class=\"material-icons-outlined cursor-pointer\">\r\n            settings\r\n          </mat-icon>\r\n          <button mat-button class=\"font-size-16\">{{Username}}</button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </mat-toolbar>\r\n    <router-outlet></router-outlet>\r\n\r\n  </mat-sidenav-content>\r\n</mat-sidenav-container>"

/***/ }),

/***/ "./src/app/root/navbar/navbar.component.ts":
/*!*************************************************!*\
  !*** ./src/app/root/navbar/navbar.component.ts ***!
  \*************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/cdk/layout */ "./node_modules/@angular/cdk/esm5/layout.es5.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var _authentication_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../authentication/services/authentication.service */ "./src/app/authentication/services/authentication.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../config/constants/defaultConstants */ "./src/app/config/constants/defaultConstants.ts");
/* harmony import */ var _core_database_service_query_database_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../core/database-service/query-database.service */ "./src/app/core/database-service/query-database.service.ts");
/* harmony import */ var _config_enums_default_enum__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../config/enums/default.enum */ "./src/app/config/enums/default.enum.ts");
/* harmony import */ var _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../shared/services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _services_root_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../services/root.service */ "./src/app/root/services/root.service.ts");












var NavbarComponent = /** @class */ (function () {
    // $menuIndex = this.menuIndex.asObservable();
    function NavbarComponent(breakpointObserver, aut, router, corequery, sharedService, rootService) {
        this.breakpointObserver = breakpointObserver;
        this.aut = aut;
        this.router = router;
        this.corequery = corequery;
        this.sharedService = sharedService;
        this.rootService = rootService;
        this.isHandset$ = this.breakpointObserver
            .observe(_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["Breakpoints"].Handset)
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (result) { return result.matches; }));
        this.isAuthenticated = false;
        this._unsubscribeAll = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
    }
    NavbarComponent.prototype.ngOnInit = function () {
        this.initiateVariables();
        this.setUsername();
        this.makeSideBar();
        this.checkRow();
    };
    NavbarComponent.prototype.initiateVariables = function () {
        this.title = _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_7__["defaultConst"].siteName.name;
    };
    NavbarComponent.prototype.makeSideBar = function () {
        if (this.isAuthenticated) {
            this.sidebar = _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_7__["defaultConst"].sidebarLoggedIn;
            this.menuItems = _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_7__["defaultConst"].menu;
        }
        else {
            this.sidebar = _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_7__["defaultConst"].sidebar;
        }
    };
    NavbarComponent.prototype.setUsername = function () {
        var _this = this;
        this.corequery.getLoggedInUserID().pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(this._unsubscribeAll)).subscribe(function (res) {
            if (res) {
                _this.getUserName(res).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this._unsubscribeAll)).subscribe(function (res) {
                    _this.Username = res;
                    _this.isAuthenticated = true;
                    _this.makeSideBar();
                    _this.checkRow();
                });
            }
            else {
                _this.Username = _config_constants_defaultConstants__WEBPACK_IMPORTED_MODULE_7__["defaultConst"].annonymous;
                _this.isAuthenticated = false;
                _this.makeSideBar();
                _this.checkRow();
            }
        });
    };
    NavbarComponent.prototype.getUserName = function (uid) {
        var _this = this;
        var personInfo;
        return new rxjs__WEBPACK_IMPORTED_MODULE_3__["Observable"](function (observer) {
            _this.corequery
                .getSingleData(_config_enums_default_enum__WEBPACK_IMPORTED_MODULE_9__["Entities"].Person, uid)
                .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["takeUntil"])(_this._unsubscribeAll))
                .subscribe(function (res) {
                personInfo = res;
                observer.next(personInfo && personInfo.name ? personInfo.name : null);
            });
        });
    };
    NavbarComponent.prototype.logout = function () {
        this.aut.signOut();
        this.showLogoutSnackbar();
        this.setUsername();
    };
    NavbarComponent.prototype.showLogoutSnackbar = function () {
        this.sharedService.openSnackBar({
            data: {
                message: 'Logged out successfully',
                isAccepted: true
            },
            duration: 3,
            horizontalPosition: 'right',
            verticalPosition: 'top',
            panelClass: ['default-snackbar']
        });
    };
    NavbarComponent.prototype.ngOnDestroy = function () {
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
        this._unsubscribeAll.unsubscribe();
    };
    NavbarComponent.prototype.route = function (url) {
        var _this = this;
        this.router.navigateByUrl(url).then(function (res) {
            _this.checkRow();
        });
    };
    NavbarComponent.prototype.selectRow = function (index) {
        this.selectedRow = index;
        // console.log(this.selectedRow);
    };
    NavbarComponent.prototype.checkRow = function () {
        var currentUrl = this.router.url;
        var count = 0;
        for (var _i = 0, _a = this.sidebar; _i < _a.length; _i++) {
            var i = _a[_i];
            if (currentUrl == "/" + i.url) {
                this.selectedRow = count;
                break;
            }
            count += 1;
        }
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/root/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/root/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_cdk_layout__WEBPACK_IMPORTED_MODULE_2__["BreakpointObserver"],
            _authentication_services_authentication_service__WEBPACK_IMPORTED_MODULE_5__["AuthenticationService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"],
            _core_database_service_query_database_service__WEBPACK_IMPORTED_MODULE_8__["QueryDatabaseService"],
            _shared_services_shared_service__WEBPACK_IMPORTED_MODULE_10__["SharedService"],
            _services_root_service__WEBPACK_IMPORTED_MODULE_11__["RootService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/root/not-found/not-found.component.html":
/*!*********************************************************!*\
  !*** ./src/app/root/not-found/not-found.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/root/not-found/not-found.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/root/not-found/not-found.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb3Qvbm90LWZvdW5kL25vdC1mb3VuZC5jb21wb25lbnQuc2NzcyJ9 */"

/***/ }),

/***/ "./src/app/root/not-found/not-found.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/root/not-found/not-found.component.ts ***!
  \*******************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/root/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.scss */ "./src/app/root/not-found/not-found.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/root/root-default/root-default.component.css":
/*!**************************************************************!*\
  !*** ./src/app/root/root-default/root-default.component.css ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jvb3Qvcm9vdC1kZWZhdWx0L3Jvb3QtZGVmYXVsdC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/root/root-default/root-default.component.html":
/*!***************************************************************!*\
  !*** ./src/app/root/root-default/root-default.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/root/root-default/root-default.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/root/root-default/root-default.component.ts ***!
  \*************************************************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root-default',
            template: __webpack_require__(/*! ./root-default.component.html */ "./src/app/root/root-default/root-default.component.html"),
            styles: [__webpack_require__(/*! ./root-default.component.css */ "./src/app/root/root-default/root-default.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/root/routes.ts":
/*!********************************!*\
  !*** ./src/app/root/routes.ts ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _anonymous_anonymous_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./anonymous/anonymous.component */ "./src/app/root/anonymous/anonymous.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/root/navbar/navbar.component.ts");
/* harmony import */ var _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./not-found/not-found.component */ "./src/app/root/not-found/not-found.component.ts");
/* harmony import */ var _core_security_service_authguard_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/security-service/authguard.service */ "./src/app/core/security-service/authguard.service.ts");




var routes = [
    {
        path: '',
        redirectTo: 'tutorial',
        pathMatch: 'full'
    },
    {
        path: '',
        component: _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_1__["NavbarComponent"],
        children: [
            {
                path: 'mathsolver',
                loadChildren: '../mathsolver/mathsolver.module#MathsolverModule',
            },
            {
                path: 'mathpractice',
                loadChildren: '../mathpractice/mathpractice.module#MathpracticeModule',
            },
            {
                path: 'history',
                loadChildren: '../history/history.module#HistoryModule',
                canActivate: [_core_security_service_authguard_service__WEBPACK_IMPORTED_MODULE_3__["AuthguardService"]]
            },
            {
                path: 'tutorial',
                loadChildren: '../tutorial/tutorial.module#TutorialModule',
            },
        ]
    },
    {
        path: '',
        component: _anonymous_anonymous_component__WEBPACK_IMPORTED_MODULE_0__["AnonymousComponent"],
        children: [
            {
                path: 'authentication',
                loadChildren: '../authentication/authentication.module#AuthenticationModule',
            }
        ]
    },
    {
        path: '**',
        component: _not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"]
    }
];


/***/ }),

/***/ "./src/app/root/services/root.service.ts":
/*!***********************************************!*\
  !*** ./src/app/root/services/root.service.ts ***!
  \***********************************************/
/*! exports provided: RootService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RootService", function() { return RootService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var RootService = /** @class */ (function () {
    function RootService() {
    }
    RootService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], RootService);
    return RootService;
}());



/***/ }),

/***/ "./src/app/shared/components/confirm/confirm.component.html":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/confirm/confirm.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout='column' fxLayoutAlign='center stretch' fxLayoutGap='24px'  class='px-24 pt-24 '>\r\n  <div *ngIf='data.closeIcon' fxLayout='row' fxLayoutAlign='end center'>\r\n    close\r\n  </div>\r\n  <div fxLayout='row' fxLayoutAlign='center center' fxLayoutGap='24px' mat-dialog-content class='h-80'>\r\n    <mat-icon *ngIf='data.icon' class=\"material-icons-outlined font-size-48 rejected-color\">\r\n      {{data.icon}}\r\n    </mat-icon>\r\n    <div class='font-size-20 pt-24 pl-16'>\r\n      {{data.message}}\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div mat-dialog-actions fxLayout='row' fxLayoutAlign='end center' fxLayoutGap='12px' class='pt-30 pl-16'>\r\n    <button mat-stroked-button class='w-124' (click)=\"onNoClick()\">{{data.noButton}}</button>\r\n    <button mat-raised-button class='w-124' color='warn' (click)='onYesClick()'>{{data.yesButton}}</button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/confirm/confirm.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/confirm/confirm.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "::ng-deep mat-dialog-container {\n  padding: 0px !important; }\n\n::ng-deep mat-dialog-actions {\n  padding: 0px !important; }\n\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2NvbXBvbmVudHMvY29uZmlybS9DOlxcVXNlcnNcXFN1ZGhhbnNodVxcLnZzY29kZVxcUFJPSkVDVFNcXE1MXFxFRElURUQgZXF1YXRpb24gc29sdmVyIC0gQ29weVxcRnJvbnRlbmRcXGNyYWNrbXlrd2VyeS9zcmNcXGFwcFxcc2hhcmVkXFxjb21wb25lbnRzXFxjb25maXJtXFxjb25maXJtLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBRUksdUJBQXVCLEVBQUE7O0FBRzNCO0VBQ0ksdUJBQXVCLEVBQUEiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvY29tcG9uZW50cy9jb25maXJtL2NvbmZpcm0uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgbWF0LWRpYWxvZy1jb250YWluZXJ7XHJcblxyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6bmctZGVlcCAgbWF0LWRpYWxvZy1hY3Rpb25ze1xyXG4gICAgcGFkZGluZzogMHB4ICFpbXBvcnRhbnQ7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/shared/components/confirm/confirm.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/shared/components/confirm/confirm.component.ts ***!
  \****************************************************************/
/*! exports provided: ConfirmComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConfirmComponent", function() { return ConfirmComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");



var ConfirmComponent = /** @class */ (function () {
    function ConfirmComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
    }
    ConfirmComponent.prototype.ngOnInit = function () { };
    ConfirmComponent.prototype.onNoClick = function () {
        this.dialogRef.close(false);
    };
    ConfirmComponent.prototype.onYesClick = function () {
        this.dialogRef.close(true);
    };
    ConfirmComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-confirm',
            template: __webpack_require__(/*! ./confirm.component.html */ "./src/app/shared/components/confirm/confirm.component.html"),
            styles: [__webpack_require__(/*! ./confirm.component.scss */ "./src/app/shared/components/confirm/confirm.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material_dialog__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], ConfirmComponent);
    return ConfirmComponent;
}());



/***/ }),

/***/ "./src/app/shared/components/snackbar/snackbar.component.html":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/snackbar/snackbar.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div fxLayout=\"row\" fxLayoutAlign=\"center center\" fxLayoutGap=\"12px\" class=\"h-100-p\">\r\n  <div>\r\n    {{data.message}}\r\n\r\n  </div>\r\n  <div fxLayout=\"row\" fxLayoutAlign=\"center center\" [ngSwitch]=\"data.isAccepted\">\r\n    <div *ngSwitchCase=true>\r\n        <i class=\"material-icons-outlined accepted-color\">\r\n            check_circle\r\n          </i>\r\n    </div>\r\n    <div *ngSwitchCase=false>\r\n        <i class=\"material-icons-outlined rejected-color\">\r\n            error_outline\r\n          </i>\r\n    </div>\r\n    <div *ngSwitchCase='default'>\r\n    </div>\r\n    \r\n  </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/shared/components/snackbar/snackbar.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/shared/components/snackbar/snackbar.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9jb21wb25lbnRzL3NuYWNrYmFyL3NuYWNrYmFyLmNvbXBvbmVudC5zY3NzIn0= */"

/***/ }),

/***/ "./src/app/shared/components/snackbar/snackbar.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/shared/components/snackbar/snackbar.component.ts ***!
  \******************************************************************/
/*! exports provided: SnackbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SnackbarComponent", function() { return SnackbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");



var SnackbarComponent = /** @class */ (function () {
    function SnackbarComponent(data) {
        this.data = data;
    }
    SnackbarComponent.prototype.ngOnInit = function () {
    };
    SnackbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-snackbar',
            template: __webpack_require__(/*! ./snackbar.component.html */ "./src/app/shared/components/snackbar/snackbar.component.html"),
            styles: [__webpack_require__(/*! ./snackbar.component.scss */ "./src/app/shared/components/snackbar/snackbar.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_SNACK_BAR_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object])
    ], SnackbarComponent);
    return SnackbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/directives/dropzone.directive.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/directives/dropzone.directive.ts ***!
  \*********************************************************/
/*! exports provided: DropzoneDirective */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DropzoneDirective", function() { return DropzoneDirective; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var DropzoneDirective = /** @class */ (function () {
    function DropzoneDirective() {
        this.dropped = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.hovered = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
    }
    DropzoneDirective.prototype.onDrop = function ($event) {
        $event.preventDefault();
        this.dropped.emit($event.dataTransfer.files);
        this.hovered.emit(false);
    };
    DropzoneDirective.prototype.OnDragOver = function ($event) {
        $event.preventDefault();
        this.hovered.emit(true);
    };
    DropzoneDirective.prototype.OnDragLeave = function ($event) {
        $event.preventDefault();
        this.hovered.emit(false);
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropzoneDirective.prototype, "dropped", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], DropzoneDirective.prototype, "hovered", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('drop', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropzoneDirective.prototype, "onDrop", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragover', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropzoneDirective.prototype, "OnDragOver", null);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('dragleave', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], DropzoneDirective.prototype, "OnDragLeave", null);
    DropzoneDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
            selector: '[dropZone]'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DropzoneDirective);
    return DropzoneDirective;
}());



/***/ }),

/***/ "./src/app/shared/services/shared.service.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/services/shared.service.ts ***!
  \***************************************************/
/*! exports provided: SharedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedService", function() { return SharedService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./../components/confirm/confirm.component */ "./src/app/shared/components/confirm/confirm.component.ts");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! guid-typescript */ "./node_modules/guid-typescript/dist/guid.js");
/* harmony import */ var guid_typescript__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(guid_typescript__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");






// import { PasswordChangeComponent } from 'src/app/profile/components/password-change/password-change.component';


var SharedService = /** @class */ (function () {
    // Username = new BehaviorSubject('');
    // $username= this.Username.asObservable();
    // menuIndex = new BehaviorSubject<number>(1);
    // $menuIndex = this.menuIndex.asObservable();
    function SharedService(snackbar, dialog, spinner) {
        this.snackbar = snackbar;
        this.dialog = dialog;
        this.spinner = spinner;
    }
    SharedService.prototype.openSnackBar = function (configuration) {
        this.snackbar.openFromComponent(_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_4__["SnackbarComponent"], {
            duration: (configuration.duration ? configuration.duration : 1) * 1000,
            data: configuration.data,
            horizontalPosition: configuration.horizontalPosition ? configuration.horizontalPosition : 'right',
            verticalPosition: configuration.verticalPosition ? configuration.verticalPosition : 'top',
            panelClass: configuration.panelClass ? configuration.panelClass : null
        });
    };
    SharedService.prototype.generateGUID = function () {
        var id = guid_typescript__WEBPACK_IMPORTED_MODULE_6__["Guid"].create();
        return id.toString();
    };
    SharedService.prototype.startSpinner = function () {
        this.spinner.show();
    };
    SharedService.prototype.hideSpinner = function () {
        this.spinner.hide();
    };
    SharedService.prototype.openConfirmationDialog = function (data) {
        var dialogRef = this.dialog.open(_components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_1__["ConfirmComponent"], {
            minWidth: '250px',
            width: '400px',
            height: '220px',
            data: data
        });
        return new rxjs__WEBPACK_IMPORTED_MODULE_5__["Observable"](function (obs) {
            dialogRef.afterClosed().subscribe(function (result) {
                obs.next(result);
            });
        });
    };
    SharedService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBar"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], ngx_spinner__WEBPACK_IMPORTED_MODULE_7__["NgxSpinnerService"]])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "./src/app/shared/shared.module.ts":
/*!*****************************************!*\
  !*** ./src/app/shared/shared.module.ts ***!
  \*****************************************/
/*! exports provided: SharedModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SharedModule", function() { return SharedModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/toolbar */ "./node_modules/@angular/material/esm5/toolbar.es5.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm5/icon.es5.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm5/flex-layout.es5.js");
/* harmony import */ var _angular_material_select__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/select */ "./node_modules/@angular/material/esm5/select.es5.js");
/* harmony import */ var _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/menu */ "./node_modules/@angular/material/esm5/menu.es5.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/esm5/button.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/esm5/tooltip.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
/* harmony import */ var _components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/snackbar/snackbar.component */ "./src/app/shared/components/snackbar/snackbar.component.ts");
/* harmony import */ var _services_shared_service__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/shared.service */ "./src/app/shared/services/shared.service.ts");
/* harmony import */ var _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/material/dialog */ "./node_modules/@angular/material/esm5/dialog.es5.js");
/* harmony import */ var _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @angular/material/button-toggle */ "./node_modules/@angular/material/esm5/button-toggle.es5.js");
/* harmony import */ var _directives_dropzone_directive__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./directives/dropzone.directive */ "./src/app/shared/directives/dropzone.directive.ts");
/* harmony import */ var ngx_image_cropper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-image-cropper */ "./node_modules/ngx-image-cropper/fesm5/ngx-image-cropper.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/confirm/confirm.component */ "./src/app/shared/components/confirm/confirm.component.ts");
/* harmony import */ var angular2_virtual_scroll__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! angular2-virtual-scroll */ "./node_modules/angular2-virtual-scroll/dist/virtual-scroll.js");
/* harmony import */ var angular2_virtual_scroll__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(angular2_virtual_scroll__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/cdk/scrolling */ "./node_modules/@angular/cdk/esm5/scrolling.es5.js");
/* harmony import */ var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/tabs */ "./node_modules/@angular/material/esm5/tabs.es5.js");

























var SharedModule = /** @class */ (function () {
    function SharedModule() {
    }
    SharedModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_13__["SnackbarComponent"], _directives_dropzone_directive__WEBPACK_IMPORTED_MODULE_17__["DropzoneDirective"], _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmComponent"]],
            imports: [
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__["AngularFontAwesomeModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_18__["ImageCropperModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                angular2_virtual_scroll__WEBPACK_IMPORTED_MODULE_22__["VirtualScrollModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__["ScrollingModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"]
            ],
            exports: [
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_12__["AngularFontAwesomeModule"],
                ngx_image_cropper__WEBPACK_IMPORTED_MODULE_18__["ImageCropperModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_flex_layout__WEBPACK_IMPORTED_MODULE_5__["FlexLayoutModule"],
                _angular_material_select__WEBPACK_IMPORTED_MODULE_6__["MatSelectModule"],
                _angular_material_menu__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_9__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCardModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatFormFieldModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatInputModule"],
                _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltipModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatDividerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatProgressBarModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSnackBarModule"],
                _angular_material_dialog__WEBPACK_IMPORTED_MODULE_15__["MatDialogModule"],
                _angular_material_button_toggle__WEBPACK_IMPORTED_MODULE_16__["MatButtonToggleModule"],
                _angular_material_toolbar__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"],
                _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSidenavModule"],
                _angular_material_icon__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatListModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_19__["HttpClientModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatCheckboxModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatPaginatorModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_20__["NgxSpinnerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatChipsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatSortModule"],
                angular2_virtual_scroll__WEBPACK_IMPORTED_MODULE_22__["VirtualScrollModule"],
                _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_23__["ScrollingModule"],
                _angular_material_tabs__WEBPACK_IMPORTED_MODULE_24__["MatTabsModule"]
            ],
            providers: [_services_shared_service__WEBPACK_IMPORTED_MODULE_14__["SharedService"]],
            entryComponents: [_components_snackbar_snackbar_component__WEBPACK_IMPORTED_MODULE_13__["SnackbarComponent"], _components_confirm_confirm_component__WEBPACK_IMPORTED_MODULE_21__["ConfirmComponent"]]
        })
    ], SharedModule);
    return SharedModule;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: baseURL, environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "baseURL", function() { return baseURL; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var baseURL = 'https://crackmykwery.herokuapp.com';
var environment = {
    production: false,
    firebase: {
        apiKey: "AIzaSyAv92Uoh0jeHU-3MLyrmJUzWlwvr7YU2I0",
        authDomain: "crackmykwery-38516.firebaseapp.com",
        projectId: "crackmykwery-38516",
        storageBucket: "crackmykwery-38516.appspot.com",
        messagingSenderId: "343343566276",
        appId: "1:343343566276:web:5dc7d6a92a4027d314a891",
        measurementId: "G-0KR3YZK0D3"
    }
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_root_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/root/app.module */ "./src/app/root/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");





if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_root_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\Sudhanshu\.vscode\PROJECTS\ML\EDITED equation solver - Copy\Frontend\crackmykwery\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map