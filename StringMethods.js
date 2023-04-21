// let name = "MITEN";

// console.log(name.length);
// console.log(name.toUpperCase());
// console.log(name.toLowerCase());
// console.log(name.slice(2, 4));
// console.log(name.slice(2));
// console.log(name.replace("MIT", "HET"));
// let friend = "karan";

// console.log(name.concat(" " + friend + " are friends"));

// let otherName = "   karan     ";
// console.log(otherName);
// console.log(otherName.trim());

// console.log(name[0]);
// console.log(name[1]);
// name[0] = "k"; //not possible because strings are immutable it cannot change

// //practice problems

// const sentence = "the quick brown fox jumped over the lazy dog.";
// console.log(sentence.includes("dog1"));
// console.log(sentence.startsWith("brown", 10));
// console.log(sentence.endsWith("dog"));

// const now = new Date();
// console.log(now);

// const yr = now.getFullYear();
// console.log(yr);

// const dt = now.getDate();
// console.log(dt);

// const month = now.getMonth();
// console.log(month);

// const hours = now.getHours();
// console.log(hours);

// const minutes = now.getMinutes();  
// console.log(minutes);

// now.setDate(1);
// console.log(now);

// console.log(Date.now)

// const myObject = {
//   a: "miten",
//   b: 1,
//   c: false,
// };

// const num = [1, 2, 3, 4, 5];

// let entries = Object.entries(myObject);

// console.log(entries[0][0]);

// Promises in javascript

// function prom(complete) {
//   return new Promise(function (resolve, reject) {
//     if (complete) {
//       resolve("I am successful");
//     } else {
//       reject("I am failed");
//     }
//   });
// }

// prom(true)
//   .then((result) => {
//     console.log(result);
//   })
//   .catch((failed) => {
//     console.log(failed);
//   });

// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The first promise is resolved");
//     resolve(10);
//   }, 1000);
// });

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The second promise is resolved");
//     resolve(20);
//   }, 2000);
// });

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The third promise is resolved");
//     resolve(30);
//   }, 3000);
// });

// Promise.all([p1, p2, p3])
//   .then((result) => {
//     console.log(`Result: ${result}`);
//   })
//   .catch((err) => {
//     console.log(`Error: ${err}`);
//   });


