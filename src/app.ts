import * as angular from 'angular';
import * as ngAnimate from 'angular-animate';
import * as ngAria from 'angular-aria';
import * as ngMaterial from 'angular-material';
import * as uiRouter from '@uirouter/angularjs';
import { routes } from './app.routes';
import 'angular-material/angular-material.scss';
import 'hammerjs';
import * as hmTouchEvents from 'angular-hammer';
import * as moment from "moment";

import './style.scss';

import mainModule from './app/main/main.module';
import settingsModule from './app/settings/settings.module';
import homeModule from './app/home/home.module';
// import datePickerModule from './app/date-picker/datePicker.module';

angular.module('app', [
  uiRouter.default,
  ngAnimate,
  ngAria,
  ngMaterial,
  hmTouchEvents,
  mainModule,
  settingsModule,
  homeModule,
  // datePickerModule,
]);
angular.module('app').config(routes);

angular.module('app').config([
  '$mdThemingProvider',
  '$mdDateLocaleProvider',
  function($mdThemingProvider, $mdDateLocaleProvider) {
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

    $mdDateLocaleProvider.formatDate = function (date:Date) {
      return moment(date).format('YYYY-MM-DD')
    };

    $mdDateLocaleProvider.parseDate = function (dataeString:Date) {
      const m = moment(dataeString, 'YYYY-MM-DD');
      return m.isValid() ? m.format('YYYY-MM-DD h:mm:ss a').toString() : new Date(NaN).toISOString()
    };

    $mdDateLocaleProvider.isDateComplete = function (dateString) {
      return new Date(dateString).toISOString()
    }
  },
]);

//https://docs.angularjs.org/guide/production
angular.module('app').config([
  '$compileProvider',
  function($compileProvider) {
    $compileProvider.debugInfoEnabled(false);
    $compileProvider.commentDirectivesEnabled(false);
    $compileProvider.cssClassDirectivesEnabled(false);
  },
]);

angular.bootstrap(document, ['app']);

//https://github.com/vsternbach/angularjs-typescript-webpack
//http://ryanmullins.github.io/angular-hammer/
