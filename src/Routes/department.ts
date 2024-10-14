import { Router } from "express"
import { addNewDepartment } from "../controllers/department"

const departmentRoutes=()=>{

    const router=Router()

    router.route("/").post(addNewDepartment)
    return router
}

export default departmentRoutes