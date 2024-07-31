// # JavaScript Objects - Practice Exercises

// ## Exercise 1: Person

// 1. Create an object called `person` with properties: name (string), age (number), and isStudent (boolean).
// 2. Access and log the name and age of the person.
// 3. Modify the isStudent property and log the updated object.

// **Hint:** Use object literal syntax to create the object. Remember, you can access object properties using dot notation or bracket notation.

// **Learn more:** [MDN Web Docs - Working with Objects](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects)

//////answer
let person = {
  name: "Haviv",
  age: 24,
  isStudent: true,
};
console.log(
  `The man's name is ${person.name} and his age is ${person.age} years old`
);
// Output: The man's name is Haviv and the age is 24 years old
person.isStudent = false;
console.log(`Its ${person.isStudent} that this person is student`);
// Output: Its false that this person is student

// ## Exercise 2: Car

// 1. Create an object called `car` with properties: make (string), model (string), and year (number).
// 2. Access and log the make and model of the car.
// 3. Update the year of the car and log the updated object.

// **Hint:** After creating the object, you can modify properties by assigning new values to them.

// **Learn more:** [JavaScript.info - Objects](https://javascript.info/object)

//////answer

let car = {
  make: "Ford",
  model: "Fiesta",
  year: 2002,
};
console.log(`The car make is ${car.make} and the model is ${car.model}`);
// Output:The car make is Ford and the model is Fiesta
car.year = 2012;
console.log(`The manufacture year is ${car.year} `);
// Output:The manufacture year is 2012

// ## Exercise 3: Fruit

// 1. Create an object called `fruit` with properties: name (string), color (string), and sweetness (number from 1-10).
// 2. Access and log the name and sweetness of the fruit.
// 3. Change the color of the fruit and log the updated object.

// **Hint:** Remember to use appropriate data types for each property. The sweetness should be a number.

// **Learn more:** [W3Schools - JavaScript Objects](https://www.w3schools.com/js/js_objects.asp)

//////answer
let fruit = {
  name: "Banana",
  color: "yellow",
  sweetness: 6,
};
console.log(
  `The car name is ${fruit.name} and the sweetness is ${fruit.sweetness}`
);
// Output :The car name is Banana and the sweetness is 6
fruit.color = "Yellow";
console.log(`The fruit's color is ${fruit.color} `);
// Output: e fruit's color is Yellow

// ## Exercise 4: Book

// 1. Create an object called `book` with properties: title (string), author (string), and pages (number).
// 2. Access and log the title and author of the book.
// 3. Increase the number of pages by 50 and log the updated object.

// **Hint:** To increase the number of pages, you'll need to access the current value and add to it.

// **Learn more:** [MDN Web Docs - Object basics](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Basics)

//////answer

let book = {
  title: "A Song of Ice and Fire",
  author: "George R. R. Martin",
  page: 354,
};
console.log(`The book title is ${book.title} and the author is ${book.author}`);
// Output : The book title is A Song of Ice and Fire and the author is George R. R. Martin
book.page += 50;
console.log(`The book's number of page is ${book.page}`);
// Output :e book's number of page is 404

// ## Exercise 5: Animal

// 1. Create an object called `animal` with properties: species (string), sound (string), and isWild (boolean).
// 2. Access and log the species and sound of the animal.
// 3. Change the isWild property and log the updated object.

// **Hint:** Boolean values in JavaScript are `true` or `false` (without quotes).

// **Learn more:** [JavaScript.info - Object properties configuration](https://javascript.info/object-properties)
//////answer

let animal = {
  species: "Lion",
  sound: "  Arrrrr",
  isWild: false,
};
console.log(
  `The animal species is ${animal.species} and his sound is ${animal.sound}`
);
//Output :The animal species is Lion and his sound is   Arrrrr
animal.isWild = true;
console.log(`Its ${animal.isWild} that this animals is wild`);
//Output :s true that this animals is wild

// ## Exercise 6: Smartphone

// 1. Create an object called `smartphone` with properties: brand (string), model (string), and storageGB (number).
// 2. Access and log the brand and storageGB of the smartphone.
// 3. Update the model of the smartphone and log the updated object.

// **Hint:** When logging multiple properties, you can use string concatenation or template literals.

// **Learn more:** [MDN Web Docs - Template literals](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals)
//////answer

// ## Exercise 7: Recipe

// 1. Create an object called `recipe` with properties: name (string), ingredients (array), and preparationTime (number in minutes).
// 2. Access and log the name and the first ingredient of the recipe.
// 3. Add a new ingredient to the ingredients array and log the updated object.

// **Hint:** To access the first element of an array, use index 0. To add an element to an array, you can use the `push()` method.

// **Learn more:** [MDN Web Docs - Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)
//////answer
// ## Exercise 8: Movie

// 1. Create an object called `movie` with properties: title (string), director (string), and releaseYear (number).
// 2. Access and log the title and director of the movie.
// 3. Update the releaseYear and log the updated object.

// **Hint:** Make sure to use the appropriate data type for the releaseYear (it should be a number, not a string).

// **Learn more:** [JavaScript.info - Object methods, "this"](https://javascript.info/object-methods)
//////answer
// ## Exercise 9: Country

// 1. Create an object called `country` with properties: name (string), capital (string), and population (number).
// 2. Access and log the name and capital of the country.
// 3. Increase the population by 1 million and log the updated object.

// **Hint:** When increasing the population, remember to add the number (1000000) to the current population value.

// **Learn more:** [MDN Web Docs - Object initializer](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer)
//////answer
// ## Exercise 10: Computer

// 1. Create an object called `computer` with properties: brand (string), CPU (string), and RAMinGB (number).
// 2. Access and log the brand and CPU of the computer.
// 3. Double the RAMinGB and log the updated object.

// **Hint:** To double a number, you can multiply it by 2 or add it to itself.

// **Learn more:** [JavaScript.info - Objects](https://javascript.info/object)
//////answer
// Remember, practice is key to mastering JavaScript objects. Try to complete these exercises without looking at the solutions, and don't hesitate to use console.log() to check your work at each step!
