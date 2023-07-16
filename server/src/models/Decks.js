// create Schema a.k.a footprint 
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    title: String
})

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel