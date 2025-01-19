import { Router } from "express";
import { registerResearch,getAllResearch,getResearchByTitle,getResearchByICDcode,getResearchByInstitution, getResearchByName } from "../controllers/research.controller.js";    
import { app } from "../app.js";
const router = Router();

router.route("/registerResearch").post(registerResearch);
router.route("/getAllResearch").get(getAllResearch);
router.route("/getResearchByTitle").get(getResearchByTitle);
router.route("/getResearchByICDcode").get(getResearchByICDcode);
router.route("/getResearchByInstitution").get(getResearchByInstitution);
router.route("/getResearchByName").post(getResearchByName);



export default router;