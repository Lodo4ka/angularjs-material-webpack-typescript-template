"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var settings_1 = require("./settings");
var settings_routes_1 = require("./settings.routes");
exports.default = angular.module('settings', [])
    .config(settings_routes_1.routes)
    .component("settings", settings_1.default)
    .name;
//# sourceMappingURL=settings.module.js.map