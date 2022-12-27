
import {booksTable} from '../models/books.js';
import {UsersTable} from '../models/users.js'

//our temporary database 
//let users = []

// *****************Creating User***********************

//export kr ry taky dosri file mai use kar saky
export const Create_User = async (req, res) => {
  //console.log(req.body)
  //using await for jab data chala jai database mai tabhi agy barhy in response
  const adduser = await UsersTable.create(req.body);
  res.send({
    message:"user added successfully!",
    data:adduser
  });
};

// *****************Geting Users***********************
export const GetUsers = async(req, res) => {
  const AllUsers = await UsersTable.findAll({ include: booksTable }); //bookstable ka bhi data chaiye
  res.send({data:AllUsers}); 
};

// *****************Geting Specific User*********************
export const GetSpecificUser=async(req,res) => {  
    console.log(req.params);   
    const id = req.params.id                                //kuch attributes chhaiye hn from 2nd model
    const userfound = await UsersTable.findByPk(id,{ include: { model: booksTable ,attributes: ["id","BookName"]} });
    res.send({data:userfound});    
}

// *****************Deleting User*********************
export const DeleteUser = async (req, res) => {
  const id = req.params.id;
  const DeleteUser = await UsersTable.destroy({where: {id: id}}); //first id is data base wali id and 2nd id is jo user ne input kari for searching
  res.send({ message: `user with id ${id} deleted successfully!`,
             data: await UsersTable.findAll()
 });
};

// *****************Updating User*********************
export const UpdateUser =async (req, res) => {
  const id = req.params.id; //user writing id in param
  var UpdatedUserData = {
    FirstName: req.body.FirstName,
    LastName: req.body.LastName,
    Age: req.body.Age
  };
  const UpdateUser = await UsersTable.update(UpdatedUserData, { where: { id: id } });
  res.send({ message: `user with id ${id} updated successfully!`,
            data:await UsersTable.findByPk(id)
    });
};
