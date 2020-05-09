console.log("Helper");
const testVar = 9600;
let testVar2 = 15;

function add(x, y) {
  return x + y;
}

function sub(x, y) {
  return x - y;
}

module.exports = {
  add: add, //add: add şeklinde normalde ama adları aynıysa tek de yazılır
  sub,
  testVar,
  testVar2,
};
