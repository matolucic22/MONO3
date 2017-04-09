
app.controller("VehicleMakeController", function ($scope, $http) {


    $scope.makes = [];
    $http.get('/api/VehicleMake/getall')
        .then(function (response) {
            $scope.makes = response.data;
            //console.log($scope.makes);
        }, function () {
            console.log("Can't get reponse.");
        });
    $scope.sort = function (keyname)
    {
        $scope.sortKey = keyname;
        $scope.reverse = !$scope.reverse;//if true make it false and vice versa
    }
});