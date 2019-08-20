"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var ngAnimate = require("angular-animate");
var ngAria = require("angular-aria");
var ngMaterial = require("angular-material");
var uiRouter = require("@uirouter/angularjs");
var app_routes_1 = require("./app.routes");
require("angular-material/angular-material.scss");
require("hammerjs");
var hmTouchEvents = require("angular-hammer");
require("./style.scss");
var main_module_1 = require("./app/main/main.module");
var settings_module_1 = require("./app/settings/settings.module");
var home_module_1 = require("./app/home/home.module");
var datePicker_module_1 = require("./app/date-picker/datePicker.module");
angular.module('app', [
    uiRouter.default,
    ngAnimate,
    ngAria,
    ngMaterial,
    hmTouchEvents,
    main_module_1.default,
    settings_module_1.default,
    home_module_1.default,
    datePicker_module_1.default,
]);
angular.module('app').config(app_routes_1.routes);
angular.module('app').config([
    '$mdThemingProvider',
    function ($mdThemingProvider) {
        $mdThemingProvider
            .theme('blue')
            .primaryPalette('blue')
            .accentPalette('red');
        $mdThemingProvider
            .theme('green')
            .primaryPalette('teal')
            .accentPalette('red');
        $mdThemingProvider.alwaysWatchTheme(true);
    },
]);
//https://docs.angularjs.org/guide/production
angular.module('app').config([
    '$compileProvider',
    function ($compileProvider) {
        $compileProvider.debugInfoEnabled(false);
        $compileProvider.commentDirectivesEnabled(false);
        $compileProvider.cssClassDirectivesEnabled(false);
    },
]);
angular.bootstrap(document, ['app']);
//https://github.com/vsternbach/angularjs-typescript-webpack
//http://ryanmullins.github.io/angular-hammer/
//# sourceMappingURL=app.js.map