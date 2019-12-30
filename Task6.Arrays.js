console.clear();
let arr = [];
console.log(`Task 1. Перебор массива с выводом в консоль кажого элемента`);
arr = ["test0","test1","test2"];
for(let i = 0; i < arr.length ;i++) console.log(`${i}й элемент масива - ${arr[i]}`);
console.log(`Task 1. Перебор массива с выводом в консоль кажого элемента (for..of)`);
for(let a of arr) console.log(a);

console.log(`\nTask 2. Перобразовать массив в строку и обртано в массив`);
let strArr = String(arr) ;
console.log(`Масcив в строку: ${strArr}`);
arr = [];
arr = strArr.split(',');
console.log(`Строка в массив: ${arr}`);

console.log(`\nTask 3. Добавить к каждому элементу массива слова hello`);
arr.forEach((item, index) =>{
    let newItem = item + 'hello';
    arr.splice(index, 1, newItem);
})
console.log(arr);

console.log(`\nTask 4. Преобразовать числовой массив в boolean`);
let arrNumToBool = [1, 2, 0, 4,];
console.log(`Числовой массив: ${arrNumToBool}`);
arrNumToBool.forEach((item, index) =>{
    let newItem = !!item;
    arrNumToBool.splice(index, 1, newItem);
})
console.log(`Массив boolean: ${arrNumToBool}`);
