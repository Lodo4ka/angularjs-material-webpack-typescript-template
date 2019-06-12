import * as angular from 'angular';

export class TodoAutoFocus implements angular.IDirective {
  static $inject: string[] = ['$timeout'];
  restrict: string;

  constructor(private $timeout: angular.ITimeoutService) {
    this.restrict = 'A';
  }
  link(
    $scope: angular.IScope,
    $element: angular.IAugmentedJQuery,
    $attrs: angular.IAttributes
  ) {
    $scope.$watch($attrs.todoAutofocus, (newValue, oldValue) => {
      if (!newValue) {
        return;
      }
      this.$timeout(() => $element[0].focus());
    });
  }
}
