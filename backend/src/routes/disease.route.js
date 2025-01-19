import { Router } from "express";
import { registerDisease, getAllInfo ,getAllRegisteredDiseases, getDiseaseByNameOrICDcode,removeDisease,getDiseaseBySymptoms} from "../controllers/disease.controller.js";

const router = Router();

router.route("/registerDisease").post(registerDisease);
router.route("/getAllRegisteredDiseases").get(getAllRegisteredDiseases);
router.route("/getRegisteredDiseaseByNameOrICDcode").post(getDiseaseByNameOrICDcode);
router.route("/getRegisteredDiseaseBySymptoms").get(getDiseaseBySymptoms);
router.route("/removeDisease").delete(removeDisease);
router.route("/getAllInfo").get(getAllInfo);
export default router;