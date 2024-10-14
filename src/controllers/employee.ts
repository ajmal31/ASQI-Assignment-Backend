import { EmployeeSchema } from "../models/employee";
import { Request,Response } from "express";

const employeeController = () => {

  const addNewEmployee = async (req:Request,res:Response) => {

    const {name,department,address}=req.body

    if (!name && !department && !address)
      throw new Error("Please enter nesessory details");
    if (!name) throw new Error("Please enter name");
    if (!department) throw new Error("Please choose department");
    if (!address) throw new Error("Please enter address");

    try {
      const response = await new EmployeeSchema({
        name,
        department,
        address,
      }).save();

      //sending json format
      res.json(response)

    } catch (error) {
        console.log(error);
        throw new Error("INTERNAL SERVER ERROR")
    }
    
  };

  return {
    addNewEmployee,
  };
};

export const {
addNewEmployee
}=employeeController()
