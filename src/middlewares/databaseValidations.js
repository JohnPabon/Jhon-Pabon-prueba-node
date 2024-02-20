import Producto from "../models/Producto.js"

const barcodeExists = (req,res, next) => {
    
    const existProducto = Producto.findOne({
        where: {
            barcode: req.body.barcode
        }
    });
    console.log(existProducto);


    if(existProducto){
        return res.status(400).json({
            msg: "Ya existe el campo barcode"
        })
    };

    next();
};

export { barcodeExists };