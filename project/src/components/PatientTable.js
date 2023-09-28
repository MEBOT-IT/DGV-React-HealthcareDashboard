

import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Radio from "@mui/material/Radio";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";


const createData = (name, gender, diseases, date, status, id) => {
  return { name, gender, diseases, date, status, id };
};

const initialFormData = {
  name: "",
  gender: "male",
  diseases: "",
  date: "",
  status: "",
};

export default function PatientTable() {
  const [formData, setFormData] = useState(initialFormData);
  const [rows, setRows] = useState([
    createData("John Doe", "male", "Fever", "2022-01-15", "Active", 1),
    createData("Jane Smith", "female", "Headache", "2022-02-20", "Inactive", 2),
    createData("Michael Johnson", "male", "Cough", "2022-03-10", "Active", 3),
    createData("Sarah Williams", "female", "Back pain", "2022-04-05", "Active", 4),
    createData("David Davis", "male", "Fatigue", "2022-05-12", "Inactive", 5),
  ]);

  const [errors, setErrors] = useState({});

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateDate = (date) => {
    const dateRegex = /^\d{4}-\d{2}-\d{2}$/;
    return dateRegex.test(date);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};
    if (!formData.name) {
      newErrors.name = "Name is required.";
    }
    if (!formData.diseases) {
      newErrors.diseases = "Diseases is required.";
    }
    if (!formData.date) {
      newErrors.date = "Date is required.";
    } else if (!validateDate(formData.date)) {
      newErrors.date = "Date must be in the format YYYY-MM-DD.";
    }
    if (!formData.status) {
      newErrors.status = "Status is required.";
    }

    if (Object.keys(newErrors).length === 0) {
      const newPatient = createData(
        formData.name,
        formData.gender,
        formData.diseases,
        formData.date,
        formData.status,
        Date.now()
      );
      setRows([...rows, newPatient]);
      setFormData(initialFormData);
      setErrors({});
    } else {
      setErrors(newErrors);
    }
  };

  const handleDelete = (id) => {
    const updatedRows = rows.filter((row) => row.id !== id);
    setRows(updatedRows);
  };
 

  return (
    <div className="Table">
      <h3>Recent patients</h3>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group">
          <input
            type="text"
            placeholder="Patient Name"
            name="name"
            value={formData.name}
            onChange={handleFormChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>
        <div className="form-group">
          Gender:
          <FormControlLabel
            value="male"
            control={<Radio />}
            label="Male"
            checked={formData.gender === "male"}
            onChange={handleFormChange}
            name="gender"
          />
          <FormControlLabel
            value="female"
            control={<Radio />}
            label="Female"
            checked={formData.gender === "female"}
            onChange={handleFormChange}
            name="gender"
          />
          {errors.gender && <span className="error">{errors.gender}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Diseases"
            name="diseases"
            value={formData.diseases}
            onChange={handleFormChange}
          />
          {errors.diseases && <span className="error">{errors.diseases}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Date (YYYY-MM-DD)"
            name="date"
            value={formData.date}
            onChange={handleFormChange}
          />
          {errors.date && <span className="error">{errors.date}</span>}
        </div>
        <div className="form-group">
          <input
            type="text"
            placeholder="Status"
            name="status"
            value={formData.status}
            onChange={handleFormChange}
          />
          {errors.status && <span className="error">{errors.status}</span>}
        </div>
        <button className="add-patient"type="submit">Add Patient</button>
      </form>

      <TableContainer component={Paper} style={{ boxShadow: "0px 13px 20px 0px #80808029", padding:"20px"}}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Gender</TableCell>
              <TableCell>Diseases</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody style={{ color: "white" }}>
            {rows.map((row) => (
              <TableRow key={row.id} sx={{ "&:last-child td, &:last-child th": { border: 0 } }}>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.gender}</TableCell>
                <TableCell>{row.diseases}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.status}</TableCell>
                <TableCell>
                  <Button variant="outlined" color="secondary" onClick={() => handleDelete(row.id)}>
                    Delete
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}