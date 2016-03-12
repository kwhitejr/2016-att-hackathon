var app = angular.module('app');

app
  .controller('MyController', [
    '$scope',
    '$firebaseObject',
    function ($scope, $firebaseObject) {
      var ref = new Firebase("https://<YOUR-FIREBASE-APP>.firebaseio.com");

      // download the data into a local object
      var syncObject = $firebaseObject(ref);

      // synchronize the object with a three-way data binding
      // click on `index.html` above to see it used in the DOM!
      syncObject.$bindTo($scope, "data");
    }
  ]);
