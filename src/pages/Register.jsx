import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import axios from 'axios';



const Register = () => {
const [values, setValues] = useState({
    username: '',
    email: '',
    password: ''
});

    const handleChanges = (e) => {
        setValues({...values, [e.target.name]:e.target.value})               //handle values
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{

            if (!values.email.includes('@')) {
                alert('Please enter a valid email.');
                return;
            }
              if (values.password.length < 6) {
                alert('Password must be at least 6 characters.');
                return;
              }

            const response = await axios.post("http://localhost:3000/auth/register", values);
            console.log("The Response is : ", response);
            alert("Registrtaion Succesfull!");
        }
        catch(err){
            console.log("There is an error ", err);
            alert('Something went wrong during registration.')
        }
    };

  return (
    <div className='flex justify-center items-center h-screen'>
        <div className='shadow-lg px-8 py-5 border w-96'>
            <h2 className='text-lg font-bold mb-4'>Register</h2>
            <form onSubmit={handleSubmit}>
                <div className='mb-4'>
                    <label htmlFor="username" className='block text-gray-700'>Username : </label>
                    <input type="text" placeholder='Enter your username ' required className='w-full px-3 py-2 border ' name='username' onChange={handleChanges}/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="eail" className='block text-gray-700'>E-mail : </label>
                    <input type="email" placeholder='Enter your E-Mail ' required className='w-full px-3 py-2 border ' name='email' onChange={handleChanges}/>
                </div>
                <div className='mb-4'>
                    <label htmlFor="password" className='block text-gray-700'>Password : </label>
                    <input type="password" placeholder='Enter your password ' required className='w-full px-3 py-2 border' name='password' onChange={handleChanges}/>
                </div>
                <button className='w-full bg-green-600 text-white py-2 hover:rounded-3xl transition-all duration-300'>Register</button>
            </form>
            <div className='text-center mt-4'>
                <span>Already have account? </span>
                <Link to={'/login'} className='text-blue-700'>Login</Link>
            </div>
        </div>
    </div>
  )
}

export default Register