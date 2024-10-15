import { createEmployee } from "../helpers/employee";
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

    const response=await createEmployee(name,department,address)
    res.json(response)
    
  };

  return {
    addNewEmployee,
  };
};

export const {
addNewEmployee
}=employeeController()
