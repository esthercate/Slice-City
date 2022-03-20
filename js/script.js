//Business Logic or Back-end

function OrderPizza(name, size, crust, toppings, deliveryCost) {
  this.pName = name,
    this.pSize = size;
  this.pCrust = crust;
  this.pToppings = toppings;
  this.deliveryCost = deliveryCost;
}

OrderPizza.prototype.getTotal = function () {
  return this.size + this.crust + this.toppings + this.deliveryCost;
};


// User Interface Logic or Front-end

$(document).ready(function () {
  $("form#myForm1").submit(function (event) {
    event.preventDefault();
    var pizzaName = $("input[name=pname]:checked").val();
    var pizzaSize = parseInt($("input[name=size]:checked").val());
    var pizzaCrust = parseInt($("input[name='crust']:checked").val());
    var arr = $('input:checkbox:checked').map(function () { // getting all checked inputs 
      return parseInt(this.value); // converting the input to numbers 
    }).get();

    var pizzaToppings = arr.reduce(function (a, b) { //summing all checked input
      return a + b;
    }, 0);

    var deliveryFee = parseInt($("input[name=delivery]:checked").val());

    var total = pizzaSize + pizzaCrust + pizzaToppings + deliveryFee;
    var newPizza = new OrderPizza(pizzaName, pizzaSize, pizzaCrust, pizzaToppings, deliveryFee);
    $("#summary tbody").append("<tr>" + "<td> Pizza Name </td>" + "<td>" + pizzaName + "</td>" + "</tr>");
    $("#summary tbody").append("<tr>" + "<td> Size Price </td>" + "<td>" + pizzaSize + "</td>" + "</tr>");
    $("#summary tbody").append("<tr>" + "<td> Crust Price </td>" + "<td>" + pizzaCrust + "</td>" + "</tr>");
    $("#summary tbody").append("<tr>" + "<td> Toppings Price </td>" + "<td>" + pizzaToppings + "</td>" + "</tr>");
    $("#summary tbody").append("<tr>" + "<td> Delivery Fee </td>" + "<td>" + deliveryFee + "</td>" + "</tr>");
    $("#summary tbody").append("<tr>" + "<td> TOTAL PRICE </td>" + "<td><span class='ttl'>" + "Ksh. " + total + "</span></td>" + "</tr>");
    $("#summary tbody").append("<tr>" + "<td>  </td>" + "<td>" + " " + "</td>" + "</tr>");

    $("#myForm1").trigger("reset");

  });

  // Prompt user to input delivery location
  $(".option").click(function () {
    var location = prompt("Please Enter Delivery Location");
    alert("Your pizza will be delivered at " + location);
    $("#summary tbody").append("<tr>" + "<td> Delivery Location </td>" + "<td>" + location + "</td>" + "</tr>");
  });

  $("#showbtns").click(function () {
    $(".show").show();
  })
});