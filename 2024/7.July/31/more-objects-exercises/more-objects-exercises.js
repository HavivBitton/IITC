// # JavaScript Objects - 20 More Practice Exercises

// ## Exercise 11: Playlist
// 1. Create an object called `playlist` with properties: name (string), songs (array of strings), and duration (number in minutes).
// 2. Add a new song to the playlist.
// 3. Calculate and log the average song duration (assume each song is 3 minutes long).

// **Hint:** Use the `length` property of the array to get the number of songs.

//1. Create the playlist object
let playlist = {
  name: "Hamishtah",
  songs: ["Blinding Lights", "Alien", "Trap Queen"],
  duration: 60,
};
//2
playlist.songs.push("we will rock you");
console.log(playlist.songs);
//Output:
//3
playlist.duration = playlist.songs.length * 3;
console.log(playlist.duration); // 12

// ## Exercise 12: Bank Account
// 1. Create an object called `bankAccount` with properties: accountNumber (string), balance (number), and isActive (boolean).
// 2. Create a method called `deposit` that takes an amount and adds it to the balance.
// 3. Create another method called `withdraw` that takes an amount and subtracts it from the balance, but only if the balance is sufficient.

// **Hint:** Use `this` keyword inside methods to access object properties.

//1. Create the bankAccount object
let bankAccount = {
  accountNumber: "200137",
  balance: 20000,
  isActive: false,
  deposit: function (number) {
    this.balance += number;
  },
  withdraw: function (number) {
    if (this.balance > number) {
      this.balance -= number;
    } else console.log("You d'not have enough balance");
  },
};

// ## Exercise 13: Circle
// 1. Create an object called `circle` with properties: radius (number) and color (string).
// 2. Add a method called `calculateArea` that returns the area of the circle (π * r^2).
// 3. Add another method called `calculateCircumference` that returns the circumference of the circle (2 * π * r).
// **Hint:** Use `Math.PI` for the value of π.
//
//1. Create the  circle object
let circle = {
  radius: 5,
  color: "blue",
  calculateArea: function () {
    console.log(Math.PI * Math.pow(this.radius, 2));
  },
  calculateCircumference: function () {
    console.log(Math.PI * 2 * this.radius);
  },
};
//2
circle.calculateArea();
//Output:78.53981633974483
//3
circle.calculateCircumference();
//Output:31.41592653589793

// ## Exercise 14: Student Grade Calculator
// 1. Create an object called `student` with properties: name (string) and grades (array of numbers).
// 2. Add a method called `calculateAverage` that returns the average of the student's grades.
// 3. Add another method called `getLetterGrade` that returns 'A' for >=90, 'B' for >=80, 'C' for >=70, 'D' for >=60, and 'F' for <60.

// **Hint:** Use array methods like `reduce()` to calculate the average.
//
//1. Create the student object
let student = {
  name: "Rom",
  grade: [80, 90, 75, 100],
  calculateAverage: function () {
    let sum = 0;
    for (let i = 0; i < this.grade.length; i++) {
      sum += this.grade[i];
    }
    sum /= this.grade.length;
    return sum;
  },
  getLetterGrade: function () {
    let sumOfLatterGrade = "";
    for (let i = 0; i < this.grade.length; i++) {
      if (this.grade[i] >= 90) sumOfLatterGrade += "A ,";
      else if (this.grade[i] >= 80) sumOfLatterGrade += "B ,";
      else if (this.grade[i] >= 70) sumOfLatterGrade += "C ,";
      else if (this.grade[i] >= 60) sumOfLatterGrade += "D ,";
      else if (this.grade[i] < 60) sumOfLatterGrade += "F ,";
    }
    return sumOfLatterGrade;
  },
};

//2
let average = student.calculateAverage();
console.log(average); // Output: 86.25
//3
console.log(`${student.name} grade's is ${student.getLetterGrade()}`);

// ## Exercise 15: To-Do List
// 1. Create an object called `todoList` with properties: tasks (array of strings) and completedTasks (array of strings).
// 2. Add methods: `addTask(task)`, `completeTask(task)`, and `displayTasks()`.
// 3. `completeTask(task)` should move a task from tasks to completedTasks.

// **Hint:** Use array methods like `push()` and `filter()`.

//Create function that get array and value and return the array without the value
function isExists(checkArray, value) {
  let newArray = [];
  for (let i = 0; i < checkArray.length; i++) {
    if (checkArray[i] !== value) newArray.push(checkArray[i]);
  }
  return newArray;
}

//1. Create the toDoList object
let toDoList = {
  task: ["Clean home", "Throw the garbege"],
  completedTaskList: ["Wash the dishes"],
  // Add methods: `addTask(task)`,
  addTask: function (newTask) {
    this.task.push(newTask);
  },
  // Add methods: `completeTask(task)`
  completedTask: function (task1) {
    let taskIndex = this.task.indexOf(task1);
    if (taskIndex !== -1) {
      this.task = isExists(this.task, task1);
      this.completedTaskList.push(task1);
    } else console.log("This task are not in the To-Do List");
  },
  // Add methods:`displayTasks()`.
  displayTask: function () {
    let keys = Object.keys(this);
    let values = Object.values(this);
    for (let i = 0; i < keys.length; i++) {
      console.log(keys[i]);
      if (typeof values[i] !== "function") {
        console.log(`The ${keys[i]} is ${values[i]}`);
      }
    }
  },
};
//2
console.log(toDoList.task); //Output:["Clean home", "Throw the garbege"] (2)
toDoList.addTask("Make the bed");
console.log(toDoList.task); //Output:["Clean home", "Throw the garbege", "Make the bed"] (3)
toDoList.displayTask();

//3
toDoList.completedTask("Throw the garbege");
console.log(toDoList.task); //Output:["Clean home", "Make the bed"] (2)
console.log(toDoList.completedTaskList); //Output:["Wash the dishes", "Throw the garbege"] (2)

// ## Exercise 16: Library Book
// 1. Create an object called `book` with properties: title (string), author (string), isbn (string), and isAvailable (boolean).
// 2. Add methods: `checkOut()` and `return()`.
// 3. These methods should change the `isAvailable` status and log a message.
// **Hint:** Use conditional statements in your methods.
//
//1. Create the book object
let book = {
  title: "",
  author: "",
  isbn: "",
  isAvailable: true,
  // Add methods: `checkOut()` and `return()`.
  checkOut: function () {
    if (this.isAvailable) {
      this.isAvailable = false;
    } else console.log("This book is already not available");
  },
  return: function () {
    this.isAvailable = true;
  },
};
//Tests
console.log(book.isAvailable); // Output: true
book.checkOut();
console.log(book.isAvailable); // Output: false
book.checkOut(); // Output: This book is already not available
book.return();
console.log(book.isAvailable); // Output: true

// ## Exercise 17: Color Mixer
// 1. Create an object called `colorMixer` with properties: color1 (string) and color2 (string).
// 2. Add a method called `mix()` that returns a new color based on the combination of color1 and color2.
// 3. Use predefined combinations like "red" + "blue" = "purple", "yellow" + "blue" = "green", etc.

// **Hint:** Use a switch statement or object lookup for color combinations.
//1. Create the colorMixer object
let colorMixer = {
  color1: "",
  color2: "",
  // 2. Add the mix() method
  mix: function () {
    // Define color combinations
    let combinations = {
      "red-blue": "purple",
      "blue-red": "purple",
      "yellow-blue": "green",
      "blue-yellow": "green",
      "red-yellow": "orange",
      "yellow-red": "orange",
    };
    // Create a key for the combination
    let key = `${this.color1}-${this.color2}`;
    // Return the resulting color based on the combination
    return combinations[key] || "unknown";
  },
};
//Test 1
colorMixer.color1 = "yellow";
colorMixer.color2 = "blue";
console.log(colorMixer.mix()); // Output: green
//Test 2
colorMixer.color1 = "yellow";
colorMixer.color2 = "red";
console.log(colorMixer.mix()); // Output : orange

// ## Exercise 18: Temperature Converter
// 1. Create an object called `tempConverter` with properties: celsius (number) and fahrenheit (number).
// 2. Add methods: `setC(temp)`, `setF(temp)`, `getC()`, and `getF()`.
// 3. When setting one temperature, automatically calculate and set the other.

// **Hint:** Use the formulas: C = (F - 32) * 5/9 and F = C * 9/5 + 32
//
//Create the tempConverter object
let tempConverter = {
  celsius: 0,
  fahrenheit: 0,
  // Add methods: `setC(temp)`
  setC: function (temp) {
    this.celsius = temp;
    this.fahrenheit = temp * (9 / 5) + 32;
  },
  // Add methods: `setF(temp)`
  setF: function (temp) {
    this.fahrenheit = temp;
    this.celsius = (temp - 32) * (5 / 9);
  },
  // Add methods: `getC()`
  getC: function () {
    console.log(this.celsius);
  },
  // Add methods: `getF()`
  getF: function () {
    console.log(this.fahrenheit);
  },
};
//Test
tempConverter.setC(30);
tempConverter.getC(); // Output: 30
tempConverter.getF(); // Output: 86
tempConverter.setF(90);
tempConverter.getF(); // Output: 90
tempConverter.getC(); // Output: 32.22222

// ## Exercise 19: Virtual Pet
// 1. Create an object called `pet` with properties: name (string), type (string), hunger (number), and happiness (number).
// 2. Add methods: `feed()`, `play()`, and `getStatus()`.
// 3. `feed()` should decrease hunger, `play()` should increase happiness, and `getStatus()` should return a string describing the pet's state.

// **Hint:** Use template literals for `getStatus()` return value.
// Create the `pet` object
let pet = {
  name: "",
  type: "",
  hunger: 5,
  happiness: 5,
  //Add methods: `feed()`
  feed: function () {
    if (this.hunger > 0) this.hunger--;
    if (this.hunger === 0)
      console.log(`This ${this.type} ate a lot and now is full`);
  },
  //Add methods: `play()`
  play: function () {
    if (this.happiness < 10) this.happiness++;
    if (this.happiness === 10)
      console.log(`This ${this.type} played a lot and now is tired`);
  },
  //Add methods:`getStatus()`
  getStatus: function () {
    //set variable that contain massage with happiness status.
    let happinessStatus;
    if (this.happiness >= 8) happinessStatus = "very happy";
    else if (this.happiness >= 4) happinessStatus = "happy";
    else happinessStatus = "not happy, play with him!";

    //set variable that contain massage with hunger status.
    let hungerStatus;
    if (this.hunger <= 3) hungerStatus = "very full";
    else if (this.happiness <= 6) hungerStatus = "OK, but can eat more";
    else if (this.hunger > 0) hungerStatus = "hungry, feed him!";
    else if (this.hunger === 0) hungerStatus = "sturving! feed him now! ";

    // return the full status massage
    return `This ${this.type} hunger is ${hungerStatus} and his happiness is ${happinessStatus} `;
  },
};

// Test
pet.name = "Toto";
pet.type = "dog";
pet.hunger = 1;
pet.feed(); // Output : This dog ate a lot and now is full
console.log(pet.hunger); // Output : 0
pet.happiness = 9;
pet.play(); // Output: This dog played a lot and now is tired

console.log(pet.getStatus()); // Output: This dog hunger is very full and his happiness is very happy.
//
//
// ## Exercise 20: Quiz
// 1. Create an object called `quiz` with properties: questions (array of objects) and score (number).
// 2. Each question object should have: text (string), options (array), and correctAnswer (number - index of correct option).
// 3. Add methods: `askQuestion(index)` and `checkAnswer(index, answer)`.

// **Hint:** Use `console.log()` to display questions and options.
//create the object
const quiz = {
  questions: [
    { text: " 10 * 10 =", option: [10, 50, 100], correctAnswer: 2 },
    { text: " 10 / 10 =", option: [1, 5, 11], correctAnswer: 0 },
    { text: " 10 + 10 =", option: [10, 20, 30], correctAnswer: 1 },
  ],
  score: 0,
  // add methods `askQuestion(index)`
  askQuestions: function (index) {
    console.log(this.questions[index].text);
  },
  //Add methods: `checkAnswer(index, answer)`
  checkAnswer: function (index, answer) {
    if (this.questions[index].correctAnswer === answer) {
      console.log("That is the correct answer ! ");
    } else console.log("This is an incorrect answer, try again!");
  },
};

quiz.askQuestions(1); // 10 / 10 =
quiz.checkAnswer(0, 1); //This is an incorrect answer, try again!
quiz.checkAnswer(0, 2); //That is the correct answer !

// ## Exercise 21: Inventory Manager
// 1. Create an object called `inventory` with properties: items (array of objects) where each item has name (string) and quantity (number).
// 2. Add methods: `addItem(name, quantity)`, `removeItem(name, quantity)`, and `checkStock(name)`.

// **Hint:** Use array `find()` method to locate items.
// create the object
const inventory = {
  items: [
    { name: "mango", quantity: 5 },
    { name: "banana", quantity: 0 },
  ],
  // Add methods: `addItem(name, quantity)`
  addItem: function (name, quantity) {
    this.items.push({ name: name, quantity: quantity });
  },
  // Add methods: `removeItem(name, quantity)`,
  removeItem: function (name, quantity) {
    // function findItem(array, name) {
    //   return array.name === name;
    // }
    // console.log(this.items.find(findItem(this.items, name)));
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i].name === name) {
        if (this.items[i].quantity - quantity >= 0) {
          this.items[i].quantity -= quantity;
          console.log(
            `The quantity of ${this.items[i].name} is ${this.items[i].quantity} `
          );
        } else console.log("There not enough quantity for this");
      }
    }
  },
  // Add methods: `checkStock(name,)`
  checkStock: function (name) {
    let counter = 0;
    for (i = 0; i < this.items.length; i++) {
      if (this.items[i].name === name) {
        if (this.items[i].quantity === 0) {
          console.log(`The item "${name}" is out of stock `);
          counter++;
        } else {
          console.log(`The quantity of ${name} is ${this.items[i].quantity} `);
          counter++;
        }
      }
    }
    if (counter === 0) console.log(`There is no item call "${name}"`);
  },
};

inventory.addItem("apple", 3);
console.log(inventory.items); //[{name: "mango", quantity: 5}, {name: "banana", quantity: 2}, {name: "apple", quantity: 3}] (3)

inventory.removeItem("mango", 10); // There not enough quantity for this
inventory.removeItem("mango", 3); // The quantity of mango is 2

inventory.checkStock("banana"); //The item "banana" is out of stock
inventory.checkStock("kiwi"); //There is no item call "kiwi"

////////////////////////////////////////////////////////////////////////////////////////////////

// ## Exercise 22: Dice Roller
// 1. Create an object called `dice` with properties: sides (number) and lastRoll (number).
// 2. Add a method called `roll()` that generates a random number between 1 and `sides`, sets `lastRoll`, and returns the result.

// **Hint:** Use `Math.random()` and `Math.floor()`.

// create an object called 'dice'
const dice = {
  sides: 6,
  lastRoll: 0,
  // add
  roll: function () {
    this.lastRoll = Math.floor(Math.random() * this.sides + 1);
    return this.lastRoll;
  },
};

console.log(dice.roll()); // 4

////////////////////////////////////////////////////////////////////////////////////////////////

// ## Exercise 23: Word Counter
// 1. Create an object called `wordCounter` with a property text (string).
// 2. Add methods: `countWords()`, `countCharacters(includeSpaces)`, and `getFrequentWords(n)`.
// 3. `getFrequentWords(n)` should return the n most frequent words.

// **Hint:** Use string methods like `split()` and object to store word frequencies.

// Create an object called `wordCounter`
const wordCounter = {
  text: "",
  //Add methods: `countWords()`
  // countWords :
};

////////////////////////////////////////////////////////////////////////////////////////////////
// ## Exercise 24: Simple Calculator
// 1. Create an object called `calculator` with properties: result (number).
// 2. Add methods: `add(n)`, `subtract(n)`, `multiply(n)`, `divide(n)`, and `clear()`.
// 3. Each method (except `clear()`) should update and return `result`.

// **Hint:** Use method chaining to allow operations like `calculator.add(5).multiply(2)`.

// ## Exercise 25: Rock Paper Scissors Game
// 1. Create an object called `game` with properties: playerScore (number) and computerScore (number).
// 2. Add methods: `play(playerChoice)`, `getComputerChoice()`, and `determineWinner(player, computer)`.

// **Hint:** Use Math.random() for computer choice and nested if statements for winner logic.

// ## Exercise 26: BMI Calculator
// 1. Create an object called `bmiCalculator` with properties: weight (number) and height (number).
// 2. Add methods: `setMetricUnits(weight, height)`, `setImperialUnits(weight, height)`, and `calculate()`.
// 3. `calculate()` should return the BMI and a description (e.g., "Normal weight", "Overweight").

// **Hint:** BMI = weight(kg) / (height(m))^2 or BMI = 703 * weight(lbs) / (height(inches))^2

// ## Exercise 27: Time Converter
// 1. Create an object called `timeConverter` with a property seconds (number).
// 2. Add methods: `setTime(seconds)`, `getHours()`, `getMinutes()`, and `getSeconds()`.
// 3. Each getter method should return the appropriate part of the time.

// **Hint:** Use division and modulo operators.

// ## Exercise 28: Shopping Cart
// 1. Create an object called `shoppingCart` with properties: items (array of objects) and total (number).
// 2. Each item should have: name (string), price (number), and quantity (number).
// 3. Add methods: `addItem(name, price, quantity)`, `removeItem(name)`, and `calculateTotal()`.

// **Hint:** Use array `reduce()` method to calculate the total.

// ## Exercise 29: Morse Code Translator
// 1. Create an object called `morseTranslator` with a property alphabet (object mapping letters to morse code).
// 2. Add methods: `textToMorse(text)` and `morseToText(morse)`.

// **Hint:** Use string `split()` and `join()` methods along with `map()`.

// ## Exercise 30: Simple Stopwatch
// 1. Create an object called `stopwatch` with properties: startTime (number), isRunning (boolean), and elapsedTime (number).
// 2. Add methods: `start()`, `stop()`, `reset()`, and `getElapsedTime()`.

// **Hint:** Use `Date.now()` to get the current timestamp.

// Remember to test your code frequently and use `console.log()` to debug!
