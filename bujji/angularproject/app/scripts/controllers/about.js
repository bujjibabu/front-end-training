'use strict';

/**
 * @ngdoc function
 * @name angularprojectApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularprojectApp
 */
angular.module('angularprojectApp')
  .controller('AboutCtrl', function ($scope) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
     $scope.texst = "Simple template. Template images by luoman. Powered by Blogger.";
     console.log($scope.x);
  });
