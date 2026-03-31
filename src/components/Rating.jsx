import React from 'react';

const Rating = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>

            <div className='w-10/12 mx-auto py-14 space-x-0.5 text-white grid lg:grid-cols-3 items-center text-center'>

                <div className=''>
                    <h1 className='font-extrabold text-6xl'>50K+</h1>
                    <p className='font-medium text-2xl'>Active Users</p>
                </div>

                <div className='border-l-2 border-opacity-40'>
                    <h1 className='font-extrabold text-6xl'>200+</h1>
                    <p className='font-medium text-2xl'>Premium Tools</p>
                </div>

                <div className='border-l-2 border-opacity-40'>
                    <h1 className='font-extrabold text-6xl'>4.9</h1>
                    <p className='font-medium text-2xl'>Rating</p>
                </div>

            </div>

        </div>
    );
};

export default Rating;