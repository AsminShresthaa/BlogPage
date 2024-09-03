import React from 'react';

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
    const categories = ["Startups", "Security", "AI", "Apps", "Tech"];

    return (
        <div className='flex flex-wrap items-start px-4 py-5 mb-8 text-gray-900 border-b-2 lg:space-x-16'>
            <button 
                onClick={() => onSelectCategory(null)} 
                className={`lg:ml-12 ${activeCategory ? "" : "active-button"}`}>
                All
            </button>
            {
                categories.map((category) => (
                    <button
                        onClick={() => onSelectCategory(category)}
                        className={`mr-2 space-x-16 ${activeCategory === category ? "active-button" : ""}`}
                        key={category}>
                        {category}
                    </button>
                ))
            }
        </div>
    );
};

export default CategorySelection;
