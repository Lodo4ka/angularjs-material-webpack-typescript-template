"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function routes($urlRouterProvider, $stateProvider) {
    $stateProvider.state({ name: 'settings', url: '/settings', component: 'settings' });
}
exports.routes = routes;
routes.$inject = ['$urlRouterProvider', '$stateProvider'];
//# sourceMappingURL=settings.routes.js.map