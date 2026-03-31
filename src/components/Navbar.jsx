import React from 'react';
// import cart from "../assets/products/shopping-cart.png"

const Navbar = ({ cartCount }) => {
    return (
        <div className='border-b border-[#F2F2F2] py-6'>
            <div className='w-10/12 mx-auto flex items-center justify-between'>
                <h1 className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent font-extrabold text-3xl'>
                    DigiTools
                </h1>
                <div className='flex gap-8 list-none'>
                    <li>Products</li>
                    <li>Features</li>
                    <li>Pricing</li>
                    <li>Testimonials</li>
                    <li>FAQ</li>
                </div>
                <div className='flex items-center space-x-4'>
                    <div className="indicator">
                        <span className="indicator-item badge badge-primary">{cartCount}</span>
                        <button className="btn rounded-full"><i class="fa-solid fa-cart-shopping"></i></button>
                    </div>

                    <p>Login</p>
                    <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-4 py-3 rounded-full text-white font-semibold'>Get Started</button>
                </div>
            </div>

        </div>
    );
};

export default Navbar;