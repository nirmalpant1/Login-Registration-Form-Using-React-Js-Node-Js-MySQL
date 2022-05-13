import { Sequelize } from "sequelize";
 
const db = new Sequelize('db1', 'root', '', {
    host: "localhost",
    dialect: "mysql"
});
 
export default db;

