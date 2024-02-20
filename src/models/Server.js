import express from 'express';

// importaciones de rutas

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;

        this.pathURL = {

        }

        this.routes();
    }

    routes(){

    }

    listen(){
        this.app.listen(this.port, () => {
            console.log(`Server is running on port ${this.port}`);
        });
    }
};

export default Server;