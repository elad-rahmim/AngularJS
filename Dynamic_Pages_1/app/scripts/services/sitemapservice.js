'use strict';

/**
 * @ngdoc service
 * @name dynamicPages1App.sitemapService
 * @description
 * # sitemapService
 * Factory in the dynamicPages1App.
 */angular.module('dynamicPages1App')
    .factory('sitemapService', function ($http) {
        var service = {
                get: getSitemap,
                set: setSitemap
            },
            sitemap;
        return service;
        function getSitemap() {
            return sitemap;
        }
        function setSitemap() {
            return $http.get('loc.canwin.co.il/wp-json/wp/v2/pages/?filter[name]=config&filter[name]=sitemap-json')
                .then(getAjaxSuccess)
                .catch(getAjaxError);
            function getAjaxSuccess(response) {
                sitemap = JSON.parse(response.data[0].content.rendered);
            }
            function getAjaxError(reason) {
                console.log('Error: ', reason);
            }
        }
    });