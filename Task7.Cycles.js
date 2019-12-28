console.clear();
console.log('Task 1. Цикл while. Выводим число (изначально 15) пока оно не станет меньше 10');
let a = 15;
while (a>=10) console.log(a--);
console.log('Task 1. Цикл do..while. Выводим число (изначально 15) пока оно не станет меньше 10');
a=15
do {
    console.log(a--);
}while (a>=10);
console.log('Task 1. Цикл for. Выводим число(изначально 15) пока оно не станет меньше 10');
for(a=15; a>=10; console.log(a--));

console.log(`Task 2. При помощи цикла for выведите чётные числа от 2 до 10`);
for (let i = 2; i < 11; i++) {

    if (i % 2 == 0) {
        console.log( i );
    }
  
  }

  console.log(`Task 3. Перепишите код, заменив цикл for на while, без изменения поведения цикла`);
  let d = 0;
  while ( d< 3){
       console.log( `number ${d}!` );
       d++;
  }
 
 console.log(`Task 4. Повторять цикл, пока ввод неверен`);
 let readline;
 readline = require('readline-sync');
 let num;
 do {
    //console.clear();
    //console.log(`Task 4. Повторять цикл, пока ввод неверен`);
    num = Number(readline.question("Enter an integer greater than 100:"));
 }
 while (num<=100 && num);

console.log(`Task 5. Вывести простые числа jn 2 до 17`);
let num1 = 17;
lable:
for (let i = 2; i<=num1; i++) {
    for (let j  = 2; j<i; j++) {
        if (i%j==0) continue lable;
    };
    console.log(i); 
}