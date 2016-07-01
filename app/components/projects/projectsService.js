var app = angular.module('archiApp');

app.service('projectsService', ['$q', 'backendService', function ( $q, backendService) {

    this.fetchProjects = function () {
        return backendService.request('/projects')
            .then(
                function (data) {
                    return data;
                },
                function (errResponse) {
                    console.error(errResponse);
                    return $q.reject(errResponse);
                }
            )
    };
}]);
