import React, { use } from 'react';

// border-[#F6F6F6]

const Models = ({ modelPromise }) => {
    const models = use(modelPromise);
    console.log(models);
    return (
        <div>
            <div className="header-tab py-30 w-10/12 mx-auto border border-1">
                <div className='text-center'>
                    <h1 className='text-5xl font-extrabold text-[#101727]'>Premium Digital Tools</h1>
                    <p className='text-[#627382] my-4'>Choose from our curated collection of premium digital products designed to boost your productivity and creativity.</p>
                </div>

                <div className='flex border border-[#F6F6F6] p-1 rounded-[100px] max-w-62.5 gap-0.5 mx-auto'>
                    <button className='flex-1 font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-3 rounded-full shadow-[0px_3px_8px_0px_rgba(97,7,236,0.30)] '>Products</button>
                    <button className='flex-1 font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-3 rounded-full shadow-[0px_3px_8px_0px_rgba(97,7,236,0.30)]'>Cart (2)</button>
                </div>

                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-7 mt-10'>
                    
                </div>
            </div>
        </div>
    );
};

export default Models;