//1. this is called number
const number = 1971;

// 2 Generate Random Number in Max & Min
const randomNumber = (max, min) => {
  const rand = Math.trunc(Math.random() * (max - min) + min);
  return rand;
};

// 3 multidimensional arr sum
const matrix = [
  [10, 20, 30, 50],
  [40, 70, 80, 10],
  [90, 60, 50, 90],
  [100, 130, 120, 80],
];

const multiDimensionalArrayOfSum = (matrix) => {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix.length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
};

// 4 problem Odd & Eve.
let n = [2, 54, 64, 2, 55, 77, 00, 99];
const oddEven = function (n) {
  let odd, even;
  for (let i = 0; i < n.length; i++) {
    if (n[i] % 2 === 0) {
      even = `${n[i]} - Even Number`;
    } else if (n[i] % 2 === 1) {
      odd = `${n[i]} - Odd Number`;
    }
  }
};
oddEven(n);

// 5.problem reverse loop descending
const descending = (n) => {
  for (let i = n; i >= 1; i--) {
    console.log(i);
  }
};
descending();
