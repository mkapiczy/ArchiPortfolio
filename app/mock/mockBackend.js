'use strict';

/**
    Mock backendu --> https://docs.angularjs.org/api/ngMockE2E/service/$httpBackend
*/

angular.module('archiApp')
    .run(['$httpBackend', function($httpBackend) {

        $httpBackend.whenGET('/projects').respond(getJson('assets/json/projects.json'));
        $httpBackend.whenGET('/getProjectsTypes').respond(getJson('assets/json/projectTypes.json'));
        $httpBackend.whenGET(/\.html$/).passThrough();
        $httpBackend.whenGET(/\.json$/).passThrough();


        function getJson(path) {
            return function(method, url, data) {
                var request = new XMLHttpRequest();

                request.open('GET', path, false);
                request.send(null);

                return [request.status, request.response, {}];
            };
        };
    }]);
