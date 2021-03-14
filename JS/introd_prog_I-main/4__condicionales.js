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
// Ejemplos
console.log(5 == 5); // true
console.log(5 == "5"); // true
console.log(5 === "5"); // false
console.log(5 != 5); // false
console.log(5 != 6); // true
console.log(5 > 5); // false 
console.log(5 >= 5); // true
console.log("------------------");
console.log(5 == 5 && "hola" == "hola"); // true
console.log(5 == 5 && "hola" == "Hola"); // false
console.log(5 == 5 || "hola" == "hola"); // true
console.log(5 == 5 || "hola" == "Hola"); // true
console.log("------------------");

// IF - ELSE 
// sintaxis: 
// if (condition) {
//     ejecución de las instrucciones SI se cumple la condicion (true) 
// } else {
//     ejecución de las instrucciones SINO se cumple la condicion(false) 
// }

// Ejemplo1: Comprobar el mayor de dos números
var n1 = 10;
var n2 = 10;

if (n1 > n2) {
    console.log("n1 es mayor que n2");
} else if (n2 > n1) {
    console.log("n2 es mayor que n1");
} else {
    console.log("son iguales");
}

// Ejemplo2: Validar una contraseña (6 caract mín)
var UserPass = "a12345a";

if (UserPass.length >= 6) { // length: propiedad que devuelve la longitud de un String
    console.log("Contraseña ok!");
} else {
    console.log("Contraseña menor de 6 caract!!");
}
console.log("------------------");

// SWITCH: IMPORTANTE!! Lo utilizamos SIEMPRE que conozcamos los datos a comparar
// sintaxis:
// switch (dato a comparar) {
//     case1 value:
// ejecuta estas instrucciones
//         break; // salir del SWITCH
//     case2 value:
// ejecuta estas instrucciones
//         break; // salir del SWITCH
// . 
// . 
// .

//     default:
// ejecuta estas instrucciones en el caso de que no haya entrado en ninguno anterior
//         break;
// }

// Ejemplo1: semáforo 
var color = "rojo1";
switch (color) {
    case "rojo":
        console.log("No pasar!!!");
        break;
    case "ambar":
        console.log("Precaución!!!");
        break;
    case "verde":
        console.log("Pasar!!!");
        break;
    default:
        console.log("No has puesto un color correcto!!!");
        break;
}











