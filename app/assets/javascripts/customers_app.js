(function() {
  var app = angular.module('customers',
      ['ngRoute','ngResource','ngMessages','ui.bootstrap', 'templates']);
})();


var app = angular.module('customers');

app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when("/",{
    controller: "CustomerSearchController",
    templateUrl: "customer_search.html"
  }).when("/:id",{
    controller: "CustomerDetailController",
    templateUrl: "customer_detail.html"
  });
}]);












