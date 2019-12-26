let readline;
let firstStr;
let secondStr;
let RightFrstStr = 'JavaSqript';
let RightScndStr = 'Java';
console.clear();
console.log("Let's try to compare the lines\n");

readline = require('readline-sync');

firstStr = readline.question("Enter the word JavaSqript:");
if (firstStr == RightFrstStr)
{
    secondStr = readline.question("Enter the word Java:");
}
else
{
    firstStr = RightFrstStr
    secondStr = readline.question("You entered the wrong word. Try entering a shorter word Java:");
}

if (secondStr != RightScndStr)
{
    console.log(`You pressed the wrong buttons, but I took care and kept words for you\n`);
}
console.log(`The result of comparing the words  Java and JavaSqript`);
console.log(`Java>JavaSqript: ${secondStr > firstStr}`);
console.log(`Java<JavaSqript: ${secondStr < firstStr}`);
console.log(`Java==JavaSqript: ${secondStr == firstStr}`);

console.log(`\nThe result of comparing the number 1 and 2`);
console.log(`1>2: ${1 > 2}`);
console.log(`1<2: ${1 < 2}`);
console.log(`1==2: ${1 == 2}`);

console.log(`\nThe result of comparing the bool true and false`);
let CompareBool = Number(readline.question("For result 'true>false' enter 1\nFor result 'true<false' enter 2\nFor result 'true==false' enter 3\n")); 
switch (CompareBool)
{
    case 1:
        console.log(`true>false: ${true > false}\nBut you must know:`);
        console.log(`true<false: ${true < false}`);
        console.log(`true==false: ${true == false}`);
        break;
    case 2:
        console.log(`true<false: ${true < false}\nBut you must know:`);
        console.log(`true>false: ${true > false}`);
        console.log(`true==false: ${true == false}`);
        break;
    case 3:
        console.log(`true==false: ${true == false}\nBut you must know:`);
        console.log(`true>false: ${true > false}`);
        console.log(`true<false: ${true < false}`);
        break;
    default:
        console.log(`true>false: ${true > false}`);
        console.log(`true<false: ${true < false}`);
        console.log(`true==false: ${true == false}`);
}