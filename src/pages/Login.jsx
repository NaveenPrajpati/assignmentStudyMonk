import React, { useState } from 'react'
import { useNavigate } from 'react-router';

export default function Login() {

    const Navigate=useNavigate()

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Add login logic here
    };

  return (
    <div className="flex justify-center items-center bg-gray-950  min-h-screen">
    <div className="w-full max-w-sm">
      <h2 className="text-3xl font-bold text-center text-white mb-6">Company Login</h2>
      <form className="shadow-white  shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
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

        <div className='mt-6 '>
            <p className='font-semibold text-red-500 text-lg text-right cursor-pointer m-0'>forget Password?</p>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-xl font-bold mb-2" htmlFor="password">
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
            Login
          </button>
        </div>

        <button className='mt-10 ' onClick={()=>Navigate('/signup')}>
            <p className='font-semibold text-slate-500 text-lg text-center  m-0'>Don't have account? SignUp</p>
        </button>
      </form>
    </div>
  </div>
  )
}
