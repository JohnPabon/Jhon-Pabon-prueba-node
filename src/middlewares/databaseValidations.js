import Producto from "../models/Producto.js"

const barcodeExists = async (barcode ) => {
    console.log("Este es el campo:   ", barcode)
    const existProducto = await Producto.findOne({
        where: {
            barcode: barcode
        }
    });

    console.log("Este es el valor:   ", existProducto)


    if(existProducto){
          throw new Error("Ya existe el campo barcode")
    };
};

export { barcodeExists };