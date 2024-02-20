import Producto from "../models/Producto.js";

const insertProducto = async (req, res) => {
    try{
        console.log(req.body);
        const { barcode, nombre, presentacion } = req.body;

        const producto = Producto.build({
            nombre,
            barcode,
            presentacion
        });
        await producto.save();

        res.status(201).json(producto);
    }   
    catch(error){
        res.send(`${error.message}`);
    }
};


export { insertProducto };