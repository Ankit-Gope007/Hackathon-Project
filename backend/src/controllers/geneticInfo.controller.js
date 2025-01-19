import { GeneticInfo } from "../models/geneticInfo.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { Disease } from "../models/disease.model.js";
import mongoose from "mongoose";


const registerGeneticInfo = asyncHandler(async (req, res, next) => {
    const { DiseaseICD, GeneInvolved, MutationType, DiagnosticMethods } = req.body;
    const disease = await Disease.findOne({ICDcode:DiseaseICD});
    console.log(disease);
    if (!disease) {
        throw new ApiError(404, "Disease not found");
    }
    const geneticInfoExist = await GeneticInfo.findOne({DiseaseID:disease._id});
    if (geneticInfoExist) {
        throw new ApiError(400, "Genetic info already exists");
    }
    const geneticInfo = await GeneticInfo.create({
        DiseaseId: disease._id,
        DiseaseICD,
        GeneInvolved,
        MutationType,
        DiagnosticMethods
    });
    console.log(geneticInfo);
    
    const createdGeneticInfo = await GeneticInfo.findById(geneticInfo._id).populate("DiseaseID", "Name ICDcode");
    return res
    .status(201)
    .json(
        new ApiResponse(200,createdGeneticInfo,"The Genetic info was stored Successfully"));
});

const getAllGeneticInfo = asyncHandler(async (req, res, next) => {
    const geneticInfo = await GeneticInfo.find({}).populate("DiseaseID", "Name");
    return res
    .status(200)
    .json(
        new ApiResponse(200,geneticInfo,"All Genetic info was fetched Successfully"));
});


const getGeneticInfoByDisease = asyncHandler(async (req, res, next) => {
    const { DiseaseICD } = req.body;
    const disease = await Disease.findOne({ICDcode:DiseaseICD});
    if (!disease) {
        throw new ApiError(404, "Disease not found");
    }
    const geneticInfo = await GeneticInfo.findOne({DiseaseID:disease._id}).populate("DiseaseID", "Name ICDcode");
    return res
    .status(200)
    .json(
        new ApiResponse(200,geneticInfo,"Genetic info fetched Successfully"));
});

export {
    registerGeneticInfo,
    getAllGeneticInfo,
    getGeneticInfoByDisease
}; 