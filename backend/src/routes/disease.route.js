import { Router } from "express";
import { registerDisease ,getAllRegisteredDiseases, getDiseaseByNameOrICDcode,removeDisease,getDiseaseBySymptoms} from "../controllers/disease.controller.js";

const router = Router();

router.route("/registerDisease").post(registerDisease);
router.route("/getAllRegisteredDiseases").get(getAllRegisteredDiseases);
router.route("/getRegisteredDiseaseByNameOrICDcode").get(getDiseaseByNameOrICDcode);
router.route("/getRegisteredDiseaseBySymptoms").get(getDiseaseBySymptoms);
router.route("/removeDisease").delete(removeDisease);
export default router;