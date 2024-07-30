function multyTable() {
  let row = "";
  for (let i = 1; i <= +10; i++) {
    for (let j = 1; j <= +10; j++) {
      row += i * j + " ";
    }
    row += "\n";
  }
  console.log(row);
}
multyTable();
