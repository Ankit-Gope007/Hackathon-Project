import React from "react";
import "./Card.css";
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams } from "react-router-dom";
import {
    ApiRoutes,
    getAllRegisteredDiseasesRoute,
    getDiseaseByNameOrICDcodeRoute,
    getAllInfoRoute,
    getMedicineByNameRoute,
    getResearchByDiseaseNameRoute

} from '../../apiRoutes'

const Card = (disease) => {

    const [diseases, setDisease] = useState([])
    const [medicines, setMedicine] = useState([])
    const [researchs, setResearch] = useState([])
    const { Name } = useParams();

    useEffect(() => {
        axios.post(getDiseaseByNameOrICDcodeRoute, { Name: Name })
            .then((res) => {
                setDisease([res.data.data]);

                // console.log("Hemr", res.data.data)
                // console.log(diseases)
            })
            .catch((err) => {
                console.log(err)
            })
        axios.post(getMedicineByNameRoute, { Name: Name })
            .then((res) => {
                setMedicine([res.data.data[0]]);
                // console.log(res.data.data[0])
                // console.log(medicines)
            })
            .catch((err) => {
                console.log(err)
            })

        axios.post(getResearchByDiseaseNameRoute, { Name: Name })
            .then((res) => {
                setResearch([res.data.data[0]]);
                console.log(res.data)
                console.log(researchs)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])
    return (
        <>
            {
                diseases.map((disease, index) => {
                    return (
                        <div key={disease._id} className='border-black rounded-md border-none shadow-xl m-10 text-lg font-sans'>
                            <div className="bg-blue-600 rounded-t-md h-[50px] flex items-center pt-4 pl-4 text-white  ">
                                <h2 className="card-title">Disease Information</h2>
                            </div>
                            <div key={disease._id} className="card">
                                <div className="card-content">
                                    <p className=" ">
                                        <span className="label">Disease Name:</span> <br /> <p>{disease.Name}</p>
                                    </p>
                                    <p className=" ">
                                        <span className="label">ICD Code:</span><br /> <p>{disease.ICDcode}</p>
                                    </p>
                                    <p className=" ">
                                        <span className="label">Description:</span> <br /> <p>{disease.Description}</p>
                                    </p>
                                    {/* <p>
                                        <span className="label">Medicine:</span> CITRIZINE
                                    </p> */}
                                    <p className=" ">
                                        <span className="label">Symptoms:</span><br /> <p> {disease.Symptoms.join(', ')}</p>
                                    </p>
                                    <p className=" ">
                                        <span className="label">Genetic Information:</span> <br /> <p>{disease.GeneticInformation}</p>
                                    </p>
                                    <p className=" ">
                                        <span className="label">Mortality Rate:</span> <br /> <p>{disease.MortalityRate}</p>
                                    </p>
                                    <p className=" ">
                                        <span className="label">Treatments Available:</span><br /> <p>{disease.TreatmentsAvailable}</p>
                                    </p>
                                    <p className=" ">
                                        <span className="label">Countries First Reported:</span> <br /> <p>{disease.CountriesFirstReported}</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                researchs.map((research, index) => {
                    return (
                        <div key={research._id} className='border-black rounded-md border-none shadow-xl m-10 text-lg font-sans'>
                            <div className="bg-blue-600 rounded-t-md h-[50px] flex items-center pt-4 pl-4 text-white  ">
                                <h2 className="card-title">Research Information</h2>
                            </div>
                            <div key={research._id} className="card">
                                <div className="card-content">
                                    <p className=" ">
                                        <span className="label">TitleOfStudy:</span> <br /> <p>{research.TitleOfStudy}</p>
                                    </p>
                                    <p className=" ">
                                        <span className="label">
                                            StudyType:</span><br /> <p>{research.
                                                StudyType
                                            }</p>
                                    </p>
                                    <p className=" ">
                                        <span className="label">
                                            Methodology:</span> <br /> <p>{research.
                                                Methodology
                                            }</p>
                                    </p>
                                    <p className=" ">
                                        <span className="label">
                                            Outcomes:</span> <br /> <p>{research.
                                                Outcomes}</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
            {
                medicines.map((medicine, index) => {
                    return (
                        <div key={medicine._id} className='border-black rounded-md border-none shadow-xl m-10 text-lg font-sans'>
                            <div className="bg-blue-600 rounded-t-md h-[50px] flex items-center pt-4 pl-4 text-white  ">
                                <h2 className="card-title">Medicine Information</h2>
                            </div>
                            <div key={medicine._id} className="card">
                                <div className="card-content">
                                    <p className=" ">
                                        <span className="label">DrugName:</span> <br /> <p>{medicine.DrugName}</p>
                                    </p>
                                    <p className=" ">
                                        <span className="label">FDAApprovalStatus:</span><br /> <p>{medicine.FDAApprovalStatus
                                        }</p>
                                    </p>
                                    <p className=" ">
                                        <span className="label">MechanismOfAction:</span> <br /> <p>{medicine.MechanismOfAction
                                        }</p>
                                    </p>
                                    <p className=" ">
                                        <span className="label">ResearchResults:</span> <br /> <p>{medicine.ResearchResults}</p>
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }


        </>
    );
};

export default Card;