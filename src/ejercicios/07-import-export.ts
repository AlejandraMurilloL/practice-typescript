/*
    ===== Código de TypeScript =====
*/

import { CalcularISV, Producto } from "./06-desestructuracion-funcion";

/*
    ===== IMPORT - EXPORT =====
*/

const carritoCompras: Producto[] = [
    {
        Descripcion: "Telefono 1",
        Precio: 100
    },
    {
        Descripcion: "Telefono 2",
        Precio: 150
    }
];

const [total, isv] = CalcularISV(carritoCompras);

console.log("Total: ", total);
console.log("ISV: ", isv);



// ===== NOTAS ===== 
// con la palabra export estamos diciendo que van a poder consumir ese producto