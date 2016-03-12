app.service('FireBaseService', FireBaseService);

function FireBaseService () {

  var ref = new Firebase("https://dazzling-inferno-8770.firebaseio.com");

  // // download the data into a local object
  // var syncObject = $firebaseObject(ref);

  // // synchronize the object with a three-way data binding
  // // click on `index.html` above to see it used in the DOM!
  // syncObject.$bindTo($scope, "data");

  this.addUser = function (userData) {
    console.log('hello');
    console.log(userData);
    ref.push(userData);
  };

  this.createOrder = function (orderData) {
    var userRef = new Firebase("https://dazzling-inferno-8770.firebaseio.com/-KCgarAE_a4T_0oHVzW0/history");
    userRef.push(orderData);
  };

}