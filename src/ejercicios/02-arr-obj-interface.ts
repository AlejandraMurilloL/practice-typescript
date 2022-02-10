/*
    ===== Arrays, Objetos, Interfaces =====
*/

let habilidades: string[] = ['Bash', 'Counter', 'Healing'];

interface Personaje {
    Nombre: string;
    Hp: number;
    Habilidades: string[];
    PuebloNatal?: string;
}

const personaje: Personaje = {
    Nombre: 'Alejandra',
    Hp: 100,
    Habilidades: ['Bash', 'Counter', 'Healing']
};

personaje.PuebloNatal = "Pueblo natal";

console.table(personaje);

// ===== NOTAS =====

// [] Indica arreglo
// any, tipo especial de TypeScript que indica que podemos poner ahi cualquier cosa 
// any = lo que sea
// Importante: Intentar evitar any