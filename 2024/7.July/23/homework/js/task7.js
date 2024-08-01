// task 7
// Login Validation

function validateLogin(userName, password) {
  let storedUserName = "HavivBitton";
  let storedPassword = "Haviv1234";
  if (storedUserName === userName && storedPassword === password) {
    console.log("Login Successful");
  } else {
    console.log("Invalid username or password");
  }
}
validateLogin("HavivBitton", "Haviv12345");
