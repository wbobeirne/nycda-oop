/**
 * Food Class
 */
class Food {
	constructor() {
		this.juicingMessage = "Juicing!";
		this.hasBeenJuiced = false;
	}

	// Juice the fruit, but don't let it get juiced twice
	juice() {
		if (this.hasBeenJuiced) {
			console.error("This has already been juiced!");
		}
		else {
			console.log(this.juicingMessage);
			this.hasBeenJuiced = true;
		}
	}
}

/**
 * Fruit Class
 */
class Fruit extends Food {
	constructor(name) {
		super();
		this.name = name;
		this.juicingMessage = "Juicing " + name + "!";
	}

	// Say the name of the fruit
	sayName() {
		console.log(this.name);
	}
}

/**
 * Apple Class
 */
class Apple extends Fruit {
	constructor(type) {
		super("Apple");
		this.type = type;
		this.isPeeled = false;
		this.juicingMessage = "Juicing a " + type + " apple!";
	}

	peel() {
		console.log("Peeling a " + this.type + " apple...");
		this.isPeeled = true;
	}

	// Overrides Food.juice, checks if peeled first
	juice() {
		if (this.isPeeled) {
			super.juice();
		}
		else {
			console.error("Apples must be peeled before juicing!");
		}
	}
}

/**
 * Strawberries Class
 */
class Strawberries extends Fruit {
	constructor(count) {
		super("Strawberries");
		this.count = count;
		this.isWashed = false;
		this.juicingMessage = "Juicing " + count + " strawberries!";
	}

	// Washes our strawberries
	wash() {
		console.log("Washing " + this.count + " strawberries...");
		this.isWashed = true;
	}

	// Overrides Food.juice, checks if washed first
	juice() {
		if (this.isWashed) {
			super.juice();
		}
		else {
			console.error("Strawberries must be washed before juicing!");
		}
	}
}

/**
 * JuiceBar singleton
 */
var JuiceBar = {
	ingredients: [],

	makeJuice: function() {
		// Initialize our juice ingredients
		this.ingredients = [
			new Apple("fuji"),
			new Apple("honeycrisp"),
			new Strawberries(4),
			new Fruit("Kiwi"),
		];

		// Run through all juicing steps!
		this.listIngredients();
		this.prepIngredients();
		this.juiceIngredients();
		console.log("All ingredients juiced, here ya go!");
	},

	// Say the name of each ingredient
	listIngredients: function() {
		for (var i = 0; i < this.ingredients.length; i++) {
			this.ingredients[i].sayName();
		}
	},

	// Make sure the ingredients have each been prepped
	prepIngredients: function() {
		for (var i = 0; i < this.ingredients.length; i++) {
			// Shortcut for `this.ingredients[i]`.
			var ing = this.ingredients[i];

			// If we can wash it, wash it.
			if (ing.wash) {
				ing.wash();
			}

			// If we can peel it, peel it.
			if (ing.peel) {
				ing.peel();
			}
		}
	},

	// Juice each ingredient.
	juiceIngredients: function() {
		for (var i = 0; i < this.ingredients.length; i++) {
			this.ingredients[i].juice();
		}
	},
};

// Fire up the juice bar!
JuiceBar.makeJuice();
