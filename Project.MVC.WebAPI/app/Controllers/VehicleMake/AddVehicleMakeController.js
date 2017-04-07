app.controller("AddVehicleMakeController", function ($scope, $http, $location, $window) {

    $scope.addVehicleMake = function () {
        var vehicle = {
            Name: $scope.Name,
            Abrv: $scope.Abrv
        };
        $http.post('/api/VehicleMake/add', vehicle)
        .then(function (data) {
            $scope.response = data;
            $window.alert("Successfully added!");
            $location.path('/vehicleMake');
        });
    }
});