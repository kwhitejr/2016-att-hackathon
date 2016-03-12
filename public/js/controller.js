var app = angular.module('app');

app
  .controller('MyController', [
    '$scope',
    'FireBaseService',
    function ($scope, FireBaseService) {
      $scope.FireBaseService = FireBaseService;
      $scope.submitUser = function ($event) {
        FireBaseService.addUser(
          {
            firstName: $event.target.firstName.value,
            lastName: $event.target.lastName.value,
            password: $event.target.password.value
          }
        );
      };
    }
  ]);
