(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/_shared/navbar/navbar.component.html":
/*!********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/_shared/navbar/navbar.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n        <a class=\"navbar-brand\" href=\"#\">ngRxClicker</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item active\">\r\n              <a class=\"nav-link\" [routerLink]=\"['']\">Home<span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['game']\">Game</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['login']\">Login</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['register']\">Register</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" (click)=\"clear()\" [routerLink]=\"['']\">LogOut</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </nav>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"top col-12\">\r\n            <div *ngIf=\"window\">\r\n                <p>Welcome {{username}}</p>\r\n                <p>Your statistics:</p>\r\n                <h3>Your score: {{(statistic | async)?.score}}</h3>\r\n                <p>Money/click: {{(statistic | async)?.pointsPerClick}}</p>\r\n                <p>Money/s: {{(statistic | async)?.pointsPerSecond}}</p>\r\n                <p>Time played: {{(statistic | async)?.timePlayed}} seconds</p>\r\n                <p>Clicks: {{(statistic | async)?.clicks}}</p>\r\n                <p>Score/clicks: {{( statistic | async)?.scoreFromClicks}}</p>\r\n                <p>Score/sec: {{( statistic | async)?.scoreFromSecond}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"mid-left col-8\">\r\n            <h1>*title*</h1>\r\n            <div class=\"main-button shadow p-3 mb-5\" (click)=\"click()\"></div>\r\n            <div>\r\n                <h4>Money:</h4>\r\n            </div>\r\n            <div>\r\n                <h1>${{(statistic | async)?.money}}</h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"mid-right col-4\">\r\n            <div *ngFor=\"let item of actualUpgrades | async; let i = index;\" (click)=\"upgrade(i)\">\r\n                <div class=\"shadow p-3 mb-5 shop-button\" *ngIf=\"((statistic | async)?.score >= (i * 1000))\" [ngClass]=\"((statistic | async)?.money >= (actualUpgrades | async)[i]?.cost)?'green':'red'\">\r\n                    <p class=\"button-text name\">{{(actualUpgrades | async)[i]?.name}}</p>\r\n                    <p class=\"button-text\">Lvl: {{(statistic | async)?.upgradeLevels[i].upgradeLvl}}</p>\r\n                    <p class=\"button-text\">Stats:\r\n                        {{(actualUpgrades | async)[i]?.pointsPerClick}}/{{(actualUpgrades | async)[i]?.pointsPerSecond}}\r\n                    </p>\r\n                    <p class=\"button-text\">Cost: {{(actualUpgrades | async)[i]?.cost}}$</p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/loading/loading.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/loading/loading.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"spinner-border\" role=\"status\">\n    <span class=\"sr-only\">Loading...</span>\n  </div>\n\n"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html":
/*!*********************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/login/login.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"container\">\r\n    <form [formGroup]=\"login\" >\r\n        <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" id=\"username\" aria-describedby=\"usernameHelp\"\r\n                placeholder=\"Enter username\" #username required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"password\">Password</label>\r\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"password\" placeholder=\"Enter password\" #password required>\r\n        </div>\r\n        <button type=\"submit\" (click)=\"submit()\" class=\"btn btn-dark\">Submit</button>\r\n        <button type=\"button\" (click)=\"register()\" class=\"btn btn-darl\">Register</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/registration/registration.component.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/registration/registration.component.html ***!
  \***********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <form [formGroup]=\"register\" class=\"needs-validation\" >\r\n        <div class=\"form-group\">\r\n            <label for=\"username\">Username</label>\r\n            <input type=\"text\" formControlName=\"username\" class=\"form-control\" id=\"username\" aria-describedby=\"usernameHelp\"\r\n                placeholder=\"Enter username\" #username required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n            <label for=\"exampleInputPassword1\">Password</label>\r\n            <input type=\"password\" formControlName=\"password\" class=\"form-control\" id=\"exampleInputPassword1\" placeholder=\"Password\" #password required>\r\n        </div>\r\n        <div class=\"form-group\">\r\n                <label for=\"exampleInputPassword2\">Repeat password</label>\r\n                <input type=\"password\" formControlName=\"repeatPassword\" class=\"form-control invalid\" id=\"exampleInputPassword2\" placeholder=\"Repeat password\" #repeatPassword required>\r\n            </div>\r\n        <button type=\"submit\" (click)=\"submit()\" class=\"btn btn-dark\">Submit</button>\r\n    </form>\r\n</div>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/welcome/welcome.component.html":
/*!*************************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/welcome/welcome.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <h1>Welcome to *title*</h1>\r\n  <h4>Press button below to play!</h4>\r\n  <button type=\"button\" class=\"btn btn-dark\" (click)=\"play()\">Play</button>\r\n\r\n  <div class=\"ranking-window\">\r\n    <table class=\"table\">\r\n      <thead class=\"thead-dark\">\r\n        <tr>\r\n          <th scope=\"col\">Id</th>\r\n          <th scope=\"col\">Name</th>\r\n          <th scope=\"col\">Score</th>\r\n        </tr>\r\n      </thead>\r\n      <tbody>\r\n        <tr *ngFor=\"let item of users, let i=index;\">\r\n          <th scope=\"row\">{{(i+1)}}</th>\r\n          <td>{{item.username}}</td>\r\n          <td>{{item.score}}</td>\r\n        </tr>\r\n      </tbody>\r\n    </table>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/_guards/auth.guard.ts":
/*!***************************************!*\
  !*** ./src/app/_guards/auth.guard.ts ***!
  \***************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");



let AuthGuard = class AuthGuard {
    constructor(store) {
        this.store = store;
    }
    canActivate() {
        if (localStorage.getItem('token') === null) {
            return false;
        }
        return true;
    }
};
AuthGuard.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], AuthGuard);



/***/ }),

/***/ "./src/app/_services/data.service.ts":
/*!*******************************************!*\
  !*** ./src/app/_services/data.service.ts ***!
  \*******************************************/
/*! exports provided: DataService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataService", function() { return DataService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");



let DataService = class DataService {
    constructor(http) {
        this.http = http;
        this.url2 = 'https://localhost:44335/api';
        this.url = 'http://192.168.2.223/api';
        this.token = 'Bearer ' + localStorage.getItem('token');
    }
    getAllUpgrades() {
        return this.http.get(this.url + '/upgrades');
    }
    login(data) {
        return this.http.post(this.url + '/users/login', data);
    }
    register(data) {
        return this.http.post(this.url + '/users/register', data);
    }
    updateStats(username, data, token2) {
        this.tokenAuth2 = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token2,
            }),
        };
        return this.http.put(this.url + '/users/update/' + username, data, this.tokenAuth2);
    }
    getAllStats() {
        return this.http.get(this.url + '/users/stats');
    }
    getStatsById(id) {
        return this.http.get(this.url + "/user/stats/" + id);
    }
    getStatsByUsername(username, token2) {
        this.tokenAuth = {
            headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                "Content-Type": "application/json",
                "Authorization": "Bearer " + token2,
            }),
        };
        return this.http.get(this.url + "/Users/" + username, this.tokenAuth);
    }
};
DataService.ctorParameters = () => [
    { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
];
DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
], DataService);



/***/ }),

/***/ "./src/app/_shared/navbar/navbar.component.css":
/*!*****************************************************!*\
  !*** ./src/app/_shared/navbar/navbar.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL19zaGFyZWQvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/_shared/navbar/navbar.component.ts":
/*!****************************************************!*\
  !*** ./src/app/_shared/navbar/navbar.component.ts ***!
  \****************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_store_actions_logout_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/store/actions/logout.action */ "./src/app/store/actions/logout.action.ts");




let NavbarComponent = class NavbarComponent {
    constructor(store) {
        this.store = store;
    }
    ngOnInit() {
    }
    clear() {
        localStorage.removeItem('user');
        localStorage.removeItem('token');
        this.store.dispatch(new src_app_store_actions_logout_action__WEBPACK_IMPORTED_MODULE_3__["Logout"]());
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
];
NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-navbar',
        template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/_shared/navbar/navbar.component.html"),
        styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/_shared/navbar/navbar.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
], NavbarComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");









const routes = [
    { path: '', component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"] },
    { path: 'game', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"] },
    { path: 'loading', component: _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_8__["LoadingComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".body {\r\n    background-color: #FFF1D0;\r\n}\r\n.html {\r\n    background-color: #FFF1D0;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJvZHkge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0ZGRjFEMDtcclxufVxyXG4uaHRtbCB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGMUQwO1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'ng-clicker';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
        styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
    })
], AppComponent);



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_shared/navbar/navbar.component */ "./src/app/_shared/navbar/navbar.component.ts");
/* harmony import */ var _store_reducers_actualUpgrades_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/reducers/actualUpgrades.reducer */ "./src/app/store/reducers/actualUpgrades.reducer.ts");
/* harmony import */ var _store_reducers_upgrades_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/reducers/upgrades.reducer */ "./src/app/store/reducers/upgrades.reducer.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _store_effects_upgrades_effect__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./store/effects/upgrades.effect */ "./src/app/store/effects/upgrades.effect.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _store_reducers_statistic_reducer__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./store/reducers/statistic.reducer */ "./src/app/store/reducers/statistic.reducer.ts");
/* harmony import */ var _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/loading/loading.component */ "./src/app/components/loading/loading.component.ts");
/* harmony import */ var _store_reducers_logout_reducer__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./store/reducers/logout.reducer */ "./src/app/store/reducers/logout.reducer.ts");






















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
            _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
            _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
            _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationComponent"],
            _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"],
            _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"],
            _components_loading_loading_component__WEBPACK_IMPORTED_MODULE_20__["LoadingComponent"]
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
            _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_store_effects_upgrades_effect__WEBPACK_IMPORTED_MODULE_17__["UpgradesEffects"]]),
            _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({
                upgrades: _store_reducers_upgrades_reducer__WEBPACK_IMPORTED_MODULE_15__["upgradesReducer"],
                actualUpgrades: _store_reducers_actualUpgrades_reducer__WEBPACK_IMPORTED_MODULE_14__["actualUpgradesReducer"],
                statistic: _store_reducers_statistic_reducer__WEBPACK_IMPORTED_MODULE_19__["statisticReducer"],
            }, {
                metaReducers: [_store_reducers_logout_reducer__WEBPACK_IMPORTED_MODULE_21__["clearState"]]
            }),
        ],
        providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_16__["DataService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_18__["AuthGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":root {\r\n    --first-color: #086788;\r\n    --second-color: #07A0C3;\r\n    --third-color: #F0C808;\r\n    --fourth-color: #FFF1D0;\r\n    --fifth-color: #DD1C1A;\r\n    --btn-available: #9BE564;\r\n\r\n}\r\n.html {\r\n    background-color: #FFF1D0;\r\n}\r\n.container {\r\n    background-color: #FFF1D0;\r\n}\r\n.top{\r\n    display: flex;\r\n    flex-direction: row;\r\n    height: 30%;\r\n    background-color: #FFF1D0;\r\n    color: #086788;\r\n    font-size: 13px;\r\n    margin: none;\r\n}\r\np {\r\n    margin: 0;\r\n}\r\n.window {\r\n    display: flex;\r\n    flex-direction: row;\r\n}\r\n.mid-left{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    flex-grow: 1;\r\n    background-color: #FFF1D0;\r\n\r\n}\r\n.mid-right{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    height: 100%;\r\n    flex-grow: 1;\r\n    background-color: #FFF1D0;\r\n}\r\n.main-button {\r\n    width: 200px;\r\n    height: 200px;\r\n    background-color: #F0C808;\r\n    margin: 5px;\r\n    text-align: center;\r\n    border-radius: 15px;\r\n}\r\n.shop-button {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100px;\r\n    height: 100px;\r\n    border: 5px solid;\r\n    border-color: #9BE564;\r\n    border-radius: 15px;\r\n    margin: 5px;\r\n}\r\n.button-text {\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    margin: 0;\r\n}\r\n.name {\r\n    font-size: 14px;\r\n}\r\n.green {\r\n    border-color: #9BE564;\r\n    background-color: #9BE564;\r\n}\r\n.red {\r\n    border-color: #DD1C1A;\r\n    background-color: #DD1C1A;\r\n}\r\n.deactivated {\r\n    border-color: gray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsc0JBQXNCO0lBQ3RCLHVCQUF1QjtJQUN2QixzQkFBc0I7SUFDdEIsd0JBQXdCOztBQUU1QjtBQUNBO0lBQ0kseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSx5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsV0FBVztJQUNYLHlCQUF5QjtJQUN6QixjQUFjO0lBQ2QsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFNBQVM7QUFDYjtBQUNBO0lBQ0ksYUFBYTtJQUNiLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsWUFBWTtJQUNaLHlCQUF5Qjs7QUFFN0I7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCO0FBQ0E7SUFDSSxZQUFZO0lBQ1osYUFBYTtJQUNiLHlCQUF5QjtJQUN6QixXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsdUJBQXVCO0lBQ3ZCLFlBQVk7SUFDWixhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLHFCQUFxQjtJQUNyQixtQkFBbUI7SUFDbkIsV0FBVztBQUNmO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLFNBQVM7QUFDYjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0kscUJBQXFCO0lBQ3JCLHlCQUF5QjtBQUM3QjtBQUNBO0lBQ0ksa0JBQWtCO0FBQ3RCIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIjpyb290IHtcclxuICAgIC0tZmlyc3QtY29sb3I6ICMwODY3ODg7XHJcbiAgICAtLXNlY29uZC1jb2xvcjogIzA3QTBDMztcclxuICAgIC0tdGhpcmQtY29sb3I6ICNGMEM4MDg7XHJcbiAgICAtLWZvdXJ0aC1jb2xvcjogI0ZGRjFEMDtcclxuICAgIC0tZmlmdGgtY29sb3I6ICNERDFDMUE7XHJcbiAgICAtLWJ0bi1hdmFpbGFibGU6ICM5QkU1NjQ7XHJcblxyXG59XHJcbi5odG1sIHtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkYxRDA7XHJcbn1cclxuLmNvbnRhaW5lciB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRkZGMUQwO1xyXG59XHJcblxyXG4udG9we1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICBoZWlnaHQ6IDMwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkYxRDA7XHJcbiAgICBjb2xvcjogIzA4Njc4ODtcclxuICAgIGZvbnQtc2l6ZTogMTNweDtcclxuICAgIG1hcmdpbjogbm9uZTtcclxufVxyXG5wIHtcclxuICAgIG1hcmdpbjogMDtcclxufVxyXG4ud2luZG93IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG59XHJcbi5taWQtbGVmdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkYxRDA7XHJcblxyXG59XHJcbi5taWQtcmlnaHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGZsZXgtZ3JvdzogMTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNGRkYxRDA7XHJcbn1cclxuLm1haW4tYnV0dG9uIHtcclxuICAgIHdpZHRoOiAyMDBweDtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjRjBDODA4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5zaG9wLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZDtcclxuICAgIGJvcmRlci1jb2xvcjogIzlCRTU2NDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4uYnV0dG9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbiAgICBtYXJnaW46IDA7XHJcbn1cclxuLm5hbWUge1xyXG4gICAgZm9udC1zaXplOiAxNHB4O1xyXG59XHJcbi5ncmVlbiB7XHJcbiAgICBib3JkZXItY29sb3I6ICM5QkU1NjQ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjOUJFNTY0O1xyXG59XHJcbi5yZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjREQxQzFBO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI0REMUMxQTtcclxufVxyXG4uZGVhY3RpdmF0ZWQge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmF5O1xyXG59Il19 */"

/***/ }),

/***/ "./src/app/components/home/home.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/home/home.component.ts ***!
  \***************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./src/app/store/actions/index.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/data.service */ "./src/app/_services/data.service.ts");





let HomeComponent = class HomeComponent {
    constructor(store, data) {
        this.store = store;
        this.data = data;
        this.text = "Hide";
        this.window = true;
        this.username = localStorage.getItem('user');
        this.staticUpgrades = store.select('upgrades');
        this.actualUpgrades = store.select('actualUpgrades');
        this.statistic = store.select('statistic');
    }
    ngOnInit() {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["UpgradesActions"].GetUpgrades());
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["ActualUpgradesActions"].GetUpgrades());
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["StatisticActions"].GetStatistic({ username: localStorage.getItem('user') }));
        this.timer1 = setInterval(() => {
            this.upgradeStats();
        }, 1000);
        this.timer2 = setInterval(() => {
            this.tick();
        }, 1000);
    }
    ngOnDestroy() {
        clearInterval(this.timer1);
        clearInterval(this.timer2);
        localStorage.removeItem('token');
    }
    upgradeStats() {
        this.statistic.subscribe(res => {
            if (res === undefined || res.upgradeLevels === undefined) {
                console.log("Błędny zapis");
            }
            else {
                let userStats = {
                    score: res.score,
                    money: res.money,
                    pointsPerClick: res.pointsPerClick,
                    pointsPerSecond: res.pointsPerSecond,
                    clicks: res.clicks,
                    scoreFromClicks: res.scoreFromClicks,
                    scoreFromSecond: res.scoreFromSecond,
                    timePlayed: res.timePlayed,
                    upgradeLevels: res.upgradeLevels
                };
                this.data.updateStats(localStorage.getItem('user'), userStats, localStorage.getItem('token')).subscribe(res => {
                });
            }
        }).unsubscribe();
    }
    openWindow() {
        this.window = !this.window;
        if (this.window == true) {
            this.text = "Hide";
        }
        else {
            this.text = "Open";
        }
    }
    click() {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["StatisticActions"].ClickEvent());
    }
    tick() {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["StatisticActions"].TickEvent());
    }
    upgrade(id) {
        this.statistic.subscribe(resStat => {
            this.store.select('actualUpgrades').subscribe(resUpgrades => {
                if (resStat.money >= resUpgrades[id].cost) {
                    this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["ActualUpgradesActions"].Buy(id));
                }
            });
        });
    }
};
HomeComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
        styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
], HomeComponent);



/***/ }),

/***/ "./src/app/components/loading/loading.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/loading/loading.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9hZGluZy9sb2FkaW5nLmNvbXBvbmVudC5jc3MifQ== */"

/***/ }),

/***/ "./src/app/components/loading/loading.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/loading/loading.component.ts ***!
  \*********************************************************/
/*! exports provided: LoadingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingComponent", function() { return LoadingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/_services/data.service */ "./src/app/_services/data.service.ts");





let LoadingComponent = class LoadingComponent {
    constructor(store, router, sc) {
        this.store = store;
        this.router = router;
        this.sc = sc;
    }
    ngOnInit() {
        this.router.navigate(['/game']);
    }
};
LoadingComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
];
LoadingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-loading',
        template: __webpack_require__(/*! raw-loader!./loading.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/loading/loading.component.html"),
        styles: [__webpack_require__(/*! ./loading.component.css */ "./src/app/components/loading/loading.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"],
        _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
], LoadingComponent);



/***/ }),

/***/ "./src/app/components/login/login.component.css":
/*!******************************************************!*\
  !*** ./src/app/components/login/login.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/components/login/login.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/components/login/login.component.ts ***!
  \*****************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/data.service */ "./src/app/_services/data.service.ts");






let LoginComponent = class LoginComponent {
    constructor(store, router, fb, sc) {
        this.store = store;
        this.router = router;
        this.fb = fb;
        this.sc = sc;
        this.login = this.fb.group({
            username: [''],
            password: ['']
        });
    }
    ngOnInit() {
        this.store.subscribe(res => {
            console.log(res);
        }).unsubscribe();
    }
    submit() {
        this.sc.login(this.login.value).subscribe(res => {
            localStorage.clear();
            localStorage.setItem('token', res['token']);
            localStorage.setItem('user', this.f.username.value);
            this.router.navigate(['/loading']);
        });
    }
    register() {
        this.router.navigate(['/register']);
    }
    get f() {
        return this.login['controls'];
    }
};
LoginComponent.ctorParameters = () => [
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: __webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/login/login.component.html"),
        styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/components/login/login.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"],
        _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"],
        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"]])
], LoginComponent);



/***/ }),

/***/ "./src/app/components/registration/registration.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/components/registration/registration.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/components/registration/registration.component.ts ***!
  \*******************************************************************/
/*! exports provided: RegistrationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RegistrationComponent", function() { return RegistrationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");





let RegistrationComponent = class RegistrationComponent {
    constructor(fb, data, router) {
        this.fb = fb;
        this.data = data;
        this.router = router;
    }
    ngOnInit() {
        this.register = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            repeatPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    submit() {
        this.data.register({ username: this.f.username.value, password: this.f.password.value }).subscribe(res => {
        }, error => { console.log(error); });
        this.router.navigate(['/login']);
    }
    get f() {
        return this.register['controls'];
    }
};
RegistrationComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
];
RegistrationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-registration',
        template: __webpack_require__(/*! raw-loader!./registration.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/registration/registration.component.html"),
        styles: [__webpack_require__(/*! ./registration.component.css */ "./src/app/components/registration/registration.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"],
        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"],
        _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
], RegistrationComponent);



/***/ }),

/***/ "./src/app/components/welcome/welcome.component.css":
/*!**********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.css ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n.ranking-window {\r\n    margin-top: 10px;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy93ZWxjb21lL3dlbGNvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxnQkFBZ0I7QUFDcEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3dlbGNvbWUvd2VsY29tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn1cclxuLnJhbmtpbmctd2luZG93IHtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn0iXX0= */"

/***/ }),

/***/ "./src/app/components/welcome/welcome.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/components/welcome/welcome.component.ts ***!
  \*********************************************************/
/*! exports provided: WelcomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WelcomeComponent", function() { return WelcomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/data.service */ "./src/app/_services/data.service.ts");




let WelcomeComponent = class WelcomeComponent {
    constructor(router, sc) {
        this.router = router;
        this.sc = sc;
        this.users = [];
    }
    ngOnInit() {
        this.sc.getAllStats().subscribe(res => {
            for (let item of res['stats']) {
                var obj = {
                    username: item.username,
                    score: item.score
                };
                this.users.push(obj);
            }
        });
    }
    play() {
        this.router.navigate(['/login']);
    }
};
WelcomeComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
];
WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-welcome',
        template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/welcome/welcome.component.html"),
        styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/components/welcome/welcome.component.css")]
    }),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
], WelcomeComponent);



/***/ }),

/***/ "./src/app/store/actions/actualUpgrades.action.ts":
/*!********************************************************!*\
  !*** ./src/app/store/actions/actualUpgrades.action.ts ***!
  \********************************************************/
/*! exports provided: CHANGE_ACTUAL_UPGRADES, LOAD_SUCCESS, UPDATE, INITIAL_UPDATE, BUY, GET_UPGRADES, Buy, ChangeActualUpgradesValue, LoadSuccess, Update, Update2, GetUpgrades */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ACTUAL_UPGRADES", function() { return CHANGE_ACTUAL_UPGRADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SUCCESS", function() { return LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INITIAL_UPDATE", function() { return INITIAL_UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUY", function() { return BUY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_UPGRADES", function() { return GET_UPGRADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buy", function() { return Buy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeActualUpgradesValue", function() { return ChangeActualUpgradesValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update2", function() { return Update2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUpgrades", function() { return GetUpgrades; });
const CHANGE_ACTUAL_UPGRADES = '[ACTUAL_UPGRADES] Change';
const LOAD_SUCCESS = '[ACTUAL_UPGRADES] Load Success';
const UPDATE = '[ACTUAL_UPGRADES] Update';
const INITIAL_UPDATE = '[ACTUAL_UPGRADES] InicialNextUpdate';
const BUY = '[ACTUAL_UPGRADES] Buy';
const GET_UPGRADES = '[ACTUAL_UPGRADES] Get';
class Buy {
    constructor(payload) {
        this.payload = payload;
        this.type = BUY;
    }
    ;
}
Buy.ctorParameters = () => [
    { type: undefined }
];
class ChangeActualUpgradesValue {
    constructor(payload) {
        this.payload = payload;
        this.type = CHANGE_ACTUAL_UPGRADES;
    }
}
ChangeActualUpgradesValue.ctorParameters = () => [
    { type: undefined }
];
class LoadSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_SUCCESS;
    }
}
LoadSuccess.ctorParameters = () => [
    { type: Array }
];
class Update {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE;
    }
    ;
}
Update.ctorParameters = () => [
    { type: undefined }
];
class Update2 {
    constructor() {
        this.type = INITIAL_UPDATE;
    }
}
class GetUpgrades {
    constructor() {
        this.type = GET_UPGRADES;
    }
}


/***/ }),

/***/ "./src/app/store/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/actions/index.ts ***!
  \****************************************/
/*! exports provided: UpgradesActions, ActualUpgradesActions, StatisticActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upgrades_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upgrades.action */ "./src/app/store/actions/upgrades.action.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "UpgradesActions", function() { return _upgrades_action__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _actualUpgrades_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actualUpgrades.action */ "./src/app/store/actions/actualUpgrades.action.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ActualUpgradesActions", function() { return _actualUpgrades_action__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _statistic_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./statistic.action */ "./src/app/store/actions/statistic.action.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "StatisticActions", function() { return _statistic_action__WEBPACK_IMPORTED_MODULE_2__; });






/***/ }),

/***/ "./src/app/store/actions/logout.action.ts":
/*!************************************************!*\
  !*** ./src/app/store/actions/logout.action.ts ***!
  \************************************************/
/*! exports provided: ActionsTypes, Logout */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActionsTypes", function() { return ActionsTypes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Logout", function() { return Logout; });
class ActionsTypes {
}
ActionsTypes.LOGOUT = "[App] logout";
class Logout {
    constructor() {
        this.type = ActionsTypes.LOGOUT;
    }
}


/***/ }),

/***/ "./src/app/store/actions/statistic.action.ts":
/*!***************************************************!*\
  !*** ./src/app/store/actions/statistic.action.ts ***!
  \***************************************************/
/*! exports provided: GET_STATISTIC, LOAD_SUCCESS, CLICK_EVENT, TICK_EVENT, UPDATE_STATS_BY_UPGRADE, GetStatistic, LoadSuccess, ClickEvent, TickEvent, UpdateStatsByUpgrade */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_STATISTIC", function() { return GET_STATISTIC; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SUCCESS", function() { return LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CLICK_EVENT", function() { return CLICK_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TICK_EVENT", function() { return TICK_EVENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE_STATS_BY_UPGRADE", function() { return UPDATE_STATS_BY_UPGRADE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetStatistic", function() { return GetStatistic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClickEvent", function() { return ClickEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TickEvent", function() { return TickEvent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateStatsByUpgrade", function() { return UpdateStatsByUpgrade; });
const GET_STATISTIC = '[STATS] Get';
const LOAD_SUCCESS = '[STATS] Load Success';
const CLICK_EVENT = '[STATS] Click';
const TICK_EVENT = '[STATS] Tick';
const UPDATE_STATS_BY_UPGRADE = '[STATS] UpdateStatsByUpgrade';
class GetStatistic {
    constructor(payload) {
        this.payload = payload;
        this.type = GET_STATISTIC;
    }
}
GetStatistic.ctorParameters = () => [
    { type: undefined }
];
class LoadSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_SUCCESS;
    }
}
LoadSuccess.ctorParameters = () => [
    { type: undefined }
];
class ClickEvent {
    constructor() {
        this.type = CLICK_EVENT;
    }
}
class TickEvent {
    constructor() {
        this.type = TICK_EVENT;
    }
}
class UpdateStatsByUpgrade {
    constructor(payload) {
        this.payload = payload;
        this.type = UPDATE_STATS_BY_UPGRADE;
    }
    ;
}
UpdateStatsByUpgrade.ctorParameters = () => [
    { type: undefined }
];


/***/ }),

/***/ "./src/app/store/actions/upgrades.action.ts":
/*!**************************************************!*\
  !*** ./src/app/store/actions/upgrades.action.ts ***!
  \**************************************************/
/*! exports provided: GET_UPGRADES, LOAD_SUCCESS, GetUpgrades, LoadSuccess */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_UPGRADES", function() { return GET_UPGRADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SUCCESS", function() { return LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUpgrades", function() { return GetUpgrades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return LoadSuccess; });
const GET_UPGRADES = '[UPGRADES] Get';
const LOAD_SUCCESS = '[UPGRADES] Load Success';
class GetUpgrades {
    constructor() {
        this.type = GET_UPGRADES;
    }
}
class LoadSuccess {
    constructor(payload) {
        this.payload = payload;
        this.type = LOAD_SUCCESS;
    }
}
LoadSuccess.ctorParameters = () => [
    { type: Array }
];


/***/ }),

/***/ "./src/app/store/effects/upgrades.effect.ts":
/*!**************************************************!*\
  !*** ./src/app/store/effects/upgrades.effect.ts ***!
  \**************************************************/
/*! exports provided: UpgradesEffects */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpgradesEffects", function() { return UpgradesEffects; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm2015/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm2015/store.js");







let UpgradesEffects = class UpgradesEffects {
    constructor(actions$, dataService, store) {
        this.actions$ = actions$;
        this.dataService = dataService;
        this.store = store;
        this.loadStatistic$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])('[STATS] Get'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(merge => this.dataService.getStatsByUsername(merge['payload']['username'], localStorage.getItem('token'))
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(stats => ({ type: '[STATS] Load Success', payload: stats })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"])))));
        this.loadUpgrades$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])('[UPGRADES] Get'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(() => this.dataService.getAllUpgrades()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(upgrades => ({ type: '[UPGRADES] Load Success', payload: upgrades })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"])))));
        this.loadActualUpgrades$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])('[ACTUAL_UPGRADES] Get'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(() => this.dataService.getAllUpgrades()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(upgrades => ({ type: '[ACTUAL_UPGRADES] Load Success', payload: upgrades })), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(() => rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"])))));
        this.buyUpgrade$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])('[ACTUAL_UPGRADES] Buy'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(merge => this.store.select('actualUpgrades')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(actualUpgrades => [
            ({ type: '[STATS] UpdateStatsByUpgrade', payload: { id: merge['payload'], upgrade: actualUpgrades[merge['payload']] } }),
        ])))));
        this.updateUpgrades$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])('[STATS] UpdateStatsByUpgrade'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(merge => this.store.select('statistic')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(stats => [({ type: '[ACTUAL_UPGRADES] InicialNextUpdate', payload: { id: merge['payload']['id'], upgradeLvl: stats['upgradeLevels'][merge['payload']['id']]['upgradeLvl'] } })])))));
        this.updateUpgrades2$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(() => this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])('[ACTUAL_UPGRADES] InicialNextUpdate'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(merge => this.store.select('upgrades')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(upgrades => [({ type: '[ACTUAL_UPGRADES] Update', payload: { id: merge['payload']['id'], basicUpgrades: upgrades[merge['payload']['id']], upgradeLvl: merge['payload']['upgradeLvl'] } })])))));
    }
};
UpgradesEffects.ctorParameters = () => [
    { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
    { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
    { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
];
UpgradesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
    tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
        src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
        _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
], UpgradesEffects);



/***/ }),

/***/ "./src/app/store/reducers/actualUpgrades.reducer.ts":
/*!**********************************************************!*\
  !*** ./src/app/store/reducers/actualUpgrades.reducer.ts ***!
  \**********************************************************/
/*! exports provided: actualUpgradesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "actualUpgradesReducer", function() { return actualUpgradesReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");

function actualUpgradesReducer(state, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActualUpgradesActions"].GET_UPGRADES:
            return state;
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActualUpgradesActions"].CHANGE_ACTUAL_UPGRADES:
            return state;
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActualUpgradesActions"].LOAD_SUCCESS:
            return state = action.payload;
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActualUpgradesActions"].UPDATE:
            return Update(state, action.payload);
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActualUpgradesActions"].INITIAL_UPDATE:
            return state;
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActualUpgradesActions"].BUY:
            return state;
        default:
            return state;
    }
}
function Update(state, payload) {
    var upgrade_id = payload.id;
    var basicPPC = payload.basicUpgrades.pointsPerClick;
    var basicPPS = payload.basicUpgrades.pointsPerSecond;
    var basicCost = payload.basicUpgrades.cost;
    var actualLvl = payload.upgradeLvl;
    var przelicznikPPC = Math.round(actualLvl / 5);
    var przelicznikCost = 1 + Math.round(actualLvl / 5) * 0.1;
    state[upgrade_id].pointsPerClick = Math.round(basicPPC * przelicznikPPC);
    state[upgrade_id].pointsPerSecond = Math.round(basicPPS * przelicznikPPC);
    state[upgrade_id].cost = Math.round(actualLvl * (basicCost * przelicznikCost));
    return state;
}


/***/ }),

/***/ "./src/app/store/reducers/logout.reducer.ts":
/*!**************************************************!*\
  !*** ./src/app/store/reducers/logout.reducer.ts ***!
  \**************************************************/
/*! exports provided: clearState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clearState", function() { return clearState; });
/* harmony import */ var _actions_logout_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/logout.action */ "./src/app/store/actions/logout.action.ts");

function clearState(reducer) {
    return function (state, action) {
        if (action.type === _actions_logout_action__WEBPACK_IMPORTED_MODULE_0__["ActionsTypes"].LOGOUT) {
            state = undefined;
        }
        return reducer(state, action);
    };
}


/***/ }),

/***/ "./src/app/store/reducers/statistic.reducer.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/reducers/statistic.reducer.ts ***!
  \*****************************************************/
/*! exports provided: statisticReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "statisticReducer", function() { return statisticReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");

function statisticReducer(state, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["StatisticActions"].GET_STATISTIC:
            return state;
        case _actions__WEBPACK_IMPORTED_MODULE_0__["StatisticActions"].LOAD_SUCCESS:
            return state = action.payload;
        case _actions__WEBPACK_IMPORTED_MODULE_0__["StatisticActions"].CLICK_EVENT:
            return ClickEvent(state);
        case _actions__WEBPACK_IMPORTED_MODULE_0__["StatisticActions"].TICK_EVENT:
            return TickEvent(state);
        case _actions__WEBPACK_IMPORTED_MODULE_0__["StatisticActions"].UPDATE_STATS_BY_UPGRADE:
            return UpdateStatsByUpgrade(state, action.payload);
        default:
            return state;
    }
}
function ClickEvent(state) {
    var newState = state;
    newState.score += state.pointsPerClick;
    newState.money += state.pointsPerClick;
    newState.clicks += 1;
    newState.scoreFromClicks += state.pointsPerClick;
    return newState;
}
function TickEvent(state) {
    var newState = state;
    newState.score += state.pointsPerSecond;
    newState.money += state.pointsPerSecond;
    newState.scoreFromSecond += state.pointsPerSecond;
    newState.timePlayed += 1;
    return newState;
}
function UpdateStatsByUpgrade(state, payload) {
    var newState = state;
    newState.pointsPerClick += payload.upgrade.pointsPerClick;
    newState.pointsPerSecond += payload.upgrade.pointsPerSecond;
    newState.money -= payload.upgrade.cost;
    newState.upgradeLevels[payload.id].upgradeLvl += 1;
    return newState;
}


/***/ }),

/***/ "./src/app/store/reducers/upgrades.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/store/reducers/upgrades.reducer.ts ***!
  \****************************************************/
/*! exports provided: upgradesReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "upgradesReducer", function() { return upgradesReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");

function upgradesReducer(state, action) {
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["UpgradesActions"].LOAD_SUCCESS:
            return state = action.payload;
        case _actions__WEBPACK_IMPORTED_MODULE_0__["UpgradesActions"].GET_UPGRADES:
            return state;
        default:
            return state;
    }
}


/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\dcop\workspace\learning\ng-clicker\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map