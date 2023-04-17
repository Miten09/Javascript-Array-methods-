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

//problem statement 3

let newArray3 = employee.filter((value) => {
  return value.age > 25;
});
console.log(newArray3);

// problem statement 4

//problem statement 5

let newArray5 = employee.filter((value) => {
  return value.name !== "manoj";
});

//console.log(newArray5);

newArray5.splice(3,0,{
  name: "manoj",
  address: {
    city: "surat",
    state: "Gujarat",
  },
  age: 20,
});

console.log(newArray5);
