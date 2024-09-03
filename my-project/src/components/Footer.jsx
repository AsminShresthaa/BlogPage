import React from 'react'
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import {} from "react-icons/fa6"

const Footer = () => {
  return (
    <div className='bg-gray-900'>
        <div className='px-4 pt-16 mx-auto sm:max-w-full lg:max-w-screen-xl md:px-24 lg:px-4'>
            <div className='grid mb-8 lg:grid-cols-6'>
                <div className='grid grid-cols-2 gap-5 lg:col-span-4 md:grid-cols-4'>
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Category</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>News</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>World</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Games</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>References</a>
                            </li>
                        </ul>
                    </div>
                    {/* Category2 */}
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Apples</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Web</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>eCommerce</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Business</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Entertainment</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Portfolio</a>
                            </li>
                        </ul>
                    </div>

                    {/*Category 3*/}
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Cherry</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Media</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Brochure</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>NonProfit</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Education</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Projects</a>
                            </li>
                        </ul>
                    </div>
                    
                    {/* Category4 */}
                    <div>
                        <p className='font-medium tracking-wide text-gray-300'>Business</p>
                        <ul className='mt-2 space-y-2'>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Information</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Personal</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Wikipedia</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Forum</a>
                            </li>
                            <li>
                                <a href="/" className='text-gray-500 transition-colors duration-300 hover:text-orange-600'>Template</a>
                            </li>
                        </ul>
                    </div>
                </div>
                {/* Subscription */}
                <div className='mt-5 md:max-w-md lg:col-span-2 lg:mt-0'>
                        <p className='font-medium tracking-wide text-gray-300'>Subscribe For Updates</p>
                        <form className='flex flex-col mt-4 md:flex-row'>
                            <input type="email" name="email" id="email" className='flex-grow w-full h-12 px-4 mb-3 transition duration-200 bg-white border border-gray-400 rounded shadow-sm aspec-auto md:mr-2 md:mb-0 focus:border-purple-400 focus:outline-none' />
                        <button type='submit' className='inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 border rounded shadow-md hover:bg-orange-500 focus:outline-none'>Subscribe</button>
                        </form>
                        <p className='mt-4 text-sm text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus adipisci nemo consequatur maxime magni, id deserunt tempore natus dignissimos iure optio. Odit aliquam aliquid adipisci? Aliquid laborum in architecto? Similique!</p>
                    </div>
            </div>

            <div className='flex flex-col justify-between pt-5 pb-10 border-t border-gray-800 sm:flex-row'>
                <p className='text-sm text-gray-500'>©Copyright 2024 | All right reserved.</p>
                <div className='flex items-center mt-4 space-x-4 sm:mt-0'>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-400'>
                    <FaTwitter className='w-6 h-6' />
                    </a>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-400'>
                    <FaInstagram className='w-6 h-6' />
                    </a>
                    <a href="" className='text-gray-500 transition-all duration-300 hover:text-orange-400'>
                    <FaFacebook className='w-6 h-6' />
                    </a>
                    </div>
            </div>
            
                  
        </div>
    </div>
  )
}

export default Footer