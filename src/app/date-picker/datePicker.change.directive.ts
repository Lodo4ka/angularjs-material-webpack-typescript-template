import * as angular from 'angular';

export class ChangeDirective implements angular.IDirective {
  restrict: string;
  priority: number;

  // scope: {
  //   mcChange: '&';
  // };

  constructor() {
    this.restrict = 'A';
    this.priority = 0;
  }
  link(
    $scope: angular.IScope,
    $element: angular.IAugmentedJQuery,
    $attrs: angular.IAttributes
  ) {
    // console.log($attrs);
    // console.log('$attrs', $attrs);
    // console.log('$scope', $scope);
    // $scope.$watch($attrs['dateTo'], changeDate => {
    //   console.log('change Date', changeDate);
    // });
  }
}
