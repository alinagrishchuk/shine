var app = angular.module('customers',
                          ['ngRoute','templates']);

app.config(["$routeProvider", function ($routeProvider) {
  $routeProvider.when("/",{
    controller: "CustomerSearchController",
    templateUrl: "customer_search.html"
  }).when("/:id",{
    controller: "CustomerDetailController",
    templateUrl: "customer_detail.html"
  });
}]);

app.controller("CustomerSearchController", [
  "$scope", "$http","$location",
    function($scope, $http, $location) {
      var page = 0;
      $scope.customers = [];

      $scope.previousPage = function () {
        if(page > 0) {
          page = page - 1;
          $scope.search($scope.keywords);
        }
      };
      $scope.nextPage = function () {
        page = page + 1;
        $scope.search($scope.keywords);
      };

      $scope.search = function(searchTerm) {
        if (searchTerm.length < 3) {
          return;
        }
        $scope.searchedFor = searchTerm;
        $http.get( "/customers.json",
                 { "params": { "keywords": searchTerm, "page": page }}
        ).then(function(response) {
            $scope.customers = response.data;
        },function(response) {
            alert("There was a problem: " +  response.status);
        });
      }

      $scope.viewDetails = function (customer) {
        $location.path("/" + customer.id);
      }
    }
]);

app.controller("CustomerDetailController",
    ["$scope", "$http", "$routeParams",
    function($scope, $http, $routeParams) {
      var customerId = $routeParams.id;
      $scope.customers = {};
      $http.get("/customers/" + customerId + '.json').
            then(function (responce) {
              $scope.customer = responce.data;
              },function (responce) {
                alert("there was a problem" + responce.status);
              }
            );
    }]
);




