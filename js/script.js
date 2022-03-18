//Business Logic or Back-end

function OrderPizza(size, crust, toppings) {
  this.pSize = size;
  this.pCrust = crust;
  this.pToppings = toppings;
}

OrderPizza.prototype.getTotal = function () {
  return this.size + this.crust + this.toppings;
};


// User Interface Logic or Front-end

$(document).ready(function () {




});