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

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\r\n        <a class=\"navbar-brand\" href=\"#\">ngRxClicker</a>\r\n        <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n          <span class=\"navbar-toggler-icon\"></span>\r\n        </button>\r\n        <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\r\n          <ul class=\"navbar-nav\">\r\n            <li class=\"nav-item active\">\r\n              <a class=\"nav-link\" [routerLink]=\"['']\">Home<span class=\"sr-only\">(current)</span></a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['game']\">Game</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['login']\">Login</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" [routerLink]=\"['register']\">Register</a>\r\n            </li>\r\n            <li class=\"nav-item\">\r\n              <a class=\"nav-link\" (click)=\"clear()\" href=\"\">LogOut</a>\r\n            </li>\r\n          </ul>\r\n        </div>\r\n      </nav>"

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

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"top col-12\">\r\n            <div>\r\n                <h1>Your score: {{(statistic | async)?.score}}</h1>\r\n                <p> Money per Click {{(statistic | async)?.pointsPerClick}}</p>\r\n                <p> Money per Click {{(statistic | async)?.pointsPerSecond}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"mid-left col-8\">\r\n            <h1>*title*</h1>\r\n            <div class=\"main-button\" (click)=\"click()\"></div>\r\n            <div>\r\n                <h4>Money:</h4>\r\n            </div>\r\n            <div>\r\n                <h1>${{(statistic | async)?.money}}</h1>\r\n                <h1>{{roundCost}}</h1>\r\n                \r\n            </div>\r\n        </div>\r\n        <div class=\"mid-right col-4\">\r\n            <div class=\"shop-button\"  *ngFor=\"let item of actualUpgrades | async; let i = index;\" (click)=\"upgrade(i)\">\r\n                <p class=\"button-text name\">{{(actualUpgrades | async)[i]?.name}}</p>\r\n                <p class=\"button-text\">Lvl: {{(statistic | async)?.upgradeLvls[i].upgradeLvl}}</p>\r\n                <p class=\"button-text\">Stats: {{(actualUpgrades | async)[i]?.pointsPerClick}}/{{(actualUpgrades | async)[i]?.pointsPerSecond}}</p>\r\n                <p class=\"button-text\">Cost: {{(actualUpgrades | async)[i]?.cost}}$</p>\r\n            </div>\r\n            <!--\r\n                <div class=\"shop-button\" (click)=\"upgradeSeconds()\">\r\n                <p>+1/s</p>\r\n                <p>100$</p>\r\n            </div>\r\n            <div class=\"shop-button\"><a value=\"spl1\" (click)=\"upgrade()\"></a></div>\r\n            <div class=\"shop-button\"><a value=\"spl1\" (click)=\"upgrade()\"></a></div>\r\n            -->\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");



var AuthGuard = /** @class */ (function () {
    function AuthGuard(store) {
        this.store = store;
    }
    AuthGuard.prototype.canActivate = function () {
        if (localStorage.getItem('actualUser') === null) {
            return false;
        }
        return true;
    };
    AuthGuard.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], AuthGuard);
    return AuthGuard;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");



var DataService = /** @class */ (function () {
    function DataService(http) {
        this.http = http;
        this.url = 'http://192.168.2.223/api';
    }
    DataService.prototype.getAllUpgrades = function () {
        return this.http.get(this.url + '/upgrades');
    };
    DataService.prototype.login = function (data) {
        return this.http.post(this.url + '/login', data);
    };
    DataService.prototype.register = function (data) {
        return this.http.post(this.url + '/users', data);
    };
    DataService.prototype.updateStats = function (id, data) {
        return this.http.put(this.url + '/stats/' + id, data);
    };
    DataService.prototype.getAllStats = function () {
        return this.http.get(this.url + '/stats');
    };
    DataService.prototype.getStatsById = function (id) {
        return this.http.get(this.url + "/stats/" + id);
    };
    DataService.prototype.getStatsByUsername = function (username) {
        return this.http.get(this.url + "/stats/" + username);
    };
    DataService.ctorParameters = function () { return [
        { type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"] }
    ]; };
    DataService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]])
    ], DataService);
    return DataService;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent() {
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.clear = function () {
        localStorage.removeItem('aaa');
        localStorage.removeItem('actualUser');
    };
    NavbarComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/index.js!./src/app/_shared/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/_shared/navbar/navbar.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], NavbarComponent);
    return NavbarComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");








var routes = [
    { path: '', component: _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_4__["WelcomeComponent"] },
    { path: 'game', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], canActivate: [_guards_auth_guard__WEBPACK_IMPORTED_MODULE_7__["AuthGuard"]] },
    { path: 'login', component: _components_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"] },
    { path: 'register', component: _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_6__["RegistrationComponent"] }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'ng-clicker';
    }
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/index.js!./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



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
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/login/login.component */ "./src/app/components/login/login.component.ts");
/* harmony import */ var _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/registration/registration.component */ "./src/app/components/registration/registration.component.ts");
/* harmony import */ var _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/welcome/welcome.component */ "./src/app/components/welcome/welcome.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./_shared/navbar/navbar.component */ "./src/app/_shared/navbar/navbar.component.ts");
/* harmony import */ var _store_reducers_actualUpgrades_reducer__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./store/reducers/actualUpgrades.reducer */ "./src/app/store/reducers/actualUpgrades.reducer.ts");
/* harmony import */ var _store_reducers_userStatsId_reducer__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./store/reducers/userStatsId.reducer */ "./src/app/store/reducers/userStatsId.reducer.ts");
/* harmony import */ var _store_reducers_upgrades_reducer__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./store/reducers/upgrades.reducer */ "./src/app/store/reducers/upgrades.reducer.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _store_effects_upgrades_effect__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./store/effects/upgrades.effect */ "./src/app/store/effects/upgrades.effect.ts");
/* harmony import */ var _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./_guards/auth.guard */ "./src/app/_guards/auth.guard.ts");
/* harmony import */ var _store_reducers_statistic_reducer__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./store/reducers/statistic.reducer */ "./src/app/store/reducers/statistic.reducer.ts");





















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_9__["HomeComponent"],
                _components_login_login_component__WEBPACK_IMPORTED_MODULE_10__["LoginComponent"],
                _components_registration_registration_component__WEBPACK_IMPORTED_MODULE_11__["RegistrationComponent"],
                _components_welcome_welcome_component__WEBPACK_IMPORTED_MODULE_12__["WelcomeComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__["NavbarComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _ngrx_effects__WEBPACK_IMPORTED_MODULE_6__["EffectsModule"].forRoot([_store_effects_upgrades_effect__WEBPACK_IMPORTED_MODULE_18__["UpgradesEffects"]]),
                _ngrx_store__WEBPACK_IMPORTED_MODULE_3__["StoreModule"].forRoot({
                    upgrades: _store_reducers_upgrades_reducer__WEBPACK_IMPORTED_MODULE_16__["upgradesReducer"],
                    userStatsId: _store_reducers_userStatsId_reducer__WEBPACK_IMPORTED_MODULE_15__["userStatsIdReducer"],
                    actualUpgrades: _store_reducers_actualUpgrades_reducer__WEBPACK_IMPORTED_MODULE_14__["actualUpgradesReducer"],
                    statistic: _store_reducers_statistic_reducer__WEBPACK_IMPORTED_MODULE_20__["statisticReducer"],
                })
            ],
            providers: [_services_data_service__WEBPACK_IMPORTED_MODULE_17__["DataService"], _guards_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/home/home.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/home/home.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".top{\r\n    height: 100px;\r\n    \r\n}\r\n.mid-left{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n}\r\n.mid-right{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    height: 100%;\r\n}\r\n.main-button {\r\n    width: 200px;\r\n    height: 200px;\r\n    border: 5px solid green;\r\n    margin: 5px;\r\n    text-align: center;\r\n    border-radius: 15px;\r\n}\r\n.shop-button {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100px;\r\n    height: 100px;\r\n    border: 5px solid red;\r\n    border-radius: 15px;\r\n    margin: 5px;\r\n}\r\n.button-text {\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n    margin: 0;\r\n}\r\n.name {\r\n    font-size: 14px;\r\n}\r\n.green {\r\n    border-color: green;\r\n}\r\n.red {\r\n    border-color: red;\r\n}\r\n.deactivated {\r\n    border-color: gray;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixTQUFTO0FBQ2I7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnRvcHtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBcclxufVxyXG4ubWlkLWxlZnR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcblxyXG59XHJcbi5taWQtcmlnaHR7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIGZsZXgtd3JhcDogd3JhcDtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ubWFpbi1idXR0b24ge1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG4gICAgaGVpZ2h0OiAyMDBweDtcclxuICAgIGJvcmRlcjogNXB4IHNvbGlkIGdyZWVuO1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG59XHJcbi5zaG9wLWJ1dHRvbiB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIGhlaWdodDogMTAwcHg7XHJcbiAgICBib3JkZXI6IDVweCBzb2xpZCByZWQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luOiA1cHg7XHJcbn1cclxuLmJ1dHRvbi10ZXh0IHtcclxuICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG4gICAgbWFyZ2luOiAwO1xyXG59XHJcbi5uYW1lIHtcclxuICAgIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4uZ3JlZW4ge1xyXG4gICAgYm9yZGVyLWNvbG9yOiBncmVlbjtcclxufVxyXG4ucmVkIHtcclxuICAgIGJvcmRlci1jb2xvcjogcmVkO1xyXG59XHJcbi5kZWFjdGl2YXRlZCB7XHJcbiAgICBib3JkZXItY29sb3I6IGdyYXk7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions */ "./src/app/store/actions/index.ts");
/* harmony import */ var _services_data_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../_services/data.service */ "./src/app/_services/data.service.ts");





var HomeComponent = /** @class */ (function () {
    function HomeComponent(store, data) {
        this.store = store;
        this.data = data;
        this.staticUpgrades = store.select('upgrades');
        this.actualUpgrades = store.select('actualUpgrades');
        this.statistic = store.select('statistic');
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        setInterval(function () {
            _this.upgradeStats();
        }, 3000);
        setInterval(function () {
            _this.tick();
        }, 1000);
    };
    HomeComponent.prototype.upgradeStats = function () {
        var _this = this;
        this.statistic.subscribe(function (res) {
            if (res === undefined || res.upgradeLvls === undefined) {
                console.log("Błędny zapis");
            }
            else {
                console.log("ZAPISYWANIE");
                var userStats = {
                    id: res.id,
                    username: res.username,
                    score: res.score,
                    money: res.money,
                    pointsPerClick: res.pointsPerClick,
                    pointsPerSecond: res.pointsPerSecond,
                    clicks: res.clicks,
                    scoreFromClicks: res.scoreFromClicks,
                    scoreFromSecond: res.scoreFromSecond,
                    upgradeLvls: res.upgradeLvls
                };
                _this.data.updateStats(res.id, userStats).subscribe(function (res) {
                }), function (err) { console.log(err); };
            }
        }).unsubscribe();
    };
    HomeComponent.prototype.click = function () {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["StatisticActions"].ClickEvent());
    };
    HomeComponent.prototype.tick = function () {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["StatisticActions"].TickEvent());
    };
    HomeComponent.prototype.upgrade = function (id) {
        var _this = this;
        this.actualUpgrades.subscribe(function (res) {
            _this.roundCost = res[0].cost;
            Math.round(_this.roundCost);
        });
        this.statistic.subscribe(function (resStat) {
            _this.store.select('actualUpgrades').subscribe(function (resUpgrades) {
                if (resStat.money >= resUpgrades[id].cost) {
                    _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_3__["ActualUpgradesActions"].Buy(id));
                }
                else {
                    console.log("Cena: " + resUpgrades[id].cost + "!");
                }
            });
        });
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] },
        { type: _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"], _services_data_service__WEBPACK_IMPORTED_MODULE_4__["DataService"]])
    ], HomeComponent);
    return HomeComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../store/actions */ "./src/app/store/actions/index.ts");







var LoginComponent = /** @class */ (function () {
    function LoginComponent(store, router, fb, sc) {
        this.store = store;
        this.router = router;
        this.fb = fb;
        this.sc = sc;
        this.login = this.fb.group({
            username: [''],
            password: ['']
        });
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_6__["UpgradesActions"].GetUpgrades());
        this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_6__["ActualUpgradesActions"].GetUpgrades());
    };
    LoginComponent.prototype.submit = function () {
        var _this = this;
        this.sc.login(this.login.value).subscribe(function (res) {
            _this.store.dispatch(new _store_actions__WEBPACK_IMPORTED_MODULE_6__["StatisticActions"].GetStatistic({ username: _this.f.username.value }));
            localStorage.setItem('actualUser', _this.f.username.value);
            _this.router.navigate(['/game']);
        });
    };
    LoginComponent.prototype.register = function () {
        this.router.navigate(['/register']);
    };
    Object.defineProperty(LoginComponent.prototype, "f", {
        get: function () {
            return this.login['controls'];
        },
        enumerable: true,
        configurable: true
    });
    LoginComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_4__["Store"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"] },
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] }
    ]; };
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
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/components/registration/registration.component.css":
/*!********************************************************************!*\
  !*** ./src/app/components/registration/registration.component.css ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".container {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZWdpc3RyYXRpb24vcmVnaXN0cmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtBQUN2QiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvcmVnaXN0cmF0aW9uL3JlZ2lzdHJhdGlvbi5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbn0iXX0= */"

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");





var RegistrationComponent = /** @class */ (function () {
    function RegistrationComponent(fb, data, router) {
        this.fb = fb;
        this.data = data;
        this.router = router;
    }
    RegistrationComponent.prototype.ngOnInit = function () {
        this.register = this.fb.group({
            username: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            repeatPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    };
    RegistrationComponent.prototype.submit = function () {
        var _this = this;
        this.data.register({ username: this.f.username.value, password: this.f.password.value }).subscribe(function (res) {
            _this.router.navigate(['/login']);
        }, function (error) { console.log(error); });
    };
    Object.defineProperty(RegistrationComponent.prototype, "f", {
        get: function () {
            return this.register['controls'];
        },
        enumerable: true,
        configurable: true
    });
    RegistrationComponent.ctorParameters = function () { return [
        { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"] }
    ]; };
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
    return RegistrationComponent;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/_services/data.service */ "./src/app/_services/data.service.ts");




var WelcomeComponent = /** @class */ (function () {
    function WelcomeComponent(router, sc) {
        this.router = router;
        this.sc = sc;
        this.users = [];
    }
    WelcomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.sc.getAllStats().subscribe(function (res) {
            var e_1, _a;
            try {
                for (var _b = tslib__WEBPACK_IMPORTED_MODULE_0__["__values"](res['values']), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var item = _c.value;
                    var obj = {
                        username: item.username,
                        score: item.score
                    };
                    _this.users.push(obj);
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        });
    };
    WelcomeComponent.prototype.play = function () {
        this.router.navigate(['/login']);
    };
    WelcomeComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] },
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"] }
    ]; };
    WelcomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-welcome',
            template: __webpack_require__(/*! raw-loader!./welcome.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/welcome/welcome.component.html"),
            styles: [__webpack_require__(/*! ./welcome.component.css */ "./src/app/components/welcome/welcome.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_services_data_service__WEBPACK_IMPORTED_MODULE_3__["DataService"]])
    ], WelcomeComponent);
    return WelcomeComponent;
}());



/***/ }),

/***/ "./src/app/store/actions/actualUpgrades.action.ts":
/*!********************************************************!*\
  !*** ./src/app/store/actions/actualUpgrades.action.ts ***!
  \********************************************************/
/*! exports provided: CHANGE_ACTUAL_UPGRADES, LOAD_SUCCESS, UPDATE, UPDATE2, BUY, GET_UPGRADES, Buy, ChangeActualUpgradesValue, LoadSuccess, Update, Update2, GetUpgrades */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CHANGE_ACTUAL_UPGRADES", function() { return CHANGE_ACTUAL_UPGRADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LOAD_SUCCESS", function() { return LOAD_SUCCESS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE", function() { return UPDATE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UPDATE2", function() { return UPDATE2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BUY", function() { return BUY; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GET_UPGRADES", function() { return GET_UPGRADES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Buy", function() { return Buy; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeActualUpgradesValue", function() { return ChangeActualUpgradesValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadSuccess", function() { return LoadSuccess; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update", function() { return Update; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Update2", function() { return Update2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GetUpgrades", function() { return GetUpgrades; });
var CHANGE_ACTUAL_UPGRADES = '[ACTUAL_UPGRADES] Change';
var LOAD_SUCCESS = '[ACTUAL_UPGRADES] Load Success';
var UPDATE = '[ACTUAL_UPGRADES] Update';
var UPDATE2 = '[ACTUAL_UPGRADES] Update2';
var BUY = '[ACTUAL_UPGRADES] Buy';
var GET_UPGRADES = '[ACTUAL_UPGRADES] Get';
var Buy = /** @class */ (function () {
    function Buy(payload) {
        this.payload = payload;
        this.type = BUY;
    }
    ;
    Buy.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Buy;
}());

var ChangeActualUpgradesValue = /** @class */ (function () {
    function ChangeActualUpgradesValue(payload) {
        this.payload = payload;
        this.type = CHANGE_ACTUAL_UPGRADES;
    }
    ChangeActualUpgradesValue.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return ChangeActualUpgradesValue;
}());

var LoadSuccess = /** @class */ (function () {
    function LoadSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_SUCCESS;
    }
    LoadSuccess.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return LoadSuccess;
}());

var Update = /** @class */ (function () {
    function Update(payload) {
        this.payload = payload;
        this.type = UPDATE;
    }
    ;
    Update.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return Update;
}());

var Update2 = /** @class */ (function () {
    function Update2() {
        this.type = UPDATE2;
    }
    return Update2;
}());

var GetUpgrades = /** @class */ (function () {
    function GetUpgrades() {
        this.type = GET_UPGRADES;
    }
    return GetUpgrades;
}());



/***/ }),

/***/ "./src/app/store/actions/index.ts":
/*!****************************************!*\
  !*** ./src/app/store/actions/index.ts ***!
  \****************************************/
/*! exports provided: UpgradesActions, ActualUpgradesActions, UserStatsIdActions, StatisticActions */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _upgrades_action__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./upgrades.action */ "./src/app/store/actions/upgrades.action.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "UpgradesActions", function() { return _upgrades_action__WEBPACK_IMPORTED_MODULE_0__; });
/* harmony import */ var _actualUpgrades_action__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actualUpgrades.action */ "./src/app/store/actions/actualUpgrades.action.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "ActualUpgradesActions", function() { return _actualUpgrades_action__WEBPACK_IMPORTED_MODULE_1__; });
/* harmony import */ var _userStatsId_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./userStatsId.actions */ "./src/app/store/actions/userStatsId.actions.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "UserStatsIdActions", function() { return _userStatsId_actions__WEBPACK_IMPORTED_MODULE_2__; });
/* harmony import */ var _statistic_action__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./statistic.action */ "./src/app/store/actions/statistic.action.ts");
/* harmony reexport (module object) */ __webpack_require__.d(__webpack_exports__, "StatisticActions", function() { return _statistic_action__WEBPACK_IMPORTED_MODULE_3__; });







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
var GET_STATISTIC = '[STATS] Get';
var LOAD_SUCCESS = '[STATS] Load Success';
var CLICK_EVENT = '[STATS] Click';
var TICK_EVENT = '[STATS] Tick';
var UPDATE_STATS_BY_UPGRADE = '[STATS] UpdateStatsByUpgrade';
var GetStatistic = /** @class */ (function () {
    function GetStatistic(payload) {
        this.payload = payload;
        this.type = GET_STATISTIC;
    }
    GetStatistic.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return GetStatistic;
}());

var LoadSuccess = /** @class */ (function () {
    function LoadSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_SUCCESS;
    }
    LoadSuccess.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return LoadSuccess;
}());

var ClickEvent = /** @class */ (function () {
    function ClickEvent() {
        this.type = CLICK_EVENT;
    }
    return ClickEvent;
}());

var TickEvent = /** @class */ (function () {
    function TickEvent() {
        this.type = TICK_EVENT;
    }
    return TickEvent;
}());

var UpdateStatsByUpgrade = /** @class */ (function () {
    function UpdateStatsByUpgrade(payload) {
        this.payload = payload;
        this.type = UPDATE_STATS_BY_UPGRADE;
    }
    ;
    UpdateStatsByUpgrade.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return UpdateStatsByUpgrade;
}());



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
var GET_UPGRADES = '[UPGRADES] Get';
var LOAD_SUCCESS = '[UPGRADES] Load Success';
var GetUpgrades = /** @class */ (function () {
    function GetUpgrades() {
        this.type = GET_UPGRADES;
    }
    return GetUpgrades;
}());

var LoadSuccess = /** @class */ (function () {
    function LoadSuccess(payload) {
        this.payload = payload;
        this.type = LOAD_SUCCESS;
    }
    LoadSuccess.ctorParameters = function () { return [
        { type: Array }
    ]; };
    return LoadSuccess;
}());



/***/ }),

/***/ "./src/app/store/actions/userStatsId.actions.ts":
/*!******************************************************!*\
  !*** ./src/app/store/actions/userStatsId.actions.ts ***!
  \******************************************************/
/*! exports provided: SAVE_USER_STATS_ID, SaveUserStatsId */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SAVE_USER_STATS_ID", function() { return SAVE_USER_STATS_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaveUserStatsId", function() { return SaveUserStatsId; });
var SAVE_USER_STATS_ID = '[UserStatsId] Save';
var SaveUserStatsId = /** @class */ (function () {
    function SaveUserStatsId(payload) {
        this.payload = payload;
        this.type = SAVE_USER_STATS_ID;
    }
    SaveUserStatsId.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SaveUserStatsId;
}());



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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ngrx/effects */ "./node_modules/@ngrx/effects/fesm5/effects.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
/* harmony import */ var src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/_services/data.service */ "./src/app/_services/data.service.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");







var UpgradesEffects = /** @class */ (function () {
    function UpgradesEffects(actions$, dataService, store) {
        var _this = this;
        this.actions$ = actions$;
        this.dataService = dataService;
        this.store = store;
        this.loadStatistic$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])('[STATS] Get'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function (merge) { return _this.dataService.getStatsByUsername(merge['payload']['username'])
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (stats) { return ({ type: '[STATS] Load Success', payload: stats }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]; })); })); });
        this.loadUpgrades$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])('[UPGRADES] Get'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function () { return _this.dataService.getAllUpgrades()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (upgrades) { return ({ type: '[UPGRADES] Load Success', payload: upgrades }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]; })); })); });
        this.loadActualUpgrades$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])('[ACTUAL_UPGRADES] Get'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["concatMap"])(function () { return _this.dataService.getAllUpgrades()
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (upgrades) { return ({ type: '[ACTUAL_UPGRADES] Load Success', payload: upgrades }); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function () { return rxjs__WEBPACK_IMPORTED_MODULE_3__["EMPTY"]; })); })); });
        this.buyUpgrade$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])('[ACTUAL_UPGRADES] Buy'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (merge) { return _this.store.select('actualUpgrades')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (actualUpgrades) { return [
            ({ type: '[STATS] UpdateStatsByUpgrade', payload: { id: merge['payload'], upgrade: actualUpgrades[merge['payload']] } }),
        ]; })); })); });
        this.updateUpgrades$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])('[STATS] UpdateStatsByUpgrade'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["mergeMap"])(function (merge) { return _this.store.select('statistic')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["exhaustMap"])(function (stats) { return [{ type: '[ACTUAL_UPGRADES] Update2', payload: { id: merge['payload']['id'], upgradeLvl: stats['upgradeLvls'][merge['payload']['id']]['upgradeLvl'] } }]; })); })); });
        this.updateUpgrades2$ = Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["createEffect"])(function () { return _this.actions$.pipe(Object(_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["ofType"])('[ACTUAL_UPGRADES] Update2'), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (merge) { return _this.store.select('upgrades')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["switchMap"])(function (upgrades) { return [({ type: '[ACTUAL_UPGRADES] Update', payload: { id: merge['payload']['id'], basicUpgrades: upgrades[merge['payload']['id']], upgradeLvl: merge['payload']['upgradeLvl'] } })]; })); })); });
    }
    UpgradesEffects.ctorParameters = function () { return [
        { type: _ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"] },
        { type: src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"] },
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"] }
    ]; };
    UpgradesEffects = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_effects__WEBPACK_IMPORTED_MODULE_2__["Actions"],
            src_app_services_data_service__WEBPACK_IMPORTED_MODULE_5__["DataService"],
            _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["Store"]])
    ], UpgradesEffects);
    return UpgradesEffects;
}());



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
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActualUpgradesActions"].UPDATE2:
            return state;
        case _actions__WEBPACK_IMPORTED_MODULE_0__["ActualUpgradesActions"].BUY:
            return state;
        default:
            return state;
    }
}
function Update(state, payload) {
    var newState = state;
    if (payload.upgradeLvl > 30) {
        newState[payload.id].pointsPerClick = Math.round(payload.basicUpgrades.pointsPerClick * ((payload.upgradeLvl / 10) + 1));
        newState[payload.id].pointsPerSecond = Math.round(payload.basicUpgrades.pointsPerSecond * ((payload.upgradeLvl / 10) + 1));
        newState[payload.id].cost = Math.round(payload.upgradeLvl * (payload.basicUpgrades.cost * ((payload.upgradeLvl / 10) - 1)));
    }
    else if (payload.upgradeLvl > 20) {
        newState[payload.id].pointsPerClick = Math.round(payload.basicUpgrades.pointsPerClick * 4);
        newState[payload.id].pointsPerSecond = Math.round(payload.basicUpgrades.pointsPerSecond * 4);
        newState[payload.id].cost = Math.round(payload.upgradeLvl * (payload.basicUpgrades.cost * 1.8));
    }
    else if (payload.upgradeLvl > 10) {
        newState[payload.id].pointsPerClick = Math.round(payload.basicUpgrades.pointsPerClick * 2);
        newState[payload.id].pointsPerSecond = Math.round(payload.basicUpgrades.pointsPerSecond * 2);
        newState[payload.id].cost = Math.round(payload.upgradeLvl * (payload.basicUpgrades.cost * 1.4));
    }
    else {
        newState[payload.id].pointsPerClick = Math.round(payload.basicUpgrades.pointsPerClick);
        newState[payload.id].pointsPerSecond = Math.round(payload.basicUpgrades.pointsPerSecond);
        newState[payload.id].cost = Math.round(payload.upgradeLvl * (payload.basicUpgrades.cost * 1.2));
    }
    return newState;
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

var initialStateClick = null;
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
    return newState;
}
function UpdateStatsByUpgrade(state, payload) {
    var newState = state;
    newState.pointsPerClick += payload.upgrade.pointsPerClick;
    newState.pointsPerSecond += payload.upgrade.pointsPerSecond;
    newState.money -= payload.upgrade.cost;
    newState.upgradeLvls[payload.id].upgradeLvl += 1;
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

/***/ "./src/app/store/reducers/userStatsId.reducer.ts":
/*!*******************************************************!*\
  !*** ./src/app/store/reducers/userStatsId.reducer.ts ***!
  \*******************************************************/
/*! exports provided: userStatsIdReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "userStatsIdReducer", function() { return userStatsIdReducer; });
/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions */ "./src/app/store/actions/index.ts");

var initialState = {
    userStatsId: null,
    username: null
};
function userStatsIdReducer(state, action) {
    if (state === void 0) { state = initialState; }
    switch (action.type) {
        case _actions__WEBPACK_IMPORTED_MODULE_0__["UserStatsIdActions"].SAVE_USER_STATS_ID:
            return state = action.payload;
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
var environment = {
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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


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
//# sourceMappingURL=main-es5.js.map