import mongoose,{Schema} from "mongoose";

const geoDistributionSchema = new mongoose.Schema({
    DiseaseID:{
        type: Schema.Types.ObjectId,
        ref: 'Disease',
    },
    DiseaseICD:{
        type: String,
        required: true
    },
    CountryName:{
        type: String,
        required: true
    },
    RegionName:{
        type: String,
        required: true
    },
    IncidenceRate:{
        type: Number,
        required: true
    }

}, 
    {timestamps: true});

export const GeoDistribution = mongoose.model('GeoDistribution', geoDistributionSchema);