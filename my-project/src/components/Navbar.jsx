import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaBars, FaFacebook, FaTwitter, FaXmark } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import Modal from './Modal';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const navItems = [
        { path: "/", link: "Home" },
        { path: "/services", link: "Services" },
        { path: "/about", link: "About" },
        { path: "/blogs", link: "Blogs" },
        { path: "/contact", link: "Contact" },
    ];

    return (
        <header className='fixed top-0 left-0 right-0 text-white bg-black'>
            <nav className='flex justify-between px-4 py-4 mx-auto max-w-7xl'>
                <a href="/" className='text-xl font-bold text-white'>Logo</a>
                
                <ul className='hidden gap-12 text-lg md:flex'>
                    {navItems.map(({ path, link }) => (
                        <li className='text-white' key={path}>
                            <NavLink 
                                className={({ isActive }) => (isActive ? "active" : "")} 
                                to={path}
                            >
                                {link}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                <div className='items-center hidden gap-4 text-white lg:flex'>
                    <a href="/" className='hover:text-blue-500'><FaFacebook/></a>
                    <a href="/" className='hover:text-blue-500'><FaInstagram/></a>
                    <a href="/" className='hover:text-blue-500'><FaTwitter/></a>
                    <button 
                        onClick={openModal} 
                        className='px-6 py-2 font-medium transition-all duration-200 ease-in bg-orange-600 rounded hover:bg-white hover:text-red-500'
                    >
                        Login
                    </button>
                </div>
                
                <Modal isOpen={isModalOpen} onClose={closeModal}/>

                <div className='md:hidden'>
                    <button onClick={toggleMenu} className='cursor-pointer'>
                        {isMenuOpen ? <FaXmark className='w-5 h-5'/> : <FaBars className='w-5 h-5'/>}
                    </button>
                </div>
            </nav>

            <ul className={`md:hidden gap-12 text-lg block space-y-4 px-4 py-6 mt-14 bg-white ${isMenuOpen ? "fixed top-0 left-0 w-full transition-all ease-out duration-150" : "hidden"}`}>
                {navItems.map(({ path, link }) => (
                    <li className='text-black' key={path}>
                        <NavLink onClick={toggleMenu} to={path}>
                            {link}
                        </NavLink>
                    </li>
                ))}
            </ul>
        </header>
    );
};

export default Navbar;
