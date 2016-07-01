'use strict';

/**
    Mock backendu --> https://docs.angularjs.org/api/ngMockE2E/service/$httpBackend
*/

angular.module('archiApp')
    .run(['$httpBackend', function ($httpBackend) {

        var projects = [{
            name: "Projekt 1",
            description: "To jest projekt nr 1"
        }, {
            name: "Projekt 2",
            description: "To jest projekt nr 2"
        }, {
            name: "Projekt 3",
            description: "To jest projekt nr 3"
        }];

        $httpBackend.whenGET('/projects').respond(function(method,url,data){
            var request = new XMLHttpRequest();

            request.open('GET','assets/json/projects.json',false);
            request.send(null);

            return [request.status, request.response,{}];
        });
        $httpBackend.whenGET(/\.html$/).passThrough();
        $httpBackend.whenGET(/\.json$/).passThrough();

    }]);
