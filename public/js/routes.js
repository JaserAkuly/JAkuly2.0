/**
 * Created by jaser.akuly on 4/5/16.
 */

angular.module('myApp').config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    $stateProvider
        .state("main", {
            url: "/",
            templateUrl: '/views/main.html',
            controller: 'mainCtrl'
        })
        .state("about", {
            url: "/about",
            templateUrl: '/views/about.html',
            controller: 'aboutCtrl'
        });
    
    $locationProvider.html5Mode(false);

    $urlRouterProvider.otherwise('/');
});