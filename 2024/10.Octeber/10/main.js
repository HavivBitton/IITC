// import { key } from "./env.js";
import { apiKey } from "./env.js";
// console.log(key.apiKey);

fetch(
  `http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=${apiKey}`
)
  //   .then((result) => console.log(result.json))
  .then((result) => console.log(result.json))
  .then((data) => console.log(data))
  .catch((error) => console.log(error));
