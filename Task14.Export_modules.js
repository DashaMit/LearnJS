
let Tester = require("C:/Users/d.mityaeva/Downloads/LearnJS-master/Task13.Inheritance.js");
console.clear();
console.log(Tester);
 

 let tester1 = Object.create(Tester).constructor("Dasha", 27, "manual tester")
 let tester2  = Object.create(Tester).constructor("Pasha", 22, "autotester")

 tester1.showObjInfo();
 tester2.showObjInfo();