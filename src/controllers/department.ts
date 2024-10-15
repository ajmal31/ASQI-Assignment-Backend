import { createDepartment, retrieveAllDepartments } from '../helpers/department';
import { Request, Response } from 'express';
import { sendResponse } from '../utils';

/**
 * Department Controller
 * Handles department-related operations such as adding and retrieving departments.
 */
const departmentController = () => {

  /**
   * Add a new department.
   * 
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   * @returns {Promise<void>} Sends JSON response with the newly created department or an error message.
   */
  const addNewDepartment = async (req: Request, res: Response): Promise<void> => {
    const { name, description } = req.body;

    // Validate input
    if (!name) {
      sendResponse(res, 400, null, 'Department name is required');
      return
    }
    if (!description) {
      sendResponse(res, 400, null, 'Department description is required');
      return
    }

    try {
      const newDepartment = await createDepartment(name, description);
      sendResponse(res, 201, newDepartment);
    } catch (error) {
      sendResponse(res, 500, null, 'Failed to create department')
    }
  }

  /**
   * Retrieve all departments.
   * 
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   * @returns {Promise<void>} Sends JSON response with all departments or an error message.
   */
  const getAllDepartments = async (req: Request, res: Response): Promise<void> => {
    try {
      const departments = await retrieveAllDepartments()
      sendResponse(res, 200, departments)
    } catch (error) {
      sendResponse(res, 500, null, 'Failed to retrieve departments')
    }
  }

  return {
    addNewDepartment,
    getAllDepartments,
  }
}
export const { addNewDepartment, getAllDepartments } = departmentController()
