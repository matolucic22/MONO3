app.controller("DetailsVehicleModelController", function ($scope, $http, $location, $window, $stateParams) {

    
        var id = $stateParams.VmdlId;
        $http.get('/api/VehicleModel/get?Id=' + id)
            .then(function (response) {
                $scope.VehicleModelId = id;
                $scope.VehicleMakeId = response.data.VehicleMakeId;
                $scope.Name = response.data.Name;
                $scope.Abrv = response.data.Abrv;
            }, function () {
                console.log("Can't get reponse.");
            });
});