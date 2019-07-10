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

/***/ "./node_modules/raw-loader/index.js!./src/app/app.component.html":
/*!**************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/app.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-home></app-home>"

/***/ }),

/***/ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html":
/*!*******************************************************************************!*\
  !*** ./node_modules/raw-loader!./src/app/components/home/home.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <div class=\"top col-12\">\r\n            <div>\r\n                <h1>Your score: {{(allScore | async)?.allScore}}</h1>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"row\">\r\n        <div class=\"mid-left col-8\">\r\n            <h1>*title*</h1>\r\n            <div class=\"main-button\" (click)=\"click()\">Click</div>\r\n            <div>\r\n                <h4>Money:</h4>\r\n            </div>\r\n            <div>\r\n                <h1>${{(score | async)?.score}}</h1>\r\n            </div>\r\n        </div>\r\n        <div class=\"mid-right col-4\">\r\n            <div class=\"shop-button\" *ngFor=\"let item of upgrades; let i = index\" (click)=\"upgrade(i)\">\r\n                <p class=\"button-text\">{{item.name}}</p>\r\n                <p class=\"button-text\">{{item.pointsPerClick}}/{{item.pointsPerSec}}</p>\r\n                <p class=\"button-text\">{{item.price}}$</p>\r\n            </div>\r\n            <!--\r\n                <div class=\"shop-button\" (click)=\"upgradeSeconds()\">\r\n                <p>+1/s</p>\r\n                <p>100$</p>\r\n            </div>\r\n            <div class=\"shop-button\"><a value=\"spl1\" (click)=\"upgrade()\"></a></div>\r\n            <div class=\"shop-button\"><a value=\"spl1\" (click)=\"upgrade()\"></a></div>\r\n            -->\r\n\r\n        </div>\r\n    </div>\r\n\r\n</div>"

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




var routes = [
    { path: '', component: _components_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"] }
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
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/home/home.component */ "./src/app/components/home/home.component.ts");
/* harmony import */ var _ngrx_store__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @ngrx/store */ "./node_modules/@ngrx/store/fesm5/store.js");
/* harmony import */ var _store_reducers_score_reducer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./store/reducers/score.reducer */ "./src/app/store/reducers/score.reducer.ts");
/* harmony import */ var _store_reducers_allScore_reducer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./store/reducers/allScore.reducer */ "./src/app/store/reducers/allScore.reducer.ts");
/* harmony import */ var _store_reducers_multiplier_reducer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./store/reducers/multiplier.reducer */ "./src/app/store/reducers/multiplier.reducer.ts");










var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
                _ngrx_store__WEBPACK_IMPORTED_MODULE_6__["StoreModule"].forRoot({
                    score: _store_reducers_score_reducer__WEBPACK_IMPORTED_MODULE_7__["scoreReducer"],
                    allScore: _store_reducers_allScore_reducer__WEBPACK_IMPORTED_MODULE_8__["allScoreReducer"],
                    multiplier: _store_reducers_multiplier_reducer__WEBPACK_IMPORTED_MODULE_9__["multiplierReducer"]
                })
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
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

module.exports = ".top{\r\n    height: 100px;\r\n    \r\n}\r\n.mid-left{\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n\r\n}\r\n.mid-right{\r\n    display: flex;\r\n    flex-direction: row;\r\n    flex-wrap: wrap;\r\n    height: 100%;\r\n}\r\n.main-button {\r\n    width: 200px;\r\n    height: 200px;\r\n    border: 2px solid green;\r\n    margin: 5px;\r\n    text-align: center;\r\n    border-radius: 15px;\r\n}\r\n.shop-button {\r\n    display: flex;\r\n    flex-direction: column;\r\n    align-items: center;\r\n    justify-content: center;\r\n    width: 100px;\r\n    height: 100px;\r\n    border: 2px solid red;\r\n    border-radius: 15px;\r\n    margin: 5px;\r\n}\r\n.button-text {\r\n    font-size: 10px;\r\n    font-weight: bold;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGFBQWE7O0FBRWpCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjs7QUFFdkI7QUFDQTtJQUNJLGFBQWE7SUFDYixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFlBQVk7SUFDWixhQUFhO0lBQ2IsdUJBQXVCO0lBQ3ZCLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLG1CQUFtQjtJQUNuQix1QkFBdUI7SUFDdkIsWUFBWTtJQUNaLGFBQWE7SUFDYixxQkFBcUI7SUFDckIsbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtJQUNmLGlCQUFpQjtBQUNyQiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIudG9we1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIFxyXG59XHJcbi5taWQtbGVmdHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuXHJcbn1cclxuLm1pZC1yaWdodHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcbi5tYWluLWJ1dHRvbiB7XHJcbiAgICB3aWR0aDogMjAwcHg7XHJcbiAgICBoZWlnaHQ6IDIwMHB4O1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgZ3JlZW47XHJcbiAgICBtYXJnaW46IDVweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbn1cclxuLnNob3AtYnV0dG9uIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDEwMHB4O1xyXG4gICAgaGVpZ2h0OiAxMDBweDtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJlZDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgICBtYXJnaW46IDVweDtcclxufVxyXG4uYnV0dG9uLXRleHQge1xyXG4gICAgZm9udC1zaXplOiAxMHB4O1xyXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XHJcbn0iXX0= */"

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
/* harmony import */ var _store_actions_score_actions__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../store/actions/score.actions */ "./src/app/store/actions/score.actions.ts");
/* harmony import */ var _store_actions_allScore_actions__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../store/actions/allScore.actions */ "./src/app/store/actions/allScore.actions.ts");
/* harmony import */ var _store_actions_multiplier_actions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../store/actions/multiplier.actions */ "./src/app/store/actions/multiplier.actions.ts");






var HomeComponent = /** @class */ (function () {
    function HomeComponent(store) {
        this.store = store;
        this.upgrades = [];
        this.score = store.select('score');
        this.allScore = store.select('allScore');
        this.multiplier = store.select('multiplier');
    }
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.upgrades = [
            {
                name: 'Spell1',
                pointsPerClick: 1,
                pointsPerSec: 0,
                price: 10
            },
            {
                name: 'Spell2',
                pointsPerClick: 0,
                pointsPerSec: 1,
                price: 100
            }
        ];
        setInterval(function () {
            _this.tick();
        }, 1000);
    };
    HomeComponent.prototype.click = function () {
        var _this = this;
        this.multiplier.subscribe(function (res) {
            var points = 1 * res.pointsPerClick;
            _this.store.dispatch(new _store_actions_score_actions__WEBPACK_IMPORTED_MODULE_3__["AddScore"]({ score: points }));
            _this.store.dispatch(new _store_actions_allScore_actions__WEBPACK_IMPORTED_MODULE_4__["AddAllScore"]({ allScore: points }));
        });
    };
    HomeComponent.prototype.tick = function () {
        var _this = this;
        this.multiplier.subscribe(function (res) {
            var points = 1 * res.pointsPerSecond;
            _this.store.dispatch(new _store_actions_score_actions__WEBPACK_IMPORTED_MODULE_3__["AddScore"]({ score: points }));
            _this.store.dispatch(new _store_actions_allScore_actions__WEBPACK_IMPORTED_MODULE_4__["AddAllScore"]({ allScore: points }));
        });
    };
    HomeComponent.prototype.upgrade = function (id) {
        var _this = this;
        this.score.subscribe(function (res) {
            if (res.score < _this.upgrades[id].price) {
                console.log("Cena jest zbyt wysoka!");
                return null;
            }
            else {
                console.log("Ulepszenie zakupione!");
                _this.store.dispatch(new _store_actions_score_actions__WEBPACK_IMPORTED_MODULE_3__["SubtractScore"]({ score: _this.upgrades[id].price }));
                _this.store.dispatch(new _store_actions_multiplier_actions__WEBPACK_IMPORTED_MODULE_5__["IncrementMult"]({ pointsPerClick: _this.upgrades[id].pointsPerClick, pointsPerSecond: _this.upgrades[id].pointsPerSec }));
            }
        });
    };
    HomeComponent.prototype.upgradeSeconds = function () {
        this.store.dispatch(new _store_actions_multiplier_actions__WEBPACK_IMPORTED_MODULE_5__["IncrementMult"]({ pointsPerClick: 0, pointsPerSecond: 1 }));
    };
    HomeComponent.ctorParameters = function () { return [
        { type: _ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"] }
    ]; };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/index.js!./src/app/components/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/components/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ngrx_store__WEBPACK_IMPORTED_MODULE_2__["Store"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/store/actions/allScore.actions.ts":
/*!***************************************************!*\
  !*** ./src/app/store/actions/allScore.actions.ts ***!
  \***************************************************/
/*! exports provided: ADD_ALLSCORE, AddAllScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_ALLSCORE", function() { return ADD_ALLSCORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAllScore", function() { return AddAllScore; });
var ADD_ALLSCORE = '[ALLSCORE] Add';
var AddAllScore = /** @class */ (function () {
    function AddAllScore(payload) {
        this.payload = payload;
        this.type = ADD_ALLSCORE;
    }
    AddAllScore.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddAllScore;
}());



/***/ }),

/***/ "./src/app/store/actions/multiplier.actions.ts":
/*!*****************************************************!*\
  !*** ./src/app/store/actions/multiplier.actions.ts ***!
  \*****************************************************/
/*! exports provided: INCR_MULTIPLIERS, DECR_MULTIPLIERS, IncrementMult, DecrementMult */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "INCR_MULTIPLIERS", function() { return INCR_MULTIPLIERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DECR_MULTIPLIERS", function() { return DECR_MULTIPLIERS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncrementMult", function() { return IncrementMult; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DecrementMult", function() { return DecrementMult; });
var INCR_MULTIPLIERS = '[MULTIPLIERS] Increment';
var DECR_MULTIPLIERS = '[MULTIPLIERS] Decrement';
var IncrementMult = /** @class */ (function () {
    function IncrementMult(payload) {
        this.payload = payload;
        this.type = INCR_MULTIPLIERS;
    }
    IncrementMult.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return IncrementMult;
}());

var DecrementMult = /** @class */ (function () {
    function DecrementMult(payload) {
        this.payload = payload;
        this.type = DECR_MULTIPLIERS;
    }
    DecrementMult.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return DecrementMult;
}());



/***/ }),

/***/ "./src/app/store/actions/score.actions.ts":
/*!************************************************!*\
  !*** ./src/app/store/actions/score.actions.ts ***!
  \************************************************/
/*! exports provided: ADD_SCORE, SUBTRACT_SCORE, AddScore, SubtractScore */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ADD_SCORE", function() { return ADD_SCORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SUBTRACT_SCORE", function() { return SUBTRACT_SCORE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddScore", function() { return AddScore; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubtractScore", function() { return SubtractScore; });
var ADD_SCORE = '[SCORE] Add';
var SUBTRACT_SCORE = '[SCORE] Subtract';
var AddScore = /** @class */ (function () {
    function AddScore(payload) {
        this.payload = payload;
        this.type = ADD_SCORE;
    }
    AddScore.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return AddScore;
}());

var SubtractScore = /** @class */ (function () {
    function SubtractScore(payload) {
        this.payload = payload;
        this.type = SUBTRACT_SCORE;
    }
    SubtractScore.ctorParameters = function () { return [
        { type: undefined }
    ]; };
    return SubtractScore;
}());



/***/ }),

/***/ "./src/app/store/reducers/allScore.reducer.ts":
/*!****************************************************!*\
  !*** ./src/app/store/reducers/allScore.reducer.ts ***!
  \****************************************************/
/*! exports provided: allScoreReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "allScoreReducer", function() { return allScoreReducer; });
/* harmony import */ var _actions_allScore_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/allScore.actions */ "./src/app/store/actions/allScore.actions.ts");

var initialState = {
    allScore: 0
};
function allScoreReducer(state, action) {
    if (state === void 0) { state = getScore(); }
    switch (action.type) {
        case _actions_allScore_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_ALLSCORE"]:
            return addScore(state, action.payload);
        default:
            return state;
    }
}
function getScore() {
    return initialState;
}
function addScore(state, payload) {
    state.allScore += payload.allScore;
    return state;
}


/***/ }),

/***/ "./src/app/store/reducers/multiplier.reducer.ts":
/*!******************************************************!*\
  !*** ./src/app/store/reducers/multiplier.reducer.ts ***!
  \******************************************************/
/*! exports provided: multiplierReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "multiplierReducer", function() { return multiplierReducer; });
/* harmony import */ var _actions_multiplier_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/multiplier.actions */ "./src/app/store/actions/multiplier.actions.ts");

var initialState = {
    pointsPerClick: 1,
    pointsPerSecond: 0
};
function multiplierReducer(state, action) {
    if (state === void 0) { state = getScore(); }
    switch (action.type) {
        case _actions_multiplier_actions__WEBPACK_IMPORTED_MODULE_0__["INCR_MULTIPLIERS"]:
            return incrMultipliers(state, action.payload);
        case _actions_multiplier_actions__WEBPACK_IMPORTED_MODULE_0__["DECR_MULTIPLIERS"]:
            return decrMultipliers(state, action.payload);
        default:
            return state;
    }
}
function getScore() {
    return initialState;
}
function getInitialState() {
    var multi = {
        pointsPerClick: 2,
        pointsPerSecond: 2,
    };
    return multi;
}
function incrMultipliers(state, payload) {
    state.pointsPerClick += payload.pointsPerClick;
    state.pointsPerSecond += payload.pointsPerSecond;
    return state;
}
function decrMultipliers(state, payload) {
    state.pointsPerClick -= payload.pointsPerClick;
    state.pointsPerSecond -= payload.pointsPerSecond;
    return state;
}


/***/ }),

/***/ "./src/app/store/reducers/score.reducer.ts":
/*!*************************************************!*\
  !*** ./src/app/store/reducers/score.reducer.ts ***!
  \*************************************************/
/*! exports provided: scoreReducer */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "scoreReducer", function() { return scoreReducer; });
/* harmony import */ var _actions_score_actions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../actions/score.actions */ "./src/app/store/actions/score.actions.ts");

var initialState = {
    score: 0
};
function scoreReducer(state, action) {
    if (state === void 0) { state = getScore(); }
    switch (action.type) {
        case _actions_score_actions__WEBPACK_IMPORTED_MODULE_0__["ADD_SCORE"]:
            return addScore(state, action.payload);
        case _actions_score_actions__WEBPACK_IMPORTED_MODULE_0__["SUBTRACT_SCORE"]:
            return subtractScore(state, action.payload);
        default:
            return state;
    }
}
function getScore() {
    return initialState;
}
function addScore(state, payload) {
    state.score += payload.score;
    return state;
}
function subtractScore(state, payload) {
    state.score -= payload.score;
    return state;
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