/*
    ===== Código de TypeScript =====
*/

/*
    ===== Encadenamiento Opcional =====
*/

interface Pasajero {
    nombre: string;
    hijos?: string[];
}

const pasajero1: Pasajero = {
    nombre: 'Pasajero 1'
}

const pasajero2: Pasajero = {
    nombre: 'Pasajero 2',
    hijos: ['Juliana', 'Samuel']
}

function imprimeHijos(pasajero: Pasajero): void {
    const totalHijos = pasajero.hijos?.length || 0; // Si la parte izq es undefined o null entonces devuelva lo que esta a la der

    console.log(totalHijos);
}

imprimeHijos(pasajero2);
imprimeHijos(pasajero1);

// ===== NOTAS ===== 
// El signo ? indica que es opcional
// Cualquier metodo que se intente desencadenar de undefined dara error
// Cuando añadimos el ?, también le decimos que intente evaluar lo anterior 
// y si no es undefined entonces si ejecute lo que esta a la derecha => security operator