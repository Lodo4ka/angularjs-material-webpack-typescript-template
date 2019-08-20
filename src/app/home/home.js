"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HomeCtrl = /** @class */ (function () {
    function HomeCtrl($mdSidenav, homeService) {
        this.$mdSidenav = $mdSidenav;
        this.homeService = homeService;
        this.folders = [
            { title: 'list item 1', icon: 'folder', updated: new Date('1/1/16') },
            { title: 'list item 2', icon: 'folder', updated: new Date('1/1/16') },
            { title: 'list item 3', icon: 'folder', updated: new Date('1/1/16') },
        ];
        this.test = 'some binding';
    }
    HomeCtrl.prototype.$onInit = function () {
        // console.log('homeCtrl.oninit');
    };
    HomeCtrl.prototype.changeDates = function () {
        console.log('changes dates');
    };
    HomeCtrl.prototype.testClick = function () {
        alert('asdf');
    };
    return HomeCtrl;
}());
HomeCtrl.$inject = ['$mdSidenav', 'homeService'];
exports.default = {
    bindings: {},
    templateUrl: require('./home.html'),
    controller: HomeCtrl,
};
//# sourceMappingURL=home.js.map