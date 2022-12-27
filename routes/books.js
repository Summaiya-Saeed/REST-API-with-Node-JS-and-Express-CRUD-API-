import express from "express";
import {Create_book,Getbooks,GetSpecificbook} from "../controllers/books.js";

const router = express.Router(); //router coming from express save into varaiable

//all routes here are starting from users kioke index.js mai hamne specify krdia hai
router.get("/", Getbooks); //route banaya hai of users, getuser ka funtion in controller file

//adding users to data base
//we are using post because we also need to send data from frontend to server
//browse/URLs can only make get request , for post reqest we will use postman
router.post("/", Create_book);

router.get("/:id", GetSpecificbook); // :id means ham koi parameter dalsakty "/user/ ke bad in browser/postman

// router.delete("/:id", DeleteUser);

// router.patch("/:id", UpdateUser);

export default router; //exporting the file because we want to use this file in "index.js"
