import express from 'express';
import cors from 'cors';

// importaciones de rutas
import ProductoRoutes from './../routes/producto.routes.js';
class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.pathURL = {
            producto: "/producto"
        };
        this.middlewares();
        this.routes();
    }

    routes(){
        this.app.use(this.pathURL.producto, ProductoRoutes);
    }

    middlewares(){
        this.app.use(express.json());
        this.app.use(cors());
    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
};

export default Server;