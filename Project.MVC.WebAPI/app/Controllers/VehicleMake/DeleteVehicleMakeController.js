app.controller("DeleteVehicleMakeController", function ($scope, $http, $location, $window, $stateParams) {

    var id = $stateParams.VmkId;
    $http.delete('/api/VehicleMake/delete?Id=' + id)
        .then(function (response) {
           // $scope.response = data;
            $window.alert("Element deleted");
            $location.path('/vehicleMake');
        }, function () {
            console.log("Can't get reponse.");
        });
});