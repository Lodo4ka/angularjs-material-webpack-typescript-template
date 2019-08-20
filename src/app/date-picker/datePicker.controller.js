"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DatePickerCtrl = /** @class */ (function () {
    function DatePickerCtrl($rootScope, $scope) {
        var _this = this;
        this.$rootScope = $rootScope;
        this.$scope = $scope;
        this.onDateChanged = function () {
            // console.log(this.$scope);
            // this.changeDirective.scope;
            console.log(_this.$scope);
        };
    }
    DatePickerCtrl.prototype.$onInit = function () { };
    return DatePickerCtrl;
}());
exports.DatePickerCtrl = DatePickerCtrl;
DatePickerCtrl.$inject = ['$rootScope', '$scope'];
exports.default = {
    bindings: {},
    controller: DatePickerCtrl,
};
//# sourceMappingURL=datePicker.controller.js.map