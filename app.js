var app = angular.module('myApp', []);

app.controller('myCtrl', function($scope, apiFactory) {
  $scope.getSuggestions = function() {
    apiFactory.getSuggestions($scope.searchText).then(function(response) {
      $scope.suggestions = response.data;
    });
  };
});

app.factory('apiFactory', function($http) {
  return {
    getSuggestions: function(searchText) {
      return $http.get('https://localhost:44381/api/AutoComplete?prefix=' + searchText);
    }
  };
});