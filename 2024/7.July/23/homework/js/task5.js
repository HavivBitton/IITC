// Task 5
// String Comparison ans Manipulation

function formatName(name) {
  let trimName = name.trim();
  console.log("Trim name is " + trimName);
  console.log(trimName.toLowerCase());
  console.log(trimName.toUpperCase());
  if (name === "admin") {
    console.log("Wellcome Admin");
  } else {
    console.log("Wellcome " + name);
  }
}

let trimName1 = formatName("     Haviv Bitton      ");
