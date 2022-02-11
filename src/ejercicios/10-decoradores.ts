/*
    ===== Código de TypeScript =====
*/

/*
    ===== DECORADORES =====
*/
function reportableClassDecorator<T extends { new (...args: any[]): {} }>(constructor: T) {
    return class extends constructor {
      reportingURL = "http://www...";
    };
  }
   


//@MiDecorador
@reportableClassDecorator
class MiSuperClase {
    public miPropiedad: string = 'ABC123';

    imprimir() {
        console.log("Hola Mundo");
    }
}

console.log(MiSuperClase);

const miClase = new MiSuperClase();

console.log(miClase.miPropiedad);

// ===== NOTAS ===== 
// Los decoradores sirven para cambiar las clases al momento en el que son definidas
// Los decoradores trabajan en un nivel anterior que la creacion de una nueva instancia
// Sirven para añadir o expandir funcionalidades
// En Angular se utilizar mucho para saber si esa clase es un componente, un servicio, un pipe, una directiva, etc
// Es una funcion que expande su clase añadiendole funcionalidades especializadas