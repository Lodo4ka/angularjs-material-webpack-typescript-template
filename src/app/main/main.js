"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainCtrl = /** @class */ (function () {
    function MainCtrl($scope, $mdSidenav, $location) {
        var _this = this;
        this.$scope = $scope;
        this.$mdSidenav = $mdSidenav;
        this.$location = $location;
        this.currentTheme = 'blue';
        this.menu = [
            { link: 'home', title: 'Home', icon: 'home' },
            { link: 'settings', title: 'Settings', icon: 'settings' },
        ];
        this.$scope.$on('update-theme', function (event, args) {
            _this.currentTheme = args;
        });
    }
    MainCtrl.prototype.$onInit = function () { };
    MainCtrl.prototype.toggleNav = function () {
        this.$mdSidenav('left').toggle();
    };
    MainCtrl.prototype.openNav = function () {
        this.$mdSidenav('left').open();
    };
    MainCtrl.prototype.closeNav = function () {
        this.$mdSidenav('left').close();
    };
    MainCtrl.prototype.goTo = function (link) {
        this.$mdSidenav('left').close();
        this.$location.path(link);
    };
    return MainCtrl;
}());
MainCtrl.$inject = ['$scope', '$mdSidenav', '$location'];
exports.default = {
    bindings: { title: '=' },
    templateUrl: require('./main.html'),
    controller: MainCtrl,
};
//# sourceMappingURL=main.js.map