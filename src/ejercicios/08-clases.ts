/*
    ===== Código de TypeScript =====
*/

/*
    ===== CLASES =====
*/

class PersonaNormal {
    constructor(
        public nombre: string, 
        public direccion: string
    ) {}
}

class Heroe extends PersonaNormal {
    // alterEgo: string;
    // edad: number;
    // nombreReal: string;

    constructor(
        public alterEgo: string,
        public edad: number,
        public nombreReal: string
    ){  
        super(nombreReal, "New York USA");
    }
}

const ironman = new Heroe("Ironman", 45, "Tony");

console.log(ironman); 

// ===== NOTAS ===== 
// private => Solo visible dentro de esta clase 
// public => Se podra ver desde fuera de la clase
// static => Se puede acceder sin crear una instancia de la clase
// Cuando no se tiene modificador de acceso, por defecto es public
// Las interfaces no existen en Javascript
// Las clases me sirven para crear instancias 
// Las interfaces son como clases tontas, no pueden implementar metodos o funciones
// El constructor es una funcion que se va a llamar cuando creo una instancia de una clase
// Si utilizo el this, estoy usando la instancia creada de la clase
// Al añadir un public a un parametro del constructor le decimos a la clase que cree una propiedad llamada tal y con el tipo de dato tal
// Extender es añadir ciertass funcionalidades a una clase existente
// super es llamar al constructor de la clase a la cual estamos extendiendo