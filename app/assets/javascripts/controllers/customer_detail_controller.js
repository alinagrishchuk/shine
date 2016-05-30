var app = angular.module('customers');

app.controller("CustomerDetailController",
    ["$scope", "$http", "$routeParams", "$resource",
      function($scope, $http, $routeParams, $resource) {
        $scope.customerId = $routeParams.id;
        var Customer = $resource('/customers/:customerId.json',
            {"customerId": "@customer_id"},
            {"save": {"method": "PUT"}});
        $scope.customer = Customer.get({ "customerId":  $scope.customerId});
        /*$scope.customers = {};
         $http.get("/customers/" + customerId + '.json').
         then(function (responce) {
         $scope.customer = responce.data;
         },function (responce) {
         alert("there was a problem" + responce.status);
         }
         );*/

        $scope.save = function() {
          if($scope.form.$valid) {
            $scope.customer.$save(
                function () {
                  $scope.form.$setPristine();
                  $scope.form.$setUntouched();
                  alert("Save Seccessfull");
                },
                function () {
                  alert("Save failed");
                }
            );
          };
        };
      }]
);
