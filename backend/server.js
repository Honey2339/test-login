const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const User = require('./models/DBmodel');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const app = express();


//Mongo URI
MONGO_URI = "mongodb+srv://sky5:sky5@cluster0.6hcywcy.mongodb.net/"

//Using CORS and Paring the coming data
app.use(cors());
app.use(express.json());
app.use(cookieParser());

//creating the token
const createToken = (id) => {
    return jwt.sign({ id }, 'BROWHAT', { expiresIn: '1h' });
}


app.get('/login' , (req,res)=>{
    res.send({msg : "how are you"})
})


//Getting the Email and Password from the body
app.post('/login' , (req,res)=>{
    const {email , password} = req.body;
    res.send({msg : "user login"})
})


//Giving the email and password to /signup
app.post('/signup' , async (req,res)=>{
    const {email , password} = req.body;
    
    try {
        const user = await User.create({email , password})
        const token = createToken(user._id)
        res.cookie('jwt-token',token , {httpOnly: true , maxAge: 1000 * 60 * 60})
        res.status(201).json({user : user._id , jwt : token})
        
    } catch (err) {
        console.log(err)
        res.status(400).json("Error user not created")
    }

})


// DB connection
mongoose.connect(MONGO_URI)
.then((result)=>{app.listen(5050 , () =>{console.log("DB is connected and Server is running on port 5050")});})
.catch((err)=>{console.log(err)})

