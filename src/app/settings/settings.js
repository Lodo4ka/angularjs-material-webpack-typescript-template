"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var SettingsCtrl = /** @class */ (function () {
    function SettingsCtrl($rootScope) {
        this.$rootScope = $rootScope;
        this.theme = "blue";
        this.themes = ["blue", "green"];
    }
    SettingsCtrl.prototype.$onInit = function () {
    };
    SettingsCtrl.prototype.updateTheme = function () {
        console.warn("update theme");
        this.$rootScope.$broadcast("update-theme", this.theme);
    };
    return SettingsCtrl;
}());
SettingsCtrl.$inject = ["$rootScope"];
exports.default = {
    bindings: {},
    templateUrl: require("./settings.html"),
    controller: SettingsCtrl
};
//# sourceMappingURL=settings.js.map