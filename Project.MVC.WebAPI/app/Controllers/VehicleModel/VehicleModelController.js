app.controller("VehicleModelController", function ($scope, $http) {


    $scope.models = [];
    $http.get('/api/VehicleModel/getall')
        .then(function (response) {
            $scope.models = response.data;
            //console.log($scope.makes);
        }, function () {
            console.log("Can't get reponse.");
        });
});