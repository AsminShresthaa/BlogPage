import React from 'react';

// Define the service details including icons, titles, and descriptions
const services = [
  {
    icon: '⚡️',
    title: 'Page Optimization',
    description: 'Page Speed is one of the keys to rank. Learn how you can achieve a 100 Page Score.',
  },
  {
    icon: '📄',
    title: 'Premium Themes',
    description: 'Free + Paid highly customized, SEO optimized and ads ready Blogger themes.',
  },
  {
    icon: '📈',
    title: 'SEO Guides',
    description: 'Master Search Engine Algorithms and how they rank pages in search results.',
  },
  {
    icon: '🚚',
    title: 'Social Tricks',
    description: 'Get ready to impress your friends with the latest released social tricks series.',
  },
  {
    icon: '🔌',
    title: 'Pro Plugins',
    description: 'Unique social sharing plugins, custom designs and contact page builds.',
  },
  {
    icon: '📊',
    title: 'Blogging Tools',
    description: 'Learn what it takes to become a smart blogger and how you can generate revenues.',
  },
];

const Services = () => {
  return (
    <div>
      {/* Header section */}
      <div className="px-4 py-40 text-center text-white bg-black">
        <h2 className="mb-5 text-5xl font-bold leading-snug lg:text-7xl">Service Page</h2>
      </div>

      {/* Services section */}
      <div className="py-12 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="mt-2 text-3xl font-extrabold leading-8 tracking-tight text-gray-900 sm:text-4xl">
              We can help you with anything related to Blogging.
            </p>
          </div>
          
          {/* Services grid */}
          <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div key={index} className="pt-6">
                <div className="flow-root px-6 pb-8 transition-shadow duration-200 bg-white rounded-lg shadow-md hover:shadow-lg">
                  <div className="flex flex-col items-center -mt-6"> {/* Center content */}
                    {/* Centered Icon */}
                    <div className="flex items-center justify-center p-3 bg-blue-500 rounded-full shadow-lg">
                      <span className="text-2xl text-white">{service.icon}</span>
                    </div>
                    {/* Service title and description */}
                    <h3 className="mt-8 text-lg font-medium leading-6 text-center text-gray-900">{service.title}</h3>
                    <p className="mt-5 text-base text-center text-gray-500">{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
