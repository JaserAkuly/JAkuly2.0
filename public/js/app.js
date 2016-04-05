angular.module('myApp', []);

angular.module('myApp').config(function($stateProvider) {
    $stateProvider
        .state()
});
angular.module('myApp').controller('mainCtrl', function($scope) {
    $scope.count = "Whats up";
});