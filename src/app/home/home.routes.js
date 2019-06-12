"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function routes($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider.state({ name: 'home', url: '/', component: 'home' });
}
exports.routes = routes;
routes.$inject = ['$urlRouterProvider', '$stateProvider'];
//# sourceMappingURL=home.routes.js.map