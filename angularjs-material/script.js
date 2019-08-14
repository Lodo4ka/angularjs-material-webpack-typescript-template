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
    };
    // $mdDateLocaleProvider.formatDate = function(date) {
    //   if (date == null) return '';
    //   var m = moment(date);
    //   return m.isValid() ? m.format('L') : '';
    // };
    /**
     * @param dateString {string} string that can be converted to a Date
     * @returns {Date} JavaScript Date object created from the provided dateString
     */
    // $mdDateLocaleProvider.parseDate = function(dateString) {
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

app.filter('dateFormatter', function() {
  return function(date, format) {
    if (!moment) {
      console.log('Error: momentJS is not loaded as a global');
      return '!momentJS';
    }
    if (!format) {
      return moment(date).fromNow();
    } else {
      const result = moment(date).format(format);
      // if(result === "Invalid date") {
      //   return moment().format('YYYY-MM-DD');
      //   // return new Date()
      // }
      return result; //in absence of format parameter, return the relative time from the given date
    }
  };
});

app.controller('myCtrl', ($scope, $log, $filter, $parse) => {
  $scope.date1 = moment().format('YYYY-MM-DD');
  $scope.date2 = moment().format('YYYY-MM-DD');
  // $scope.dateFormat = 'YYYY-MM-DD';
  moment.locale('ru');
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
    // $scope.date2 = moment($scope.date2).format('YYYY-MM-DD');
  };

  $scope.changeInput = function($event) {
    // const element = angular.element(this).val();
    // this.text();
    // angular.element('#username').val()
    // console.log(this.text());
    // console.log(element);
    // console.log(this);
    // if (!moment.isValid(this.date1) && !moment.isValid(this.date2)) {
    // const date1 = moment().format('YYYY-MM-DD');
    // const date2 = moment().format('YYYY-MM-DD');

    const date1 = moment(this.date1, 'YYYY-MM-DD', true);
    const date2 = moment(this.date2, 'YYYY-MM-DD', true);
    if (!date1.isValid() || !date2.isValid()) {
      // this.date1 = moment().format('YYYY-MM-DD');
      // this.date2 = moment().format('YYYY-MM-DD');
      // $scope.date1 = moment($scope.date1).format('YYYY-MM-DD');
      // $scope.date2 = moment($scope.date2).format('YYYY-MM-DD');
      $scope.date1 = $filter('dateFormatter')($scope.date1, 'YYYY-MM-DD');
      $scope.date2 = $filter('dateFormatter')($scope.date2, 'YYYY-MM-DD');
    }
    // console.log(this);
    // debugger;
    // moment(this.date2, 'YYYY-MM-DD', true);
    // moment(this.date2, 'YYYY-MM-DD', true);
    // $mdDateLocaleProvider.parseDate = function(dateString) {
    //   var m = moment(dateString, 'YYYY-MM-DD', true);
    //   return m.isValid() ? m.toDate() : new Date(NaN);
    // };
    // }

  };
});

app.directive('moDateInput', function($window) {
  return {
    require: '^ngModel',
    restrict: 'A',
    link: function(scope, elm, attrs, ctrl) {
      var moment = $window.moment;
      var dateFormat = attrs.moMediumDate;
      attrs.$observe('moDateInput', function(newValue) {
        if (dateFormat == newValue || !ctrl.$modelValue) return;
        dateFormat = newValue;
        ctrl.$modelValue = new Date(ctrl.$setViewValue);
      });

      ctrl.$formatters.unshift(function(modelValue) {
        scope = scope;
        if (!dateFormat || !modelValue) return '';
        var retVal = moment(modelValue).format(dateFormat);
        return retVal;
      });

      ctrl.$parsers.unshift(function(viewValue) {
        scope = scope;
        var date = moment(viewValue, dateFormat);
        return date && date.isValid() && date.year() > 1950
          ? date.toDate()
          : '';
      });
    },
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

// app.directive('moDateInput', function($window) {
//   return {
//     require: '^ngModel',
//     restrict: 'A',
//     link: function(scope, elm, attrs, ctrl) {
//       var moment = $window.moment;
//       var dateFormat = attrs.moMediumDate;
//       attrs.$observe('moDateInput', function(newValue) {
//         if (dateFormat == newValue || !ctrl.$modelValue) return;
//         dateFormat = newValue;
//         ctrl.$modelValue = new Date(ctrl.$setViewValue);
//       });

//       ctrl.$formatters.unshift(function(modelValue) {
//         scope = scope;
//         if (!dateFormat || !modelValue) return '';
//         var retVal = moment(modelValue).format(dateFormat);
//         return retVal;
//       });

//       ctrl.$parsers.unshift(function(viewValue) {
//         scope = scope;
//         var date = moment(viewValue, dateFormat);
//         return date && date.isValid() && date.year() > 1950
//           ? date.toDate()
//           : '';
//       });
//     },
//   };
// });

app.controller('MainCtrl', function($scope) {
  // $scope.numericValue = 12345678;
  $scope.mainScope = {};
  // $scope.mainScope.myDate = moment().toDate();
  $scope.mainScope.myDate = new Date()
  $scope.dateFormats = ['DD-MMM-YYYY', 'MM-DD-YYYY', 'MM-DD-YY', 'DD-MM-YY'];
  $scope.dates = [new Date(), new Date(), new Date(), new Date()];
});

// app.directive('editor', function() {
//   return {
//     require: '?ngModel',
//     template: "<input ng-model='value' ng-change='onChange()'>",
//     link: function(scope, element, attrs, ngModel) {
//       if (!ngModel) return;

//       scope.onChange = function() {
//         ngModel.$setViewValue(scope.value);
//       };

//       ngModel.$render = function() {
//         scope.value = ngModel.$modelValue;
//       };
//     },
//   };
// });
//Inspired by http://jsfiddle.net/KPeBD/2/ //Written by David Votrubec from ST-Software.com
//Up-to-date code can be found on GitHub https://github.com/ST-Software/STAngular/blob/master/src/directives/SgNumberInput

app.directive('sgNumberInput', [
  '$filter',
  '$locale',
  function($filter, $locale) {
    return {
      require: 'ngModel',
      restrict: 'A',
      link: function($scope, element, attrs, ctrl) {
        var fractionSize = parseInt(attrs['fractionSize']) || 0;
        var numberFilter = $filter('number');
        //format the view value
        ctrl.$formatters.push(function(modelValue) {
          var retVal = numberFilter(modelValue, fractionSize);
          var isValid = isNaN(modelValue) == false;
          ctrl.$setValidity(attrs.name, isValid);
          return retVal;
        });
        //parse user's input
        ctrl.$parsers.push(function(viewValue) {
          var caretPosition = getCaretPosition(element[0]),
            nonNumericCount = countNonNumericChars(viewValue);
          viewValue = viewValue || '';
          //Replace all possible group separators
          var trimmedValue = viewValue
            .trim()
            .replace(/,/g, '')
            .replace(/`/g, '')
            .replace(/'/g, '')
            .replace(/\u00a0/g, '')
            .replace(/ /g, '');
          //If numericValue contains more decimal places than is allowed by fractionSize, then numberFilter would round the value up
          //Thus 123.109 would become 123.11
          //We do not want that, therefore I strip the extra decimal numbers
          var separator = $locale.NUMBER_FORMATS.DECIMAL_SEP;
          var arr = trimmedValue.split(separator);
          var decimalPlaces = arr[1];
          if (decimalPlaces != null && decimalPlaces.length > fractionSize) {
            //Trim extra decimal places
            decimalPlaces = decimalPlaces.substring(0, fractionSize);
            trimmedValue = arr[0] + separator + decimalPlaces;
          }
          var numericValue = parseFloat(trimmedValue);
          var isEmpty = numericValue == null || viewValue.trim() === '';
          var isRequired = attrs.required || false;
          var isValid = true;
          if (isEmpty && isRequired) {
            isValid = false;
          }
          if (isEmpty == false && isNaN(numericValue)) {
            isValid = false;
          }
          ctrl.$setValidity(attrs.name, isValid);
          if (isNaN(numericValue) == false && isValid) {
            var newViewValue = numberFilter(numericValue, fractionSize);
            element.val(newViewValue);
            var newNonNumbericCount = countNonNumericChars(newViewValue);
            var diff = newNonNumbericCount - nonNumericCount;
            var newCaretPosition = caretPosition + diff;
            if (nonNumericCount == 0 && newCaretPosition > 0) {
              newCaretPosition--;
            }
            setCaretPosition(element[0], newCaretPosition);
          }
          return isNaN(numericValue) == false ? numericValue : null;
        });
      }, //end of link function
    };
    //#region helper methods
    function getCaretPosition(inputField) {
      // Initialize
      var position = 0;
      // IE Support
      if (document.selection) {
        inputField.focus();
        // To get cursor position, get empty selection range
        var emptySelection = document.selection.createRange();
        // Move selection start to 0 position
        emptySelection.moveStart('character', -inputField.value.length);
        // The caret position is selection length
        position = emptySelection.text.length;
      } else if (inputField.selectionStart || inputField.selectionStart == 0) {
        position = inputField.selectionStart;
      }
      return position;
    }
    function setCaretPosition(inputElement, position) {
      if (inputElement.createTextRange) {
        var range = inputElement.createTextRange();
        range.move('character', position);
        range.select();
      } else {
        if (inputElement.selectionStart) {
          inputElement.focus();
          inputElement.setSelectionRange(position, position);
        } else {
          inputElement.focus();
        }
      }
    }
    function countNonNumericChars(value) {
      return (value.match(/[^a-z0-9]/gi) || []).length;
    }
    //#endregion helper methods
  },
]);
// app.directive('mdDatepicker', function ($parse) {
//     return {
//         require: 'ngModel',
//         link: function (scope, elem, attr, ngModel) {
//             $parse(attr.ngModel).assign(scope, new Date(_.get(scope, attr.ngModel)));
//         }
//     }
// })
