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
console.log(person.name);
console.log(person.age);
person.isStudent = false;
console.log(person.isStudent);

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
