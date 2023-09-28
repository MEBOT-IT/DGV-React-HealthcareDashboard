


import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Image from "../Image";

function DoctorsPage() {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchedDoctorName = searchParams.get("name");

  const [doctor, setDoctor] = useState(Image);
  const [selectedspecial, setSelectedspecial] = useState('All');

  const specials = [...new Set(doctor.map((doctors) => doctors.special))];

  const handleBranchClick = (special) => {
    setSelectedspecial(special);
  };

  const filteredDoctorsByName =
    searchedDoctorName
      ? doctor.filter((doctor) =>
          doctor.name.toLowerCase().includes(searchedDoctorName.toLowerCase())
        )
      : doctor;

  const filteredDoctorsBySpecialty =
    selectedspecial === 'All'
      ? filteredDoctorsByName
      : filteredDoctorsByName.filter((doctors) => doctors.special === selectedspecial);

  useEffect(() => {
    
  }, []);

  return (
    <div className="App-1">
      <div>
        <div className="special-selector">
          {specials.map((special, index) => (
            <button key={index} onClick={() => handleBranchClick(special)}>
              {special}
            </button>
          ))}
          <button onClick={() => handleBranchClick("All")}>All</button>
        </div>
        <div className="doctor-list">
          {filteredDoctorsBySpecialty.map((cur, index) => (
            <div key={index} className="doctor-container">
              <img src={cur.img} alt={`Dr. ${cur.name}`} className="doctor-image" />
              <h2 className="doctor-name">{cur.name}</h2>
              <p className="doctor-specialization">{cur.special}</p>
              <p className="doctor-branch">Branch: {cur.Branch}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DoctorsPage;

            