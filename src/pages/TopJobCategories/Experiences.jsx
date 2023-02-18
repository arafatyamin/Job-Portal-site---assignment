import React, { useEffect, useState } from 'react';

const Experiences = () => {
    const [data,setData] = useState([])
    useEffect(() => {
        fetch('Experienced_jobs.json')
        .then(res => res.json())
        .then(data => setData(data))
    },[])
    console.log(data)
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mx-8'>
            {
                data.map(job => <div key={job.id} class="">
                <div class=" bg-white flex items-center space-x-6 rounded-lg shadow-md hover:scale-105 transition transform duration-500 cursor-pointer">
                  <div className='w-[20%]'>
                    <img src={job.companies_logos} alt=""  />
                  </div>
                  <div>
                    <h1 class="text-xl font-bold text-gray-700 mb-2">{job.position_name}</h1>
                    <p class="text-gray-600 text-sm">{job.company_name}</p>
                    <div className="flex justify-between">
                    <small>{job.job_location}</small>
                    <button className='btn'>Apply</button>
                    </div>
                  </div>
                </div>
              </div>)
            }
        </div>
    );
};

export default Experiences;