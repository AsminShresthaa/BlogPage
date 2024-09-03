import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from "react-icons/fa6"

const Banner = () => {
  return (
    <div className='px-4 py-32 mx-auto bg-black'>
      <div className='text-center text-white'>
        <h1 className='mb-5 text-5xl font-bold leading-snug lg:text-7xl'>Welcome to Our Blog Page</h1>
        <p className='mx-auto mb-5 text-gray-200 lg:w-3/5 font-primary'>Start Your Blog Today and Join our Community of author and creator who are passionate about 
          Sharting their Story and Poem. We offer everything you need to get started, from helpful tips and tutorials. We will offer many things for the creative mindset.
        </p>
        <div>
          <Link to="/" className='inline-flex items-center py-1 font-medium hover:text-orange-500'>Learn More <FaArrowRight className='m-1 ml-2 '/></Link>
        </div>
      </div>
    </div>
  )
}

export default Banner