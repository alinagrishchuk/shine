var app = angular.module('customers');

app.controller("CustomerSearchController", [
  "$scope", "$location", "customerSearch",
  function($scope, $location, customerSearch) {
    var page = 0;
    $scope.customers = [];
    
    customerSearch.successCallback(function (customers) {
      $scope.customers = customers;
    });

    $scope.previousPage =  customerSearch.previousPage;
    $scope.nextPage = customerSearch.nextPage;
    $scope.search = customerSearch.search;
       

    $scope.viewDetails = function (customer) {
      $location.path("/" + customer.id);
    };
  }
]);