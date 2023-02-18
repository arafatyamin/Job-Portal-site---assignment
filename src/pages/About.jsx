import React from 'react';
import bg2 from '../assets/image2.jpg'

const About = () => {
    return (
        <div class="py-16 bg-white">  
  <div class="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
      <div class="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
        <div class="md:5/12 lg:w-5/12">
          <img src={bg2} alt="image" loading="lazy" width="" height="" />
        </div>
        <div class="md:7/12 lg:w-6/12">
          <h2 class="text-2xl text-gray-900 font-bold md:text-4xl">We help companies
to find talents</h2>
          <p class="mt-6 text-gray-600">We collect reviews from our users so you can get an honest opinion of what an experience with our website are really like!</p>
          <p class="mt-4 text-gray-600"> Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
        </div>
      </div>
  </div>
</div>
    );
};

export default About;