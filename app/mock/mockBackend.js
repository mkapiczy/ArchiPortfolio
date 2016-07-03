'use strict';

/**
    Mock backendu --> https://docs.angularjs.org/api/ngMockE2E/service/$httpBackend
*/

angular.module('archiApp')
    .run(['$httpBackend', function($httpBackend) {

        var projects = [{
            name: "Projekt 1",
            type: {
                id: 1,
                name: 'architektoniczne'
            },
            description: "To jest projekt nr 1"
        }, {
            name: "Projekt 2",
            type:{
                id: 2,
                name: 'urbanistyczne'
            },
            description: "To jest projekt nr 2"
        }, {
            name: "Projekt 3",
            type: {
                id: 3,
                name: 'artystyczne'
            },
            description: "To jest projekt nr 3"
        }];

        var projectsTypes = [{
            id: 1,
            name: 'architektoniczne'
        }, {
            id: 2,
            name: 'urbanistyczne'
        }, {
            id: 3,
            name: 'artystyczne'
        }, {
            id: 4,
            name: 'inne'
        }];

        $httpBackend.whenGET('/projects').respond(function(method, url, data) {
            var request = new XMLHttpRequest();

            request.open('GET', 'assets/json/projects.json', false);
            request.send(null);

            return [request.status, request.response, {}];
        });
        $httpBackend.whenGET('/getProjectsTypes').respond(projectsTypes);
        $httpBackend.whenGET(/\.html$/).passThrough();
        $httpBackend.whenGET(/\.json$/).passThrough();

    }]);
