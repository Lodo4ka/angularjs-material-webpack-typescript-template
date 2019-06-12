"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DatePickerCtrl = /** @class */ (function () {
    function DatePickerCtrl($rootScope) {
        this.$rootScope = $rootScope;
        this.onDateChanged = function () {
            console.log('chnged');
        };
    }
    DatePickerCtrl.prototype.$onInit = function () { };
    return DatePickerCtrl;
}());
exports.DatePickerCtrl = DatePickerCtrl;
DatePickerCtrl.$inject = ['$rootScope'];
exports.default = {
    bindings: {},
    controller: DatePickerCtrl,
};
//# sourceMappingURL=datePicker.controller.js.map