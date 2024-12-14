import mongoose,{ Schema } from "mongoose";

const medicineSchema = new mongoose.Schema({
    medicationId:{
        type: String,
        required: true,
        unique: true
    },
    DiseaseId:{
        type: Schema.Types.ObjectId,
        ref: 'Disease',
    },
},
    {timestamps: true});

export const Medicine = mongoose.model('Medicine', medicineSchema);