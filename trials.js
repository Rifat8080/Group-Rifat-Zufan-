"use strict"; // Turning on strict mode

//Md Mahadi Hasan Rifat

//Bill Division Coding Challange Javascript

const bonAppetit = function (bill, k, b) {
  let solution = "";
  bill.splice(k, 1);
  const costPerPerson = bill.reduce((pre, post) => pre + post, 0) / 2;
  if (costPerPerson == b) {
    solution = "Bon Appetit";
  } else {
    solution = b - costPerPerson;
  }
  console.log(solution);
};

// Zufan Elias
// Minimum distance javascript problem solution

function minimumDistances(a) {
  // Write your code here
  let result = [];
  for (let i = 0; i < a.length; i++) {
    for (let j = i + 1; j < a.length; j++) {
      if (a[i] === a[j]) {
        result.push(Math.abs(i - j));
      }
    }
  }
  if (result.length === 0) {
    return -1;
  }
  return Math.min(...result);
}
