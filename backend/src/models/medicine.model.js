import mongoose,{ Schema } from "mongoose";

const medicineSchema = new mongoose.Schema({
    DiseaseId:{
        type: Schema.Types.ObjectId,
        ref: 'Disease',
    },
    DrugName:{
        type: String,
        required: true
    },
    FDAApprovalStatus:{
        enum: ['Approved', 'Not Approved'],
        type: String,
        required: true,
    },
    MechanismOfAction :{
        type: String,
        required: true,
    },
    ResearchResults:{
        type: String,
        required: true,
    }
},
    {timestamps: true});

export const Medicine = mongoose.model('Medicine', medicineSchema);