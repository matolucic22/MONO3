﻿var app = angular.module('app', ['ui.router']);

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
        }).state('AddvehicleMake', {
            url: '/AddvehicleMake',
            controller: 'AddVehicleMakeController',
            views: {
                "root": {
                    templateUrl: 'app/Views/VehicleMake/AddVehicleMake.html'
                }
            }
        }).state('EditvehicleMake', {
            url: '/EditvehicleMake/:VmkId',
            controller: 'EditVehicleMakeController',
            views: {
                "root": {
                    templateUrl: 'app/Views/VehicleMake/EditVehicleMake.html'
                }
            }
        }).state('DetailsvehicleMake', {
            url: '/DetailsvehicleMake/:VmkId',
            controller: 'DetailsVehicleMakeController',
            views: {
                "root": {
                    templateUrl: 'app/Views/VehicleMake/DetailsVehicleMake.html'
                }
            }
        }).state('DeletevehicleMake', {
            url: '/DeletevehicleMake/:VmkId',
            controller: 'DeleteVehicleMakeController',
            views: {
                "root": {
                    templateUrl: 'app/Views/VehicleMake/DeleteVehicleMake.html'
                }
            }
        });

});