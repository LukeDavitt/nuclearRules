angular.module('nuclearRules', ['ui.router', 'templates', 'ngMaterial'])


.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'home/_home.html',
      controller: 'MainCtrl',
      resolve: {
        /*postPromise: ['posts', function(posts){
          return posts.getAll();
        }]*/
      }
    });

  $urlRouterProvider.otherwise('home');
}]);