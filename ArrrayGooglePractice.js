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


