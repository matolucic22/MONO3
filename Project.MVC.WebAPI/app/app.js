var app = angular.module('app', ['ui.router', 'angularUtils.directives.dirPagination']);

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
        }).state('vehicleModel', {
            url: '/vehicleModel',
            controller: 'VehicleModelController',
            views: {
                "root": {
                    templateUrl: 'app/Views/VehicleModel/IndexVehicleModel.html'
                }
            }
        }).state('AddvehicleModel', {
            url: '/AddvehicleModel',
            controller: 'AddVehicleModelController',
            views: {
                "root": {
                    templateUrl: 'app/Views/VehicleModel/AddVehicleModel.html'
                }
            }
        }).state('EditvehicleModel', {
            url: '/EditvehicleModel/:VmdlId',
            controller: 'EditVehicleModelController',
            views: {
                "root": {
                    templateUrl: 'app/Views/VehicleModel/EditVehicleModel.html'
                }
            }
        }).state('DetailsvehicleModel', {
            url: '/DetailsvehicleModel/:VmdlId',
            controller: 'DetailsVehicleModelController',
            views: {
                "root": {
                    templateUrl: 'app/Views/VehicleModel/DetailsVehicleModel.html'
                }
            }
        }).state('DeletevehicleModel', {
            url: '/DeletevehicleModel/:VmdlId',
            controller: 'DeleteVehicleModelController',
            views: {
                "root": {
                    templateUrl: 'app/Views/VehicleModel/DeleteVehicleModel.html'
                }
            }
        });

});