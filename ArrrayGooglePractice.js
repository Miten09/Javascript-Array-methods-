//problem statement 1

const first = (array, n) => {
  if (array == null) {
    return void 0;
  }
  if (n == null) {
    return array[0];
  }

  if (n < 0) {
    return [];
  }
  return array.slice(0, n);
};
//console.log(first([2,34,1,12],3));

//problem statement 2

const second = (array, n) => {
  if (array == null) {
    return void 0;
  }
  if (n == null) {
    return array[array.length - 1];
  }

  if (n < 0) {
    return [];
  }
  return array.slice(Math.max(array.length - n, 0));
};
//console.log(second([2, 45, 21, 88], 2));

//problem statement 3

function third(array) {
  return array.join(" + ");
}
//console.log(third(["Red", "White", "Green", "Blue"]));

//problem statement 4

var arr2 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

function compare(a, b) {
  return a - b;
}

arr2.sort(compare);
//console.log(arr1);

//problem statement 5

str = "MIten";
const UPPER = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER = "abcdefghijklmnopqrstuvwxyz";
const result = [];

for (let i = 0; i < str.length; i++) {
  if (UPPER.indexOf(str[i]) !== -1) {
    result.push(str[i].toLowerCase());
  } else if (LOWER.indexOf(str[i]) !== -1) {
    result.push(str[i].toUpperCase());
  } else {
    result.push(str[i]);
  }
}

//console.log(result.join(""));

//Problem Statement 6

var arr6 = [
  [1, 2, 1, 24],
  [8, 11, 9, 4],
  [7, 0, 7, 27],
  [7, 4, 28, 14],
  [3, 10, 26, 7],
];

for (i = 0; i < arr6.length; i++) {
  // console.log("row" + " " + i);
  for (j = 0; j < arr6[j].length; j++) {
    //  console.log(arr6[i][j]);
  }
}

//Problem Statement 7
function sum_sq(array) {
  let sum = 0;
  //  i = array.length;
  for (i = 0; i < array.length; i++) {
    sum += Math.pow(array[i], 2);
  }
  return sum;
}

//console.log(sum_sq([1, 2, 3, 5]));

//problem statement 8

function arith(array) {
  let sum = 0;
  let multiply = 1;

  for (i = 0; i < array.length; i++) {
    sum += array[i];

    multiply *= array[i];
  }
  return { sum, multiply };
}

//console.log(arith([1, 2, 3, 4, 5, 6]));

//problem statement 9

const nums = [1, 2, 2, 3, 1, 2, 4, 5, 4, 2, 6];
//console.log([...new Set(nums)])

//problem statement 10

function colors(array) {
  let count = 1;

  for (let i = 0; i < array.length; i++) {
    return `${count++} choice is`;
  }
}

//console.log(colors(["red", "blue", "green"]));

//problem statement 11

function leapyear(year) {
  if (
    (year % 4 == 0 && year % 100 !== 0) ||
    (year % 100 == 0 && year % 400 == 0)
  ) {
    return true
  } else {
    return false;
  }
}

console.log(leapyear(2004));

//problem statement 12

let a = 10;
let b = 2;

a = a + b; //12 ,a=12
b = a - b; //10, b=10
a = a - b; //2, a=2
//console.log(a, b);

//problem statement 13

let num = 30;

if (num % 3 == 0) {
  //console.log("FIZZ");
}
if (num % 5 == 0) {
  //console.log("BUZZ");
}
if (num % 3 == 0 && num % 5 == 0) {
  // console.log("FIZZ BUZZ");
}

//problem statement 14

function totalLength(value) {
  let str = 0;
  for (i = 0; i < value.length; i++) {
    str++;
  }
  return str;
}
//console.log(totalLength("miten"));

//problem statement 15

const UPPER1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const LOWER1 = "abcdefghijklmnopqrstuvwxyz";
const latest = [];

function upper(str) {
  if (UPPER1.indexOf(str[0] !== -1)) {
    latest.push(str[0].toUpperCase());
  }
  return str[0];
}
//console.log(upper("miten"));

//problem statement 16

const characters = [
  {
    name: "tarak mehta",
    height: "172",
    mass: "77",
    eye_color: "brown",
    gender: "male",
  },
  {
    name: "Jethalal",
    height: "145",
    mass: "136",
    eye_color: "black",
    gender: "male",
  },
  {
    name: "Anjali",
    height: "150",
    mass: "49",
    eye_color: "grey",
    gender: "female",
  },
  {
    name: "Krishnan Iyer",
    height: "168",
    mass: "4",
    eye_color: "black",
    gender: "male",
  },
];

// Task - 1 -> Get an array of names

let onlyNames = characters.map((char) => {
  let nameOnly = char.name;
  return nameOnly;
});

//console.log(onlyNames);

// Task - 2 -> Get an array of objects with just name & height properties

let NameHeight = characters.map((char) => {
  let nameOnly = char.name;
  let HeightOnly = char.height;

  return { nameOnly, HeightOnly };
});

//console.log(NameHeight);

// Task - 3 -> Get an Total Height of all characters

let TotalHeight = characters.reduce((a, b) => {
  return { height: Number(a.height) + Number(b.height) };
});
//console.log(TotalHeight);

// Task - 4 -> Get an Characters with mass Greater than Zero

let Onlymass = characters.filter((char) => {
  return char.mass > 100;
});

//console.log(Onlymass);

// Task - 5 -> Get All Characters

let Onlymale = characters.filter((char) => {
  if (char.gender !== "female") {
    return char;
  }
});

//console.log(Onlymale);

//Task - 6 -> sort by gender
//Task - 7 -> sort by Name

//Task - 8 => Does every character have mass more than 40?

const Allchar = characters.some((char) => {
  return char.mass > 40;
});
//console.log(Allchar);

//Task - 9 => Does every character have blue eyes?

const Allchar1 = characters.some((char) => {
  return char.eye_color == "blue";
});
//console.log(Allchar1);

//Problem statement 17

function ArraySorted(items, n) {
  for (i = 0; i < items.length; i++) {
    items[i] = items[n];
    return items[i];
  }
}
//console.log(ArraySorted([23, 46, 35, 41, 50], 4));

//problem statement 18

// Function to shuffle the array content
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

var arr = [1, 2, 3, 4, 5, 6, 7];

console.log(shuffleArray(arr));

//problem statement 19

function sumArray(arr1, arr2) {
  let newArray = [];
  for (i = 0; i < arr1.length; i++) {
    newArray.push(arr1[i] + arr2[i]);
  }
  return newArray;
}
//console.log(sumArray([2, 0, 5, 3, 10], [3, 5, 6, 7, 8, 13]));

//problem statement 20
const arr123 = [1, 2, 1, 3, 4, 3, 5];

const toFindDuplicates = (arr123) =>       
  arr123.filter((item, index) => arr123.indexOf(item) !== index);
const duplicateElements = toFindDuplicates(arr123);
console.log(duplicateElements);

//problem statement 21

let numbers1 = [1, 2, 3];
let numbers2 = [100, 2, 1, 10];
let c = [...numbers1, ...numbers2].sort();
// console.log(c) //  c = [34,35,45,48,49,48,55]

let finalArray = c.filter((item, index) => {
  //console.log(item)
  //console.log(index)
  //[34,35,45,48,49,48,55] = 0,1,2,3,4,5,6
  return c.indexOf(item) == index;
});
//console.log(finalArray);

//problem statement 22

let numbers3 = [1, 2];
let numbers4 = [100, 2, 1, 10];
//let d = [...numbers3, ...numbers4].sort();

//console.log(d) // d = [1,2,3,100,2,1,10]

let difference = numbers4.filter((x) => !numbers3.includes(x));
//console.log(difference);

// problem statement 23

function Remove(arr) {
  //let newArray = [];
  // console.log(arr)
  arr.map((value) => {
    if (value == 0 && NaN && false && "undefined" && null) {
    }
    return value;
  });
}
//console.log(Remove([NaN, 0, 15, false, -22, "undefined", 47, null]));

// let newNumber=[1,2,3,4]

// const red=newNumber.reduce((a,b)=>{
//   return a + b;
// })
// //console.log(red)

// let newNumber = [2, 12, 3, 5];

// function compare(a, b) {
//   return a - b;
// }

// const sor = newNumber.sort((a, b) => a - b);
// console.log(sor);

function check(array, n) {
  // for (i = 0; i < array.length; i++) {
  //   if (array[i] == n) {
  //     return true;
  //   }
  // }
  // return false;
  //  return array.some((value) => value === n);
  return array.includes("vainik");
}
console.log(check([2, 12, 3, 5], 12));

// function name() {
//   var n = 4;
// }
// console.log(n);

//- Block scope -> variable defined inside curly braces like let & const it cannot print outside curly braces
//               variable defined inside curly braces like var it can print outside curly braces

// function scope -> variable defined inside functions like let , const & var it cannot print outside function
 // global scope -> variable defined anywhwhere outside curly braces or function it will print outside function as well as inside function
