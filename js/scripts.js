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

Pizza.prototype.pizzaToppings = function() {
  var toppings = [0]
  $("input[name='topping']:checked").each(function() {
    toppings.push($(this).val());
  });
  this.toppings = toppings;
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

Pizza.prototype.toppingsPrice = function() {
  for (var i = 0; i < (this.toppings.length); i++) {
    var toppingsTotal = 0 + ((i + 1) * 2) - 2;
  }
  console.log(toppingsTotal)
  this.price += toppingsTotal;
}

Pizza.prototype.priceTotal = function() {
 
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
    pizza.pizzaToppings();
    pizza.priceTotal();
    $(".outputTotal").append(pizza.price);
    $(".outputSize").append(pizza.size);
    $("#output").fadeIn();
    $("#size").fadeOut();
    $("#toppings").fadeOut();
  });

  $("#reload").click(function(event) {
    event.preventDefault();
    document.location.reload(true);
  });
});