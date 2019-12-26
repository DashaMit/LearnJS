console.clear();
let str = 'string';
let num = 123;
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

//Сложение
console.log ('\nСложение:');
console.log (`${str}+${num} = ${str+num}`);
console.log (`${str}+${str} = ${str+str}`);
console.log (`${str}+${bool} = ${str+bool}`);
console.log (`${str}+${typeNull} = ${str+typeNull}`);
console.log (`${str}+${typeUndefined} = ${str+typeUndefined}`);
console.log (`${str}+${obj} = ${str+obj}`);
console.log ('\n');
console.log (`${num}+${num} = ${num+num}`);
console.log (`${num}+${bool} = ${num+bool}`);
console.log (`${num}+${typeNull} = ${num+typeNull}`);
console.log (`${num}+${typeUndefined} = ${num+typeUndefined}`);
console.log (`${num}+${obj} = ${num+obj}`);
console.log ('\n');
console.log (`${bool}+${bool} = ${bool+bool}`);
console.log (`${bool}+${typeNull} = ${bool+typeNull}`);
console.log (`${bool}+${typeUndefined} = ${bool+typeUndefined}`);
console.log (`${bool}+${obj} = ${bool+obj}`);
console.log ('\n');
console.log (`${typeNull}+${typeNull} = ${typeNull+typeNull}`);
console.log (`${typeNull}+${typeUndefined} = ${typeNull+typeUndefined}`);
console.log (`${typeNull}+${obj} = ${typeNull+obj}`);
console.log ('\n');
console.log (`${typeUndefined}+${typeUndefined} = ${typeUndefined+typeUndefined}`);
console.log (`${typeUndefined}+${obj} = ${typeUndefined+obj}`);
console.log ('\n');
console.log (`${obj}+${obj} = ${obj+obj}`);

//Умножение
console.log ('\nУмножение');
console.log (`${str}*${num} = ${str*num}`);
console.log (`${str}*${str} = ${str*str}`);
console.log (`${str}*${bool} = ${str*bool}`);
console.log (`${str}*${typeNull} = ${str*typeNull}`);
console.log (`${str}*${typeUndefined} = ${str*typeUndefined}`);
console.log (`${str}*${obj} = ${str*obj}`);
console.log ('\n');
console.log (`${num}*${num} = ${num*num}`);
console.log (`${num}*${bool} = ${num*bool}`);
console.log (`${num}*${typeNull} = ${num*typeNull}`);
console.log (`${num}*${typeUndefined} = ${num*typeUndefined}`);
console.log (`${num}*${obj} = ${num*obj}`);
console.log ('\n');
console.log (`${bool}*${bool} = ${bool*bool}`);
console.log (`${bool}*${typeNull} = ${bool*typeNull}`);
console.log (`${bool}*${typeUndefined} = ${bool*typeUndefined}`);
console.log (`${bool}*${obj} = ${bool*obj}`);
console.log ('\n');
console.log (`${typeNull}*${typeNull} = ${typeNull*typeNull}`);
console.log (`${typeNull}*${typeUndefined} = ${typeNull*typeUndefined}`);
console.log (`${typeNull}*${obj} = ${typeNull*obj}`);
console.log ('\n');
console.log (`${typeUndefined}*${typeUndefined} = ${typeUndefined*typeUndefined}`);
console.log (`${typeUndefined}*${obj} = ${typeUndefined*obj}`);
console.log ('\n');
console.log (`${obj}*${obj} = ${obj*obj}`);

//Деление
console.log ('\nДеление:');
console.log (`${str}/${num} = ${str/num}`);
console.log (`${str}/${str} = ${str/str}`);
console.log (`${str}/${bool} = ${str/bool}`);
console.log (`${str}/${typeNull} = ${str/typeNull}`);
console.log (`${str}/${typeUndefined} = ${str/typeUndefined}`);
console.log (`${str}/${obj} = ${str/obj}`);
console.log ('\n');
console.log (`${num}/${num} = ${num/num}`);
console.log (`${num}/${bool} = ${num/bool}`);
console.log (`${num}/${typeNull} = ${num/typeNull}`);
console.log (`${num}/${typeUndefined} = ${num/typeUndefined}`);
console.log (`${num}/${obj} = ${num/obj}`);
console.log ('\n');
console.log (`${bool}/${bool} = ${bool/bool}`);
console.log (`${bool}/${typeNull} = ${bool/typeNull}`);
console.log (`${bool}/${typeUndefined} = ${bool/typeUndefined}`);
console.log (`${bool}/${obj} = ${bool/obj}`);
console.log ('\n');
console.log (`${typeNull}/${typeNull} = ${typeNull/typeNull}`);
console.log (`${typeNull}/${typeUndefined} = ${typeNull/typeUndefined}`);
console.log (`${typeNull}/${obj} = ${typeNull/obj}`);
console.log ('\n');
console.log (`${typeUndefined}/${typeUndefined} = ${typeUndefined/typeUndefined}`);
console.log (`${typeUndefined}/${obj} = ${typeUndefined/obj}`);
console.log ('\n');
console.log (`${obj}/${obj} = ${obj/obj}`);
//Вычитание
console.log ('\nВычитание:');
console.log (`${str}-${num} = ${str-num}`);
console.log (`${str}-${str} = ${str-str}`);
console.log (`${str}-${bool} = ${str-bool}`);
console.log (`${str}-${typeNull} = ${str-typeNull}`);
console.log (`${str}-${typeUndefined} = ${str-typeUndefined}`);
console.log (`${str}-${obj} = ${str-obj}`);
console.log ('\n');
console.log (`${num}-${num} = ${num-num}`);
console.log (`${num}-${str} = ${str-str}`);
console.log (`${num}-${bool} = ${num-bool}`);
console.log (`${num}-${typeNull} = ${num-typeNull}`);
console.log (`${num}-${typeUndefined} = ${num-typeUndefined}`);
console.log (`${num}-${obj} = ${num-obj}`);
console.log ('\n');
console.log (`${bool}-${num} = ${num-num}`);
console.log (`${bool}-${str} = ${str-str}`);
console.log (`${bool}-${bool} = ${bool-bool}`);
console.log (`${bool}-${typeNull} = ${bool-typeNull}`);
console.log (`${bool}-${typeUndefined} = ${bool-typeUndefined}`);
console.log (`${bool}-${obj} = ${bool-obj}`);
console.log ('\n');
console.log (`${typeNull}-${num} = ${num-num}`);
console.log (`${typeNull}-${str} = ${str-str}`);
console.log (`${typeNull}-${bool} = ${bool-bool}`);
console.log (`${typeNull}-${typeNull} = ${typeNull-typeNull}`);
console.log (`${typeNull}-${typeUndefined} = ${typeNull-typeUndefined}`);
console.log (`${typeNull}-${obj} = ${typeNull-obj}`);
console.log ('\n');
console.log (`${typeUndefined}-${num} = ${num-num}`);
console.log (`${typeUndefined}-${str} = ${str-str}`);
console.log (`${typeUndefined}-${bool} = ${bool-bool}`);
console.log (`${typeUndefined}-${typeNull} = ${typeNull-typeNull}`);
console.log (`${typeUndefined}-${typeUndefined} = ${typeUndefined-typeUndefined}`);
console.log (`${typeUndefined}-${obj} = ${typeUndefined-obj}`);
console.log ('\n');
console.log (`${obj}-${num} = ${num-num}`);
console.log (`${obj}-${str} = ${str-str}`);
console.log (`${obj}-${bool} = ${bool-bool}`);
console.log (`${obj}-${typeNull} = ${typeNull-typeNull}`);
console.log (`${obj}-${typeUndefined} = ${typeUndefined-typeUndefined}`);
console.log (`${obj}-${obj} = ${obj-obj}`);
//Преобразование

