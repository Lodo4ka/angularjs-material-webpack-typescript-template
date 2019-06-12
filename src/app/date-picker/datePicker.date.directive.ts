import * as angular from 'angular';

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

export const DateDirective = ($timeout: angular.ITimeoutService) => (<angular.IDirective>{
    // scope: {
    //     // mcChange: "="
    // },
    restrict: 'A',
    link(
        $scope: angular.IScope,
        $element: angular.IAugmentedJQuery,
        $attrs: angular.IAttributes
    ) {
        // $scope.$watch($attrs.todoAutofocus, (newValue, oldValue) => {
        //     if (!newValue) {
        //         return;
        //     }
        //     $timeout(() => $element[0].focus());
        // });
        console.log($attrs);
    }
});
