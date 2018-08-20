var myApp = angular.module('myApp');

myApp.controller('StudentsController', ['$scope', '$http', '$location', '$routeParams', function($scope, $http, $location, $routeParams){

  console.log('StudentsController loaded!');

  $scope.getStudents = function(){

    $http.get('/api/witchesAndWizards').then(function successCallback(response){
      $scope.students = response.data;
    }, function errorCallback(error){

    });
  };

  $scope.getStudent = function(){

    $http.get('/api/witchesAndWizards/' + $routeParams.id).then(function successCallback(response){
      $scope.student = response.data;
    }, function errorCallback(error){

    });
  };

}]);
