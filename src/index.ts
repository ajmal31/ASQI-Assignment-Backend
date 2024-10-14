// config express
// Api Versioning middlware
// helmet
// Db connection
//morgan for logging

import express from "express"
import morgan from "morgan"
import helmet from "helmet"
import dbConnection from "./config/dbConection"
import dotenv from "dotenv"
import employeeRoutes from "./Routes/employe"
import departmentRoutes from "./Routes/department"

dotenv.config()

const PORT=process.env.PORT || 3000
const MONGO_URI:string|undefined=process.env.MONGO_URI

const app=express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(morgan('dev'))
app.use(helmet())
dbConnection(MONGO_URI)

app.use("/employee",employeeRoutes())
app.use("/department",departmentRoutes())

app.listen(PORT, () => {
    console.log(`Server is listening port ${PORT}`);
});

