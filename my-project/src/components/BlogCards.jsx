import React from 'react'
import { Link } from 'react-router-dom';
import { FaUser } from 'react-icons/fa';

const BlogCards = ({blogs, currentPage, selectedCategory, pageSize}) => {
    const filteredBlogs = blogs.filter((blogs) => !selectedCategory || blogs.category ===selectedCategory).slice((currentPage -1)*pageSize, currentPage *pageSize);
    console.log(filteredBlogs);
  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-3 sm:grid-cols-2'>
        {
        filteredBlogs.map((blog) => <Link to={`/blogs/${blog.id}`} key={blog.id} className='p-5 rounded shadow-lg cursor-pointer'>
            <div>
                <img src={blog.image} alt="" className='w-full'/>
            </div>
            <h3 className='mt-4 mb-2 font-bold cursor-pointer hover:text-blue-600'>{blog.title}</h3>
            <p className='mb-2 text-gray-600'><FaUser className='inline-flex items-center mr-2'/>{blog.author}</p>
            <p className='text-sm text-gray-500'>Published:{blog.published_date}</p>
        </Link>)
    }
    </div>
  )
}

export default BlogCards