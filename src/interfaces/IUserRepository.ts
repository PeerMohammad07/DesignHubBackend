import { UpdateWriteOpResult } from "mongoose";
import { IUserData } from "./IUser";

export default interface IUserRepository {
  checkUserExists(email : string):Promise<IUserData|null>
  checkUser(userId:string):Promise<IUserData|null>
  createUser(name : string,email:string,password:string):Promise<IUserData>
} 