import Server from './models/Server.js';
import { config as configDotenv } from 'dotenv';

// Manejo del patron de diseño singleton
const processManager = (function(){
    let server = null;
    configDotenv();

    const activeServer = () => {
        server = new Server();
    };

    return{
        getServer: () => {
            if(!server){
                activeServer();
            };
            return server;
        }
    }
})();

processManager.getServer().listen();

/*
// comprobar singleton
const proceso1 = processManager.getServer();
const proceso2 = processManager.getServer();
console.log(proceso1 === proceso2);
*/