var app = angular.module('app');

app
  .controller('MyController', [
    '$scope',
    '$routeParams',
    'FireBaseService',
    function ($scope, $routeParams, FireBaseService) {
      console.log($routeParams);
      console.log($routeParams.id);

      $scope.FireBaseService = FireBaseService;
      $scope.submitUser = function ($event) {
        FireBaseService.addUser(
          {
            firstName: $event.target.firstName.value,
            lastName: $event.target.lastName.value,
            password: $event.target.password.value,
            phone: $event.target.phone.value,
            email: $event.target.email.value,
            role: $event.target.role.value,

          }
        );
      };

      $scope.submitOrder = function ($event) {
        FireBaseService.createOrder(
          {
            street: $event.target.street.value,
            city: $event.target.city.value,
            state: $event.target.state.value,
            zip: $event.target.zipCode.value,
            laundry: $event.target.laundryWeight.value,
            date: new Date()
          },
            $routeParams.id
        );
      };
    }
  ]);
