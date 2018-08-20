var myApp = angular.module('myApp', ['ngRoute']);



myApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider){
  $routeProvider.when('/', {
    controller: 'StudentsController',
    templateUrl: 'views/students.html'
  }).when('/students/add', {
    controller: 'StudentsController',
    templateUrl: 'views/addStudent.html'
  }).when('/students/edit/:id', {
    controller: 'StudentsController',
    templateUrl: 'views/editStudent.html'
  }).when('/students/details/:id', {
    controller: 'StudentsController',
    templateUrl: 'views/studentDetail.html'
  }).otherwise({
    redirectTo: '/'
  });
  $locationProvider.hashPrefix('');
}]);
