import mongoose,{Schema} from "mongoose";

const researchSchema = new mongoose.Schema({
    ResearchId:{
        type: String,
        required: true,
        unique: true
    },
    DiseaseId:{
        type: Schema.Types.ObjectId,
        ref: 'Disease',
    },
    TitleOfStudy:{
        type: String,
        required: true
    },
    StudyType:{
        type: String,
        required: true
    },
    Methodology:{
        type: String,
        required: true
    },
    Outcomes:{
        type: String,
        required: true
    },
    Researcher_InstitutionInfo:{
        type: String,
        required: true
    },
},
    {timestamps:true});

export const Research = mongoose.model('Research',researchSchema);