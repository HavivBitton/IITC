//------------------Basic Array Operations (Beginner)
// 1
let array1 = [1, 2, 3];
let newArray = [...array1];
// console.log(newArray);

//2
let array2 = [4, 5, 6];
newArray = [...array1, ...array2];
// console.log(newArray);

//3
let newElement = 4;
newArray = [newElement, ...newArray];
// console.log(newArray);

//4
newArray = [1, 2, 3];
newArray = [...newArray, newElement];
// console.log(newArray);

//5
const array3 = [7, 8, 9];
newArray = [...array1, ...array2, ...array3];
// console.log(newArray);

//6
newArray = [1, 2, 3];
newArray = [...newArray, newElement];
// console.log(newArray);

//7
newArray = [...newArray.slice(1)];
// console.log(newArray);

//8
newArray = [1, 2, 3, 4, 5, 6];
newArray = [...newArray.slice(-3)];
// console.log(newArray);

//9
newArray = [1, 2, 3, 4, 5, 6];
newArray = [...newArray.reverse()];
// console.log(newArray);

//10
newArray = [1, 2, 3, 4, 5, 6];
newElement = 10;
newArray = [newArray[0], newElement, ...newArray.slice(2)];
// console.log(newArray);

//------------------Practical Scenarios (Intermediate)

//1
let string1 = "hello";
newArray = [...string1];
// console.log(newArray);

//2
// ?
// console.log(newArray);

//3
newArray = [1, 2, 3, 4, 5, 6];
newArray = [...newArray.slice(0, -1)];
// console.log(newArray);

//4
newElement = 5;
newArray = [1, 2, 3, 4, 5, 6];
newArray = [...newArray.slice(0, 2), newElement, ...newArray.slice(2)];
// console.log(newArray);

//5
newArray = [1, 2, 3, 2, 3, 1, 4];
newArray = [...new Set(newArray)];
// console.log(newArray);

//6
newArray = [1, 2, 3, 4, 5, 6];
newArray = [...newArray.slice(1, -1)];
// console.log(newArray);

//7
newArray = [...newArray.slice(1), newArray[0]];
// console.log(newArray);

//8
string1 = "hello";
newArray = [string1, ...newArray];
// console.log(newArray);

//9
mergeArrays = (array1, array2) => {
  const mergedArray = [...array1, ...array2];
  return mergedArray;
};
array1 = [1, 2, 3];
array2 = [4, 5, 6];
// console.log(mergeArrays(array1, array2));

//10
newArray = [1, 2, 3, 4, 5, 6];
newArray = [...newArray.sort(() => Math.random() - 0.5)];
// console.log(newArray);
