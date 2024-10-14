import { Request, Response, Router } from "express"
import {addNewEmployee} from "../controllers/employee"

const employeeRoutes=():Router=>{

    const router=Router()
     
    // ADD NEW EMPLOYEE
    router.route("/").post(addNewEmployee)

    return router
}

export default employeeRoutes