'use strict';

/**
 * @ngdoc overview
 * @name dynamicPages1App
 * @description
 * # dynamicPages1App
 *
 * Main module of the application.
 */
angular
  .module('dynamicPages1App', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
    .config(function($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true).hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
        .when('/:routename?', {
          templateUrl: 'views/dynamic.html',
          controller: 'DynamicCtrl',
          controllerAs: 'dynamic',
          resolve: {
            pageContent: function getPage($route, $http) {
              var pathname = $route.current.pathParams.routename;
              return $http.get('http://loc.canwin.co.il/wp-json/wp/v2/pages?filter[name]=' + pathname)
                  .then(getPageSuccess)
                  .catch(getPageError)
              function getPageSuccess(response) {
                if (response.data && response.data[0]) {
                  return response.data[0];
                } else {
                  throw response;
                }
              }
              function getPageError(reason) {
                console.log('error: ', reason);
              }
            }
          }
        })

      .otherwise({
        redirectTo: '/'
      });
  });
