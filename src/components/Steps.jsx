import React from 'react';
import user from "../assets/user.png"
import rocket from "../assets/rocket.png"
import packages from "../assets/package.png"

const Steps = () => {
    return (
        <div className='bg-[#F4F6FA] py-30'>
            <div className='w-10/12 mx-auto'>

                {/* Header */}
                <div className='text-center mb-12 space-y-3'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-[#101727]'>Get Started In 3 Steps</h2>
                    <p className='text-[#627382]'>Start using premium digital tools in minutes, not hours.</p>
                </div>

                {/* Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>

                    {/* Step 1 */}
                    <div className='bg-white rounded-2xl p-22 relative text-center'>
                        <div className='absolute top-6 right-7 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center'>
                            01
                        </div>
                        <div className='bg-[#EDE9FE] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6'>
                            <img src={user} alt="" />
                        </div>
                        <h3 className='text-xl font-bold text-[#101727] mb-3'>Create Account</h3>
                        <p className='text-[#627382]'>Sign up for free in seconds. No credit card required to get started.</p>
                    </div>

                    {/* Step 2 */}
                    <div className='bg-white rounded-2xl p-22 relative text-center'>
                        <div className='absolute top-6 right-7 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center'>
                            02
                        </div>
                        <div className='bg-[#EDE9FE] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6'>
                            <img src={packages} alt="" />
                        </div>
                        <h3 className='text-xl font-bold text-[#101727] mb-3'>Choose Products</h3>
                        <p className='text-[#627382]'>Browse our catalog and select the tools that fit your needs.</p>
                    </div>

                    {/* Step 3 */}
                    <div className='bg-white rounded-2xl p-22 relative text-center'>
                        <div className='absolute top-6 right-7 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white text-sm font-bold w-10 h-10 rounded-full flex items-center justify-center'>
                            03
                        </div>
                        <div className='bg-[#EDE9FE] w-24 h-24 rounded-full flex items-center justify-center mx-auto mb-6'>
                            <img src={rocket} alt="" />
                        </div>
                        <h3 className='text-xl font-bold text-[#101727] mb-3'>Start Creating</h3>
                        <p className='text-[#627382]'>Download and start using your premium tools immediately.</p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Steps;