//let var1 = 1;
const helperFuncs = require("./helper.js");

let person = {
  name: "semih",
  age: 36,
  //registered: false
};

person.address = "ISTANBUL";
// delete person.address;

helperFuncs.testVar2 = 11;

console.log("semih", person);
console.log("result = ", helperFuncs.testVar2);

let str1 = "semih";
let str2 = str1; // içeriğini alır (ilkel değişken - primitive)

let str3 = { name: "semih", age: 36 };
let str4 = str3; // adresini gösterir (pointer gibi)

str4.name = "metin"; //str3.name de "metin" olacak

str4 = 2; //str4'e 2 değeri atanır. str3 etkilenmez
str4 = {}; //str4'e bu boş objenin adres değeri atanır. str3 etkilenmez

let arr = [1, 2, "semih"];

arr.push("metin");
arr.push({ name: "murat", age: 24 });

console.log(arr);
console.log(arr[4].age, typeof arr[4].age === "number" ? "sayı" : "sayı değil"); //== sayıya çevrilebilen stringlerde 1 == '1' true döner tipe bakmaz ama === tipe de bakar.

let val;
console.log(val * 3);

let val2 = undefined; //null; // NaN;
console.log(val2);

// let sonuc = val || val2 || "metin";    soldan itibaren undefined olmayan ilk değeri atar
let sonuc = 1 && 2 && "metin"; // hiçbirisi undefined değerler değil ise sondaki değeri atar
console.log("sonuç: " + sonuc);

function generateUser(name, age) {
  return { name, age, recordDate: Date.now() };
}

//----------------------------------------------
// function addCar(user, brandName, color) {
//   user.car = {
//     brandName,
//     color,
//   };
// }

// Fetch error function (Yukardakinin kısaltılmış hali aşağıdaki)
const addCar = (user, brandName, color) => {
  user.car = {
    brandName,
    color,
  };
};
//----------------------------------------------

let car = { brand: "BMW" };

let users = [];
users.push(generateUser("semih", 36));
users.push(generateUser("metin", 26));
users.push(generateUser("murat", 35));
users.push(generateUser("ali", 22));

// for (let a = 0; a < users.length; ++a) {
//   console.log(users[a].name);
// }

// users.forEach(function (item, idx) {
//   console.log(item, idx);
// });

// let results = users.map(function (item, idx) {
//   console.log(item, idx);

//   return item.age > 26;
// });

// console.log(results);

// let result = users.find(function (item, idx) {
//   return item.name === "semih";
// });

// let result = users.findIndex(function (item, idx) {
//   return item.name === "semih";
// });

// let result = users.filter(function (item, idx) {
//   return item.age > 26;
// });

//----------------------------------------------
let result = users.filter((item, idx) => {
  return item.age > 26;
});

//Yukardakinin kısaltılmış hali aşağıdaki

//let result = users.filter((item, idx) => item.age > 26);
//----------------------------------------------

// function test() {
//   let result = 5; // en içte tanımlanan result geçerli oluyor
//   return result;
// }

console.log(result + 5);

// users[0] = { ...users[0], ...car, color: "red" };      //birleştirme işlemi
addCar(users[0], "Honda Civic 5", "White");

//let brandName = users[1]?.car?.brandName;
//console.log(users[1] && users[1].car && users[1].car.brandName);
//console.log(users[1]?.car?.brandName);
//console.log(brandName);
