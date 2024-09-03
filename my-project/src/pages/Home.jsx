import React from 'react'
import Banner from '../components/Banner';
import BlogPage from '../components/BlogPage';

const Home = () => {
  return (
   <div>
    <Banner />
    <div className='mx-auto max-w-7xl'>
      <BlogPage/>
    </div>
   </div>
  )
}

export default Home;