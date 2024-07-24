// Task 4
// Complex Condition

// function checkEligibility(age1,  isStudent){
//     if (isStudent===true){
//        switch(age1){
//        case age1<18 :
//        console.log("You are a minor student")
//        break;
//        case 18<=age1<=24 :
//        console.log("You are a young adult student")
//        break;
//        case age1>25 :
//        console.log("You are an adult student")
//        break;
//        }

//     } else{
//         switch(age1){
//         case age1<18 :
//         console.log("You are a minor non-student")
//         break;
//         case 18<=age1<=24 :
//         console.log("You are a young adult non-student")
//         break;
//         case age1>25 :
//         console.log("You are an adult non-student")
//         }
//     }
// }
// let message1 = checkEligibility(17, true)

function checkEligibility1(age1, isStudent1) {
  if (isStudent1) {
    if (age1 < 18) console.log("You are a minor student");
    else if (18 <= age1 <= 24) {
      console.log("You are a young adult student");
    } else console.log("You are an adult student");
  } else {
    if (age1 < 18) console.log("You are a minor non-student");
    else if (18 <= age1 <= 24) {
      console.log("You are a young adult non-student");
    } else console.log("You are an adult non-student");
  }
}
let message1 = checkEligibility1(19, false);
