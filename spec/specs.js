describe('Pizza', function() {
  it("creates a new pizza", function() {
    var testPizza = new Pizza("Large", "Pepperoni, Pinapple, Bacon", 2);
    expect(testPizza.pizzaSize).to.equal("Large");
    expect(testPizza.pizzaToppings).to.equal("Pepperoni, Pinapple, Bacon");
    expect(testPizza.pizzaQuantity).to.equal(2);
  });
});

describe('pizzaSizePrice', function() {
  it("is $8 if its a small pizza", function() {
    var testPizza = new Pizza("Small", "Cheese", 1);
    expect(testPizza.pizzaSizePrice()).to.equal(8);
  });
  it("is $10 if its a medium pizza", function() {
    var testPizza = new Pizza("Medium", "Cheese", 1);
    expect(testPizza.pizzaSizePrice()).to.equal(10);
  });
  it("is $12 if its a large pizza", function() {
    var testPizza = new Pizza("Large", "Cheese", 1);
    expect(testPizza.pizzaSizePrice()).to.equal(12);
  });
  it("is $14 if its a X-Large pizza", function() {
    var testPizza = new Pizza("X-Large", "Cheese", 1);
    expect(testPizza.pizzaSizePrice()).to.equal(14);
  });
});
