// Business Logic ------------

function Pizza (size, toppings, price) {
  this.size = size;
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.pizzaSize = function() {

}


// User Interface Logic ------
var pizza = new Pizza ('size', 'toppings', 'price')

$(document).ready(function() {
  $("form#size").submit(function(event) {
    event.preventDefault();

  });
});