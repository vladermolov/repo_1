// CONDICIONALES
// - COMPARACIONES 
// OPERADOR    DESCRIPCIÓN 
// ==             Igual a ... 
// ===            Igual a ... y mismo tipo de dato  
// !=             Diferente a ... 
// >              Mayor a ... 
// <              Menor a ... 
// >=             Mayor ó igual a ...
// <=             Menor ó igual a ... 

// CONCATENACIÓN DE COMPARACIONES (mediante operadores lógicos)
// OPERADOR    DESCRIPCIÓN 
// &&          AND: Devuelve un TRUE si se cumplen TODAS las condiciones
// ||          OR: Devuelve un TRUE si se cumple ALGUNA de las condiciones
// !           NOT: Invierte el valor booleano 

// Toda comparación en programación, devuelve una valor Booleano (true/false)

// Utilizamos los bucles para ejecutar una o varias instrucciones repetidamente y controlada por una condición
// Imprimir sin bucle los números del 1 al 10 
// console.log(1);
// console.log(2);
// console.log(3);
// .... 
// console.log(10); 
// Podemos imprimir los números con menos instrucciones mediante bucles  
// -----------------------------------
// WHILE 
// sintaxis:
// while (condition) {
    // instrucción en bucle
// }
// Ejemplo1: Imprimir los números del 1 al 10 
var i = 1; // 1-INICIALIZACIÓN
while (i <= 10) { // 2-COMPARACIÓN
    console.log(i);
    i++; // 3-ACTUALIZACIÓN
}
console.log("------------------");
// DO-WHILE: Primero ejecuta instrucción y luego compara (al revés que el WHILE) 
// sintaxis:
// do {
    
// } while (condition);
// ----------------------------------------------------------- 
// FOR: Se utiliza generalmente para trabajar con variables tipo ARRAY
// for (var i = 0; i < valor; i++) {
//     instrucciones en bucle
// }
// Ejemplo1: Imprimir los números del 1 al 10 
for(var i=1; i <= 10; i++){
    console.log(i);
}
console.log("------------------");
// Ejemplo2: Imprimir por consola los datos de un ARRAY 
var leng_prog = ["JS","Python","PHP","JAVA","SQL","R"];
// Existe una propiedad (length) que nos devuelve la cantidad (longitug) de un ARRAY 
console.log(leng_prog.length); // 5
// Podemos seleccionar (apuntar) a un determinado dato del Array, con el nombre del ARRAY y entre corchetes, la posición (numérica) empezando por 0
var php = leng_prog[2];
console.log(php);
console.log("------------------");
for (var i = 0; i < leng_prog.length; i++) {
    console.log(leng_prog[i]);
}














