var shoppingBasket = require('../shopping_basket');
var items = require('../items');
var assert = require('chai').assert;

describe('Shopping Basket', function() {

  it('should be empty at the start', function() {
    assert.equal(0, shoppingBasket.items)
  })

  it('should be able to add items', function() {
    shoppingBasket.add();
    assert.equal(1, shoppingBasket.items.length)
  })

  it('should be able to remove items', function() {
    shoppingBasket.remove();
    assert.equal(0, shoppingBasket.items)
  })

  it('should have a total value', function() {
    console.log(shoppingBasket.items);
    assert.equal(29, shoppingBasket.totalValue())
  })

})