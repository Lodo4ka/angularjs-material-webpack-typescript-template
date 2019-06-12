"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DatePickerCtrl = /** @class */ (function () {
    function DatePickerCtrl($rootScope) {
        this.$rootScope = $rootScope;
        this.theme = 'blue';
        this.themes = ['blue', 'green'];
        this.onDateChanged = function () {
        };
    }
    DatePickerCtrl.prototype.$onInit = function () { };
    DatePickerCtrl.prototype.updateTheme = function () {
        console.warn('update theme');
        this.$rootScope.$broadcast('update-theme', this.theme);
    };
    return DatePickerCtrl;
}());
DatePickerCtrl.$inject = ['$rootScope'];
exports.default = {
    bindings: {},
    templateUrl: require('./datePicker.html'),
    controller: DatePickerCtrl,
};
//# sourceMappingURL=datePicker.js.map