angular.module('myApp.modal',['ngAnimate', 'ui.bootstrap','checklist-model'])

.controller('ModalDemoCtrl', function ($scope, $modal, $log) {
    $scope.animationsEnabled = true;

    $scope.open = function (size) {
        var modalInstance = $modal.open({
            animation: $scope.animationsEnabled,
            templateUrl: 'myModalContent.html',
            controller: 'ModalInstanceCtrl',
            size: size,
            resolve: {
                result : function () {
                    return "";
                }
            }
        });
    };
    $scope.toggleAnimation = function () {
        $scope.animationsEnabled = !$scope.animationsEnabled;
    };

});

angular.module('myApp.modal')
.controller('ModalInstanceCtrl', function ($scope, $modalInstance) {
    $scope.formData = {};

    $scope.skills = [
        'Business',
        'Technical',
        'Art'
    ];
    $scope.submitFormData  = function() {
        $scope.submitted=true;
        if ($scope.form.$valid) {
            console.log($scope.formData.email);
            console.log($scope.formData.skills);
        }
    };
    $scope.ok = function () {
        $modalInstance.close("");
    };
    $scope.cancel = function () {
        $modalInstance.dismiss('cancel');
    };
});