console.clear();

let readline;
let age;
readline = require('readline-sync');


console.log(`Task 1`);
age = Number(readline.question("Enter any integer:"));
if (age >= 14 && age <= 90) 
{
  console.log(`14 <= Your Integer >= 90`);  
} 
else 
{
    (age<14)&&console.log(`Your Integer < 14`);
    (age>90)&&console.log(`Your Integer > 90`);  
}
/*
age=Number("asfasf");
console.log(`${age}, ${(age>14||age==14)&&(age<90||age==90)} `); 
console.log(`${age<14}`); 
console.log(`${age>90}`)
*/


console.log(`\nTask 2.1`);
age = Number(readline.question("Enter any integer:"));
if (!(age >= 14 && age <= 90)) 
{
  console.log(`Your number is out of range [14; 90]`);  
} 

console.log(`\nTask 2.2`);
age = Number(readline.question("Enter any integer:"));
if (age < 14 || age > 90) 
{
  console.log(`Your number is out of range [14; 90]`);  
} 


console.log(`\nTask 3`);
let login;
let password;
login = readline.question("Login:"); //ожидаем Admin, потому что Админ консолька просто так не воспринемает ЪУЬ
console.log(login);
switch (login)
{
    case "Admin":
        password = readline.question("Password:");//ожидаем I am boss
        switch (password) 
        {
            case "I am boss":
                console.log(`Здраствуйте!)`);
                break;
            case "":
            case null:
                console.log(`Отменено`);
                break;
            default:
                console.log(`ХАХА. Не угадал. Плохой взломщик:)`);

        }
        break;
    case "":
    case null:
        console.log(`Отменено`);
        break;
    default:
        console.log(`Я вас не звал, а вы приперлись. УХОДИТИ:(`);
}
