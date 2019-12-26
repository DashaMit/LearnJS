console.clear();
let str = ' 123 ';
let num = 123;
let bool = true;
let typeNull = null;
let typeUndefined = undefined;
let obj = {name: "Объект", value: "dfgsdg"};
typeof(obj)

console.log (`Переменные: 
\nnum = ${num}, тип: ${typeof(num)}
\nstr = ${str}, тип: ${typeof(str)}
\nbool = ${bool}, тип: ${typeof(bool)} 
\ntypeNull = ${typeNull}, тип: ${typeof(typeNull)}
\ntypeUndefined = ${typeUndefined}, тип: ${typeof(typeUndefined)}
\nobj = ${JSON.stringify(obj)}, тип: ${typeof(obj)}`);

//Строковое преобразование
console.log (`\nСтроковое преобразование:`);
console.log ("" + num); //конкатенация
console.log ("" + str);
console.log ('' + bool);
console.log (String(typeNull));
console.log (String(typeUndefined));
console.log (String(obj)); 
//Численное преобразование
console.log (`\nЧисленное преобразование:`);
console.log (+num);
console.log (+str);
console.log (Number(bool));
console.log (Number(typeNull));
console.log (Number(typeUndefined));
console.log (Number(obj));
//Логическое преобразование
console.log (`\nЛогическое преобразование:`);
console.log (!!num);
console.log (!!str);
console.log (!!bool);
console.log (!!typeNull);
console.log (!!typeUndefined);
console.log (!!obj);