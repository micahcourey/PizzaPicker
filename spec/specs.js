describe('Pizza', function() {
  it("creates a new pizza", function() {
    var testPizza = new Pizza("Large", "Pepperoni, Pinapple, Bacon", 2);
    expect(testPizza.pizzaSize).to.equal("Large");
    expect(testPizza.pizzaToppings).to.equal("Pepperoni, Pinapple, Bacon");
    expect(testPizza.pizzaQuantity).to.equal(2);
  });
});

describe('pizzaSizePrice', function() {
  it("is $6 if its a small pizza", function() {
    var testPizza = new Pizza("Large", "Cheese", 1);
    expect(testPizza.pizzaSizePrice()).to.equal(12);
  });
});
