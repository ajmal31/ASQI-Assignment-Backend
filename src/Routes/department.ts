import { Router } from 'express';
import { addNewDepartment, getAllDepartments } from '../controllers/department';

/**
 * Sets up routes for department-related operations.
 * @returns {Router} Configured router for department routes.
 */
const departmentRoutes = (): Router => {
    const router = Router();

    router
        .route('/')
        .post(addNewDepartment)   // POST / - Adds a new department.
        .get(getAllDepartments);  // GET /  - Retrieves all departments.

    return router;
};

export default departmentRoutes;
