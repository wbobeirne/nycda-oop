var Website = {
	title: "Will's cool site",
	description: "It's where you find Will's portfolio",

	start: function() {
		console.log(this.title);
		console.log(this.description);
		this.greeting("user");

		window.addEventListener("resize", function() {
			this.handleResize();
		}.bind(this));
	},

	greeting: function(name) {
		console.log("Welcome to the website, " + name);
	},

	handleResize: function() {
		console.log("Hey, stop shaking " + this.title + "!");
	},
};

Website.start();
