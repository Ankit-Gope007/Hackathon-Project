import React, { useState } from "react";
import "./SearchBar.css";
import { ApiRoutes,
  getAllRegisteredDiseasesRoute,
  getDiseaseByNameOrICDcodeRoute,
  getAllInfoRoute

} from '../apiRoutes';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

const SearchBar = () => {

  const [Name, setName] = useState("")
  const navigate = useNavigate();
    

  const handleInputChange = (e) => {
    setName(e.target.value)
  };

  const handleSearch = async() => {
    const response = await axios.post(getDiseaseByNameOrICDcodeRoute,{Name:Name})
      navigate(`/Info/${Name}`)
      window.location.reload();

  };


  return (
    <div className="search-container">
      <input
        type="text"
        onChange={handleInputChange}
        placeholder="Search for diseases"
        className="search-input"
      />
      <button onClick={handleSearch} className="search-button">
        🔍 Search
      </button>
    </div>
  );
};

export default SearchBar;
