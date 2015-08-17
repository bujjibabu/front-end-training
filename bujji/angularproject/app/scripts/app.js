'use strict';

/**
 * @ngdoc overview
 * @name angularprojectApp
 * @description
 * # angularprojectApp
 *
 * Main module of the application.
 */
angular
  .module('angularprojectApp', [
    'ngResource',
    'ngRoute',
    'ui.bootstrap'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($templateCache){
    $templateCache.put('mytemplate.html','<form><div class="form-group"><label for="exampleInputEmail1">Email address</label><input type="email" class="form-control" id="exampleInputEmail1" placeholder="Email" ng-model="x"></div><div class="form-group"><label for="exampleInputPassword1">Password</label><input type="password" class="form-control" id="exampleInputPassword1" ng-model="y" placeholder="Password"></div><button type="submit" class="btn btn-default" ng-click="fnSubmitDetails(x,y)">Submit</button></form>')
  }).directive('myForm',function($templateCache){
      return{
        restrict:"AE",
        transclude:true,
        scope:{
          title:'@'
        },
        templateUrl:'mytemplate.html',
        link:function(scope){
          scope.fnSubmitDetails = function(x,y){
            debugger;
            alert('submit success...'+y);
            scope.x='';
            scope.y ='';
          };
        }
      }
  })
