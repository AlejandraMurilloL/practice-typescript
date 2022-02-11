/*
    ===== Código de TypeScript =====
*/

/*
    ===== DESESTRUCTURACION FUNCION =====
*/

export interface Producto {
    Descripcion: string;
    Precio: number;
}

const telefono: Producto = {
    Descripcion: "Samsung A21",
    Precio: 200
}

const iphone: Producto = {
    Descripcion: "Iphone X",
    Precio: 1000
}

export function CalcularISV(productos: Producto[]): [number, number] {
    let total = 0;
    productos.forEach(({ Precio }) => {
        total += Precio;
    });

    return [total, total * 0.15];
}

const productos = [ telefono, iphone ];
const [total, isv] = CalcularISV(productos);

console.log("Total: ", total);
console.log("ISV: ", isv);

// ===== NOTAS ===== 