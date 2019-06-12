import * as angular from 'angular';
import { DatePickerCtrl } from './datePicker.controller';

export class DatePickerComponent implements angular.IComponentOptions {
  controller = DatePickerCtrl;
  templateUrl = require('./datePicker.html');
}
