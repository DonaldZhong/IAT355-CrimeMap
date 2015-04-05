'use strict';

var visApp = angular.module('visApp', ['ngRoute','ngMap']);

    // configure our routes
    visApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/main.html',
                controller  : 'mainController'
            });
    });

    // create the controller and inject Angular's $scope
    visApp.controller('mainController', function($scope) {
        // create a message to display in our view
        $scope.message = 'Everyone come and see how good I look!';
    });

