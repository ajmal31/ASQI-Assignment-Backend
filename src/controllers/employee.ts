import { createEmployee, findAllEmployeeDetails } from "../helpers/employee";
import { EmployeeSchema } from "../models/employee";
import { Request,Response } from "express";

const employeeController = () => {
  
  /**
   * Add new employee
   * @param req 
   * @param res 
   * @returns
   */
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

  const getAllEmployeeDetails=async(req:Request,res:Response)=>{
 
        const response=await findAllEmployeeDetails()
        res.json(response)    
  }

  return {
    addNewEmployee,
    getAllEmployeeDetails
  };
};

export const {
addNewEmployee,
getAllEmployeeDetails
}=employeeController()
