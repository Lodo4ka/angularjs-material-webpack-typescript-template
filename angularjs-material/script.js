/**
 * You must include the dependency on 'ngMaterial'
 */
const app = angular
  .module('BlankApp', ['ngMaterial', 'ngMessages'])
  .config($mdDateLocaleProvider => {
    moment.locale("ru");
    /**
     * @param date {Date}
     * @returns {string} string representation of the provided date
     */
    // $mdDateLocaleProvider.formatDate = function (date) {
    //   return date ? moment(date).format('YYYY-MM-DD') : '';
    // };
    /**
     * @param dateString {string} string that can be converted to a Date
     * @returns {Date} JavaScript Date object created from the provided dateString
     */
    // $mdDateLocaleProvider.parseDate = function (dateString) {
    //   var m = moment(dateString, 'YYYY-MM-DD', true);
    //   return m.isValid() ? m.toDate() : new Date(NaN);
    // };

    // Allow only a day and month to be specified.
    // This is required if using the 'M/D' format with moment.js.
    // $mdDateLocaleProvider.isDateComplete = function (dateString) {
    //   dateString = dateString.trim();

    //   // Look for two chunks of content (either numbers or text) separated by delimiters.
    //   var re = /^(([a-zA-Z]{3,}|[0-9]{1,4})([ .,]+|[/-]))([a-zA-Z]{3,}|[0-9]{1,4})/;
    //   return re.test(dateString);
    // };

    //   $mdDateLocaleProvider.monthHeaderFormatter = function(date) {
    // return myShortMonths[date.getMonth()] + ' ' + date.getFullYear();
    // };

    // In addition to date display, date components also need localized messages
    // for aria-labels for screen-reader users.

    // $mdDateLocaleProvider.weekNumberFormatter = function(weekNumber) {
    //   return 'Semaine ' + weekNumber;
    // };

    // $mdDateLocaleProvider.msgCalendar = 'Calendrier';
    // $mdDateLocaleProvider.msgOpenCalendar = 'Ouvrir le calendrier';

    // You can also set when your calendar begins and ends.
    // $mdDateLocaleProvider.firstRenderableDate = new Date(1776, 6, 4);
    // $mdDateLocaleProvider.lastRenderableDate = new Date(2012, 11, 21);

  });


app.filter('dateFormatter', function () {
  return function (date, format) {
    if (!moment) {
      console.log('Error: momentJS is not loaded as a global');
      return '!momentJS';
    }
    moment.locale('ru'); //needed if you want to change the locale globally
    if (!format) {
      return moment(date).fromNow();
    } else {
      const result = moment(date).format(format);
      // if(result === "Invalid date") return moment().format('YYYY-MM-DD');
      return result; //in absence of format parameter, return the relative time from the given date
    }
  }
});

app.controller('myCtrl', ($scope, $log, $filter, $parse) => {
  $scope.date1 = moment().format('YYYY-MM-DD');
  $scope.date2 = moment().format('YYYY-MM-DD');
  moment.locale("ru");
  // $scope.date1 = new Date()
  // $scope.date2 = new Date()
  // $scope.date1 = $filter("dateFormatter")($scope.date1, 'YYYY-MM-DD')
  // $scope.date2 = $filter("dateFormatter")($scope.date2, 'YYYY-MM-DD')
  // $scope.date1 = $filter('date')($scope.date1, moment().format('YYYY-MM-DD'));
  // $scope.date2 = $filter('date')($scope.date2, moment().format('YYYY-MM-DD'));
  // $scope.date1 = new Date();
  // $scope.date2 = new Date();
  $scope.cb = () => {
    $log.log('Updated Date1: ', $scope.date1);
    $log.log('Updated Date2: ', $scope.date2);
    // $scope.date1 = $filter("dateFormatter")($scope.date1, 'YYYY-MM-DD')
    // $scope.date2 = $filter("dateFormatter")($scope.date2, 'YYYY-MM-DD')
    // $scope.date1 = moment($scope.date1).format('YYYY-MM-DD') === "Invalid date" ? ;
    $scope.date2 = moment($scope.date2).format('YYYY-MM-DD');
  };
  $scope.changeInput = () => {
    $scope.$broadcast('changeInput');
  };
});

app.directive('mcDates', $parse => {
  return {
    templateUrl: './mc-dates.html',
    link: ($scope, $element, $attrs) => {
      $scope.$on('changeInput', () => {
        $scope.cb();
      });
    },
  };
});


// app.directive('mdDatepicker', function ($parse) {
//     return {
//         require: 'ngModel',
//         link: function (scope, elem, attr, ngModel) {
//             $parse(attr.ngModel).assign(scope, new Date(_.get(scope, attr.ngModel)));
//         }
//     }
// })