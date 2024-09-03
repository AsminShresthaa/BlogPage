import React, { useEffect, useState } from 'react';
import BlogCards from './BlogCards';
import Pagination from './Pagination';
import CategorySelection from './CategorySelection';
import SideBar from './SideBar';

const BlogPage = () => {
    const [blogs, setBlogs] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const pageSize = 12; // blogs per page
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [activeCategory, setActiveCategory] = useState(null);

    useEffect(() => {
        async function fetchBlogs() {
            let url = `http://localhost:5000/blogs?page=${currentPage}&limit=${pageSize}`;

            // filter by category
            if (selectedCategory) {
                url += `&category=${selectedCategory}`;
            }
            const response = await fetch(url);
            const data = await response.json();
            setBlogs(data);
        }

        fetchBlogs();
    }, [currentPage, pageSize, selectedCategory]);

    // Page Changing button
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    // Category Changing
    const handleCategoryChange = (category) => {
        setSelectedCategory(category);
        setCurrentPage(1); // reset page to 1 when category is changed
        setActiveCategory(category);
    };

    return (
        <div>
            {/* Category Section */}
            <div>
                <CategorySelection onSelectCategory={handleCategoryChange} activeCategory={activeCategory} />
            </div>
            {/* Blogcard Section */}
            <div className='flex flex-col gap-12 lg:flex-row'>
                <BlogCards blogs={blogs} currentPage={currentPage} selectedCategory={selectedCategory} pageSize={pageSize} />

                {/* Sidebar Components */}
                <div>
                    <SideBar/>
                </div> 
            </div>
            {/* Pagination Section */}
            <div>
                <Pagination onPageChange={handlePageChange} currentPage={currentPage} blogs={blogs} pageSize={pageSize} />
            </div>
        </div>
    );
};

export default BlogPage;
