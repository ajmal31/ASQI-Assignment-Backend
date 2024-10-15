import { Request, Response, Router } from "express"
import {addNewEmployee, getAllEmployeeDetails} from "../controllers/employee"

const employeeRoutes=():Router=>{

    const router=Router()
     
    // ADD NEW EMPLOYEE
    router.route("/")
    .post(addNewEmployee)
    .get(getAllEmployeeDetails)

    return router
}

export default employeeRoutes