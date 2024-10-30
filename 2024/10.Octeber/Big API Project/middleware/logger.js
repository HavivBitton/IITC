import fs from "fs";

function logRequest(req, res, next) {
  const log = `Request recived at ${new Date().toISOString()} \n`;
  fs.appendFile("logs.txt", log, (err) => {
    if (err) throw err;
    console.log("log saved");
  });

  next();
}

export { logRequest };
