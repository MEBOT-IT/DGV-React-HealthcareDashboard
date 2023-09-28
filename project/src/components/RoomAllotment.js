import React, { useState } from 'react';
import video from '../Data/nivin1.mp4'
const RoomAllotment = () => {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      bedNumber: '101',
      roomType: 'Single',
      patientName: 'Kaushik',
      diagnosis: 'Fever',
      doctorAssigned: 'Dr. Smith',
      admissionProcedures: 'Admitted for treatment.',
      admissionDate: '2023-09-10',
      dischargeDate: '2023-09-15',
      status: 'Occupied',
    },
    {
      id: 2,
      bedNumber: '102',
      roomType: 'Double',
      patientName: ' Malini sree',
      diagnosis: 'COVID-19',
      doctorAssigned: 'Dr. Christopher Taylor',
      admissionProcedures: 'Admitted for treatment.',
      admissionDate: '2023-09-15',
      dischargeDate: '2023-09-20',
      status: 'Occupied',
    },
    {
      id: 3,
      bedNumber: '103',
      roomType: 'Single',
      patientName: 'Manisha',
      diagnosis: 'Diabetes',
      doctorAssigned: 'Dr. Matthew',
      admissionProcedures: 'Admitted for treatment.',
      admissionDate: '2023-09-12',
      dischargeDate: '2023-09-14',
      status: 'Occupied',
    },
    {
      id: 4,
      bedNumber: '104',
      roomType: 'Single',
      patientName: 'Jaya Murgan',
      diagnosis: 'HIV',
      doctorAssigned: 'Dr. Anderson',
      admissionProcedures: 'Admitted for treatment.',
      admissionDate: '2023-09-10',
      dischargeDate: '2023-09-15',
      status: 'Occupied',
    },
    {
      id: 5,
      bedNumber: '105',
      roomType: 'Single',
      patientName: 'Dhayal',
      diagnosis: 'Stomach pain',
      doctorAssigned: 'Dr. James',
      admissionProcedures: 'Admitted for treatment.',
      admissionDate: '2023-09-11',
      dischargeDate: '2023-09-14',
      status: 'Occupied',
    },
    {
      id: 6,
      bedNumber: '106',
      roomType: 'Single',
      patientName: 'Riya sen',
      diagnosis: 'Fever',
      doctorAssigned: 'Dr. Olivia Harris',
      admissionProcedures: 'Admitted for treatment.',
      admissionDate: '2023-09-09',
      dischargeDate: '2023-09-10',
      status: 'Occupied',
    },
    {
      id: 7,
      bedNumber: '107',
      roomType: 'Single',
      patientName: 'Yuvasree',
      diagnosis: 'Malaria',
      doctorAssigned: 'Dr. Emily Patel',
      admissionProcedures: 'Admitted for treatment.',
      admissionDate: '2023-09-15',
      dischargeDate: '2023-09-17',
      status: 'Occupied',
    },
    {
      id: 8,
      bedNumber: '108',
      roomType: 'Single',
      patientName: 'Princy',
      diagnosis: 'Fever',
      doctorAssigned: 'Dr. Smith',
      admissionProcedures: 'Admitted for treatment.',
      admissionDate: '2023-09-10',
      dischargeDate: '2023-09-15',
      status: 'Occupied',
    },
    {
      id: 9,
      bedNumber: '109',
      roomType: 'Single',
      patientName: 'Priya',
      diagnosis: 'Fever',
      doctorAssigned: 'Dr. Trisha',
      admissionProcedures: 'Admitted for treatment.',
      admissionDate: '2023-09-10',
      dischargeDate: '2023-09-15',
      status: 'Occupied',
    },
    {
      id: 10,
      bedNumber: '110',
      roomType: 'Single',
      patientName: 'Meenakshi',
      diagnosis: 'Fever',
      doctorAssigned: 'Dr.kavya',
      admissionProcedures: 'Admitted for treatment.',
      admissionDate: '2023-09-12',
      dischargeDate: '2023-09-15',
      status: 'Occupied',
    },
    {
      id: 11,
      bedNumber: '111',
      roomType: 'Single',
      patientName: 'Mahesh',
      diagnosis: 'Fever',
      doctorAssigned: 'Dr.kavya',
      admissionProcedures: 'Admitted for treatment.',
      admissionDate: '2023-09-12',
      dischargeDate: '2023-09-15',
      status: 'Occupied',
    },
    {
      id: 12,
      bedNumber: '112',
      roomType: 'Single',
      patientName: 'Kumar',
      diagnosis: 'Epilepsy',
      doctorAssigned: 'Dr. Laura Anderson',
      admissionProcedures: 'Admitted for treatment.',
      admissionDate: '2023-09-13',
      dischargeDate: '2023-09-15',
      status: 'Occupied',
    },
    {
      id: 13,
      bedNumber: '113',
      roomType: 'Single',
      patientName: 'Manikandan',
      diagnosis: 'Epilepsy',
      doctorAssigned: 'Dr. Elizabeth',
      admissionProcedures: 'Admitted for treatment.',
      admissionDate: '2023-09-14',
      dischargeDate: '2023-09-15',
      status: 'Occupied',
    },
    {
      id: 14,
      bedNumber: '114',
      roomType: 'Single',
      patientName: ' David',
      diagnosis: 'Hepatitis',
      doctorAssigned: 'Dr. David',
      admissionProcedures: 'Admitted for treatment.',
      admissionDate: '2023-09-15',
      dischargeDate: '2023-09-16',
      status: 'Occupied',
    },
    
    
   
  ]);

  const [sortBy, setSortBy] = useState('bedNumber'); // Initial sorting field
  const [searchTerm, setSearchTerm] = useState('');
  const [showOnlyAvailable, setShowOnlyAvailable] = useState(false);

  const toggleAllotmentStatus = (roomId) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId
          ? { ...room, status: room.status === 'Available' ? 'Occupied' : 'Available' }
          : room
      )
    );
  };

  const dischargePatient = (roomId) => {
    setRooms((prevRooms) =>
      prevRooms.map((room) =>
        room.id === roomId
          ? { ...room, status: 'Available', patientName: null, diagnosis: null, doctorAssigned: null }
          : room
      )
    );
  };

  const filteredRooms = rooms.filter((room) => {
    return (
      (room.bedNumber.includes(searchTerm) || room.patientName?.includes(searchTerm)) &&
      (!showOnlyAvailable || room.status === 'Available')
    );
  });

  const sortedRooms = [...filteredRooms].sort((a, b) => {
    if (sortBy === 'bedNumber') {
      return a.bedNumber.localeCompare(b.bedNumber);
    } else if (sortBy === 'roomType') {
      return a.roomType.localeCompare(b.roomType);
    } else {
      return 0;
    }
  });

  const occupancySummary = {
    totalRooms: rooms.length,
    occupiedRooms: rooms.filter((room) => room.status === 'Occupied').length,
    availableRooms: rooms.filter((room) => room.status === 'Available').length,
  };

  return (
    
    <div className="room-allotment">
      <h2>Room Allotment</h2>
      <div className="video">
        <video src={video} alt="Example" id='bg' autoPlay loop muted />
      <div id='nivin1'></div>
    
  </div>
      <div className="filters">
        <input className='find'
          type="text"
          placeholder="Search by bed number or patient name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <label className='label'>
          Show Only Available Rooms
          <input
            type="checkbox" 
            checked={showOnlyAvailable}
            onChange={() => setShowOnlyAvailable(!showOnlyAvailable)}
          />
        </label>
        <select className='bed'
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option  value="bedNumber">Sort by Bed Number</option>
          <option value="roomType">Sort by Room Type</option>
        </select>
      </div>
      <div className="room-summary">
        <p>Total Rooms: {occupancySummary.totalRooms}</p>
        <p>Occupied Rooms: {occupancySummary.occupiedRooms}</p>
        <p>Available Rooms: {occupancySummary.availableRooms}</p>
      </div>
      <div className="room-grid">
        {sortedRooms.map((room) => (
          <div className={`room-card ${room.status}`} key={room.id}>
            <h3>Bed Number: {room.bedNumber}</h3>
            <p>Room Type: {room.roomType}</p>
            <p>Patient Name: {room.patientName || 'N/A'}</p>
            <p>Diagnosis: {room.diagnosis || 'N/A'}</p>
            <p>Doctor Assigned: {room.doctorAssigned || 'N/A'}</p>
            <p>Admission Procedures: {room.admissionProcedures}</p>
            <p>Admission Date: {room.admissionDate}</p>
            <p>Discharge Date: {room.dischargeDate || 'N/A'}</p>
            {room.status === 'Available' ? (
              <button onClick={() => toggleAllotmentStatus(room.id)}>Allot Room</button>
            ) : (
              <button onClick={() => dischargePatient(room.id)}>Release Room</button>
            )}
          </div>
          
        ))}
      </div>
    </div>
  );
};

export default RoomAllotment;