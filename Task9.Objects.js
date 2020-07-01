
//1. Создать объект, добавить к нему свойство объекта  (Привет, object)
console.log('\x1b[100m','1. Создать объект, добавить к нему свойство объекта  (Привет, object)','\x1b[0m');
//Создайте пустой объект user.
console.log('\x1b[100m','Создайте пустой объект user','\x1b[0m');
let user = {};
console.log(user);
//Добавьте свойство name со значением John
console.log('\x1b[100m','Добавьте свойство name со значением John','\x1b[0m');
user.name = 'John';
console.log(user);
//Добавьте свойство surname со значением Smith.
console.log('\x1b[100m','Добавьте свойство surname со значением Smith','\x1b[0m');
user.surname = 'Smith';
console.log(user);
//Измените значение свойства name на Pete.
console.log('\x1b[100m','Измените значение свойства name на Pete.','\x1b[0m');
user.name = 'Pete';
console.log(user);
//Удалите свойство name из объекта.
console.log('\x1b[100m','Удалите свойство name из объекта.','\x1b[0m');
delete user.name;
console.log(user);

//2. Сделать свойство объекта фунецией сложения двух чисел
console.log('\x1b[100m','2. Сделать свойство объекта фунецией сложения двух чисел','\x1b[0m');
user.sum = (a=5,b=6) => a + b
console.log(user.sum(1,2));
console.log(user);

//3. Задачи из теории
console.log('\x1b[100m','3. Задачи из теории','\x1b[0m');
//Проверка на пустоту
console.log('\x1b[100m','Проверка на пустоту','\x1b[0m');

function isEmpty(obj) {
    for (let key in obj) {
      return false;
    }
    return true;
  }

let obj1 = {};
let obj2 = {
    name: "John", 
    age: 30,
};
console.log(`obj1 пустой? -${isEmpty(obj1)}`);
console.log(`obj2 пустой? -${isEmpty(obj2)}`);
//Сумма свойств объекта
console.log('\x1b[100m','Сумма свойств объекта','\x1b[0m');
let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
  }
let sum = 0;
for (let key in salaries) {
  sum += salaries[key];
}
console.log(salaries);
console.log(`sum: ${sum}`);
//Умножаем все числовые свойства на 2
console.log('\x1b[100m','Умножаем все числовые свойства на 2','\x1b[0m');
function multiplyNumeric (a) {
    for (let key in a){
        if (typeof a[key] === 'number'){
            a[key] *= 2;
        }
    }
    return a;
  }
// до вызова функции
let menu = {
    width: 200,
    height: 300,
    title: "My menu"
  };
  console.log(menu);
  menu = multiplyNumeric(menu);
  console.log(menu);
  

