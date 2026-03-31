import React, { useState } from 'react';

const Navbar = ({ cartCount }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className='border-b border-[#F2F2F2] py-6'>
            <div className='w-10/12 mx-auto flex items-center justify-between'>

                {/* Logo */}
                <h1 className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-extrabold text-3xl'>
                    DigiTools
                </h1>

                {/* Desktop Nav - hidden on mobile */}
                <ul className='hidden lg:flex gap-8 list-none'>
                    <li className='cursor-pointer hover:text-[#4F39F6]'>Products</li>
                    <li className='cursor-pointer hover:text-[#4F39F6]'>Features</li>
                    <li className='cursor-pointer hover:text-[#4F39F6]'>Pricing</li>
                    <li className='cursor-pointer hover:text-[#4F39F6]'>Testimonials</li>
                    <li className='cursor-pointer hover:text-[#4F39F6]'>FAQ</li>
                </ul>

                {/* Right side */}
                <div className='flex items-center space-x-3'>

                    {/* Cart */}
                    <div className="indicator">
                        <span className="indicator-item badge badge-primary">{cartCount}</span>
                        <button className="btn rounded-full">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </button>
                    </div>

                    {/* Login + Get Started - hidden on mobile */}
                    <p className='hidden lg:block cursor-pointer'>Login</p>
                    <button className='hidden lg:block bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-4 py-3 rounded-full text-white font-semibold'>
                        Get Started
                    </button>

                    {/* Hamburger - visible only on mobile */}
                    <button
                        className='lg:hidden text-xl'
                        onClick={() => setMenuOpen(!menuOpen)}
                    >
                        <i className={`fa-solid ${menuOpen ? 'fa-xmark' : 'fa-bars'}`}></i> 
                    </button>
                </div>
            </div>

            {/* Mobile Menu - shown when menuOpen is true */}
            {menuOpen && (
                <div className='lg:hidden w-10/12 mx-auto pt-4 pb-2 flex flex-col gap-4'>
                    <ul className='flex flex-col gap-3 list-none'>
                        <li className='cursor-pointer hover:text-[#4F39F6]'>Products</li>
                        <li className='cursor-pointer hover:text-[#4F39F6]'>Features</li>
                        <li className='cursor-pointer hover:text-[#4F39F6]'>Pricing</li>
                        <li className='cursor-pointer hover:text-[#4F39F6]'>Testimonials</li>
                        <li className='cursor-pointer hover:text-[#4F39F6]'>FAQ</li>
                    </ul>
                    <div className='flex gap-3 items-center'>
                        <p className='cursor-pointer'>Login</p>
                        <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-4 py-2 rounded-full text-white font-semibold'>
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;