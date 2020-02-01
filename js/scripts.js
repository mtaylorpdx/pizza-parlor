// Business Logic ------------

function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.pizzaSize = function() {
  var size = $("input:radio[name=size]:checked").val();
  return size
}

Pizza.prototype.pizzaToppings = function() {
  var toppings = []
  $("input[name='topping']:checked").each(function() {
    toppings.push($(this).val());
  });
  console.log(toppings)
  return toppings
}

Pizza.prototype.pizzaPrice = function() {
  if (pizza.size === 'small') {
    pizza.price = 8
  } else if (pizza.size === 'medium') {
    pizza.price = 10
  } else {
    pizza.price = 12
  }
  return pizza.price
}

Pizza.prototype.toppingsPrice = function() {
  for (var index = 0; index < (pizza.toppings).length; index++) {
    var toppingsTotal = 0 + (index + 1)
  }
  return toppingsTotal
}

Pizza.prototype.priceTotal = function() {
  var total = pizza.pizzaPrice() + pizza.toppingsPrice();
  $("#output").append("Your total comes to $" + total);
}

// User Interface Logic ------
var pizza = new Pizza ('size', 'toppings', 'price');

$(document).ready(function() {
  $("form#size").change(function(event) {
    event.preventDefault();
    pizza.size = pizza.pizzaSize();
    $("#toppings").fadeIn();
  });

  $("form").submit(function(event) {
    event.preventDefault();
    pizza.toppings = pizza.pizzaToppings();
    pizza.priceTotal();
    $("#output").fadeIn();
    $("#size").fadeOut();
    $("#toppings").fadeOut();
  });

  $("#reload").click(function(event) {
    event.preventDefault();
    document.location.reload(true);
  });
});