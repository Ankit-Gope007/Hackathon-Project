import {Router} from 'express';
import {
    registerGeneticInfo,
    getAllGeneticInfo,
    getGeneticInfoByDisease
} from '../controllers/geneticInfo.controller.js';

const router = Router();

router.route('/registerGeneticInfo').post(registerGeneticInfo)
router.route('/getAllGeneticInfo').get(getAllGeneticInfo)
router.route('/getGeneticInfoByDisease').get(getGeneticInfoByDisease)


export default router;