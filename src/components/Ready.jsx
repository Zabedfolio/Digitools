import React from 'react';

const CallToAction = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] py-30'>
            <div className='w-10/12 mx-auto text-center space-y-6'>

                <h2 className='text-3xl md:text-5xl font-extrabold text-white'>
                    Ready To Transform Your Workflow?
                </h2>

                <p className='text-white/70'>
                    Join thousands of professionals who are already using Digitools to work smarter. <br />
                    Start your free trial today.
                </p>

                <div className='flex justify-center gap-4 flex-wrap'>
                    <button className='bg-white text-[#4F39F6] font-semibold px-6 py-3 rounded-full'>
                        Explore Products
                    </button>
                    <button className='border border-white text-white font-semibold px-6 py-3 rounded-full'>
                        View Pricing
                    </button>
                </div>

                <p className='text-white/60 text-sm'>
                    14-day free trial • No credit card required • Cancel anytime
                </p>

            </div>
        </div>
    );
};

export default CallToAction;