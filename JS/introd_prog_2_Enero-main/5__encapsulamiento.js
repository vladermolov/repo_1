// Ejemplo de una clase "Coche"
class Coche{
    // las propiedades las define e inicializa el "constructor"
    constructor (marca, any, color) {
        this.marca = marca;
        this.any = any;
        this.color = color;
        // cada vez que se realiza una instancia a la clase, el deposito está vacio
        this.nivel__combustible = 0;
    }
    // método que devuelve la antigüedad del coche
    edad__coche(){
        var fecha = new Date(); 
        return fecha.getFullYear() - this.any;
    }
    // método que gestiona el deposito del combustible
    repostar()
}

var coche1 = new Coche("Seat", 2018, "azul")