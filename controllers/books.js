import { booksTable } from "../models/books.js";
import { UsersTable } from "../models/users.js";

//our temporary database


// *****************Creating User*********************

//export kr ry taky dosri file mai use kar saky
export const Create_book = async (req, res) => {
  //console.log(req.body)
  //using await for jab data chala jai database mai tabhi agy barhy in response
  const addbook = await booksTable.create(req.body);
  res.send({
    message: "book added successfully!",
    data: addbook,
  });
};

// *****************Geting Users*********************
export const Getbooks = async (req, res) => {
  const AllBooks = await booksTable.findAll();
  res.send({ data: AllBooks });
};

// *****************Geting Specific User*********************
export const GetSpecificbook = async (req, res) => {
  console.log(req.params);
  const id = req.params.id;
  const bookfound = await booksTable.findByPk(id);
  res.send({ data: bookfound });
};

// // *****************Deleting User*********************
// export const DeleteUser = async (req, res) => {
//   const id = req.params.id;
//   const DeleteUser = await UsersTable.destroy({ where: { id: id } });
//   res.send({
//     message: `user with id ${id} deleted successfully!`,
//     data: await UsersTable.findAll(),
//   });
// };

// // *****************Updating User*********************
// export const UpdateUser = async (req, res) => {
//   const id = req.params.id; //user writing id in param
//   var UpdatedUserData = {
//     FirstName: req.body.FirstName,
//     LastName: req.body.LastName,
//     Age: req.body.Age,
//   };
//   const UpdateUser = await UsersTable.update(UpdatedUserData, {
//     where: { id: id },
//   });
//   res.send({
//     message: `user with id ${id} updated successfully!`,
//     data: await UsersTable.findByPk(id),
//   });
// };
