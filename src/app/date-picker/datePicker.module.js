"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var datePicker_date_directive_1 = require("./datePicker.date.directive");
var datePicker_component_1 = require("./datePicker.component");
exports.default = angular
    .module('mcDates', [])
    .directive('dateTo', datePicker_date_directive_1.default)
    .component('mcDates', new datePicker_component_1.DatePickerComponent()).name;
//# sourceMappingURL=datePicker.module.js.map