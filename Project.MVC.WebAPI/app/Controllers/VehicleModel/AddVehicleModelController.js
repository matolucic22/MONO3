app.controller("AddVehicleModelController", function ($scope, $http, $location, $window) {

    $scope.addVehicleModel = function () {
        var vehicle = {
            VehicleMakeId: $scope.VehicleMakeId,
            Name: $scope.Name,
            Abrv: $scope.Abrv
        };
        $http.post('/api/VehicleModel/add', vehicle)
        .then(function (data) {
            $scope.response = data;
            $window.alert("Successfully added!");
            $location.path('/vehicleModel');
        });
    }
});