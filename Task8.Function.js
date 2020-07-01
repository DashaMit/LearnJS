let readline;
readline = require('readline-sync');

//Функция рандомного целого числа из промежутка
function getRandomInRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
//Функция сложения двух чисел
function calcSum2Num(a , b ) {
    return a + b;
}

//Функция опредления имени(если имя  ваше, то привет + имя)
function recognizeName (a) {
  if (a === 'Dasha') {
    return console.log('Hello Dasha'); 
  }
  else {
    return console.log(`${a} isn't Dasha`);
  }
}
//Функция вычесления типа аргумента и вывод в консоль
let returnTypeArg =(a) =>  console.log(`Тип: ${typeof a}`);


//Функция выбора четных элементов массива(возвращает новый массив)
function returnEvenArrayValues (a) {
  return a.filter((item, index) => index % 2 == 0);
}

//Исходная функция
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return 'Родители разрешили?';
  }
}
//Функция с оператром ?
function checkAge2(age) {
  return (age > 18) || 'Родители разрешили?';
}

//Функция с оператром ||
function checkAge3(age) {
  return (age > 18) || 'Родители разрешили?';
}

//Функция min(a,b)
function min(a, b) {
  if (a < b) {
    return a;
  } else {
    if (a > b) {
    return b;
    } else {
      return 'Значения равны'
    }
  }
}
//Функция pow(x,n)
function pow(x, n) {
  let result = x;

  for (let i = 1; i < n; i++) {
    result *= x;
  }

  return result;
}




console.clear();
console.log('\x1b[100m','Функция сложения двух чисел','\x1b[0m');

let a = getRandomInRange(151, 200);
let b = getRandomInRange(1, 150);
let c= calcSum2Num(a , b );
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`a + b = ${c}`);

console.log('\x1b[100m','Функция опредления имени(если имя  ваше, то привет + имя)','\x1b[0m');
name = readline.question('Hi, i`m Dasha. Let`s compare our name. What`s your name? Enter your name:');
recognizeName(name);

console.log('\x1b[100m','Функция вычесления типа аргумента и вывод в консоль','\x1b[0m');
let arr = ['строка',123,undefined,null,NaN];
console.log(`Исходный массив: ${arr}`);
console.log(`Типы элементов исходного массива:`);
 arr.forEach(returnTypeArg);

console.log('\x1b[100m','Функция выбора четных элементов массива(возвращает новый массив)','\x1b[0m');
arr = [0,1,2,3,4,5,6,7,8,9,10];
console.log(`Исходный массив: ${arr}`);
  console.log(`Четные элементы исходного массива: ${returnEvenArrayValues(arr)}`);

console.log('\x1b[100m','Задачи из теории','\x1b[0m');

console.log('\x1b[100m','Исходная функция','\x1b[0m');
let age = 18;
console.log(`Возраст: ${age}`);
console.log(`Результат функции: ${checkAge(age)}`);

console.log('\x1b[100m','Функция с оператром ?','\x1b[0m');
age = 7;
console.log(`Возраст: ${age}`);
console.log(`Результат функции: ${checkAge2(age)}`);

console.log('\x1b[100m','Функция с оператром ||','\x1b[0m');
age = 73;
console.log(`Возраст: ${age}`);
console.log(`Результат функции: ${checkAge3(age)}`);

console.log('\x1b[100m','Функция min(a,b)','\x1b[0m');

a = getRandomInRange(1, 200);
b = getRandomInRange(1, 200);
console.log(`a = ${a}`);
console.log(`b = ${b}`);
console.log(`min(a,b): ${min(a,b)}`);

console.log('\x1b[100m','Функция pow(x,n)','\x1b[0m');
console.log(`x = ${a}`);
console.log(`n = ${b}`);
console.log(`x в степени n: ${pow(a,b)}`);
