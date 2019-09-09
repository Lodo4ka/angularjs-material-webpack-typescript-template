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
var moment = require("moment");
require("./style.scss");
var main_module_1 = require("./app/main/main.module");
var settings_module_1 = require("./app/settings/settings.module");
var home_module_1 = require("./app/home/home.module");
// import datePickerModule from './app/date-picker/datePicker.module';
angular.module('app', [
    uiRouter.default,
    ngAnimate,
    ngAria,
    ngMaterial,
    hmTouchEvents,
    main_module_1.default,
    settings_module_1.default,
    home_module_1.default,
]);
angular.module('app').config(app_routes_1.routes);
angular.module('app').config([
    '$mdThemingProvider',
    '$mdDateLocaleProvider',
    function ($mdThemingProvider, $mdDateLocaleProvider) {
        $mdThemingProvider
            .theme('blue')
            .primaryPalette('blue')
            .accentPalette('red');
        $mdThemingProvider
            .theme('green')
            .primaryPalette('teal')
            .accentPalette('red');
        moment.locale("ru");
        $mdThemingProvider.alwaysWatchTheme(true);
        $mdDateLocaleProvider.formatDate = function (date) {
            return moment(date).format('YYYY-MM-DD');
        };
        $mdDateLocaleProvider.parseDate = function (dataeString) {
            var m = moment(dataeString, 'YYYY-MM-DD');
            return m.isValid() ? m.format('YYYY-MM-DD h:mm:ss a').toString() : new Date(NaN).toISOString();
        };
        $mdDateLocaleProvider.isDateComplete = function (dateString) {
            return new Date(dateString).toISOString();
        };
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