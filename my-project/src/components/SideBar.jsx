import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { FaArrowRight } from "react-icons/fa6"

const SideBar = () => {
    const [popularBlogs, setPopularBlogs] = useState([]);
    
    useEffect(() => {
        fetch("http://localhost:5000/blogs").then(res => res.json()).then(data => setPopularBlogs(data.slice(0, 15)))
    }, [])
    
  return (
    <div>
        <div>
            <h3 className='px-4 text-2xl font-semibold'>Latest Blog</h3>
            <div>
                {
                    popularBlogs.slice(0, 5).map(blog => <div key={blog.id} className='px-4 my-5 border-b-2 border-spacing-2'>
                        <h4 className='mb-2 font-medium'>{blog.title}</h4>
                        <Link to="/" className='inline-flex items-center py-1 pb-2 text-base hover:text-orange-500'>Read More <FaArrowRight className='m-1 ml-2 '/></Link>
                    </div>)
                }
            </div>
        </div>
            {/* Popular Blogs */}
        <div>
            <h3 className='px-4 mt-20 text-2xl font-semibold'>Latest Blog</h3>
            <div>
                {
                    popularBlogs.slice(6, 10).map(blog => <div key={blog.id} className='px-4 my-5 border-b-2 border-spacing-2'>
                        <h4 className='mb-2 font-medium'>{blog.title}</h4>
                        <Link to="/" className='inline-flex items-center py-1 pb-2 text-base hover:text-orange-500'>Read More <FaArrowRight className='m-1 ml-2 '/></Link>
                    </div>)
                }
            </div>
        </div>
    </div>
  )
}

export default SideBar