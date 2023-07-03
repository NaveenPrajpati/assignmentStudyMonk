import React, { useState } from 'react';


const CandidateSearch = () => {
  const [location, setLocation] = useState('');
  const [jobRole, setJobRole] = useState('');
  const [candidates, setCandidates] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Add search logic here and update the candidates state with the fetched results
    // You can use APIs or mock data for this example
    const fetchedCandidates = [
      { name: 'John Doe', location: 'New York', jobRole: 'Software Engineer' },
      { name: 'Jane Smith', location: 'Los Angeles', jobRole: 'Product Manager' },
      { name: 'Michael Johnson', location: 'Chicago', jobRole: 'Data Analyst' },
      // Add more candidates as needed
    ];
    setCandidates(fetchedCandidates);
  };

  return (
    <div className="px-4 bg-gray-950 min-h-screen">
     <div  className=' container mx-auto  text-center '>
      <h2 className="text-3xl font-bold text-white mb-6">Candidate Search</h2>
      <form className="mb-6 mx-auto w-fit" onSubmit={handleSearch}>
        <div className="flex flex-col md:flex-row">
          <div className="mb-4 md:mr-4">
            <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="location">
              Location
            </label>
            <input
              className="appearance-none border text-2xl rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="location"
              type="text"
              placeholder="Enter Location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div className="mb-4 md:ml-4">
            <label className="block text-gray-700 text-2xl font-bold mb-2" htmlFor="jobRole">
              Job Role
            </label>
            <input
              className="appearance-none border text-2xl rounded-xl w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="jobRole"
              type="text"
              placeholder="Enter Job Role"
              value={jobRole}
              onChange={(e) => setJobRole(e.target.value)}
            />
          </div>
        </div>
        <div className="flex items-center">
          <button
             className="bg-gradient-to-r from-red-400 via-pink-400 to-purple-600 hover:bg-blue-600 text-white font-bold py-2 px-6 rounded"
            type="submit"
          >
            Search
          </button>
        </div>
      </form>

      <h3 className="text-2xl font-bold text-white mb-4">Candidate Listing</h3>
      {candidates.length > 0 ? (
        <ul className="bg-white rounded shadow-md py-4 px-6">
          {candidates.map((candidate) => (
            <li key={candidate.name} className="mb-4">
              <h4 className="text-lg font-semibold">{candidate.name}</h4>
              <p className="text-gray-600">{`${candidate.jobRole} - ${candidate.location}`}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-slate-600">No candidates found.</p>
      )}
     </div>
    </div>
  );
};

export default CandidateSearch;
