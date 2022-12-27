import { sequelize } from "../config/dbconfig.js";
import { DataTypes, Sequelize } from "sequelize";

export const booksTable = sequelize.define("books", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  },
  BookName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  AuthorName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  IBN_Number: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  userID: {
    type: DataTypes.INTEGER,
    allowNull: false,
    foreignKey: true,
  },
});

booksTable.sync({}); //new changes(data) add krdeta 1 1 krke

// moodule.exports = firstTable
// async function createTable(){
//     // await table.sync({force: true})
//     await table.create({ productName: 'mobile' })
// }
// createTable()
