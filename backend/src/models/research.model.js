import mongoose,{Schema} from "mongoose";

const researchSchema = new mongoose.Schema({
    DiseaseId:{
        type: Schema.Types.ObjectId,
        ref: 'Disease',
    },
    DiseaseICDcode:{
        type: String,
        required: true
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
    ResearcherInstitutionInfo:[],
    LinkToPapers:{
        type: String,
    }
},
    {timestamps:true});

export const Research = mongoose.model('Research',researchSchema);