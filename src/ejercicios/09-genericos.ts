/*
    ===== Código de TypeScript =====
*/

/*
    ===== GENERICOS =====
*/

function queTipoSoy<T>(argumento: T) {
    return argumento;
}

let soyString = queTipoSoy('Hola mundo');
let soyNumber = queTipoSoy(50);
let soyArreglo = queTipoSoy([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);

let soyExplicito = queTipoSoy<number>(50);

// ===== NOTAS ===== 
// Uno de los usos de genericos es poder decir de que tipo de dato se va a retornar en una funcion 
// T  es un estandar para decir que es un generico