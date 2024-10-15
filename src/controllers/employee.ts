import { createEmployee, findAllEmployeeDetails } from '../helpers/employee';
import { Request, Response } from 'express';
import { sendResponse } from '../utils';

/**
 * Employee Controller
 * Handles employee-related operations such as adding and retrieving employee details.
 */
const employeeController = () => {
  
  /**
   * Add a new employee.
   * 
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   * @returns {Promise<void>} Sends JSON response with the newly created employee or an error message.
   */
  const addNewEmployee = async (req: Request, res: Response): Promise<void> => {
    const { name, department, address } = req.body;

    // Validate input
    if (!name) {
      sendResponse(res, 400, null, 'Please enter the name');
      return
    }
    if (!department) {
      sendResponse(res, 400, null, 'Please choose a department');
      return
    }
    if (!address) {
      sendResponse(res, 400, null, 'Please enter the address');
      return
    }

    try {
      
      const newEmployee = await createEmployee(name, department, address);
      sendResponse(res, 201, newEmployee)
    } catch (error) {
      sendResponse(res, 500, null, 'Failed to create employee');
    }
  };

  /**
   * Retrieve all employee details.
   * 
   * @param {Request} req - Express request object.
   * @param {Response} res - Express response object.
   * @returns {Promise<void>} Sends JSON response with all employee details or an error message.
   */
  const getAllEmployeeDetails = async (req: Request, res: Response): Promise<void> => {
    try {
      // Retrieve all employee details
      const employees = await findAllEmployeeDetails();
      sendResponse(res, 200, employees.reverse())
    } catch (error) {
      sendResponse(res, 500, null, 'Failed to retrieve employee details');
    }
  }

  return {
    addNewEmployee,
    getAllEmployeeDetails,
  }
}
export const { addNewEmployee, getAllEmployeeDetails } = employeeController();
