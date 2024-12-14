import mongoose,{Schema} from "mongoose";

const geneticInfoSchema = new mongoose.Schema({
    GeneticID:{
        type: String,
        required: true,
        unique: true
    },
    DiseaseID:{
        type: Schema.Types.ObjectId,
        ref: 'Disease',
    },
    GeneInvolved:{
        type: String,
        required: true
    },
    MutationType:{
        type: String,
        required: true
    },
    DiagnosticMethods:{
        type: String,
        required: true
    },
},
     {timestamps: true});

export const GeneticInfo = mongoose.model('GeneticInfo', geneticInfoSchema);