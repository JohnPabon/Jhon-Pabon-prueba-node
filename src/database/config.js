import { Sequelize, DataTypes } from "sequelize";

const Connection = new Sequelize('market', 'campus', 'campus2023', {
    host: 'localhost',
    dialect:'mysql',
    define: {
        timestamps: false
    }
});

export { Connection, DataTypes };