var app = angular.module('archiApp', ['ui.bootstrap', 'ui.router', 'pascalprecht.translate', 'ngMockE2E', 'app.backend','ngAnimate']);

app.config(['$stateProvider', '$urlRouterProvider', '$translateProvider', function ($stateProvider, $urlRouterProvider, $translateProvider) {

    /* TRANSLATIONS CONFIGURATION */
    $translateProvider
        .useStaticFilesLoader({
            prefix: 'assets/translations/translations-',
            suffix: '.json'
        })

    //.useLocalStorage();
    .useMissingTranslationHandlerLog()
        .preferredLanguage('pl');

    /* ROUTING CONFIGURATION */
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

app.controller('LanguageCtrl', ['$scope', '$translate', function ($scope, $translate) {
    $scope.changeLanguage = function (language) {
        $translate.use(language);
    }
}]);


//https://www.sitepoint.com/multilingual-support-for-angularjs/
