"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MainCtrl = /** @class */ (function () {
    function MainCtrl($scope, $mdSidenav, $location) {
        var _this = this;
        this.$scope = $scope;
        this.$mdSidenav = $mdSidenav;
        this.$location = $location;
        this.currentTheme = 'blue';
        this.date1 = new Date().toISOString();
        this.date2 = new Date().toISOString();
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
    MainCtrl.prototype.isIsoDate = function (str) {
        if (!/\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z/.test(str))
            return false;
        var d = new Date(str);
        return d.toISOString() === str;
    };
    MainCtrl.prototype.callback = function () {
        this.date1 = this.isIsoDate(this.date1) ? this.date1 : new Date(this.date1).toISOString();
        this.date2 = this.isIsoDate(this.date2) ? this.date2 : new Date(this.date2).toISOString();
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