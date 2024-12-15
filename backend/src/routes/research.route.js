import { Router } from "express";
import { registerResearch,getAllResearch,getResearchByTitle,getResearchByICDcode,getResearchByInstitution} from "../controllers/research.controller.js";

const router = Router();

router.route("/registerResearch").post(registerResearch);
router.route("/getAllResearch").get(getAllResearch);
router.route("/getResearchByTitle").get(getResearchByTitle);
router.route("/getResearchByICDcode").get(getResearchByICDcode);
router.route("/getResearchByInstitution").get(getResearchByInstitution);

export default router;