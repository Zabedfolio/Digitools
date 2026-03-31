import React from 'react';

const Rating = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>

            <div className='w-10/12 mx-auto py-10 lg:py-14 text-white grid grid-cols-1 lg:grid-cols-3 items-center text-center gap-8 lg:gap-0'>

                <div>
                    <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl'>50K+</h1>
                    <p className='font-medium text-lg md:text-xl lg:text-2xl'>Active Users</p>
                </div>

                <div className='lg:border-l-2 border-white/40'>
                    <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl'>200+</h1>
                    <p className='font-medium text-lg md:text-xl lg:text-2xl'>Premium Tools</p>
                </div>

                <div className='lg:border-l-2 border-white/40'>
                    <h1 className='font-extrabold text-4xl md:text-5xl lg:text-6xl'>4.9</h1>
                    <p className='font-medium text-lg md:text-xl lg:text-2xl'>Rating</p>
                </div>

            </div>

        </div>
    );
};

export default Rating;