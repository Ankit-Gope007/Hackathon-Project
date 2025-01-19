import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import mongoose from 'mongoose';
import { Medicine } from '../models/medicine.model.js';
import { Disease } from '../models/disease.model.js';


const registerMedicine = asyncHandler(async (req, res) => {
    const { DiseaseICDcode, DrugName, FDAApprovalStatus, MechanismOfAction, ResearchResults } = req.body;
    if (!DiseaseICDcode || !DrugName || !FDAApprovalStatus || !MechanismOfAction || !ResearchResults) {
        throw new ApiError(400, 'Please fill all fields');
    }

    const disease = await Disease.findOne({ ICDcode: DiseaseICDcode });
    if (!disease) {
        throw new ApiError(404, 'Disease with the given ICD code not found');
    }

    const existing = await Medicine.findOne({ DiseaseICDcode:DiseaseICDcode });
    
    if (existing) {
        throw new ApiError(400, 'Medicine with the same ICD code already exists');
    }
    else {
        const medicine = await Medicine.create({
            DiseaseId: disease._id,
            DiseaseICDcode,
            DrugName,
            FDAApprovalStatus,
            MechanismOfAction,
            ResearchResults
        });

        return res
            .status(201)
            .json(
                new ApiResponse(200, 'Medicine registered successfully', medicine)
            );

    }
})

const getAllRegisteredMedicines = asyncHandler(async (req, res) => {
    const medicines = await Medicine.find({}).populate('DiseaseId', 'Name');

    return res
        .status(200)
        .json(
            new ApiResponse(200, medicines, 'All medicines fetched successfully')
        );
})

const getMedicineByDiseaseICDcode = asyncHandler(async (req, res) => {
    const { ICDcode } = req.body;
    if (!ICDcode) {
        throw new ApiError(400, 'Please provide an ICD code');
    }

    const disease = await Disease.findOne({ ICDcode });
    if (!disease) {
        throw new ApiError(404, 'Disease with the given ICD code does not exist');
    }

    const medicine = await Medicine.find({ DiseaseICDcode: ICDcode }).populate('DiseaseId', 'Name');

    return res
        .status(200)
        .json(
            new ApiResponse(200, medicine, 'Medicine fetched successfully')
        );
 })

const getMedicineByDrugName = asyncHandler(async (req, res) => {
    const { DrugName } = req.body;
    if (!DrugName) {
        throw new ApiError(400, 'Please provide a drug name');
    }

    const medicine = await Medicine.find({ DrugName });

    return res
        .status(200)
        .json(
            new ApiResponse(200, medicine, 'Medicine fetched successfully')
        );
})

const getMedicineByFDAApprovalStatus = asyncHandler(async (req, res) => {
    const { FDAApprovalStatus } = req.body;
    if (!FDAApprovalStatus) {
        throw new ApiError(400, 'Please provide an FDA approval status');
    }

    const medicine = await Medicine.find({ FDAApprovalStatus });

    return res
        .status(200)
        .json(
            new ApiResponse(200, medicine, 'Medicine fetched successfully')
        );
})

const getMedicineByName = asyncHandler(async (req, res) => {
    const { Name } = req.body;
    if (!Name) {
        throw new ApiError(400, 'Please provide a disease name');
    }


    const disease = await Disease .findOne({ Name });
    if (!disease) {
        throw new ApiError(404, 'Disease with the given name does not exist');
    }

    const medicine = await Medicine.find({ DiseaseId: disease._id });

    return res
        .status(200)
        .json(
            new ApiResponse(200, medicine, 'Medicine fetched successfully')
        );
});

 



export {
    registerMedicine,
    getAllRegisteredMedicines,
    getMedicineByDiseaseICDcode,
    getMedicineByDrugName,
    getMedicineByFDAApprovalStatus,
    getMedicineByName
};
