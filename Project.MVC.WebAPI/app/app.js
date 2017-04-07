var app = angular.module('app', ['ui.router']);

app.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/vehicleMake');

    $stateProvider
        .state('vehicleMake', {
            url: '/vehicleMake',
            controller: 'VehicleMakeController',
            views: {
                "root": {
                    templateUrl: 'app/Views/VehicleMake/IndexVehicleMake.html'
                }
            }
        });

});