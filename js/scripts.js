function Pizza(pizzaSize, pizzaToppings, pizzaQuantity) {
  this.pizzaSize = pizzaSize;
  this.pizzaToppings = pizzaToppings;
  this.pizzaQuantity = pizzaQuantity;
};

Pizza.prototype.pizzaSizePrice = function() {
  if (this.pizzaSize === "Small") {
    return 8;
  } else if (this.pizzaSize === "Medium") {
    return 10;
  } else if (this.pizzaSize === "Large") {
    return 12;
  } else {
    return 14;
  };
};
