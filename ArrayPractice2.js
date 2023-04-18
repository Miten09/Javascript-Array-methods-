let employee = [
  {
    name: "vainik",
    address: {
      city: "surat",
      state: "Gujarat",
    },
    age: 24,
  },
  {
    name: "miten",
    address: {
      city: "ahmedbad",
      state: "Gujarat",
    },
    age: 22,
  },
  {
    name: "nikhil",
    address: {
      city: "mumbai",
      state: "Maharashtra",
    },
    age: 26,
  },
  {
    name: "manoj",
    address: {
      city: "surat",
      state: "Gujarat",
    },
    age: 20,
  },
  {
    name: "Jay",
    address: {
      city: "Jaipur",
      state: "Rajasthan",
    },
    age: 24,
  },
];

//problem statement 1

let newArray1 = employee.filter((value) => {
  return value.address.state == "Gujarat";
});
console.log(newArray1);

//problem statement 2

let employ = 0;

for (let i = 0; i < employee.length; i++) {
  if (employee[i].address.state === "Rajasthan") {
    employ++;
  }
}
console.log(employ);

//problem statement 3

let newArray3 = employee.filter((value) => {
  return value.age > 25;
});
console.log(newArray3);

// problem statement 4

function findAge(employee, names) {
  for (i = 0; i < employee.length; i++) {
    if (employee[i].name == names) {
      return employee[i].age;
    }
  }
}
console.log(findAge(employee, "nikhil1"));

//problem statement 5

const newArray5 = employee.map((value) => {
  if (value.name == "manoj") {
    value.address.city = "ahmedabad";
    return value;
  } else {
    return value;
  }
});

console.log(newArray5);
