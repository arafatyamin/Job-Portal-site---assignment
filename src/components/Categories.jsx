import React from 'react';



const Categories = () => {
    return (
        <div className="mx-10 text-center flex flex-col gap-y-10 mt-[5%] py-[50px]">
            <p  className='text-3xl font-bold text-[#00000083] '>Easiest way to find a perfect job</p>
            <h1 className='text-5xl text-[#556fee] '>Find Your Next Dream Job</h1>
            <form className='flex justify-center items-center'>
            <div class="flex w-10 items-center justify-center rounded-l-full border-r border-gray-200 bg-white  py-6">
        <svg viewBox="0 0 20 20" aria-hidden="true" class="pointer-events-none absolute w-5 fill-gray-500 transition">
          <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
        </svg>
      </div>
            <input type="search" name="search" placeholder="Search your dream"
        className=" w-[30%] py-3 px-4 rounded-r-full  text-md focus:outline-indigo-500" />
        <button className='btn bg-indigo-700 hover:bg-indigo-600 border-0 rounded-full -ml-12 '>search job</button>
            </form>
            {/* <div className="mx-10 text-center flex flex-col gap-y-4 pt-10">
           
           <p className='text-xl text-[#00000075]'>which best describes you today?</p>
           <div className="grid grid-cols-3 gap-x-4 ">
               <div className='flex flex-col border px-4 py-6 rounded-xl text-4xl justify-center items-center font-bold hover:bg-gray-50 hover:shadow-md shadow-red-800'>
                   <GrUserWorker className='text-orange-500' />
                   <h1>Employed</h1>
               </div>
               <div className='flex flex-col border px-4 py-6 rounded-xl text-4xl justify-center items-center hover:bg-gray-50 hover:shadow-md shadow-red-800 font-bold'>
                   <GiStarsStack className='text-orange-500' />
                   <h1>Not Employed</h1>
               </div>
               <div className='flex flex-col border px-4 py-6 rounded-xl text-4xl justify-center items-center font-bold hover:bg-gray-50 hover:shadow-md shadow-red-800'>
                   <BsBuilding className='text-orange-500' />
                   <h1>Student</h1>
               </div>
           </div>
           
       </div> */}
        </div>
    );
};

export default Categories;