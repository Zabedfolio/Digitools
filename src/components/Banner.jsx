import React from 'react';
import circle from "../assets/circle.png"
import banner from "../assets/banner.png"

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto py-14.5 flex gap-x-10'>
            <div className='space-y-8'>
                <div className='space-y-4'>
                    <div className='flex bg-[#E1E7FF] py-2 px-4 gap-2 w-74 rounded-full items-center'>
                        <img className='flex-1' src={circle} alt="" />
                        <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent'>New: AI-Powered Tools Available</p>
                    </div>

                    <h1 className='text-7xl font-extrabold text-[#101727]'>Supercharge Your Digital Workflow</h1>
                    <p className='text-[#627382]'>Access premium AI tools, design assets, templates, and productivity
                        software—all in one place. <br /> Start creating faster today. <br /> Explore Products
                    </p>
                </div>

                <div className='space-x-2'>
                    <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-4 py-3 rounded-full text-white font-semibold'>Explore Products</button>
                    <button className='border border-[#9514FA] text-[#9514FA] rounded-full px-4 py-3'><i class="fa-solid fa-play"></i> Watch Demo</button>
                </div>
            </div>

            <div className=''>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;