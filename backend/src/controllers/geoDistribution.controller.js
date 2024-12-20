import { GeoDistribution } from "../models/geoDistribution.model.js";
import ApiError from "../utils/ApiError.js";
import ApiResponse from "../utils/ApiResponse.js";
import asyncHandler from "../utils/asyncHandler.js";
import { Disease } from "../models/disease.model.js";
import mongoose from "mongoose";

const registerGeoDistribution = asyncHandler(async (req, res, next) => {
    const { DiseaseICD, CountryName, RegionName, IncidenceRate } = req.body;
    const disease = await Disease.findOne({ICDcode:DiseaseICD});
    if (!disease) {
        return next(new ApiError(404, `Disease with ICD ${DiseaseICD} not found`));
    }
    const geoDistributionExists = await GeoDistribution.findOne({
        DiseaseID: disease._id,
        CountryName,
        RegionName
    });

    if (geoDistributionExists) {
        return next(
            new ApiError(
                400,
                `Geo distribution for disease with ICD ${DiseaseICD} in ${CountryName} - ${RegionName} already exists`
            )
        );
    }
    const geoDistribution = await GeoDistribution.create({
        DiseaseID: disease._id,
        DiseaseICD,
        CountryName,
        RegionName,
        IncidenceRate
    });
    return res
    .status(201)
    .json(
        new ApiResponse(201, "Geo distribution registered", geoDistribution));
});

const getAllGeoDistributions = asyncHandler(async (req, res, next) => {
    const geoDistributions = await GeoDistribution.find().populate("DiseaseID", "Name");
    return res
    .status(200)
    .json(
        new ApiResponse(200, "All geo distributions", geoDistributions));
});

const getGeoDistributionByCountry = asyncHandler(async (req, res, next) => {
    const { CountryName } = req.body;
    const geoDistributions = await GeoDistribution.find({ CountryName }).populate("DiseaseID", "Name");
    const totalCountry = geoDistributions.length
    return res
    .status(200)
    .json(
        new ApiResponse(200, `There are ${totalCountry} Data of Geo distributions in ${CountryName}`, geoDistributions));
});

const getGeoDistributionByRegion = asyncHandler(async (req, res, next) => {
    const { RegionName } = req.body;
    const geoDistributions = await GeoDistribution.find({ RegionName }).populate("DiseaseID", "Name");
    const totalRegion = geoDistributions.length
    return res
    .status(200)
    .json(
        new ApiResponse(200, `There are ${totalRegion} Data of Geo distributions in ${RegionName}`, geoDistributions));
});

const getGeoDistributionByDisease = asyncHandler(async (req, res, next) => {
    const { DiseaseICD } = req.body;
    const disease = await Disease.findOne({ICDcode:DiseaseICD});
    if (!disease) {
        return next(new ApiError(404, `Disease with ICD ${DiseaseICD} not found`));
    }
    const geoDistributions = await GeoDistribution.find({ DiseaseID: disease._id }).populate("DiseaseID", "Name");
    const totalDisease = geoDistributions.length
    return res
    .status(200)
    .json(
        new ApiResponse(200, `There are ${totalDisease} Data of Geo distributions in Disease with ICD ${DiseaseICD}`, geoDistributions));
});



export {
    registerGeoDistribution,
    getAllGeoDistributions,
    getGeoDistributionByCountry,
    getGeoDistributionByRegion,
    getGeoDistributionByDisease
};