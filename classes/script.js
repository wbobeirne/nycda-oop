class WordModifier {
	constructor(word) {
		this.word = word;
	}

	printAllCaps() {
		console.log(this.word.toUpperCase());
	}

	printLowerCase() {
		console.log(this.word.toLowerCase());
	}

	printDouble() {
		console.log(this.word + this.word);
	}
}

var englishWordmod = new WordModifier("hello");
var frenchWordmod = new WordModifier("bonjour");
var spanishWordmod = new WordModifier("hola");

englishWordmod.printAllCaps();
frenchWordmod.printLowerCase();
spanishWordmod.printDouble();
