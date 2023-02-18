import React, { useEffect, useState } from 'react';

const Companies = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('Experienced_jobs.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 items-center justify-center gap-4'>
           {
            data.map(job => 
                <div key={job.id} className="mb-4 border w-full">
                <div><div className="p-6 bg-white flex items-center  rounded-lg shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">    
                  <div className='flex justify-between gap-8'>
                    <img className='w-20' src={job.companies_logos} alt="" />
                    <div>
                    <h1 className="text-xl font-bold text-gray-700 mb-2">{job.company_name}</h1>
                    <small>{job.job_location}</small>
                    </div>
                    <button className='btn btn-sm  bg-[#462dee]'>view details</button>
                  </div>
                </div>
                </div>
              </div>
              )
           } 
        </div>
    );
};

export default Companies;