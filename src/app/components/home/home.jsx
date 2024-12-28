import React from 'react';
import Hero from './Hero/Hero';
import ParticlesBackground from './Particles/Particles';
import About from './About/About';

const HomePageAllComponents = () => {
    return (
        <div>
            <ParticlesBackground/>
            <Hero/>
            <About/>
        </div>
    );
};

export default HomePageAllComponents;