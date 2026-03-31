import React from 'react';

const Pricing = () => {
    return (
        <div className='py-30'>
            <div className='w-10/12 mx-auto'>

                {/* Header */}
                <div className='text-center mb-12 space-y-3'>
                    <h2 className='text-4xl md:text-5xl font-extrabold text-[#101727]'>Simple, Transparent Pricing</h2>
                    <p className='text-[#627382]'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
                </div>

                {/* Cards */}
                <div className='grid grid-cols-1 md:grid-cols-3 gap-6 items-center'>

                    {/* Starter */}
                    <div className='border border-[#F2F2F2] rounded-2xl p-8 space-y-6'>
                        <div>
                            <h3 className='text-xl font-bold text-[#101727]'>Starter</h3>
                            <p className='text-[#627382] text-sm'>Perfect for getting started</p>
                        </div>
                        <div>
                            <span className='text-5xl font-extrabold text-[#101727]'>$0</span>
                            <span className='text-[#627382]'>/Month</span>
                        </div>
                        <ul className='space-y-3'>
                            <li className='flex items-center gap-2 text-[#627382]'><i className="fa-solid fa-check text-[#4F39F6]"></i> Access to 10 free tools</li>
                            <li className='flex items-center gap-2 text-[#627382]'><i className="fa-solid fa-check text-[#4F39F6]"></i> Basic templates</li>
                            <li className='flex items-center gap-2 text-[#627382]'><i className="fa-solid fa-check text-[#4F39F6]"></i> Community support</li>
                            <li className='flex items-center gap-2 text-[#627382]'><i className="fa-solid fa-check text-[#4F39F6]"></i> 1 project per month</li>
                        </ul>
                        <button className='w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-3 rounded-full'>
                            Get Started Free
                        </button>
                    </div>

                    {/* Popular */}
                    <div className='bg-linear-to-b from-[#4F39F6] to-[#9514FA] rounded-2xl p-8 space-y-6 relative'>
                        {/* Badge */}
                        <div className='absolute -top-4 left-1/2 -translate-x-1/2 bg-[#FEF3C6] text-[#BB4D00] text-sm font-semibold px-4 py-1 rounded-full'>
                            Most Popular
                        </div>
                        <div>
                            <h3 className='text-xl font-bold text-white'>Pro</h3>
                            <p className='text-white/70 text-sm'>Best for professionals</p>
                        </div>
                        <div>
                            <span className='text-5xl font-extrabold text-white'>$29</span>
                            <span className='text-white/70'>/Month</span>
                        </div>
                        <ul className='space-y-3'>
                            <li className='flex items-center gap-2 text-white'><i className="fa-solid fa-check"></i> Access to all premium tools</li>
                            <li className='flex items-center gap-2 text-white'><i className="fa-solid fa-check"></i> Unlimited templates</li>
                            <li className='flex items-center gap-2 text-white'><i className="fa-solid fa-check"></i> Priority support</li>
                            <li className='flex items-center gap-2 text-white'><i className="fa-solid fa-check"></i> Unlimited projects</li>
                            <li className='flex items-center gap-2 text-white'><i className="fa-solid fa-check"></i> Cloud sync</li>
                            <li className='flex items-center gap-2 text-white'><i className="fa-solid fa-check"></i> Advanced analytics</li>
                        </ul>
                        <button className='w-full bg-white text-[#4F39F6] font-bold py-3 rounded-full'>
                            Start Pro Trial
                        </button>
                    </div>

                    {/* Enterprise */}
                    <div className='border border-[#F2F2F2] rounded-2xl p-8 space-y-6'>
                        <div>
                            <h3 className='text-xl font-bold text-[#101727]'>Enterprise</h3>
                            <p className='text-[#627382] text-sm'>For teams and businesses</p>
                        </div>
                        <div>
                            <span className='text-5xl font-extrabold text-[#101727]'>$99</span>
                            <span className='text-[#627382]'>/Month</span>
                        </div>
                        <ul className='space-y-3'>
                            <li className='flex items-center gap-2 text-[#627382]'><i className="fa-solid fa-check text-[#4F39F6]"></i> Everything in Pro</li>
                            <li className='flex items-center gap-2 text-[#627382]'><i className="fa-solid fa-check text-[#4F39F6]"></i> Team collaboration</li>
                            <li className='flex items-center gap-2 text-[#627382]'><i className="fa-solid fa-check text-[#4F39F6]"></i> Custom integrations</li>
                            <li className='flex items-center gap-2 text-[#627382]'><i className="fa-solid fa-check text-[#4F39F6]"></i> Dedicated support</li>
                            <li className='flex items-center gap-2 text-[#627382]'><i className="fa-solid fa-check text-[#4F39F6]"></i> SLA guarantee</li>
                            <li className='flex items-center gap-2 text-[#627382]'><i className="fa-solid fa-check text-[#4F39F6]"></i> Custom branding</li>
                        </ul>
                        <button className='w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-bold py-3 rounded-full'>
                            Contact Sales
                        </button>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Pricing;