console.clear();

let readline;
let age;
readline = require('readline-sync');
//let Iconv  = require('iconv').Iconv;
//var iconv = new Iconv('UTF-8', 'ISO-8859-1');


console.log(`Task 1`);
age = readline.question("Enter any integer:");
//var message = iconv.encode(iconv.decode(age, "cp1251"), "utf8").toString();
//console.log(message);
if (age==='') {
    console.log('Отменено');
    return 5;
}
age = Number(age);
if (age >= 14 && age <= 90) 
{
  console.log(`14 <= Your Integer >= 90`);  
} 
else 
{
    
    (age<14)&&console.log(`Your Integer < 14`);
    (age>90)&&console.log(`Your Integer > 90`); 
    (isNaN(age))&&console.log(`Ты ввел буквы`); 
}



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
