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

  $scope.addStudent = function(){

    $http.post('/api/witchesAndWizards/', $scope.student).then(function successCallback(response){
      window.location.href = '#/';
    }, function errorCallback(error){

    });
  };

  $scope.editStudent = function(){
    //console.log('debug');
    $http.put('/api/witchesAndWizards/'+ $scope.student._id, $scope.student).then(function successCallback(response){
      window.location.href = '#/';
    }, function errorCallback(error){

    });
  };

  $scope.deleteStudent = function(){
    //console.log('debug');
    //alert('hello');
    $http.delete('/api/witchesAndWizards/'+ $scope.student._id).then(function successCallback(response){
      window.location.href = '#/';
    }, function errorCallback(error){

    });
  };

}]);
