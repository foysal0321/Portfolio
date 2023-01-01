import React from 'react';
import Footer from '../../share/footer/Footer';
import About from './About';
import Header from './Header';
import Projects from './Projects';
import Skills from './Skills';

const Home = () => {
    return (
        <div className=''>
            <Header />
            <About />
            <Skills />
            <Projects />
            
        </div>
    );
};

export default Home;