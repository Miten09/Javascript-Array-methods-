//Problem Statement 1

let array = [
  {
    name: "vainik",
    city: "surat",
  },
  {
    name: "miten",
    city: "ahmedabad",
  },
  {
    name: "raju",
    city: "mumbai",
  },
  {
    name: "chaman",
    city: "ahmedabad",
  },
];

let newArray = array.filter((value) => {
  return value.city == "ahmedabad";
});
console.log(newArray);

//Problem statement 2

function finding(array) {
  console.log(array, "miten");
  if (array.name == "vainik") {
    return array;
  }
}
array.find((value) => {});
let newArray1 = array.find(finding);
console.log(newArray1);

//Problem statement 3;

const newarray3 = array.map((value) => {
  if (value.name == "miten") {
    value.city = "surat";
    return value;
  } else {
    return value;
  }
});
console.log(newarray3);
