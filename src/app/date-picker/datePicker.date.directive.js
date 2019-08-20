"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// export class DateDirective implements angular.IDirective {
//     restrict: string;
//     priority: number;
//     constructor() {
//         this.restrict = 'A';
//         this.priority = 0;
//     }
//     link(
//         $scope: angular.IScope,
//         $element: angular.IAugmentedJQuery,
//         $attrs: angular.IAttributes
//     ) {
//     }
// }
// function DateDirective(): angular.IDirective {
//     return {
//         restrict: "A",
//         template: "",
//         scope: {
//             args: "="
//         },
//         link: (
//             $scope: angular.IScope,
//             $element: angular.IAugmentedJQuery,
//             $attrs: angular.IAttributes
//         ) => {
//             // $element.on("change", () => {
//             //     console.log('$attrs', $attrs)
//             // })
//             console.log("init")
//         }
//     };
// }
// export default DateDirective;
// export class DateDirective {
//     public static $inject: Array<string> = [];
//     constructor() {
//         const directive: ng.IDirective = {};
//         directive.priority = 0;
//         directive.restrict = "A";
//         directive.scope = {};
//         directive.transclude = true;
//         directive.replace = true;
//         directive.controller = function (
// $scope: angular.IScope,
//             $element: angular.IAugmentedJQuery,
//             $attrs: angular.IAttributes
//         ) {
//             console.log($attrs)
//         }
//         directive.replace = true;
//         return directive;
//     }
// }
exports.DateDirective = function ($timeout) {
    return ({
        // scope: {
        //     mcChange: "&"
        // },
        restrict: 'A',
        link: function ($scope, $element, $attrs) {
            // $scope.$watch($attrs.todoAutofocus, (newValue, oldValue) => {
            //     if (!newValue) {
            //         return;
            //     }
            //     $timeout(() => $element[0].focus());
            // });
            console.log($attrs);
        },
    });
};
//# sourceMappingURL=datePicker.date.directive.js.map