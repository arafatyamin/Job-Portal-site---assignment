import React from 'react';
import Categories from '../components/Categories';
import bg1 from '../assets/image3.jpg'
import Navbar from '../components/Navbar';
import JobCategories from '../components/JobCategories';
import Subscrib from '../components/Subscrib';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div>
            <div className="bg-center bg-fixed bg-no-repeat bg-cover h-screen relative" style={{ backgroundImage: `url(${bg1})`}}>
            <Navbar></Navbar>
            <Categories></Categories>
        </div>
        <JobCategories></JobCategories>
        <Subscrib></Subscrib>
        <Footer></Footer>
        </div>
    );
};

export default Home;