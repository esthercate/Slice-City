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
    var pizzaSize = parseInt($("input[name=size]:checked").val());
    var pizzaCrust = parseInt($("input[name='crust']:checked").val());
    var deliveryFee = parseInt($("input[name=delivery]:checked").val());
    var deliveryLocation = $("#deliveryLoc").val()

    var arr = $('input:checkbox:checked').map(function () { // getting all checked inputs 
      return parseInt(this.value); // converting the input to numbers 
    }).get();

    var pizzaToppings = arr.reduce(function (a, b) { //summing all checked input
      return a + b;
    }, 0);


    //var res = pizzaSize + pizzaCrust + pizzaToppings + deliveryFee;
    //console.log(res);
    //console.log(deliveryLocation);
  });


  //Show input for delivery location
  $(".option").click(function () {
    $(".location").show();
  });

  $(".option2").click(function () {
    $(".location").hide();
  });


});