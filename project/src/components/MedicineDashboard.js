import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sample from "../images/1.jpg";
import sample1 from "../images/2.jpg"
import sample2 from "../images/3.jpg"
import sample3 from "../images/4.jpg"
import sample4 from "../images/5.jpg"
import sample5 from "../images/6.jpg"
import sample6 from "../images/8.jpg"
import sample7 from "../images/9.jpg"
import sample8 from "../images/10.jpg"
import sample9 from "../images/11.jpg"
import sample10 from "../images/12.jpg"
import sample11 from "../images/13.jpg"
import sample12 from "../images/14.jpg"
import sample13 from "../images/15.jpg"
import sample14 from "../images/16.jpg"
import sample15 from "../images/17.jpg"
import sample16 from "../images/18.jpg"
import sample17 from "../images/19.jpg"
import sample18 from "../images/20.jpg"
import sample19 from "../images/21.jpg"
import sample20 from "../images/24.jpg"
import sample21 from "../images/25.jpg"
import sample22 from "../images/26.jpg"
import sample23 from "../images/27.jpg"
import sample24 from "../images/28.jpg.jpg"
import sample25 from "../images/29.jpg.jpg"
import sample26 from "../images/30.jpg"
import sample27 from "../images/31.jpg"
import CardPage from '../CardPage';

const MedicineDashboard = () => {

  const medicineData = [
    {
      id: 1,
    
      Name: 'Acetaminophen',
      MRP: '200',
      imageUrl: sample, 
    },
    {
      id: 2,
     
      Name:'Ibuprofen',
      MRP: '300', 
      imageUrl: sample1, 
    },
    {
      id: 3,
      Name: 'Naproxen',
      MRP: '400',
      imageUrl: sample2, 
    },
    {
      id: 4,
    
      Name: 'Aspirin',
      MRP: '250', 
      imageUrl: sample3, 
    },
    {
      id: 5,
      
     
      Name: 'Oxycodone',
      MRP: '500',
      imageUrl:sample4 ,
    },
    {
      id: 6,
     
      
      Name: 'Hydrocodone',
      MRP: '600', 
      imageUrl: sample5, 
    },
    {
      id: 7,
      Name: 'Morphine',
      MRP: '700',
      imageUrl: sample6, 
    },
    {
      id: 8,
      Name: 'Lidocaine',
      
      MRP: '650', 
      imageUrl: sample7, 
    },
    

    {
      id: 9,
      Name: 'Methotrexate ',
      
      MRP: '300', 
      imageUrl:sample8 , 
    },
    {
      id: 10,
     
      Name: 'Methylprednisolone',
      MRP: '350',
      imageUrl: sample9, 
    },
    {
      id: 11,
      Name: 'Pregabalin',
     
      MRP: '200', 
      imageUrl: sample10, 
    },
    {
      id: 12,
     Name: 'Cetirizine',
      
      MRP: '1000',
      imageUrl: sample11, 
    },
    {
      id: 13,
     Name: 'Loratadine ',
      
      MRP: '450', 
      imageUrl: sample12, 
    },
    {
      id: 14,
      Name: 'Diphenhydramine ',
     
      MRP: '320',
      imageUrl: sample13, 
    },
    {
      id: 15,
      Name: 'Simvastatin ',
      MRP: '220', 
      imageUrl: sample14, 
    },
    {
      id: 16,
     
      Name: 'Lisinopril',
      MRP: '120',
      imageUrl: sample15, 
    },
    {
      id: 17,
    Name: 'Omeprazole ',
      
      MRP: '230', 
      imageUrl: sample16, 
    },
    {
      id: 18,
      
      Name: 'Levothyroxine',
      MRP: '280',
      imageUrl: sample17, 
    },
    {
      id: 19,
      Name: 'Levothyroxine ',
      
      MRP: '700', 
      imageUrl: sample18,
    },
    {
      id: 20,
      
      Name: 'Iron Tonic',
      MRP: '800',
      imageUrl: sample19, 
    },
    {
      id: 21,
      Name: 'Digital thermometers ',
      
      MRP: '900',
      imageUrl: sample20, 
    },
    {
      id: 22,
    Name: 'Quinine Tonic',
      
      MRP: '1000',
      imageUrl: sample21, 
    },
    {
      id: 23,
      Name: 'Rhodiola ',
      
      MRP: '280', 
      imageUrl: sample22, 
    },
    {
      id: 24,
      
      Name: 'Licorice Root Tonic',
      MRP: '680',
      imageUrl: sample23, 
    },
    {
      id: 25,
      
      Name: 'Burdock Root Tonic',
      MRP: '800',
      imageUrl: sample24, 
    },
    {
      id: 26,
      
      Name: 'Fenugreek Tonic',
      MRP: '900',
      imageUrl:sample25 , 
    },
    {
      id: 27,
      
      Name: 'Milk Thistle',
      MRP: '850',
      imageUrl: sample26, 
    },
    {
      id: 28,
      
      Name: 'Heparin ',
      MRP: '1000',
      imageUrl: sample27, 
    },
    
    

    
  ];

  
  const medicineItems = medicineData.map((medicine, index) => ({
    ...medicine,
    id: index + 1,
    showDetails: false,
  }));

  
  const [cart, setCart] = useState([]);

  
  const addToCart = (medicine) => {
    
    const existingItem = cart.find((item) => item.id === medicine.id);

    if (existingItem) {

      setCart((prevCart) =>
        prevCart.map((item) =>
          item.id === medicine.id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      
      setCart([...cart, { ...medicine, quantity: 1 }]);
    }
  };

  
  const removeFromCart = (medicineId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== medicineId));
  };
  

  return (

      <div className="medicine-dashboard">
          <Link path="/cart">
            <CardPage cart={cart} removeFromCart={removeFromCart} />
          </Link>
          
          <Link path="/">
            <div className="medicine-list">
              {medicineItems.map((medicine) => (
                <div className="medicine-card" key={medicine.id}>
                  <img src={medicine.imageUrl} alt={medicine.Name} />
                  <h3>Name: {medicine.Name}</h3>
                  <h4>MRP: {medicine.MRP}</h4>
                  <button onClick={() => addToCart(medicine)}>Add to Cart</button>
                </div>
              ))}
             
              
            </div>
          </Link>
  
      </div>

  );
};

export default MedicineDashboard;