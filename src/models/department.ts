import {model, Schema} from "mongoose"

const department=new Schema({
    name:{type:String,required:true},
    description: {type:String, required:true}
})

export const DepartmentSchema=model("Department",department)