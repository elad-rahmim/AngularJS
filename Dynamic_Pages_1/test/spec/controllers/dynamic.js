'use strict';

describe('Controller: DynamicCtrl', function () {

  // load the controller's module
  beforeEach(module('dynamicPages1App'));

  var DynamicCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DynamicCtrl = $controller('DynamicCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(DynamicCtrl.awesomeThings.length).toBe(3);
  });
});
