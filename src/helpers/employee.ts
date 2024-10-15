import { EmployeeSchema } from '../models/employee';

/**
 * Employee Helpers
 * Provides functions to interact with the employee data model.
 */
const employeeHelpers = () => {
  /**
   * Create a new employee.
   *
   * @param {string} name - Name of the employee.
   * @param {string} department - department of the employee.
   * @param {string} address address of the employee.
   * @returns {Promise<Document>} created employee document.
   * @throws {Error} Throws an error if employee creation fails.
   */
  const createEmployee = async (
    name: string,
    department: string,
    address: string
  ): Promise<any> => {
    try {
      const employee = new EmployeeSchema({
        name,
        department,
        address,
      });
      const response = await employee.save();

      return response;
    } catch (error) {
      throw new Error('INTERNAL SERVER ERROR'); // Consistent error message
    }
  };

  /**
   * Find all employee details, including department.
   *
   * @returns {Promise<Array<Document>>} An array of employee documents with populated department details.
   * @throws {Error} Throws an error if retrieval fails.
   */
  const findAllEmployeeDetails = async (): Promise<any[]> => {
    try {
      const response = await EmployeeSchema.find({}).populate('department');
      return response;
    } catch (error) {
      console.error('Error retrieving employee details:', error);
      throw new Error('INTERNAL SERVER ERROR'); // Consistent error message
    }
  };

  return {
    createEmployee,
    findAllEmployeeDetails,
  };
};

export const { createEmployee, findAllEmployeeDetails } = employeeHelpers();
