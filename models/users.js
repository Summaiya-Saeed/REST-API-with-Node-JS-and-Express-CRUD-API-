import { sequelize } from "../config/dbconfig.js";
import { DataTypes, Sequelize } from "sequelize";


export const UsersTable = sequelize.define("users", {   //here we are creating Table
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  FirstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  LastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },

});
UsersTable.sync({});  //creating new table, if already exist it does nothing 


// moodule.exports = firstTable

// async function createTable(){
//     // await table.sync({force: true})
//     await table.create({ productName: 'mobile' })
// }
// createTable()


