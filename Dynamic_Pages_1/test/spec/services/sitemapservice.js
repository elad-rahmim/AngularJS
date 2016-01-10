'use strict';

describe('Service: sitemapService', function () {

  // load the service's module
  beforeEach(module('dynamicPages1App'));

  // instantiate service
  var sitemapService;
  beforeEach(inject(function (_sitemapService_) {
    sitemapService = _sitemapService_;
  }));

  it('should do something', function () {
    expect(!!sitemapService).toBe(true);
  });

});
