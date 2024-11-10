// function showAlert() {
//   alert("Button clicked!");
// }

// const button = document.getElementsByClassName("button");
// button.addEventListener("click", () => console.log("Button clicked!"));

// function updateMessage() {
//   const messageBox = document.getElementById("message-box");
//   messageBox.textContent = "Hello, welcome to the exam project!";
// }
// const div = document.getElementsByClassName("card");
// div.classList.add("active");

// updateMessage();

// const userList = ["Alice", "Bob", "Charlie"];

// const ulElement = document.createElement("ul");
// ulElement.classList.add("user-list");

// for (let i = 0; i < userList.length; i++) {
//   const liElement = document.createElement("li");
//   liElement.textContent = userList[i];
//   ulElement.appendChild(liElement);
// }

// document.body.appendChild(ulElement);

// const items = document.querySelectorAll("li");

// for (let i = 0; i < items.length; i++) {
//   items[i].textContent = `Item ${i + 1}`;
// }

// document
//   .getElementById("simple-form")
//   .addEventListener("submit", function (event) {
//     event.preventDefault();
//     const nameInput = document.getElementById("name").value;

//     if (nameInput === "") {
//       alert("Name is required.");
//     } else {
//       alert(`Hello, ${nameInput}!`);
//     }
//   });

// const settings = {
//   theme: "dark",
//   language: "en",
// };

// console.log(settings.color);

// let numbers = [1, 2, 3, 4, 5, 6];
// function filterEvenNumbers(array) {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0) newArray.push(array[i]);
//   }
//   return newArray;
// }
// console.log(filterEvenNumbers(numbers));

// let wordsArray = ["apple", "banana", "cherry"];

// function findLongestWord(array) {
//   let longWord = array[0];
//   for (let i = 1; i < array.length; i++) {
//     if (longWord.length < array[i].length) longWord = array[i];
//   }
//   return longWord;
// }
// console.log(findLongestWord(wordsArray));

// function capitalizeWords(sentence) {
//   let newSentence = "";
//   let arrayOfWord = sentence.split(" ");
//   for (let i = 0; i < arrayOfWord.length; i++) {
//     newSentence += `${
//       arrayOfWord[i].charAt(0).toUpperCase() + arrayOfWord[i].slice(1)
//     } `;
//   }
//   return newSentence;
// }

// console.log(capitalizeWords("hello world"));

import mongoose from "mongoose";
import express from "express";
import User from "./models/user_Model.js";

const app = express();
const PORT = 3000;

app.use(express.json());

app.listen(PORT, () => {
  console.log(`The Server run on Port ${PORT}`);
});

app.get("/", (req, res) => {
  res.send("Welcome to our API!");
});

async function connectDB() {
  try {
    await mongoose.connect(
      "mongodb+srv://HavivBitton:L28vlo2RA0HSAXbo@cluster1.nfkg3.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    );
    console.log("Connected to MongoDB Atlas");
  } catch (error) {
    console.error("MongoDB Atlas connection error", error);
  }
}

connectDB();

import usersRouter from "./user_router.js";
//Users
app.use("/api/users", usersRouter);
