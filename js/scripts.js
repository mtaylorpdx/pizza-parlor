// Business Logic ------------
function Pizza () {
  this.size = "";
  this.toppings = [];
  this.price = 0;
}

Pizza.prototype.pizzaSize = function() {
  var size = $("input:radio[name=size]:checked").val();
  this.size = size;
}

Pizza.prototype.pizzaPrice = function() {
  if (this.size === 'small') {
    this.price = 8
  } else if (this.size === 'medium') {
    this.price = 10
  } else {
    this.price = 12
  }
}

Pizza.prototype.pizzaToppings = function() {
  var toppings = [0]
  $("input[name='topping']:checked").each(function() {
    toppings.push($(this).val());
  });
  this.toppings = toppings;
}

Pizza.prototype.toppingsPrice = function() {
  this.price = (this.price + (this.toppings.length * 2) - 2);
}

// User Interface Logic ------

$(document).ready(function() {
  var pizza = new Pizza ();
  $("form#size").change(function(event) {
    event.preventDefault();
    pizza.pizzaSize();
    $("#toppings").fadeIn();
  });

  $("form").submit(function(event) {
    event.preventDefault();
    pizza.pizzaPrice();
    pizza.pizzaToppings();
    pizza.toppingsPrice();
    $(".outputSize").append(pizza.size);
    $(".outputTotal").append(pizza.price);
    $("#output").fadeIn();
    $("#size").fadeOut();
    $("#toppings").fadeOut();
  });

  $("#reload").click(function(event) {
    event.preventDefault();
    document.location.reload(true);
  });
});