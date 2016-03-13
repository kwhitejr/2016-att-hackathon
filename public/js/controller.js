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
          console.log($scope.userRecord.history);
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
  ])

  .controller('receivedController', [
    '$scope',
    '$rootScope',
    '$firebaseArray',
    function ($scope, $rootScope, $firebaseArray) {
      $rootScope.mapFactory.initMap();

      var ref = new Firebase('https://dazzling-inferno-8770.firebaseio.com');

      var list = $firebaseArray(ref);

      $scope.userRecord;
      $scope.agentRecord;

      list.$loaded()
        .then(function (arr) {
          $scope.userRecord = arr.$getRecord($rootScope.userId);
          $scope.agentRecord = arr.$getRecord($rootScope.agentId);
          console.log($scope.userRecord.history);
        });

    }
  ]);
