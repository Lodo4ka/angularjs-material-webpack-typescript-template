import { ChangeDirective } from './datePicker.change.directive';

export class DatePickerCtrl {
  constructor(
    private $rootScope: ng.IRootScopeService,
    private $scope: ng.IScope
  ) {}

  $onInit() {}

  onDateChanged = () => {
    // console.log(this.$scope);
    // this.changeDirective.scope;
    console.log(this.$scope);
  };
}

DatePickerCtrl.$inject = ['$rootScope', '$scope'];

export default {
  bindings: {},
  controller: DatePickerCtrl,
};
