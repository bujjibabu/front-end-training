'use strict';
/**
 * @ngdoc overview
 * @name testApp
 * @description
 * # testApp
 *
 * Main module of the application.
 */
angular
  .module('testApp', [
    'ngResource',
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  }).run(function($templateCache){
    $templateCache.put('mytemplate.html','<div class="maincontainer"><div class="section1 gradient1"><h3>Basic Document</h3><div><img src="images/sample.jpg"></div></div><div class="section2 gradient2"><h3>Bacon ipsum dolor amet short loin meatloaf spare ribs sausage.</h3><div><p>Bresaola ball tip meatloaf, jerky brisket pancetta picanha pig biltong pork belly. Leberkas alcatra sausage venison shoulder shank tri-tip landjaeger porchetta. Ham bresaola short ribs chuck. Ball tip pork chop frankfurter doner turkey, porchetta pork belly.</p></div></div><div class="section3 gradient3"><h3>Shankle sausage pancettat</h3><div><p>Short loin pork chop turducken ham hock swine ground round bresaola venison pig frankfurter cow meatloaf t-bone picanha brisket. Chicken alcatra chuck, andouille pork belly jowl ribeye.</p></div></div><div class="btn-section"><button class="my-btn" ng-click="fnChangeBackground()">Chage gradient color</button></div></div>')
  }).directive('mytemplate',function($templateCache){
      return{
        restrict:"E",
        transclude:true,
        scope:{
          title:'@'
        },
        templateUrl:'mytemplate.html',
        link:function(scope){
          scope.fnChangeBackground = function(){
          angular.element('.section1').removeClass('gradient1');
          angular.element('.section2').removeClass('gradient2');
          angular.element('.section3').removeClass('gradient3');
          angular.element('.section1').addClass('gradient1a');
          angular.element('.section2').addClass('gradient2a');
          angular.element('.section3').addClass('gradient3a');
        };
        }
      }
  })
