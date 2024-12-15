import mongoose,{ Schema } from "mongoose";

const diseaseSchema = new mongoose.Schema({
    Name:{
        type: String,
        unique: true
    },
    ICDcode:{
        type: String,
        required: true,
    },
    Description: {
        type: String,
        required: true

    },
    Symptoms: [],
    GeneticInformation : {
        type: String,
        required: true,
    },
    MortalityRate : {
        type: String,
        required: true
    },
    TreatmentsAvailable  : {
        type: String,
        required: true
    },
    CountriesFirstReported : {
        type: String,
        required: true
    },

},
    {timestamps: true});

export const Disease = mongoose.model('Disease', diseaseSchema);