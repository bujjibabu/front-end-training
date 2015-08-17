'use strict';

/**
 * @ngdoc function
 * @name angularprojectApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularprojectApp
 */
angular.module('angularprojectApp')
  .controller('MainCtrl', function ($scope,$rootScope) {

    $('[data-toggle="popover"]').popover();



      $scope.myInterval = 5000;
		  $scope.noWrapSlides = false;
		  var slides = $scope.slides = [];
		  $scope.addSlide = function() {
		    var newWidth = 600 + slides.length + 1;
		    slides.push({
		      image: '//placekitten.com/' + newWidth + '/300',
		      text: ['More','Extra','Lots of','Surplus'][slides.length % 4] + ' ' +
		        ['Cats', 'Kittys', 'Felines', 'Cutes'][slides.length % 4]
		    });
		  };
		  for (var i=0; i<4; i++) {
		    $scope.addSlide();
		  }
  

    $scope.main = 'mainpage';
    $rootScope.yeoman = 'Fresh Installation of Yeoman..1. Download Node.js from http://nodejs.org/ , install and add to path2. Download GIT from http://git-scm.com/, install  and add to path3. configure git using command : git config --global url."https://".insteadOf git://';
  });
