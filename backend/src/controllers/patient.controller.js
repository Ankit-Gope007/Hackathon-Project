import mongoose from "mongoose";
import { Patient } from "../models/patient.model.js";
import { Disease } from "../models/disease.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";

const registerPatient = asyncHandler(async (req, res) => {
    const { DiseaseICDcode, Name, Age, Gender, TreatmentHistory, ResponseToTreatment, GeneticData, Outcome, DateOfDiagnosis } = req.body;
    const disease = await Disease.findOne({ ICDcode: DiseaseICDcode });
    if (!disease) {
        throw new ApiError(404, "Disease not found");
    }
    if (!Name || !Age || !Gender || !TreatmentHistory || !ResponseToTreatment || !GeneticData || !Outcome || !DateOfDiagnosis) {
        throw new ApiError(400, "All fields are required");
    }
    const patient = await Patient.create({
        DiseaseId: disease._id,
        DiseaseICDcode,
        Name,
        Age,
        Gender,
        TreatmentHistory,
        ResponseToTreatment,
        GeneticData,
        Outcome,
        DateOfDiagnosis

    });
    res
    .status(201)
    .json(
        new ApiResponse(201, patient,"Patient registered successfully"));


    });


const getAllPatients = asyncHandler(async (req, res) => {
    const patients = await Patient.find({}).populate("DiseaseId", "Name");
    const TotalPatient = patients.length;
    res
    .status(200)
    .json(
        new ApiResponse(200,`Total number of Patients : ${TotalPatient}`, patients,"Patients fetched successfully"));
    
});

const getPatientByNameOrICDcode = asyncHandler(async (req, res) => {
    const { search } = req.body;
    const patients = await Patient.find({
        $or:[
            {Name: search},
            {DiseaseICDcode: search}
        ]
    }).populate("DiseaseId", "Name");
        
    const TotalPatient = patients.length;
    res
    .status(200)
    .json(
        new ApiResponse(200,`Total number of Patients : ${TotalPatient}`, patients,"Patients fetched successfully"));
});

const getPatientByGender = asyncHandler(async (req, res) => {
    const {Gender} = req.body;
    const patients = await Patient.find({Gender}).populate("DiseaseId", "Name");
    const TotalPatient = patients.length;
    res
    .status(200)
    .json(
        new ApiResponse(200,`Total number of Patients : ${TotalPatient}`, patients,"Patients fetched successfully"));
});

const getPatientByAgeRange = asyncHandler(async (req, res) => {
    const {MinAge, MaxAge} = req.body;
    const patients = await Patient.find({Age:{$gte:MinAge, $lte:MaxAge}}).populate("DiseaseId", "Name");
    const TotalPatient = patients.length;
    res
    .status(200)
    .json(
        new ApiResponse(200,`Total number of Patients : ${TotalPatient}`, patients,"Patients fetched successfully"));
});


export {
        registerPatient,
        getAllPatients,
        getPatientByNameOrICDcode,
        getPatientByGender,
        getPatientByAgeRange
    };