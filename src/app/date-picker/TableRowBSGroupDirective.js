"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var TodoAutoFocus = /** @class */ (function () {
    function TodoAutoFocus($timeout) {
        this.$timeout = $timeout;
        this.restrict = 'A';
    }
    TodoAutoFocus.prototype.link = function ($scope, $element, $attrs) {
        var _this = this;
        $scope.$watch($attrs.todoAutofocus, function (newValue, oldValue) {
            if (!newValue) {
                return;
            }
            _this.$timeout(function () { return $element[0].focus(); });
        });
    };
    TodoAutoFocus.$inject = ['$timeout'];
    return TodoAutoFocus;
}());
exports.TodoAutoFocus = TodoAutoFocus;
//# sourceMappingURL=TableRowBSGroupDirective.js.map