
import React, { useState } from 'react';
import bgImg from './images/background.jpg';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import InvalidInput from './Invalidinput';  

const Login = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting }, watch } = useForm();
  const navigate = useNavigate();

  const defaultValues = {
    username: 'MMAHealthcare',
    password: 'MMAHealthcare',
    confirmpwd: 'MMAHealthcare'
  };

  const [isInvalidInput, setIsInvalidInput] = useState(false);

  const onSubmit = data => {
    console.log(data);

    
    if (data.username === defaultValues.username && data.password === defaultValues.password) {
      navigate('/home');
    } else {
      setIsInvalidInput(true);
    }
  };

  const password = watch("password", "");

  return (
    <section>
      <div className="register">
        <div className="col-1">
          <h2>ADMIN LOGIN</h2>
          <span>Register and enjoy the service</span>
          <div className='healthcare'>
            <h1><center>MMA HEALTHCARE</center></h1>
          </div>

          <form id='form' className='flex flex-col' onSubmit={handleSubmit(onSubmit)}>
            <input type="text" {...register("username", { required: true })} placeholder='Username' />
            {errors.username?.type === "required" && "Username is required"}

            <input type="password" {...register("password", { required: true, minLength: 8, maxLength: 16 })} placeholder='Password' />
            {errors.password?.type === "required" && "Password is required"}
            {errors.password?.type === "minLength" && "Password must be at least 8 characters"}
            {errors.password?.type === "maxLength" && "Password must be at most 16 characters"}

            <input type="password" {...register("confirmpwd", { })} placeholder='Confirm Password' />
            {errors.confirmpwd?.type === "required" && "Confirm Password is required"}
            {errors.confirmpwd?.type === "validate" && "Passwords must match"}

            <button className='btn' type="submit" disabled={isSubmitting}>Sign In</button>
          </form>
        </div>
        <div className="col-2">
          <img src={bgImg} alt="" />
        </div>
      </div>

      {isInvalidInput && <InvalidInput onClose={() => setIsInvalidInput(false)} />}  {/* Display InvalidInput popup on invalid login */}
    </section>
  );
};

export default Login;