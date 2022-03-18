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
  $("form#myForm1").submit(function (event) {
    event.preventDefault();
    var pizzaSize = $("input[name=size]:checked").val();
    var pizzaCrust = $("input[name='crust']:checked").val();

    var pizzaToppings = $('input:checkbox:checked').map(function () {
      return this.value;
    }).get();

    var deliveryLocation = $("#deliveryLoc").val();

    var res = pizzaSize + pizzaCrust + pizzaToppings + deliveryLocation;
    console.log(res);

  });


  //Show input for delivery location
  $(".option").click(function () {
    $(".location").show();
  });

  $(".option2").click(function () {
    $(".location").hide();
  });


});