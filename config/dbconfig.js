// For connecting Data Base
// const { Sequelize } = require('sequelize');
import { Sequelize } from "sequelize";
export const sequelize = new Sequelize("testDB", "sa", "123", {
  dialect: "mssql",
  host: "127.0.0.1",
  port: "63837",
});

