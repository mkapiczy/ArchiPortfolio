'use strict'

angular.module('archiApp')
    .controller('projectsController', ['$scope', 'projectsService', function($scope, projectsService) {

        $scope.projects = [];
        $scope.projectsTypes = [];
        $scope.selectedProjectType = {
            id: 0,
            name: 'ALL'
        };
        $scope.getProjects = function() {
            projectsService.fetchProjects()
                .then(
                    function(data) {
                        $scope.projects = data;
                    },
                    function(errResponse) {
                        console.error(errResponse);
                    }
                );
        };

        $scope.getProjectsTypes = function() {
            projectsService.fetchProjectsTypes()
                .then(
                    function(data) {
                        $scope.projectsTypes = data;
                    },
                    function(errResponse) {
                        $log.console.error(errResponse);
                    }
                );
        };

        $scope.selectProjectType = function(type) {
            $scope.selectedProjectType = type;
        }
        $scope.getProjectsTypes();
        $scope.getProjects();
    }]);
