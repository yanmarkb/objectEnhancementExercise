// # ****Object Enhancements Exercise****

// In this exercise, you’ll refactor some ES5 code into ES2015. Write your code in the sections with a comment to “Write an ES2015 Version”.

// ## **Same keys and values**

// ```jsx
// function createInstructor(firstName, lastName){
//   return {
//     firstName: firstName,
//     lastName: lastName
//   }
// }
// ```

// ## ****Same keys and values ES2015****

// ```jsx
// /* Write an ES2015 Version */
// ```

const createInstructor = (firstName, lastName) => ({
	firstName,
	lastName,
});

// ## ****Computed Property Names****

// ```jsx
// var favoriteNumber = 42;

// var instructor = {
//   firstName: "Colt"
// }

// instructor[favoriteNumber] = "That is my favorite!"
// ```

// ## ****Computed Property Names ES2015****

// ```jsx
// /* Write an ES2015 Version */
// ```

const favoriteNumber = 42;

const instructor = {
	firstName: "Colt",
	[favoriteNumber]: "That is my favorite!",
};

// ## Object Methods

// ```jsx
// var instructor = {
//   firstName: "Colt",
//   sayHi: function(){
//     return "Hi!";
//   },
//   sayBye: function(){
//     return this.firstName + " says bye!";
//   }
// }
// ```

// ## ****Object Methods ES2015****

// ```jsx
// /* Write an ES2015 Version */
// ```

const instructor = {
	firstName: "Colt",
	sayHi() {
		return "Hi!";
	},
	sayBye() {
		reutnr`${this.firstName} says bye!`;
	},
};

// ## **createAnimal function**

// Write a function which generates an animal object. The function should accepts 3 arguments:

// - species: the species of animal (‘cat’, ‘dog’)
// - verb: a string used to name a function (‘bark’, ‘bleet’)
// - noise: a string to be printed when above function is called (‘woof’, ‘baaa’)

// Use one or more of the object enhancements we’ve covered.

// ```jsx
// const d = createAnimal("dog", "bark", "Woooof!")
// // {species: "dog", bark: ƒ}
// d.bark()  //"Woooof!"

// const s = createAnimal("sheep", "bleet", "BAAAAaaaa")
// // {species: "sheep", bleet: ƒ}
// s.bleet() //"BAAAAaaaa"
// ```

function makeAnimal(species, verb, noise) {
	return {
		species,
		[verb]() {
			return noise;
		},
	};
}
