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
  if (array.name == "vainik") {
    return array;
  }
}

let newArray1 = array.find(finding);
console.log(newArray1);

//Problem statement 3;

let newarray2 = array.filter((array) => {
  return array.name !== "miten";
});

//console.log(newarray2);

newarray2.push({ name: "miten", city: "Surat" });

console.log(newarray2);
