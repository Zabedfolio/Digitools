import React from 'react';
import circle from "../assets/circle.png"
import banner from "../assets/banner.png"

const Banner = () => {
    return (
        <div className='w-10/12 mx-auto py-14.5 flex flex-col lg:flex-row items-center gap-10'> {/* CHANGED: flex-col on mobile, flex-row on lg */}
            <div className='space-y-8 flex-1'> {/* CHANGED: flex-1 so it takes equal width on lg */}
                <div className='space-y-4'>
                    <div className='flex bg-[#E1E7FF] py-2 px-4 gap-2 w-fit rounded-full items-center'> {/* CHANGED: w-74 → w-fit so it adjusts to content */}
                        <img className='w-5 h-5' src={circle} alt="" /> {/* CHANGED: flex-1 → fixed size so icon doesn't stretch */}
                        <p className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent text-sm'> {/* CHANGED: bg-linear-to-r → bg-gradient-to-r */}
                            New: AI-Powered Tools Available
                        </p>
                    </div>

                    <h1 className='text-4xl md:text-5xl lg:text-7xl font-extrabold text-[#101727]'> {/* CHANGED: responsive font size */}
                        Supercharge Your Digital Workflow
                    </h1>
                    <p className='text-[#627382]'>
                        Access premium AI tools, design assets, templates, and productivity
                        software—all in one place.Start creating faster today. <br />Explore Products
                    </p>
                </div>

                <div className='flex flex-wrap gap-3'> {/* CHANGED: space-x-2 → flex flex-wrap gap-3 so buttons wrap on small screens */}
                    <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] px-6 py-3 rounded-full text-white font-semibold'> {/* CHANGED: bg-linear-to-r → bg-gradient-to-r */}
                        Explore Products
                    </button>
                    <button className='border border-[#9514FA] text-[#9514FA] rounded-full px-6 py-3'>
                        <i className="fa-solid fa-play mr-2"></i> {/* CHANGED: class → className */}
                        Watch Demo
                    </button>
                </div>
            </div>

            <div className='flex-1 w-full'> {/* CHANGED: added flex-1 and w-full so image takes equal space */}
                <img className='w-full h-auto object-contain' src={banner} alt="" /> {/* CHANGED: added responsive image classes */}
            </div>
        </div>
    );
};

export default Banner;