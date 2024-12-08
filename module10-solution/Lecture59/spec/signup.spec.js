describe('FavoriteItemTest', function () {

  var menuservice;
  var $httpBackend;
  var ApiBasePath;
  var validMenunumber = 2;
  var invalidMenunumber = 100;

  beforeEach(module('restaurant'));

  beforeEach(inject(function(_$httpBackend_, _MenuService_) {
    $httpBackend = _$httpBackend_; 
    MenuService = _MenuService_; 
    ApiBasePath = "https://coursera-jhu-default-rtdb.firebaseio.com";
  }));

  it('should return valid menu item', function() {
    $httpBackend.whenGET(ApiBasePath + '/menu_items.json').respond(['Lunch', 'Dessert']);
    menuservice.validateMenuNumber(validMenunumber).then(function(response) {
      expect(response.data).toEqual(['Lunch', 'Dessert']);
    });
    $httpBackend.flush();
  });


  it('should return invalid menu item', function() {
    $httpBackend.whenGET(ApiBasePath + '/menu_items.json').respond(null);
    menuservice.validateMenuNumber(invalidMenunumber).then(function(response) {
      expect(response.data).not.toEqual(['Lunch', 'Dessert']);
    });
    $httpBackend.flush();
  });

});
