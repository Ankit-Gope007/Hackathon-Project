import { Router } from "express";
import { registerDisease ,getAllRegisteredDiseases, getDiseaseByNameOrICDcode} from "../controllers/disease.controller.js";

const router = Router();

router.route("/registerDisease").post(registerDisease);
router.route("/getAllRegisteredDiseases").get(getAllRegisteredDiseases);
router.route("/getRegisteredDiseaseByNameOrICDcode").get(getDiseaseByNameOrICDcode);

export default router;