angular.module('archiApp', ['ui.bootstrap', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/home');

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'app/components/home/homeView.html'
        })
        .state('projects', {
            url: '/projects',
            templateUrl: 'app/components/projects/projectsView.html'
        })
}])

.controller('NavBarCtrl', ['$scope', function ($scope) {


}])

.controller('DropdownCtrl', function ($scope) {

    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
});
