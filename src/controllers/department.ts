import { createDepartment, retrieveAllDepartments } from "../helpers/department";
import { Request, Response } from "express";

const departmentController = () => {
  
  /**
   * Add New Department
   * @param req 
   * @param res 
   * @returns 
   */  
  const addNewDepartment = async (req: Request, res: Response) => {

    if (!req.body.name && !req.body.description)
      throw new Error("Please provide necessory details");

    if (!req.body.name) throw new Error("Please enter name of department");
    if (!req.body.description) throw new Error("Please enter description of department");

    const { name, description } = req.body;

     const response=await createDepartment(name,description)
     res.json(response)
  };

  /**
   * Get all departments
   * @param req 
   * @param res 
   * @returns
   */
  const getAllDepartments = async (req:Request,res:Response) => {
   
    const response=await retrieveAllDepartments()
    res.json(response)
  };

  return {
    addNewDepartment,
    getAllDepartments
  };
};

export const { addNewDepartment,getAllDepartments } = departmentController();
