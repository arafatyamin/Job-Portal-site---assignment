import React from 'react';
import { BsBuilding } from 'react-icons/bs';
import { GiStarsStack ,GiRoundStar } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const JobCategories = () => {
    return (
        <div className="mx-10 my-20 text-center flex flex-col gap-y-4 py-[50px]">
           
            <p className='text-5xl font-semibold text-[#2319e8dd]'>Browse From Our Top Jobs</p>
            <div className="grid grid-cols-3 gap-x-4 ">
                <Link to="/Fresher" className='flex flex-col border px-4 py-6 rounded-xl text-4xl justify-center items-center font-bold hover:bg-gray-50 hover:shadow-md shadow-red-800'>
                    <GiRoundStar className='text-orange-500' />
                    <h1>Fresher Jobs</h1>
                </Link>
                <Link to='/Experiences' className='flex flex-col border px-4 py-6 rounded-xl text-4xl justify-center items-center hover:bg-gray-50 hover:shadow-md shadow-red-800 font-bold'>
                    <GiStarsStack className='text-orange-500' />
                    <h1>Experienced Jobs</h1>
                </Link>
                <Link to='/Companies' className='flex flex-col border px-4 py-6 rounded-xl text-4xl justify-center items-center font-bold hover:bg-gray-50 hover:shadow-md shadow-red-800'>
                    <BsBuilding className='text-orange-500' />
                    <h1>It Companies</h1>
                </Link>
            </div>
            
        </div>
    );
};

export default JobCategories;