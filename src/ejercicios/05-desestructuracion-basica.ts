/*
    ===== Código de TypeScript =====
*/

/*
    ===== DESESTRUCTURACION =====
*/

interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}

interface Detalles {
    autor: string;
    anyo: number;
}

const reproductor: Reproductor = {
    volumen: 90,
    segundo: 36, 
    cancion: "Mess",
    detalles: {
        anyo: 2018,
        autor: "Ed Sheeran"
    }
}

// Desestructuración de objetos

const { volumen, segundo, cancion, detalles } = reproductor;
const { autor } = detalles;

// console.log("El volumen actual es de: ", volumen);
// console.log("El segundo actual es de: ", segundo);
// console.log("La canción actual es: ", cancion);
// console.log("El autor es: ", autor);

// Desestructuración de arreglos

const dbz: string[] = ['Goku', 'Vegeta', 'Trunks'];
const [ p1, p2, p3 ] = dbz;
//const [ , , p3 ] = dbz; => Si solo necesito el 3 elemento y no los dos primeros 

console.log("Personaje 1: ", p1);
console.log("Personaje 2: ", p2);
console.log("Personaje 3: ", p3);

// ===== NOTAS ===== 
// La desestructuracion nos permite crear constantes a partir de las propiedades que tiene un objeto
// const { volumen, segundo, cancion, detalles: { autor } } = reproductor; => Otra manera menos limpia
// Si alguna de estas choca con otra constante, se puede cambiar el nombre asi:
// const autor = "autor";
// const { volumen, segundo, cancion, detalles: { autor: autorDetalles } } = reproductor;