const Grade = require('./Grade');

var firstStudent = {grade: new Grade(0.45)};
var secondStudent = {grade: new Grade(0.70)};

console.log('firstStudent.grade.isPassing():', firstStudent.grade.isPassing()); //=> false
console.log('firstStudent.grade.isBetterThan(secondStudent.grade):',firstStudent.grade.isBetterThan(secondStudent.grade)); //=> false