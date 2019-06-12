"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export class DateDirective implements angular.IDirective {
//   restrict: string;
//   priority: number;
//   constructor() {
//     this.restrict = 'A';
//     this.priority = 0;
//   }
//   link(
//     $scope: angular.IScope,
//     $element: angular.IAugmentedJQuery,
//     $attrs: angular.IAttributes
//   ) {
//
//   }
// }
function DateDirective() {
    return {
        scope: {},
        link: function ($scope, $element, $attrs) {
            // $element.on("change", () => {
            //     console.log('$attrs', $attrs)
            // })
            console.log("init");
        }
    };
}
exports.default = DateDirective;
//# sourceMappingURL=datePicker.date.directive.js.map