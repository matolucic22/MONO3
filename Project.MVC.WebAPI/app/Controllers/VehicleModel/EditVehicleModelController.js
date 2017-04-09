angular.module('app').controller('EditVehicleModelController', ['$scope', '$http', '$stateParams', '$window', '$location', vmdlEditController]);

function vmdlEditController($scope, $http, $stateParams, $window, $location) {

    $scope.updateInit = function () {
        var id = $stateParams.VmdlId;
        $http.get('/api/VehicleModel/get?Id=' + id).then(function (data) {
            $scope.data = data;
        })
        .error(function (data) {
            $window.alert("Error! " + data.Message);
        })
    }

    $scope.update = function () {
        var id = $stateParams.VmdlId;
        if ($scope.Name != null && $scope.Abrv != null) {
            var VehicleModel = {
                VehicleModelId: id,
                Name: $scope.Name,
                Abrv: $scope.Abrv
            };
            $http.put('api/VehicleModel/update?Id=' + id, VehicleModel).then(function (data) {
                $window.alert("Updated");
                $location.path('/vehicleModel');
                //$window.location.reload();
                
            })
        }
        else {
            $window.alert("Potrebno je popuniti oba polja");
        }
        
    }
}