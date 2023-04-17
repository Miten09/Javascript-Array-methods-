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
console.log(first([2, 45, 21, 88], 2));

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
console.log(second([2, 45, 21, 88], 2));

//problem statement 3

function third(array) {
  return array.join(" + ");
}
console.log(third(["Red", "White", "Green", "Blue"]));

//problem statement 4

var arr1 = [-3, 8, 7, 6, 5, -4, 3, 2, 1];

function compare(a, b) {
  return a - b;
}

arr1.sort(compare);
console.log(arr1);

//problem statement 5

const arr1 = [3, "a", "a", "a", 2, 3, "a", 3, "a", 2, 4, 9, 3];


