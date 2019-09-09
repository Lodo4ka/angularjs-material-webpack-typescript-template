/**
 * You must include the dependency on 'ngMaterial'
 */
const app = angular
  .module('BlankApp', ['ngMaterial', 'ngMessages'])
  .config($mdDateLocaleProvider => {
    moment.locale('ru');
    /**
     * @param date {Date}
     * @returns {string} string representation of the provided date
     */
    $mdDateLocaleProvider.formatDate = function(date) {
      return moment(date).format('YYYY-MM-DD');
      // return new Date(date).toISOString()
    };
    /**
     * @param dateString {string} string that can be converted to a Date
     * @returns {Date} JavaScript Date object created from the provided dateString
     */
    $mdDateLocaleProvider.parseDate = function(dateString) {
      const m = moment(dateString, 'YYYY-MM-DD', true);
      return m.isValid() ? m.toDate().format('YYYY-MM-DD h:mm:ss a') : new Date(NaN).toISOString();
    };
    $mdDateLocaleProvider.isDateComplete = function (dateString) {
      return new Date(dateString).toISOString()
    }
  });

app.controller('myCtrl', ($scope, $log, $filter, $parse) => {
  $scope.date1 = new Date().toISOString();
  $scope.date2 = new Date().toISOString();

  function isIsoDate(str) {
    if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
    const d = new Date(str);
    return d.toISOString()===str;
  }

  $scope.cb = function () {
    console.log('this', this);
    $scope.date1 = isIsoDate($scope.date1) ? $scope.date1 : new Date($scope.date1).toISOString();
    $scope.date2 = isIsoDate($scope.date2) ? $scope.date2 : new Date($scope.date2).toISOString();
  }
});

app.directive('mcDates', $parse => {
  return {
    templateUrl: './mc-dates.html',
    link: ($scope, $element, $attrs) => {

      function isIsoDate(str) {
        if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str)) return false;
        const d = new Date(str);
        return d.toISOString()===str;
      }

      $scope.minFilter = (date) => {
        return date.toISOString() < $scope.date2;
      }

      $scope.maxFilter = (date) => {
        return date.toISOString() > $scope.date1
      }

    },
  };
});

app.directive('moDateInputCustom', ["$filter", function($filter) {
  return {
    require: '^ngModel',
    restrict: 'A',
    link: function(scope, elm, attrs, ctrl) {
      const dateFormat = "YYYY-MM-DD"
      attrs.$observe('moDateInput', function(newValue) {
        if (dateFormat == newValue || !ctrl.$modelValue) return;
        dateFormat = newValue;
        ctrl.$modelValue = new Date(ctrl.$setViewValue).toISOString();
      });

      ctrl.$formatters.unshift(function(modelValue) {
        scope = scope;
        if (!dateFormat || !modelValue) {
          return '';
        }
        const retVal = moment(modelValue).format(dateFormat);
        return retVal;
      });

      ctrl.$parsers.unshift(function(viewValue) {
        scope = scope;
        const date = moment(viewValue, dateFormat);
        const result = date && date.isValid() && date.year() > 1950
        ? date.format("YYYY-MM-DD")
        : '';
        return result;
      });

    },
  };
}]);
