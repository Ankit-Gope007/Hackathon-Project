import { useState,useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import axios from 'axios'
import { ApiRoutes,
  getAllRegisteredDiseasesRoute,
  getDiseaseByNameOrICDcodeRoute

 } from './apiRoutes.js'

function App() {
  const [diseases, setDisease] = useState([])

  useEffect(() => {
    axios.get(getAllRegisteredDiseasesRoute)
    .then((res) => {
      setDisease(res.data.data)
    })
    .catch((err) => {
      console.log(err)
    })
  }, [])

  return (
    <>
    <AllDisease  />
    {/* {
      diseases.map((disease,index) => {
        return (
          <div key={disease._id} className='border-black rounded-md border-[2px] m-2'>
            <h1 className='text-xl font-bold underline'>Name : {disease.Name}</h1>
            <p className='flex'><h3 className='font-bold'>ICD code </h3>:{disease.ICDcode}</p>
            <p className='flex'><h3 className='font-bold'>Description </h3>:{disease.Description}</p>
            <p className='flex'><h3 className='font-bold'>Symptoms </h3>:{disease.Symptoms.join(', ')}</p>
            <p className='flex'><h3 className='font-bold'>Genetic Information </h3>:{disease.GeneticInformation}</p>
            <p className='flex'><h3 className='font-bold'>Mortality Rate </h3>:{disease.MortalityRate}</p>
            <p className='flex'><h3 className='font-bold'>Treatments Available </h3>:{disease.TreatmentsAvailable}</p>
            <p className='flex'><h3 className='font-bold'>Countries First Reported </h3>:{disease.CountriesFirstReported}</p>

          </div>
        )})
    } */}
    </>
  )
}

export default App
