// let person = {
//   firstName: "Haviv",
//   lastName: "Bitton",
//   age: 24,
//   city: "Bat-Yam",
//   favoriteFood: "meat",
// };
// console.log(person);

// let computer = {
//   company: "Apple",
//   YeaOfManufacture: "2024",
//   screenSize:"13.6"
// };

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
