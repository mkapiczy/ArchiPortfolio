angular.module('archiApp', ['ui.bootstrap'])

.controller('NavBarCtrl', ['$scope', function ($scope) {


}])

.controller('DropdownCtrl', function ($scope) {

    $scope.items = [
        "The first choice!",
        "And another choice for you.",
        "but wait! A third!"
    ];
});
