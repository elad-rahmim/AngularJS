'use strict';

/**
 * @ngdoc function
 * @name dynamicPages1App.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the dynamicPages1App
 */
angular.module('dynamicPages1App')
  .controller('MainCtrl', function ($http) {
    var main = this;
      $http.get('http://loc.canwin.co.il/wp-json/wp/v2/pages?filter[name]=sample-page')
          .then(getPageSuccess);

      function getPageSuccess(response) {
        console.log('success: ', response);
        // NEW CODE HERE
        if (response.data && response.data[0]) {
          if (response.data[0].title) {
            main.title = response.data[0].title.rendered;
          }
          if (response.data[0].content) {
            main.content = response.data[0].content.rendered;
          }
        } else {
          throw response;
        }
        console.log('main: ', main);
      }
  });
