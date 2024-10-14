import { DepartmentSchema } from "../models/department";
import { Request, Response } from "express";

const departmentController =  () => {

  const addNewDepartment =async (req: Request, res: Response)=> {
    const { name, description } = req.body;
    if (!name && !description)
      throw new Error("Please provide necessory details");

    if (!name) throw new Error("Please enter name of department");
    if (!description) throw new Error("Please enter description of department");

    try {
      const response = await new DepartmentSchema({
        name,
        description
      }).save();
      
      console.log("department created",response);
      res.json(response);

    } catch (error) {
       console.log(error);
        throw new Error("INTERNAL_SERVER_ERROR")
    }
  };

  return {
    addNewDepartment,
  };
};

export const { addNewDepartment } = departmentController();
