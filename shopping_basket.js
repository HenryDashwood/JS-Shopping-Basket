var importeditems = require('./items');

var shoppingBasket = {

  items: importeditems,

  add: function(item) {
    this.items.push(item);
  },

  remove: function() {
    this.items -= 1;
  },

  totalValue: function() { 
    var totalValue = 0
    for (var item of this.items) {
      totalValue += (item["value"] * item["quantity"]) 
    }
    return totalValue
  }

}

module.exports = shoppingBasket;