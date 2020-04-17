// names = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
// length = names.length;
// number = 3;

// import { query } from "express";

// let finalArray = [];

// for (let i = 0; i < Math.ceil(length / number); i++) {
//   let count = 0;
//   while (count < number) {
//     finalArray[count] += [names.splice(count, 1)];
//     count++;
//     console.log(finalArray);
//   }
//   let num = Math.floor(arr.length / parseInt(query.number));
//   for (let i = 0; i < arr.length; ) {
//     let team = new Array();
//     for (let j = i; j < i + parseInt(query.number); j++) {
//       if (arr[j] != undefined) team.push(arr[j]);
//     }
//     teams.push(team);
//     i = i + num;
//   }
// }
// console.log(finalArray);

// let num = Math.floor(arr.length / dog);

// for (let i = 0; i < arr.length; ) {
//   let team = new Array();

//   for (let j = i; j < i + dog; j++) {
//     if (arr[j] != undefined) {
//       team.push(arr[j]);
//     }
//     console.log(arr[j]);
//   }

//   teams.push(team);
//   console.log(teams);
//   i = i + ;
// }

obj = {};
num = 4;
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];
arrlength = arr.length;

for (let j = 0; j < num; j++) {
  obj[`${j}`] = [];
}
console.log(obj);

let j = 0;
let i = 0;

while (arr.length > 0) {
  for (let value in obj) {
    if (arr.length == 0) {
      break;
    } else {
      obj[value][i] = arr.pop();
    }
  }
  i++;
}
console.log(obj);
// while (arr.length > 0) {
//   for (let value in obj) {
//     obj[value][j] = arr.splice(0, 1)[0];
//     console.log(obj);
//   }
//   j++;
// }
// console.log(obj);

// while (arr.length > 0) {
//   for (let value in obj) {
//     if (arr[j] === undefined) {
//       break;
//     } else {
//       obj[value][j] = arr.splice(0, 1)[0];
//     }
//   }
//   j++;
// }
