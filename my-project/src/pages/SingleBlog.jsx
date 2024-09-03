import React from 'react'
import { useLoaderData } from 'react-router-dom';
import {FaUser} from "react-icons/fa";
import {FaClock} from "react-icons/fa6";
import SideBar from '../components/SideBar';

const SingleBlog = () => {
    const data = useLoaderData();
    const {title, image, category, author, published_date, reading_time, content} = data[0];

  return (
    <div>
      <div className='px-4 py-40 text-center text-white bg-black'>
      <h2 className='mb-5 text-5xl font-bold leading-snug lg:text-7xl'>Single Blog Page</h2>
      </div>
      {/* Blog details */}
      <div className='flex flex-col gap-12 mx-auto my-12 md:flex-row max-w-7xl'>
        <div className='mx-auto lg:w-3/4'>
        <div>
            <img src={image} alt="" className='w-full mx-auto rounded'/>
        </div>    
        <h2 className='mb-4 text-3xl font-bold text-blue-500 cursor-pointer'>{title}</h2>
        <p className='mb-3 text-gray-600'><FaUser className='inline-flex items-center mr-2'/> {author} | {published_date}</p>
        <p className='mb-3 text-gray-600'><FaClock className='inline-flex items-center mr-2'/> {reading_time}</p>   
        <p className='mb-6 text-base text-gray-600'>{content}</p>
        <div className='text-base text-gray-600'>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rerum beatae quis nam aspernatur! Aut repellat iste ad modi doloremque odit dignissimos minima illo voluptatem quis voluptate, nesciunt sequi totam.
            Sed cupiditate eveniet ab itaque, optio minus placeat suscipit vero quo in? Quisquam repellendus cupiditate quibusdam, ipsam minima debitis quidem laudantium similique a sapiente! Possimus delectus eaque iste praesentium fugit.
            Nihil earum obcaecati impedit voluptate error dicta nemo perspiciatis natus officiis vel. Non voluptatibus iusto nesciunt ipsam rem recusandae odit, quisquam cupiditate delectus? Reprehenderit accusantium non sed libero quae esse.
            At alias ratione fugiat aspernatur in maiores accusantium tempore? Aliquid voluptatibus sunt saepe placeat repellendus nostrum cupiditate illo ipsa. Repellat nam soluta animi repudiandae, sapiente reprehenderit perspiciatis omnis accusantium commodi.</p> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rerum beatae quis nam aspernatur! Aut repellat iste ad modi doloremque odit dignissimos minima illo voluptatem quis voluptate, nesciunt sequi totam.
            Sed cupiditate eveniet ab itaque, optio minus placeat suscipit vero quo in? Quisquam repellendus cupiditate quibusdam, ipsam minima debitis quidem laudantium similique a sapiente! Possimus delectus eaque iste praesentium fugit.
            Nihil earum obcaecati impedit voluptate error dicta nemo perspiciatis natus officiis vel. Non voluptatibus iusto nesciunt ipsam rem recusandae odit, quisquam cupiditate delectus? Reprehenderit accusantium non sed libero quae esse.
            At alias ratione fugiat aspernatur in maiores accusantium tempore? Aliquid voluptatibus sunt saepe placeat repellendus nostrum cupiditate illo ipsa. Repellat nam soluta animi repudiandae, sapiente reprehenderit perspiciatis omnis accusantium commodi.</p> <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rerum beatae quis nam aspernatur! Aut repellat iste ad modi doloremque odit dignissimos minima illo voluptatem quis voluptate, nesciunt sequi totam.
            Sed cupiditate eveniet ab itaque, optio minus placeat suscipit vero quo in? Quisquam repellendus cupiditate quibusdam, ipsam minima debitis quidem laudantium similique a sapiente! Possimus delectus eaque iste praesentium fugit.
            Nihil earum obcaecati impedit voluptate error dicta nemo perspiciatis natus officiis vel. Non voluptatibus iusto nesciunt ipsam rem recusandae odit, quisquam cupiditate delectus? Reprehenderit accusantium non sed libero quae esse.
            At alias ratione fugiat aspernatur in maiores accusantium tempore? Aliquid voluptatibus sunt saepe placeat repellendus nostrum cupiditate illo ipsa. Repellat nam soluta animi repudiandae, sapiente reprehenderit perspiciatis omnis accusantium commodi.</p> <br/>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto veritatis minus similique, repellendus commodi sapiente veniam enim, earum error ipsam nemo maxime molestias atque eveniet labore sunt reiciendis dolore quam?
            Atque, odit facere nostrum sapiente modi officiis iste, hic molestias fuga commodi suscipit nisi corrupti magni exercitationem nihil illo, aspernatur sequi accusantium quia aut quo beatae! Laboriosam suscipit labore deserunt.
            </p>
        </div>
        </div>
        
        <div className='lg:w-1/2'>
            <SideBar />
        </div>
      </div>
    </div>
  )
}

export default SingleBlog