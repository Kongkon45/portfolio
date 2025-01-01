import React from 'react';
import Hero from './Hero/Hero';
import ParticlesBackground from './Particles/Particles';
import About from './About/About';
import Skills from './Skills/Skills';
import Contact from './Contact/Contact';

const HomePageAllComponents = () => {
    return (
        <div>
            <ParticlesBackground/>
            <Hero/>
            <About/>
            <Skills/>
            <Contact/>
        </div>
    );
};

export default HomePageAllComponents;