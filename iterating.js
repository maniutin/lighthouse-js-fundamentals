/*let arr = [];
const range = function (start, end, step) {
  for (let i = start; i < end; i + step) {
    arr.push(i);
  }
  return arr;
};
console.log(range(0, 10, 2));*/

// const range = (start, end, step) => {
//   let arr = [];
//   if (
//     start !== undefined &&
//     end !== undefined &&
//     step !== undefined &&
//     start < end &&
//     step > 0
//   ) {
//     for (let i = start; i <= end; i += step) {
//       arr.push(i);
//     }
//   }
//   return arr;
// };
// console.log(range(0, 10, 2));
// console.log(range(10, 30, 5));
// console.log(range(-5, 2, 3));

// function range(start, end, step) {
//   const myNewArray = [];

//   if (
//     start === undefined ||
//     end === undefined ||
//     step === undefined ||
//     start > end ||
//     step < 0
//   ) {
//     return [];
//   } else {
//     for (let i = start; i <= end; i = i + step) {
//       myNewArray.push(i);
//     }
//     return myNewArray;
//   }
// }

// const lastIndexOf = (arr, num) => {
//   let output = 0;
//   if (arr.length === 0 || arr.includes(num) === false) {
//     output = -1;
//   } else {
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] === num) {
//         output = i;
//       }
//     }
//   }
//   return output;
// };
// console.log(lastIndexOf([0, 1, 4, 1, 2], 1));

const concat = (arr1, arr2) => {
  return arr1.concat(arr2);
};
