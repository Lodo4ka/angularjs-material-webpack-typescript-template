"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var ChangeDirective = /** @class */ (function () {
    // scope: {
    //   mcChange: '&';
    // };
    function ChangeDirective() {
        this.restrict = 'A';
        this.priority = 0;
    }
    ChangeDirective.prototype.link = function ($scope, $element, $attrs) {
        // console.log($attrs);
        // console.log('$attrs', $attrs);
        // console.log('$scope', $scope);
        // $scope.$watch($attrs['dateTo'], changeDate => {
        //   console.log('change Date', changeDate);
        // });
    };
    return ChangeDirective;
}());
exports.ChangeDirective = ChangeDirective;
//# sourceMappingURL=datePicker.change.directive.js.map