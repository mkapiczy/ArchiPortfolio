'use strict'

angular.module('archiApp')
    .controller('projectsController', ['$scope', 'projectsService', function ($scope, projectsService) {

        $scope.projects = [];

        $scope.getProjects = function () {
            projectsService.fetchProjects()
                .then (
                    function (data) {
                            $scope.projects = data;
                    },
                    function (errResponse) {
                        console.error(errResponse);
                    }
                );
            $scope.p2 = $scope.projects;
        };

        $scope.getProjects();
}]);
