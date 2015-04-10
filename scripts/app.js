'use strict';

var visApp = angular.module('visApp', ['ngRoute', 'ngMaterial','ngMap']);

    // configure our routes
    visApp.config(function($routeProvider) {
        $routeProvider

            // route for the home page
            .when('/', {
                templateUrl : 'pages/main.html',
                controller  : 'mainController'
            })
            .when('/line', {
                templateUrl : 'pages/line.html',
                controller  : 'lineController'
            });
    });

    // create the controller and inject Angular's $scope
    visApp.controller('mainController', function($scope, $timeout, $mdSidenav, $log) {
        $scope.toggleRight = function() {
        $mdSidenav('right').toggle()
            .then(function(){
                $log.debug("toggle RIGHT is done");
            });
          }; 

        console.log("on the Home Page")

    });

    visApp.config(function($mdThemingProvider) {
        $mdThemingProvider.theme('default')
            .primaryPalette('blue-grey')
            .accentPalette('amber');
    });

    visApp.controller('RightCtrl', function($scope, $timeout, $mdSidenav, $log) {
        $scope.close = function() {
        $mdSidenav('right').close()
            .then(function(){
                $log.debug("close RIGHT is done");
        });
      };
    });

    visApp.controller('lineController', function($scope) {
            console.log("on the line graph page");
            $scope.message = 'test message please ignore';
   
    });