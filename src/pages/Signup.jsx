import React, { useState } from 'react'
import { useNavigate } from 'react-router';
import { addUser } from '../service/userService';

export default function Signup() {
    const Navigate=useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [location, setLocation] = useState('');
    const [jobrole, setJobrole] = useState('');
    const [name, setName] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addUser({name,email,location,password,jobrole})
      .then(res=>{
        console.log('user registered')
        Navigate('/login')
      })
      .catch(err=>console.log(err))
      
    };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-950">
    <div className="w-full max-w-sm">
      <h2 className="text-3xl text-white font-bold text-center mb-6">Company Registration</h2>
      <form className="shadow-white  shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
      <div className="mb-6">
          <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="name">
            Name
          </label>
          <input
            className="appearance-none border text-2xl rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="password"
            placeholder="Confirm Password"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input
            className="appearance-none border text-2xl rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="jobrole">
            Job Role
          </label>
          <input
            className="appearance-none border text-2xl rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="jobrole"
            type="text"
            placeholder="Job Role"
            value={jobrole}
            onChange={(e) => setJobrole(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="location">
            Location
          </label>
          <input
            className="appearance-none border text-2xl rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="location"
            type="text"
            placeholder="Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input
            className="appearance-none border text-2xl rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
     
        <div className="flex items-center justify-between">
          <button
            className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-600 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
            type="submit"
          >
            Register
          </button>
        </div>

        <button className='mt-10 ' onClick={()=>Navigate('/login')}>
            <p className='font-semibold text-slate-500 text-lg text-center  m-0'>Already have account? Login</p>
        </button>
      </form>
    </div>
  </div>
  )
}
