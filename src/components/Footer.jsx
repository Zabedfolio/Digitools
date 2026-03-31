import React from 'react';

const Footer = () => {
    return (
        <div className='bg-[#101727] text-white'>
            <div className='w-10/12 mx-auto py-16'>

                {/* Top section */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10'>

                    {/* Brand */}
                    <div className='lg:col-span-2 space-y-4'>
                        <h1 className='text-3xl font-extrabold'>DigiTools</h1>
                        <p className='text-white/50 text-sm leading-relaxed'>
                            Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
                        </p>
                    </div>

                    {/* Product */}
                    <div className='space-y-4'>
                        <h3 className='font-semibold text-white'>Product</h3>
                        <ul className='space-y-3 text-white/50 text-sm'>
                            <li className='hover:text-white cursor-pointer'>Features</li>
                            <li className='hover:text-white cursor-pointer'>Pricing</li>
                            <li className='hover:text-white cursor-pointer'>Templates</li>
                            <li className='hover:text-white cursor-pointer'>Integrations</li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className='space-y-4'>
                        <h3 className='font-semibold text-white'>Company</h3>
                        <ul className='space-y-3 text-white/50 text-sm'>
                            <li className='hover:text-white cursor-pointer'>About</li>
                            <li className='hover:text-white cursor-pointer'>Blog</li>
                            <li className='hover:text-white cursor-pointer'>Careers</li>
                            <li className='hover:text-white cursor-pointer'>Press</li>
                        </ul>
                    </div>

                    {/* Resources */}
                    <div className='space-y-8'>
                        <div className='space-y-4'>
                            <h3 className='font-semibold text-white'>Resources</h3>
                            <ul className='space-y-3 text-white/50 text-sm'>
                                <li className='hover:text-white cursor-pointer'>Documentation</li>
                                <li className='hover:text-white cursor-pointer'>Help Center</li>
                                <li className='hover:text-white cursor-pointer'>Community</li>
                                <li className='hover:text-white cursor-pointer'>Contact</li>
                            </ul>
                        </div>
                    </div>

                    {/* Social */}
                    <div className='space-y-4'>
                            <h3 className='font-semibold text-white'>Social Links</h3>
                            <div className='flex gap-3'>
                                <div className='bg-white/10 hover:bg-white/20 cursor-pointer w-10 h-10 rounded-full flex items-center justify-center'>
                                    <i className='fa-brands fa-instagram text-white'></i>
                                </div>
                                <div className='bg-white/10 hover:bg-white/20 cursor-pointer w-10 h-10 rounded-full flex items-center justify-center'>
                                    <i className='fa-brands fa-facebook-f text-white'></i>
                                </div>
                                <div className='bg-white/10 hover:bg-white/20 cursor-pointer w-10 h-10 rounded-full flex items-center justify-center'>
                                    <i className='fa-brands fa-x-twitter text-white'></i>
                                </div>
                            </div>
                        </div>

                </div>

                {/* Divider */}
                <div className='border-t border-white/10 mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white/40 text-sm'>
                    <p>© 2026 Digitools. All rights reserved.</p>
                    <div className='flex gap-6'>
                        <span className='hover:text-white cursor-pointer'>Privacy Policy</span>
                        <span className='hover:text-white cursor-pointer'>Terms of Service</span>
                        <span className='hover:text-white cursor-pointer'>Cookies</span>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Footer;