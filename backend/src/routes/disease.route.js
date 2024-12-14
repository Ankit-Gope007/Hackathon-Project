import { Router } from "express";
import { registerDisease ,getAllRegisteredDiseases, getDiseaseByNameOrICDcode,removeDisease} from "../controllers/disease.controller.js";

const router = Router();

router.route("/registerDisease").post(registerDisease);
router.route("/getAllRegisteredDiseases").get(getAllRegisteredDiseases);
router.route("/getRegisteredDiseaseByNameOrICDcode").get(getDiseaseByNameOrICDcode);
router.route("/removeDisease").delete(removeDisease);
export default router;