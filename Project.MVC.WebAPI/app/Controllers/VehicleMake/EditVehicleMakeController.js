angular.module('app').controller('EditVehicleMakeController', ['$scope', '$http', '$stateParams', '$window', '$location', vmkEditController]);

function vmkEditController($scope, $http, $stateParams, $window, $location) {

    $scope.updateInit = function () {
        var id = $stateParams.VmkId;
        $http.get('/api/VehicleMake/get?Id=' + id).then(function (data) {
            $scope.data = data;
        })
        .error(function (data) {
            $window.alert("Error! " + data.Message);
        })
    }

    $scope.update = function () {
        var id = $stateParams.VmkId;
        if ($scope.Name != null && $scope.Abrv != null) {
            var VehicleMake = {
                VehicleMakeId: id,
                Name: $scope.Name,
                Abrv: $scope.Abrv
            };
            $http.put('api/VehicleMake/update?Id=' + id, VehicleMake).then(function (data) {
                $window.alert("Updated");
                $location.path('/vehicleMake');
                //$window.location.reload();
                
            })
        }
        else {
            $window.alert("Potrebno je popuniti oba polja");
        }
        
    }
}