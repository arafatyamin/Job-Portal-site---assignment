import React, { useEffect, useState } from 'react';

const Fresher = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('Fresher_jobs.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4'>
           {
            data.map(job => 
                <div key={job.id} className="mb-4 border w-full">
                <div><div className="p-6 bg-white flex items-center  rounded-lg shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                  
                  <div>
                    <h1 className="text-xl font-bold text-gray-700 mb-2">{job.company_name}</h1>
                    <p className="text-gray-600">{job.position_name}</p>
                    <small>{job.job_location}</small>
                    <button>Apply</button>
                  </div>
                </div>
                </div>
              </div>
              )
           } 
        </div>
    );
};

export default Fresher;