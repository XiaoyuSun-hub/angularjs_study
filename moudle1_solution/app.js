'use strict';
(function () {

    angular.module('LunchCheck', [])
        .controller('LunchCheckController', LunchCheckController)

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunch = '';
        $scope.mess = 'please enter data first';
        // $scope.checked = false;
        $scope.checkLunch = function () {
            if ($scope.lunch.length == 0) {
                $scope.mess = 'Please enter data first';
                return;
            }
            else {
                let listItems = $scope.lunch.split(',').filter(value => value.trim().length != 0);
                if (listItems.length <= 3) {
                    $scope.mess = 'Enjoy!';
                }
                else {
                    $scope.mess = 'Too much!';
                }
            }
        };
    }
})();

