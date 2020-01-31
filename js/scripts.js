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

// User Interface Logic ------
var pizza = new Pizza ('size', 'toppings', 'price')

$(document).ready(function() {
  $("form#size").submit(function(event) {
    pizza.size = pizza.pizzaSize();
    pizza.toppings = pizza.pizzaToppings();
    console.log(pizza.size);


    event.preventDefault();
  });
});