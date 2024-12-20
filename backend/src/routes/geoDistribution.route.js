import { Router } from "express";
import {registerGeoDistribution,
    getAllGeoDistributions,
    getGeoDistributionByCountry,
    getGeoDistributionByRegion,
    getGeoDistributionByDisease
 } from "../controllers/geoDistribution.controller.js";

const router = Router()

router.route("/registerGeoDistribution").post(registerGeoDistribution)
router.route("/getAllGeoDistributions").get(getAllGeoDistributions)
router.route("/getGeoDistributionByCountry").get(getGeoDistributionByCountry)
router.route("/getGeoDistributionByRegion").get(getGeoDistributionByRegion)
router.route("/getGeoDistributionByDisease").get(getGeoDistributionByDisease)



export default router