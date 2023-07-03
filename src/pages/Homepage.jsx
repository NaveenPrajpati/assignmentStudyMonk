import React from 'react'
import Navbar from './Navbar'

export default function Homepage() {
  return (
    <div>

    
    <div className=" bg-gray-950  min-h-screen mt ">
    {/* Header */}
    <header className=" py-8">
      <div className="container mx-auto px-4 my-10">
        <h1 className="fadeleft text-[50px] font-bold text-center bg-gradient-to-r from-red-400 via-pink-400 to-purple-600 bg-clip-text text-transparent">Streamline Your Hiring Process</h1>
        <p className="fadedown text-lg text-white font-semibold text-center mt-4">Efficient Online Recruitment Solution for Hiring Managers and HR Professionals</p>
      </div>
      <div className='h-7  shadow-2xl shadow-gray-500 mx-auto animate-bounce'></div>
    </header>

    <div className='sm:ml-20 flex gap-2 w-fit p-2 rounded-xl bg-gradient-to-b from-gray-950 via-indigo-900 to-gray-700 animate-pulse'>
<p className='bg-white rounded-full w-fit p-2 text-red-400 font-semibold'>N</p>
<div className='text-white '>
    <p className='m-0 text-sm'>demo card</p>
    <p className='m-0 font-semibold text-sm bg-gradient-to-tr from-white to-red-500 bg-clip-text text-transparent'>Designed by naveen</p>
</div>
    </div>

    {/* Features */}
    <div className='sm:flex mx-20'>
        <div className='text-white w-1/2'>
<p className='text-[50px] font-bold'>Create product <br /> videos that <span className='bg-gradient-to-r from-red-400 via-pink-400 to-purple-600 text-transparent bg-clip-text '> convert</span></p>
<p className='text-xl font-semibold'>Learn from more than 100+ hand selected videos of companies that create engaging, shareable product videos that not only boost brand awareness but also convert customers.</p>
        </div>
  
     <div className='h-[400px] w-1/2 overflow-y-hidden relative'>

    
        <div className=" absolute  movediv h-auto object-cover">
          {/* Feature 1 */}
          <div className="bg-white rounded-lg p-6 my-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Automated Candidate Screening</h2>
            <p className="text-gray-600">Save time by automatically filtering and shortlisting candidates based on predefined criteria, allowing you to focus on the best fits.</p>
          </div>

          <div className="bg-white rounded-lg p-6 my-5">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Automated Candidate Screening</h2>
            <p className="text-gray-600">Save time by automatically filtering and shortlisting candidates based on predefined criteria, allowing you to focus on the best fits.</p>
          </div>

          {/* Feature 2 */}
          <div className="text-white rounded-lg p-6 my-5 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Collaborative Hiring Process</h2>
            <p className="text-white">Enable seamless collaboration among hiring teams, with features like interview scheduling, feedback sharing, and centralized communication.</p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white rounded-lg p-6 my-5 ">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Data-driven Decision Making</h2>
            <p className="text-gray-600">Leverage powerful analytics and reporting tools to gain insights into your recruitment process, enabling better decision making.</p>
          </div>
    
      </div>
      </div>
    </div>
    
    

    {/* Call to Action */}

    <div>
        <div className='mx-auto w-3/5 my-20'>
            <p className='text-white text-[50px] font-bold text-center '>People <span className=' font-bold bg-gradient-to-r from-red-400 via-pink-400 to-purple-600 text-transparent bg-clip-text '>love</span> to watch videos</p>
            <p className='text-white font-semibold text-center'>SaaS businesses use video as an important component of their interactions with customers. Video is a powerful tool for building trust, educating, and engaging with your audience.</p>

            <div className='sm:flex justify-center my-10'>
                <div className=' border-r-2 text-center'>
                    <p className='fadedown text-[100px] font-bold bg-gradient-to-r from-green-300  to-green-700 text-transparent bg-clip-text'>202%</p>
                    <p className='text-xl text-white font-semibold'>Video Consumption Rate</p>
                    <p className='text-slate-400 font-semibold'>More people are watching videos online than ever before. In fact, their video consumption has more than doubled since 2018.</p>
                </div>
                <div className=' border-l-2 text-center'>
                    <p className='fadedown text-[100px] font-bold bg-gradient-to-r from-blue-200  to-blue-800 text-transparent bg-clip-text'>202%</p>
                    <p className='text-xl font-semibold'>Video Consumption Rate</p>
                    <p className='text-slate-400 font-semibold'>More people are watching videos online than ever before. In fact, their video consumption has more than doubled since 2018.</p>
                </div>
            </div>
        </div>
    </div>


{/* Footer */}
    <section className="py-8 mt-10">
      <div className="w-fit mx-auto py-4 px-10 shadow-2xl shadow-white rounded-full">
        <h2 className="text-3xl font-semibold text-white text-center">Experience Effortless Hiring Today</h2>
        <p className="text-lg text-gray-300 text-center mt-4">Sign up now and revolutionize your recruitment process!</p>
        <div className="flex justify-center mt-6">
          <button className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-600 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded">Get Started With Me</button>
        </div>
      </div>
      <footer className="py-4  relative w-fit mx-auto rounded-full ">
      <div className="container mx-auto px-4 text-center text-black">
        <p>&copy; 2023 Naveen. All rights reserved.</p>
      </div>
    </footer>
    </section>

    
    
    
  </div>
  </div>
  )
}
