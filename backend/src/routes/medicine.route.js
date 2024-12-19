import { Router } from "express";
import { registerMedicine ,
     getAllRegisteredMedicines,
     getMedicineByDiseaseICDcode,
     getMedicineByDrugName,
     getMedicineByFDAApprovalStatus,
     
    } from "../controllers/medicine.controller.js";


const router = Router();

router.route("/registerMedicine").post(registerMedicine);
router.route("/getAllRegisteredMedicines").get(getAllRegisteredMedicines);
router.route("/getMedicineByDiseaseICDcode").get(getMedicineByDiseaseICDcode);
router.route("/getMedicineByDrugName").get(getMedicineByDrugName);
router.route("/getMedicineByFDAApprovalStatus").get(getMedicineByFDAApprovalStatus);



export default router;