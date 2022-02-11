/*
    ===== FUNCIONES BASICAS =====
*/

function sumar(a: number, b: number): number {
    return a + b;
}

const sumarFlecha = (a: number, b: number): number => {
    return a + b;
}

function multiplicar(numero: number, otroNumero?: number, base: number = 2): number {
    return numero * base;
}

interface PersonajeL {
    nombre: string;
    puntosVida: number;
    mostrarPV: () => void;
}

function curar(personaje: PersonajeL, puntosACurar: number): void {
    personaje.puntosVida += puntosACurar;
    console.log(personaje);
}

const nuevoPersonaje: PersonajeL = {
    nombre: "Alejandra",
    puntosVida: 50,
    mostrarPV() {
        console.log("Puntos de vida: ", this.puntosVida)
    }
}

curar(nuevoPersonaje, 20);
nuevoPersonaje.mostrarPV();

// ===== NOTAS ===== 
// En los argumentos se sigue este orden:
// 1. Obligatorios
// 2. Opcionales
// 3. Parametros con valor por defecto
// Si quiero cambiar el valor del parametro con valor por defecto, debo enviarle si o si el parametro opcional anterior
// Es recomendado poner el tipo a los argumentos y al return
// Si no quiero retornar nada en la funcion pongo void
// Las const son más ligeras para Javascript