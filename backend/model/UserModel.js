const {model}=require('mongoose');
const {UserSchema}=require('../schemas/UsersSchema');

const UserModel = new model("User",UserSchema);
module.exports={UserModel};