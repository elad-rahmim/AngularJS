'use strict';

/**
 * @ngdoc function
 * @name dynamicPages1App.controller:DynamicCtrl
 * @description
 * # DynamicCtrl
 * Controller of the dynamicPages1App
 */
angular.module('dynamicPages1App')
  .controller('DynamicCtrl', function (pageContent) {
      var dynamic = this;
      dynamic.title = pageContent.title.rendered;
      dynamic.content = pageContent.content.rendered;
  });
