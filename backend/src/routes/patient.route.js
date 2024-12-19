import {Router} from "express";
import { registerPatient
    , getAllPatients
    , getPatientByNameOrICDcode
    , getPatientByGender
    , getPatientByAgeRange
 } from "../controllers/patient.controller.js";

const router = Router();

router.route("/registerPatient").post(registerPatient);
router.route("/getAllPatients").get(getAllPatients);
router.route("/getPatientByNameOrICDcode").get(getPatientByNameOrICDcode);
router.route("/getPatientByGender").get(getPatientByGender);
router.route("/getPatientByAgeRange").get(getPatientByAgeRange);


export default router;