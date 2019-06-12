export class DatePickerCtrl {
  constructor(private $rootScope: ng.IRootScopeService) {}

  $onInit() {}

  onDateChanged = () => {
    console.log('chnged');
  };
}

DatePickerCtrl.$inject = ['$rootScope'];

export default {
  bindings: {},
  controller: DatePickerCtrl,
};
