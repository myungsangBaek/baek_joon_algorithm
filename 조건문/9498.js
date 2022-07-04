const fs = require("fs");
const inputData = fs.readFileSync("dev/stdin").toString();
const score = parseInt(input);

if (score >= 100) {
  console.log("A");
} else if (score >= 80) {
  console.log("B");
} else if (score >= 70) {
  console.log("C");
} else if (score >= 60) {
  console.log("D");
} else {
  console.log("F");
}
