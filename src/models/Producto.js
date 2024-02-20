import { Connection, DataTypes } from './../database/config.js';

const Producto = Connection.define('producto', {
    barcode: DataTypes.STRING,
    nombre: DataTypes.STRING,
    presentacion: DataTypes.STRING
});

export default Producto;
