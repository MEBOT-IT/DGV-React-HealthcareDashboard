import React from "react";
import PatientTable from "./PatientTable";

const patientsData = [
  {
    id: 1,
    name: "John Doe",
    disease: "Flu",
    treatmentStatus: "In Progress",
    roomAllotted: "101",
  },
  {
    id: 2,
    name: "Jane Smith",
    disease: "Broken Arm",
    treatmentStatus: "Completed",
    roomAllotted: "102",
  },
  {
    id: 3,
    name: "Lolita",
    disease: "Heart Attack",
    treatmentStatus: "In progress ",
    roomAllotted: "111",
  },
  {
    id: 4,
    name: "Jane Smith",
    disease: "Broken Arm",
    treatmentStatus: "Completed",
    roomAllotted: "102",
  },
  {
    id: 5,
    name: "Jane Smith",
    disease: "Broken Arm",
    treatmentStatus: "Completed",
    roomAllotted: "102",
  },
  {
    id: 6,
    name: "Jane Smith",
    disease: "Broken Arm",
    treatmentStatus: "Completed",
    roomAllotted: "102",
  },
  {
    id: 7,
    name: "Jane Smith",
    disease: "Broken Arm",
    treatmentStatus: "Completed",
    roomAllotted: "102",
  },
  {
    id: 8,
    name: "Alice Johnson",
    disease: "Migraine",
    treatmentStatus: "In Progress",
    roomAllotted: "103",
  },
  {
    id: 9,
    name: "Bob Williams",
    disease: "Appendicitis",
    treatmentStatus: "Pending",
    roomAllotted: "104",
  },
  {
    id: 10,
    name: "Eva Davis",
    disease: "Fractured Leg",
    treatmentStatus: "Completed",
    roomAllotted: "105",
  },
  {
    id: 11,
    name: "Michael Brown",
    disease: "Pneumonia",
    treatmentStatus: "In Progress",
    roomAllotted: "106",
  },
  {
    id: 12,
    name: "John david",
    disease: "Flu",
    treatmentStatus: "In Progress",
    roomAllotted: "101",
  },
  {
    id: 13,
    name: "Jane Smith",
    disease: "Broken Arm",
    treatmentStatus: "Completed",
    roomAllotted: "102",
  },
  {
    id: 14,
    name: "Alice Johnson",
    disease: "Migraine",
    treatmentStatus: "In Progress",
    roomAllotted: "103",
  },
  {
    id: 15,
    name: "Bob Williams",
    disease: "Appendicitis",
    treatmentStatus: "Pending",
    roomAllotted: "104",
  },
  {
    id: 16,
    name: "Eva Davis",
    disease: "Fractured Leg",
    treatmentStatus: "Completed",
    roomAllotted: "105",
  },
  {
    id: 17,
    name: "Michael Brown",
    disease: "Pneumonia",
    treatmentStatus: "In Progress",
    roomAllotted: "106",
  },
  {
    id: 18,
    name: "Alice Johnson",
    disease: "Migraine",
    treatmentStatus: "In Progress",
    roomAllotted: "103",
  },
  {
    id: 19,
    name: "Bob Williams",
    disease: "Appendicitis",
    treatmentStatus: "Pending",
    roomAllotted: "104",
  },
  {
    id: 20,
    name: "Eva Davis",
    disease: "Fractured Leg",
    treatmentStatus: "Completed",
    roomAllotted: "105",
  },
  {
    id: 21,
    name: "Michael Brown",
    disease: "Pneumonia",
    treatmentStatus: "In Progress",
    roomAllotted: "106",
  },
  {
    id: 22,
    name: "Sarah Wilson",
    disease: "Hypertension",
    treatmentStatus: "In Progress",
    roomAllotted: "107",
  },
  {
    id: 23,
    name: "David Lee",
    disease: "Diabetes",
    treatmentStatus: "Completed",
    roomAllotted: "108",
  },
  {
    id: 24,
    name: "Olivia Taylor",
    disease: "Allergies",
    treatmentStatus: "Pending",
    roomAllotted: "109",
  },
  {
    id: 25,
    name: "James White",
    disease: "Bronchitis",
    treatmentStatus: "In Progress",
    roomAllotted: "110",
  }
  
];

function App() {
  return (
    <div className="info">
      <h1> <center>Patient Information</center></h1>
      <PatientTable patients={patientsData} />
    </div>
  );
}

export default App;