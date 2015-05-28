/**
 * Created by championswimmer on 28/5/15.
 */
'use strict';
// Declare app level module which depends on views, and components


var openevent = angular.module('openevent',
    [
        'ngRoute',
        'openevent.sessions',
        'openevent.speakers'
    ]);

openevent.config(['$routeProvider', function($routeProvider) {
        $routeProvider.otherwise({redirectTo: '/sessions'});
    }]);
openevent.controller("appCtrl", function($scope) {
    $scope.appTitle = config.title;
})