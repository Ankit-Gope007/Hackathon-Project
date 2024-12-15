import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import {Disease} from '../models/disease.model.js';
import mongoose from 'mongoose';

const registerDisease = asyncHandler(async (req,res) => {
    const {Name, ICDcode, Description, Symptoms, GeneticInformation, MortalityRate, TreatmentsAvailable, CountriesFirstReported} = req.body;
    if (!Name || !ICDcode || !Description || !Symptoms || !GeneticInformation || !MortalityRate || !TreatmentsAvailable || !CountriesFirstReported) {
        throw new ApiError(400, 'Please fill all fields');
    }

    const existing = await Disease.find({ICDcode});
    if (existing.length > 0) {
        throw new ApiError(400, 'Disease with the same ICD code already exists');
    }
    else{
        const disease = await Disease.create({
            Name,
            ICDcode,
            Description,
            Symptoms,
            GeneticInformation,
            MortalityRate,
            TreatmentsAvailable,
            CountriesFirstReported
        });
        return res
        .status(201)
        .json(
            new ApiResponse(200,'Disease registered successfully',disease)
        );

    }

});

const getAllRegisteredDiseases = asyncHandler(async (req,res) => {
    const diseases = await Disease.find({});   
    
    return res
    .status(200)
    .json(
        new ApiResponse(200,diseases,'All diseases fetched successfully')
    );
});

const getDiseaseByNameOrICDcode = asyncHandler(async (req,res) => {
    const {Name,ICDcode} = req.body;
    if (!Name && !ICDcode) {
        throw new ApiError(400, 'Please fill all fields');
    }
    const disease = await Disease.findOne({
        $or: [
            {Name},
            {ICDcode}
        ]
    }).select('-__v -createdAt -updatedAt');

    if (!disease){
        throw new ApiError (404,"No disease found with the given name or ICD code");
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200,disease,"Diseases fetched successfully")
    )
});

const removeDisease = asyncHandler(async(req,res) => {
    const {ICDcode,id} = req.body;
    if (!ICDcode && !id) {
        throw new ApiError(400, 'Please fill all fields');
    }
    if (ICDcode) {
        await Disease.findOneAndDelete({ICDcode});
    }
    else {
        await Disease.findByIdAndDelete(id);
    }
    return res
    .status(200)
    .json(
        new ApiResponse(200,'Disease removed successfully')
    );
});



const getDiseaseBySymptoms = asyncHandler(async (req,res) => {
    const {Symptoms} = req.body;
    if (!Symptoms) {
        throw new ApiError(400, 'Please fill all fields');
    }
    const disease = await Disease.find({
        Symptoms: {
            $in: Symptoms
        }
    }).select('-__v -createdAt -updatedAt');

    if (!disease){
        throw new ApiError (404,"No disease found with the given symptoms");
    }

    return res
    .status(200)
    .json(
        new ApiResponse(200,disease,"Diseases fetched successfully")
    )
}); 

// const 




export {
    registerDisease,
    getAllRegisteredDiseases,
    getDiseaseByNameOrICDcode,
    removeDisease,
    getDiseaseBySymptoms,
};