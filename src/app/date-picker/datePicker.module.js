"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var datePicker_date_directive_1 = require("./datePicker.date.directive");
var datePicker_component_1 = require("./datePicker.component");
var datePicker_change_directive_1 = require("./datePicker.change.directive");
exports.default = angular
    .module('mcDates', [])
    .directive('dateTo', datePicker_date_directive_1.DateDirective)
    .directive('dateFrom', datePicker_date_directive_1.DateDirective)
    .directive('mcChange', function () { return new datePicker_change_directive_1.ChangeDirective(); })
    .component('mcDates', new datePicker_component_1.DatePickerComponent()).name;
//# sourceMappingURL=datePicker.module.js.map