//75.25, 65, 80, 35.45, 99, 50
//Mathematics, Biology, Chemistry, Physics, Bangla

var mathMarks = 75.25;
var biologyMarks = 65;
var chemistryMarks = 80;
var physicsMarks = 35.45;
var banglaMarks = 99.50;

var totalMarks = mathMarks + biologyMarks + chemistryMarks + physicsMarks + banglaMarks;

var averageMarks  = totalMarks / 5;

var averageTwoDecimalPoint = averageMarks.toFixed(2);

console.log(averageTwoDecimalPoint);