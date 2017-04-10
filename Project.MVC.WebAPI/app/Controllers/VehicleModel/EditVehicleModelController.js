angular.module('app').controller('EditVehicleModelController', ['$scope', '$http', '$stateParams', '$window', '$location', vmdlEditController]);

function vmdlEditController($scope, $http, $stateParams, $window, $location) {

    $scope.EditInit = function () {
        var id = $stateParams.VmdlId;
        $http.get('/api/VehicleModel/get?Id=' + id).then(function (data) {
            $scope.data = data;
        })
        .error(function (data) {
            $window.alert("Error! GREŠKA JE U INITU " + data.Message);
        })
    }

    $scope.EditVehModel = function () {
        var id = $stateParams.VmdlId;
        //var idMake = $stateParams.VmkId;
        if ($scope.Name != null && $scope.Abrv != null) {// && idMake != null
            var VehicleModel = {
                VehicleModelId: id,
               // VehicleMakeId: idMake,
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