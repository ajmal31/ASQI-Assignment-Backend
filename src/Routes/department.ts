import { Router } from "express"
import { addNewDepartment } from "../controllers/department"
import { getAllDepartments } from "../controllers/department"

const departmentRoutes=()=>{

    const router=Router()

    router.route("/")
    .post(addNewDepartment)
    .get(getAllDepartments)
    return router
}

export default departmentRoutes