import React, { useState } from 'react';
import './register.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function Register() {
  const [formData, setFormData] = useState({
    name: '',
    phno: ''
  });
  const navigate = useNavigate();
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      axios.post("http://localhost:3000/datas", formData).then((res) => {
      navigate("/rules");
    })
    
  };

  

  return (
    <div className="register_main">
      <div className='brand'>
        <div className='o1'>Login</div>
        <div className='o2'>360</div>
      </div>
      <div className="register_container">
        <h1 className='register_head'>Register</h1>
        <form onSubmit={handleSubmit}>
          <div className="register_fields">
            <input id="one" className='r1' type="text" name="name" placeholder="Enter your name" onChange={handleChange}/>
            <input id="two" className='r2' type="text" name="phno" placeholder="Enter mobile number" onChange={handleChange}/>
          </div>
          <button className='register' type="submit ">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Register;


