
//this file is only for set up the server ham sary routes yahan nhi banaiengy 
import express from "express";
import bodyParser from "body-parser";  //like a middlewear

import userRoutes from './routes/users.js'; //we named userRoutes for our ease
import bookRoutes from './routes/books.js'; //we named booksRoutes for our ease
import "./models/Association.js";


const app=express();   //our application
const PORT = 5000;     //port of our application

app.use(bodyParser.json());  //tells we are using json data
app.use('/users', userRoutes); //"all routes are starting from "/user" isliye ham yahan likhdengy
app.use('/books', bookRoutes);
//we make get request to the forward slash /
app.get('/', (req, res) => {        //creating route , '/' ususally refer to home page
    res.send("hello from home page ")  //res.send --> for showing into browser(user ko)
}
)


//database
import {sequelize}  from './config/dbconfig.js';
sequelize.authenticate()
.then(()=> console.log('connected'))
.catch((err) => console.log(err));




//make application listen for upcoming request
app.listen(PORT, () => console.log(`server Running on port: http://localhost:${PORT}`))
