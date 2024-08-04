function getValueFromKey(array, key) {
  let arrayOfValue = [];
  for (let i = 0; i < array.length; i++) {
    let currentObject = array[i];
    arrayOfValue.push(currentObject[key]);
  }
  return arrayOfValue;
}

let students = [
  { id: "1", name: "omer", grade: 100 },
  { id: "2", name: "avi", grade: 40 },
  { id: "3", name: "gaga", grade: 80 },
];

// console.log(getValueFromKey(students, "id")); //["1", "2", "3"] (3)

console.log(getValueFromKey(students, "name")); //["omer", "avi", "gaga"] (3)

function getPassingStudents(array, passGrade) {
  let arrayOfPassStudents = [];
  for (let i = 0; i < array.length; i++) {
    let currentObject = array[i];
    if (currentObject.grade >= passGrade) {
      arrayOfPassStudents.push(currentObject);
    }
  }
  return arrayOfPassStudents;
}

console.log(getPassingStudents(students, 80));

function createPersons(names) {
  let persons = [];
  for (let i = 0; i < names.length; i++) {
    persons[i] = { name: names[i], id: (i + 1).toString() };
  }

  return persons;
}
console.log(createPersons(["yossi", " liraz", "baba"]));
/* 
  Write a function "groupBy" that takes 
  an array of objects and a key.
  returns an object where each key is a unique value 
  from the employees array and the corresponding value 
  is an array containing the employees that belong to that key.
  Example:
*/

let employees = [
  { name: "John Doe", department: "Engineering", yearsOfExp: 5 },
  { name: "Jane Smith", department: "Marketing", yearsOfExp: 8 },
  { name: "Peter Johnson", department: "Engineering", yearsOfExp: 5 },
  { name: "Lucy Brown", department: "Marketing", yearsOfExp: 10 },
  { name: "Mike Davis", department: "Engineering", yearsOfExp: 3 },
  { name: "Sara Wilson", department: "Marketing", yearsOfExp: 8 },
];

function groupBy(array, key) {
  let group = {};
  for (let i = 0; i < array.length; i++) {
    currentDepartment = array[i][key];
    if (group[currentDepartment] !== undefined) {
      group[currentDepartment].push(array[i]);
    } else {
      group[currentDepartment] = [array[i]];
    }
  }
  return group;
}

console.log(groupBy(employees, "yearsOfExp"));
/*
{
  Engineering: [
    { name: 'John Doe', department: 'Engineering', yearsOfExp: 5 },
    { name: 'Peter Johnson', department: 'Engineering', yearsOfExp: 5 },
    { name: 'Mike Davis', department: 'Engineering', yearsOfExp: 3 }
  ],
  Marketing: [
    { name: 'Jane Smith', department: 'Marketing', yearsOfExp: 8 },
    { name: 'Lucy Brown', department: 'Marketing', yearsOfExp: 10 },
    { name: 'Sara Wilson', department: 'Marketing', yearsOfExp: 8 }
  ]
}
*/
