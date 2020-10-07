console.clear();
let res;
let a = 1;
let b = 0;


 function exeption (a, b){
 try {

  res = a / b; 

  if (b==0) {
    throw new Error("делить на ноль нельзя");
  }

  console.log( `a = ${a}, b = ${b}, a/b = ${res}` );

} catch (e) {
  console.log( `${e.name}: ${e.message}`);
}
 }

exeption (a,b);
b=2;
exeption (a,b);