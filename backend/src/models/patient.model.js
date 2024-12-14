import mongoose,{ Schema } from "mongoose";

const patientSchema = new mongoose.Schema({
    PatientId:{
        type: String,
        required: true,
        unique: true
    },
    DiseaseId:{
        type: Schema.Types.ObjectId,
        ref: 'Disease', 
    },
    Name:{
        type: String,
        required: true
    },
    Age:{
        type: Number,
        required: true ,
    },
    Gender: {
        enum:["Male","Female","Other"],
        type: String,
        required: true
    },
    TreatmentHistory:{
        type: String,
        required: true
    },
    ResponseToTreatment:{
        type: String,
        required: true
    },
    GeneticData:{
        type: String,
        required: true
    },
    Outcome:{
        type: String,
        required: true
    },
    DateOfDiagnosis:{
        type: Date,
        required: true
    },

},
    {timestamps: true});

export const Patient = mongoose.model('Patient', patientSchema);