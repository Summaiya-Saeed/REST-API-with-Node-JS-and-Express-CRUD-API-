import { booksTable } from "../models/books.js";
import { UsersTable } from "../models/users.js";

// //***********one to one Relation***************
// UsersTable.hasOne(booksTable, {
//   foreignKey: "userID",     //book ke table mai userid is foreignkey jo
// });
// booksTable.belongsTo(UsersTable,{
//   foreignKey: "id"   //isko ham batary ke user ke table ki jo primary key hai us sy match karai userid ko
// });

//***********one to many Relation***************
UsersTable.hasMany(booksTable, {
  foreignKey: "userID", //book ke table mai userid is foreignkey jo
});
booksTable.belongsTo(UsersTable,{
  foreignKey: "id"   //isko ham batary ke user ke table ki jo primary key hai us sy match karai userid ko
});