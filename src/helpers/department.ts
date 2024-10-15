import { DepartmentSchema } from "../models/department";

const departmentHelpers = () => {
  /**
   * create new department
   * @param name
   * @param description
   * @returns created Document
   */
  const createDepartment = async (name: String, description: string) => {
    try {
      const response = await new DepartmentSchema({
        name,
        description,
      }).save();

      console.log("department created", response);
      return response;
    } catch (error) {
      console.log(error);
      throw new Error("INTERNAL_SERVER_ERROR");
    }
  };

  const retrieveAllDepartments = async () => {
    try {
      const response = await DepartmentSchema.find();
      return response
    } catch (error) {
      console.log(error);
      throw new Error("INTERNAL_SERVER_ERROR");
    }
  };
  return {
    createDepartment,
    retrieveAllDepartments
  };
};

export const { createDepartment,retrieveAllDepartments } = departmentHelpers();
