import React,{useState,useEffect} from 'react'
import { IoIosSearch } from "react-icons/io";
import { ApiRoutes,
    getAllRegisteredDiseasesRoute,
    getDiseaseByNameOrICDcodeRoute,
    getAllInfoRoute

 } from '../apiRoutes';
import axios from 'axios';

const HomePage = () => {
    const [Name, setName] = useState("")
    

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = async() => {
        const response = await axios.post(getDiseaseByNameOrICDcodeRoute,{Name:Name})
        console.log(response.data.data)

    }



    return (
        <>
            <div className='bg-blue-600 w-full h-[70px] flex justify-center items-center'>
                <div className='w-[50%]'>
                    <input
                        onChange={handleChange}
                        type="text"
                        className=' border-none w-full h-9 text-xl shadow-lg outline-none '
                    /></div>
                <div 
                onClick={handleSubmit}
                className='h-9 text-xl shadow-lg bg-blue-800 text-white w-[40px] flex justify-center items-center hover:bg-blue-900 active:bg-blue-900'><IoIosSearch /></div>
                <div></div>
            </div>
            <div>HomePage</div>
        </>
    )
}

export default HomePage