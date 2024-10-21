import mongoose, { Schema } from "mongoose"
import IUser from "../../interfaces/IUser"

const user = new Schema({
    name : {
      type : String,
      required : true
    },
    email : {
      type : String,
      required : true,
      unique : true
    },
    password : {
      type : String,
      required : true
    },
    role : {
      type : String,
      default : "user",
      required : true
    }
})

const User = mongoose.model<IUser>("users",user)
export default User