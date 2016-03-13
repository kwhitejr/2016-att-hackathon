var app = angular.module('app');

app
  .controller('MyController', [
    '$scope',
    'FireBaseService',
    '$firebaseObject',
    '$firebaseArray',
    '$rootScope',
    function ($scope, FireBaseService, $firebaseObject, $firebaseArray, $rootScope) {

      var userId = [];

      var ref = new Firebase('https://dazzling-inferno-8770.firebaseio.com');

      var obj = $firebaseObject(ref);

      var list = $firebaseArray(ref);

      $scope.userRecord;
      $scope.agentRecord;

      list.$loaded()
        .then(function (arr) {
          $scope.userRecord = arr.$getRecord($rootScope.userId);
          $scope.agentRecord = arr.$getRecord($rootScope.agentId);
        });

      // to take an action after the data loads, use the $loaded() promise
      obj.$loaded()
        .then(function() {
          console.log("loaded record: ", obj.$id);

          // To iterate the key/value pairs of the object, use angular.forEach()
          angular.forEach(obj, function(value, key) {
            console.log(key, value);
            userId.push(key);
          });
        });

      // To make the data available in the DOM, assign it to $scope
      $scope.data = obj;

      // For three-way data bindings, bind it to the scope instead
      obj.$bindTo($scope, "data");

      $scope.FireBaseService = FireBaseService;
      $scope.submitUser = function ($event) {
        FireBaseService.addUser(
          {
            firstName: $event.target.firstName.value,
            lastName: $event.target.lastName.value,
            password: $event.target.password.value,
            phone: $event.target.phone.value,
            email: $event.target.email.value,
            role: $event.target.role.value
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
          $rootScope.userId
        );
      };
    }
  ]);
