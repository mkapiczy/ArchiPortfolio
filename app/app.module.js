angular.module('archiApp', ['ui.bootstrap', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/projects');

    $stateProvider
        .state('about', {
            url: '/about',
            templateUrl: 'app/components/about/aboutView.html'
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'app/components/projects/projectsView.html'
        })
        .state('contact', {
        url: '/contact',
        templateUrl: 'app/components/contact/contactView.html'
    })
}]);




