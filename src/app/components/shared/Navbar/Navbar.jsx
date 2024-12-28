import Link from 'next/link';
import React from 'react';

const Navbar = () => {
    return (
        <div className='sticky top-0 z-50'>
            <nav className='container bg-gray-950 py-4 flex items-center justify-between'>
                {/* logo  */}
                <div className='text-xl xl:text-2xl font-bold text-white leading-normal'>
                    <Link href="/">Kongkon <span className='text-blue-500 '>Jowarder</span></Link>
                </div>
                {/* menu  */}
                <ul className='flex items-center gap-6 md:gap-8 lg:gap-10 xl:gap-12'>
                    <li className='text-white text-base xl:text-lg font-bold leading-normal'><Link href='/'>Home</Link></li>
                    <li className='text-white text-base xl:text-lg font-bold leading-normal'><Link href="#about">About</Link></li>
                    <li className='text-white text-base xl:text-lg font-bold leading-normal'><Link href="#skills">Skills</Link></li>
                    <li className='text-white text-base xl:text-lg font-bold leading-normal'><Link href="#projects">Projects</Link></li>
                    <li className='text-white text-base xl:text-lg font-bold leading-normal'><Link href="#contact">Contact</Link></li>
                    
                    
                </ul>
            </nav>
        </div>
    );
};

export default Navbar;