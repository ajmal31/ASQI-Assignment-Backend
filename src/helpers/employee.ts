import { EmployeeSchema } from "../models/employee";

const employeeHelpers = () => {
  /**
   * create new department
   *
   * @returns created Document
   */
  const createEmployee = async (
    name: string,
    department: string,
    address: string
  ) => {
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
  /**
   * Find all employee details inc department
   * @returns Array of Documents
   */
  const findAllEmployeeDetails = async () => {
    try {
      const response = await EmployeeSchema.find({}).populate("department");
      return response;
    } catch (error) {
      console.log(error);
      throw new Error("INTERNAL SERVER ERROR");
    }
  };

  return {
    createEmployee,
    findAllEmployeeDetails,
  };
};

export const { createEmployee, findAllEmployeeDetails } = employeeHelpers();
