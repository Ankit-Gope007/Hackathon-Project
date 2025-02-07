import express from "express"
import cookieParser from "cookie-parser"
import cors from "cors"

const app = express()
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

app.use(express.json({limit : "16kb"}))
app.use(express.urlencoded({extended:true,limit : "16kb"}))
app.use(express.static("public"))
app.use(cookieParser())

// Importing Routes
import diseaseRoutes from "./routes/disease.route.js"
import researchRoutes from "./routes/research.route.js"
import medicineRoutes from "./routes/medicine.route.js"
import patientRoutes from "./routes/patient.route.js"
import geneticInfoRoutes from "./routes/geneticInfo.route.js"
import geoDistributionRoutes from "./routes/geoDistribution.route.js"

// Using Routes
app.use("/api/DEVCoders/Disease",diseaseRoutes)
app.use("/api/DEVCoders/Research",researchRoutes)
app.use("/api/DEVCoders/Medicine",medicineRoutes)
app.use("/api/DEVCoders/Patient",patientRoutes)
app.use("/api/DEVCoders/GeneticInfo",geneticInfoRoutes)
app.use("/api/DEVCoders/GeoDistribution",geoDistributionRoutes)



export {app}