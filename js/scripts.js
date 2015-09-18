function Pizza(pizzaSize, pizzaToppings, pizzaQuantity) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaQuantity = pizzaQuantity;
};

Pizza.prototype.orderPrice = function() {
  var price = 0
  var toppingsCost = this.pizzaToppings * 5;
  if (this.pizzaSize === "Small") {
    price += 8;
  } else if (this.pizzaSize === "Medium") {
    price += 10;
  } else if (this.pizzaSize === "Large") {
    price += 12;
  } else {
    price += 14;
  };
  price += toppingsCost;
  var pizzaOrderPrice = this.pizzaQuantity * price;

  return pizzaOrderPrice;
};

$(document).ready(function() {
  $("form#pizza-form").submit(function(event){
    var pizzaSize = $("select#pizza-size").val();
    var pizzaToppings = $("input#topping:checked").length;
    var pizzaQuantity = $("input#quantity").val();

    var newPizza = new Pizza(pizzaSize, pizzaToppings, pizzaQuantity);
    var price = newPizza.orderPrice();

    $("#order-price").text("$" + price);
    $("#price").show();
    event.preventDefault();
  });
});
