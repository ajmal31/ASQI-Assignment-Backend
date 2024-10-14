import mongoose, {model, Schema} from "mongoose"

const employee=new Schema({
    name:{type:String,required:true},
    department: {type:Schema.ObjectId, ref:"Department",required:true},
    address : {type:String,required:true}
})

export const EmployeeSchema=model("Employee",employee)