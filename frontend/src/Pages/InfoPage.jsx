import React,{useState,useEffect} from 'react'
import Alldisease from "../component/Disease/AllDisease"
import Card from '../component/card/card'
import { useNavigate } from 'react-router-dom'
import { ApiRoutes, getDiseaseByNameOrICDcodeRoute } from '../apiRoutes'
import axios from 'axios'
import { IoIosSearch } from 'react-icons/io'
import SearchBar from '../components/SearchBar'


const InfoPage = () => {
  return (
    <>
      <SearchBar />
      <Card />

    </>

  )
}

export default InfoPage