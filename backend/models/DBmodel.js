const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const schema = mongoose.Schema({
    email:{
        type: String,
        required: [true,"Email is required"],
        lowercase : true,
        unique: true,
    },
    password: {
        type: String,
        required: [true,"Password is required"],
        minlength: [4,"Minimum 4 characters is required"],
    }
},{timestamps: true});

//Hashing the password
schema.pre('save',async function(next){
    const salt = await bcrypt.genSalt();
    this.password = await bcrypt.hashSync(this.password, salt);
    next();
})

const User = mongoose.model("credential", schema)

module.exports = User