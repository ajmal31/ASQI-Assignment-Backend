import { DepartmentSchema } from '../models/department';

/**
 * Department Helpers
 * Provides functions to interact with the department data model.
 */
const departmentHelpers = () => {
  /**
   * Create a new department.
   *
   * @param {string} name - Name of the department.
   * @param {string} description - Description of the department.
   * @returns  Created department document.
   * @throws {Error} Throws an error if the department creation fails.
   */
  const createDepartment = async (name: string, description: string): Promise<any> => {
    try {
      const department = new DepartmentSchema({
        name,
        description,
      });
      const response = await department.save();

      return response;
    } catch (error) {
      throw new Error('INTERNAL_SERVER_ERROR'); // Consistent error message
    }
  };

  /**
   * Retrieve all departments.
   *
   * @returns  An array of department documents.
   * @throws  Throws an error if the retrieval fails.
   */
  const retrieveAllDepartments = async (): Promise<any[]> => {
    try {
      const response = await DepartmentSchema.find();
      return response;
    } catch (error) {
      throw new Error('INTERNAL_SERVER_ERROR'); 
    }
  };

  return {
    createDepartment,
    retrieveAllDepartments,
  };
};

export const { createDepartment, retrieveAllDepartments } = departmentHelpers();
