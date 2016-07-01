'use strict';

angular.module('app.backend', ['ui.router'])
    .service('backendService', ['$http', '$q', '$state', '$translate', '$log', function ($http, $q, $state, $translate, $log) {
        this.backendUrl = '/archi';

        this.request = function (method) {
            var deferred = $q.defer();

            return $http.get(method)
                .then(
                    function (response) {
                        return angular.fromJson(response.data);
                    },
                    function (errResponse) {
                        $log.error('Error during backend request. Status code:' + errResponse);
                        return deferred.reject(data);
                    }
                )
        };
    }]);

/*Przykładowe użycie

 this.getLineNames = function (date) {
            var deferred = $q.defer();
            backendService.request('getLineNames', {
                    organizator: '1',
                    timestamp: parseDate(date)
                })
                .then(function (data) {
                    if (data.success && data.data && data.data.lines) {
                        var lines = [];
                        for (var i = 0; i < data.data.lines.length; i++) {
                            lines.push({
                                label: data.data.lines[i].name,
                                value: data.data.lines[i].name
                            });
                        }
                        deferred.resolve(lines);
                    } else {
                        deferred.reject();
                    }
                });
            return deferred.promise;
        };
*/

/*https://www.backand.com/pricing/*/
