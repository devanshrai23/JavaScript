let score = "123abc";

// console.log(typeof score);
// console.log(typeof(score));

let valueInNumber = Number(score);

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// "33" => 33
// "33abc" => NaN
// true => 1; false => 0
// null => 0
// undefined => NaN

let isLoggedIn = 1;

let booleanIsLoggedIn = Boolean(isLoggedIn);
console.log(typeof booleanIsLoggedIn);
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false; "jdjf" => true

let someNumber = 33;

let stringNumber = String(someNumber);
console.log(typeof stringNumber);
console.log(stringNumber);

// ********************** Operations *********************
let str1 = "hello";
let str2 = " Devansh";

let str3 = str1 + str2;
console.log(str3);

// console.log(1 + "2");      // 12
// console.log("1" + 2);      // 12
// console.log("1" + 2 + 2);  // 122 -> (string first)
// console.log(2 + 2 + "1");  // 41

