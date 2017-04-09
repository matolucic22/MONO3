app.controller("DetailsVehicleMakeController", function ($scope, $http, $location, $window, $stateParams) {

    
        var id = $stateParams.VmkId;
        $http.get('/api/VehicleMake/get?Id=' + id)
            .then(function (response) {
                $scope.VehicleMakeId = id;
                $scope.Name = response.data.Name;
                $scope.Abrv = response.data.Abrv;
            }, function () {
                console.log("Can't get reponse.");
            });
});