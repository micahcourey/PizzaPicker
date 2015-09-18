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
  } else if (this.pizzaSize === "X-Large") {
    price += 14;
  } else {
    price += 0;
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
    if (!(price < 8)) {
      $("#error").text("");
      $("#order-price").text("Your pizza costs $" + price);
      $("#price").show();
    } else {
      $("#order-price").text("");
      $("#error").text("Please complete the form");
      $("#price").show();
    };
    event.preventDefault();
  });
});
