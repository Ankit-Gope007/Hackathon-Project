import asyncHandler from '../utils/asyncHandler.js';
import ApiError from '../utils/ApiError.js';
import ApiResponse from '../utils/ApiResponse.js';
import mongoose from 'mongoose';
import {Research} from '../models/research.model.js';
import {Disease} from '../models/disease.model.js';

const registerResearch = asyncHandler(async (req,res) => {
    const {DiseaseICDcode, TitleOfStudy, StudyType, Methodology, Outcomes, ResearcherInstitutionInfo, LinkToPapers} = req.body;
    if (!DiseaseICDcode || !TitleOfStudy || !StudyType || !Methodology || !Outcomes || !ResearcherInstitutionInfo) {
        throw new ApiError(400, 'Please fill all fields');
    }

    const existingDisease = await Disease.findOne({ICDcode: DiseaseICDcode});
    if (!existingDisease) {
        throw new ApiError(400, 'Disease with the given ICD code does not exist');
    }
    else{
        const research = await Research.create({
            DiseaseId: existingDisease._id,
            DiseaseICDcode,
            TitleOfStudy,
            StudyType,
            Methodology,
            Outcomes,
            ResearcherInstitutionInfo,
            LinkToPapers
        });
        return res
        .status(201)
        .json(
            new ApiResponse(200,'Research registered successfully',research)
        );

    }
});

const getAllResearch = asyncHandler(async (req,res) => {
    const research = await Research.find({});
    return res
    .status(200)
    .json(
        new ApiResponse(200,'All researches fetched successfully',research)
    );
});

const getResearchByTitle = asyncHandler(async (req,res) => {
    const {title} = req.body;
    if (!title) {
        throw new ApiError(400, 'Please provide a title');
    }
    const research = await Research.find({TitleOfStudy: title});
    if (!research) {
        throw new ApiError(404, 'Research with the given title does not exist');
    }
    return res
    .status(200)
    .json(
        new ApiResponse(200,'Research fetched successfully',research)
    );
});

const getResearchByICDcode = asyncHandler(async (req,res) => {
    const {ICDcode} = req.body;
    if (!ICDcode) {
        throw new ApiError(400, 'Please provide an ICD code');
    }
    const research = await Research.find({DiseaseICDcode: ICDcode});
    if (!research) {
        throw new ApiError(404, 'Research with the given ICD code does not exist');
    }
    return res
    .status(200)
    .json(
        new ApiResponse(200,'Research fetched successfully',research)
    );
});

const getResearchByInstitution = asyncHandler(async (req,res) => {
    const {institution} = req.body;
    if (!institution) {
        throw new ApiError(400, 'Please provide an institution');
    }
    const research = await Research.find({
        ResearcherInstitutionInfo: {
            $in: institution
        }
    }).select('-__v -createdAt -updatedAt');    if (!research) {
        throw new ApiError(404, 'Research with the given institution does not exist');
    }
    return res
    .status(200)
    .json(
        new ApiResponse(200,'Research fetched successfully',research)
    );
});

const getResearchByName = asyncHandler(async (req,res) => {
    const {Name} = req.body;

    const disease = await Disease.findOne({ Name: Name });
    if (!disease) {
        throw new ApiError(404, 'Disease with the given name does not exist');
    }

    const research = await Research.find({ DiseaseId: disease._id });
    return res
    .status(200)
    .json(
        new ApiResponse(200, research, 'Research fetched successfully')
    );
});


export {
    registerResearch,
    getAllResearch,
    getResearchByTitle,
    getResearchByICDcode,
    getResearchByInstitution,
    getResearchByName
};
