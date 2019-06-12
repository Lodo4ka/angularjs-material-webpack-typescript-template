import * as angular from 'angular';
import { DateDirective } from './datePicker.date.directive';
import { DatePickerComponent } from './datePicker.component';



export default angular
  .module('mcDates', [])
  .directive('dateTo', DateDirective)
  .directive('dateFrom', DateDirective)
  .directive('mcChange', DateDirective)
  .component('mcDates', new DatePickerComponent()).name;
