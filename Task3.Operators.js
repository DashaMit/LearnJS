console.clear();
let str = ' 123 ';
let num = 2;
let bool = true;
let typeNull = null;
let typeUndefined = undefined;
let obj = {name: "Объект"};
typeof(obj)

console.log (`Переменные: 
\nnum = ${num}, тип: ${typeof(num)}
\nstr = ${str}, тип: ${typeof(str)}
\nbool = ${bool}, тип: ${typeof(bool)} 
\ntypeNull = ${typeNull}, тип: ${typeof(typeNull)}
\ntypeUndefined = ${typeUndefined}, тип: ${typeof(typeUndefined)}
\nobj = ${obj}, тип: ${typeof(obj)}`);

console.log (`\nОператоры`);
console.log (`\nБинарный и унарный +:   num + +str = ${num + +str}`);
// какаха какаято с инкрементом 
console.log (`\nОстаток от деления, возведение в степень, инкремент/декремент:   'num = (str%5**num++)--' = ${num = Number(str)%5**num}`);
console.log (`\nСокращенная арифметика: 'num+=3' = ${num+=3}`);
console.log (`\n                        'num=+3' = ${num+=3}`);

//Оператор запятая
let a;
let b;
let c;
let d = (a = 1, b = 3, c = a * b, a < 10, ++a);
console.log(`Оператор ,:  (a = 1, b = 3, c = a * b, a < 10, ++a) = ${d}`);
