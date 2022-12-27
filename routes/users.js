import express from 'express';
import { Create_User, GetUsers, GetSpecificUser, DeleteUser,  UpdateUser } from "../controllers/users.js";

const router = express.Router();  //router coming from express save into varaiable 



//all routes here are starting from users kioke index.js mai hamne specify krdia hai  
router.get('/', GetUsers); //route banaya hai of users, getuser ka funtion in controller file


router.post('/', Create_User) //create_user wali jaga is end point 

router.get('/:id' ,GetSpecificUser) // :id means ham koi parameter dalsakty "/user/ ke bad in browser/postman

router.delete("/:id", DeleteUser);

router.patch("/:id", UpdateUser);


export default router; //exporting the file because we want to use this file in "index.js"