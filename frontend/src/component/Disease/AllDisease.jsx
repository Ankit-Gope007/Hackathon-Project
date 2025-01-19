import React, { useState, useEffect } from 'react'
import axios from 'axios'
import {
  ApiRoutes,
  getAllRegisteredDiseasesRoute,
  getDiseaseByNameOrICDcodeRoute,
  getAllInfoRoute

} from '../../apiRoutes'

const AllDisease = () => {
  const [diseases, setDisease] = useState([])

  useEffect(() => {
    axios.get(getAllRegisteredDiseasesRoute)
      .then((res) => {
        setDisease(res.data.data);
        console.log(res.data.data)
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
        <div key={disease._id} className='border-black rounded-md border-[2px] m-2'>
          <h1 className='text-xl font-bold underline'>Name : {disease.Name}</h1>
          <h3 className='font-bold'>Description </h3><p className='flex'>:{disease.Description}</p>
          <h3 className='font-bold'>ICD code </h3><p className='flex'>:{disease.ICDcode}</p>
          <h3 className='font-bold'>Symptoms </h3><p className='flex'>:{disease.Symptoms.join(', ')}</p>
          <h3 className='font-bold'>Genetic Information </h3><p className='flex'>:{disease.GeneticInformation}</p>
          <h3 className='font-bold'>Mortality Rate </h3><p className='flex'>:{disease.MortalityRate}</p>
          <h3 className='font-bold'>Treatments Available </h3><p className='flex'>:{disease.TreatmentsAvailable}</p>
          <h3 className='font-bold'>Countries First Reported </h3><p className='flex'>:{disease.CountriesFirstReported}</p>

        </div>
      )
    })
  }
    </>)

}


export default AllDisease