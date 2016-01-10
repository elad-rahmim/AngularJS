'use strict';

/**
 * @ngdoc directive
 * @name dynamicPages1App.directive:navigation
 * @description
 * # navigation
 */
angular.module('dynamicPages1App')
    .directive('navigation', function (sitemapService, $location) {
    return {
      templateURL: './views/navigation.html',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        scope.sitemap = sitemapService.get();
        scope.$on('sitemap:updated', function (event, data) {
          scope.sitemap = data;
        });
        // NEW CODE
        scope.isActive = isActive;
        function isActive(viewLocation) {
          if ($location.path()) {
            return viewLocation === $location.path();
          }
        }
      }
    };
  });
