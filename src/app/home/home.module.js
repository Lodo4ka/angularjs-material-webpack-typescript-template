"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var angular = require("angular");
var home_routes_1 = require("./home.routes");
var home_1 = require("./home");
var home_service_1 = require("./home.service");
exports.default = angular
    .module('home', [])
    .config(home_routes_1.routes)
    .component('home', home_1.default)
    .service('homeService', home_service_1.HomeService).name;
//# sourceMappingURL=home.module.js.map