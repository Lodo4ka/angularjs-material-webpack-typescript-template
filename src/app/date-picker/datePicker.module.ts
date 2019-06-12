import * as angular from 'angular';
import DateDirective from './datePicker.date.directive';
import { DatePickerComponent } from './datePicker.component';

export default angular
  .module('mcDates', [])
  .directive('dateTo', DateDirective)
  .component('mcDates', new DatePickerComponent()).name;
