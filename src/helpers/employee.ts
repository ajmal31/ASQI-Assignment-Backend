import { EmployeeSchema } from "../models/employee";

const employeeHelpers = () => {
    
  /**
   * create new department
   *
   * @returns created Document
   */
  const createEmployee = async (name:string,department:string,address:string) => {
    try {
      const response = await new EmployeeSchema({
        name,
        department,
        address,
      }).save();

      return response;
    } catch (error) {
      console.log(error);
      throw new Error("INTERNAL SERVER ERROR");
    }
  };

  return {
    createEmployee,
  };
};

export const { createEmployee } = employeeHelpers();
