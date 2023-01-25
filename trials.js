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
