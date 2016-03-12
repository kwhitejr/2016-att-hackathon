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

      $scope.submitOrder = function ($event) {
        FireBaseService.createOrder(
          {
            street: '456 Sean Road',
            city: 'ChazTown',
            state: 'Tonyville',
            zip: 12345,
            date: new Date()
          }
        );
      };
    }
  ]);
