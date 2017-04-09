app.controller("DeleteVehicleModelController", function ($scope, $http, $location, $window, $stateParams) {

    var id = $stateParams.VmdlId;
    $http.delete('/api/VehicleModel/delete?Id=' + id)
        .then(function (response) {
           // $scope.response = data;
            $window.alert("Element deleted");
            $location.path('/vehicleModel');
        }, function () {
            console.log("Can't get reponse.");
        });
});