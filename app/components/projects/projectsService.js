var app = angular.module('archiApp');

app.service('projectsService', ['$q', '$log', 'backendService', function($q, $log, backendService) {

    this.fetchProjects = function() {
        return backendService.request('/projects')
            .then(
                function(data) {
                    return data;
                },
                function(errResponse) {
                    $log.error(errResponse);
                    return $q.reject(errResponse);
                }
            )
    };

    this.fetchProjectsTypes = function() {
        return backendService.request('/getProjectsTypes')
            .then(
                function(data) {
                    return data;
                },
                function(errResponse) {
                    $log.error(errResponse);
                    return $q.reject(errResponse);
                }
            )
    };
}]);
