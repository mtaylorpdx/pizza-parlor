// Business Logic ------------

function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.pizzaSize = function() {
  var size = $("input:radio[name=size]:checked").val();
  console.log(size);
  return size
}

Pizza.prototype.pizzaToppings = function() {
  var toppings = []
  $("input[name='topping']:checked").each(function() {
    toppings.push($(this).val());
  });
  console.log(toppings);
  return toppings
}

Pizza.prototype.pizzaPrice = function() {
  if (pizza.size === 'small') {
    console.log("small price");
    pizza.price = 8
  } else if (pizza.size === 'medium') {
    pizza.price = 10
  } else {
    pizza.price = 12
  }
  console.log (pizza.price)
  return pizza.price
}

Pizza.prototype.toppingsPrice = function() {
  for (var index = 0; index < (pizza.toppings).length; index++) {
    console.log(index)
    var toppingsTotal = index + 1
  }
  console.log(toppingsTotal);
  return toppingsTotal
}

Pizza.prototype.priceTotal = function() {
  var report = pizza.sizePrice() + pizza.toppingsPrice();
  alert(report);
}

// User Interface Logic ------
var pizza = new Pizza ('size', 'toppings', 'price')

$(document).ready(function() {
  $("form#size").submit(function(event) {
    pizza.size = pizza.pizzaSize();
    pizza.toppings = pizza.pizzaToppings();
    // pizza.pizzaPrice();
    // console.log(pizzaPrice);
    // pizza.toppingsPrice();
    // pizza.priceTotal();
    console.log(pizza.size);
    console.log(pizza);
    event.preventDefault();
  });
});