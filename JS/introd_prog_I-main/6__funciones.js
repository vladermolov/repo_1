// FUNCIONES
// def: Es un bloque de código diseñado para realizar una operación determinada 
// A esta función, la podemos llamar desde cualquier punto del programa, podemos enviarle datos (parámetros) y nos puede devolver un dato (resultado)

//  sintaxis: 
// function nombre_funcion(parametro1, parametro2, ... ) { // param son opcionales
//     bloque de código (instrucciones)
//     ... 
//     return valor (resultado) // opcional
// } 

// Llamada a la función: 
// nombre_funcion(parametro1, parametro2, ... )

// Ejemplo1: Función que suma dos números (sin params ni return)
var n1 = 5;
var n2 = 5;

function suma_dos_nums_1() {
    var suma = n1 + n2;
    console.log(suma);
}
suma_dos_nums_1();

// Ejemplo2: Función que suma dos números (con params ni return)
function suma_dos_nums_2(num1, num2) {
    var suma = num1 + num2;
    console.log(suma);
}
suma_dos_nums_2(5, 5);

// Ejemplo3: Función que suma dos números (con params y return)
function suma_dos_nums_3(num1, num2) {
    var suma = num1 + num2;
    return suma;
}
// SIEMPRE QUE HAY UNA LLAMADA ASIGNADA A UNA VARIABLE, QUIERE DECIR QUE LA FUNCIÓN TIENE UN RETURN 
var result = suma_dos_nums_3(5, 5);
console.log(result);

console.log("------------------------");

// Ejemplo: Cálculo de gastos de envío y impuestos 

function calc_gastos_impuestos(p, i, e) {
    var impuestos = p * (1 + i / 100); // impuestos
    var precio_final = impuestos + e;
    return precio_final + "€";
}

var precio = 200;
var impuesto = 21; // %
// zona:  peninsula/baleares/canarias
var zona = "canarias";
switch (zona) {
    case "peninsula":
        var envio = 10;
        break; case "baleares":
        var envio = 12;
        break;
    case "canarias":
        var envio = 15;
        break;
    default:
        console.log("Zona incorrecta!");
        break;
}
// SI AÑADO LA LLAMADA DE LA FUNCIÓN (que tiene un return) DENTRO DEL console.log 
// YA DIRECTAMENTE ME IMPRIME EL VALOR
console.log(calc_gastos_impuestos(precio, impuesto, envio));














