import React from 'react';

const Contact = () => {
  return (
    <div>
      {/* Header Section */}
      <div className='px-4 py-40 text-center text-white bg-black'>
        <h2 className='mb-5 text-5xl font-bold leading-snug lg:text-7xl'>Contact Us</h2>
      </div>

      {/* Contact Form Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-3xl px-4 mx-auto sm:px-6 lg:px-8">
          <div className="p-8 bg-white rounded-lg shadow-md">
            <h3 className="mb-6 text-2xl font-semibold text-center text-gray-900">Contact Through Here</h3>
            
            <form>
              {/* Name Input */}
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700" htmlFor="name">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Email Input */}
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700" htmlFor="email">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Subject Input */}
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700" htmlFor="subject">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="Subject"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              {/* Message Input */}
              <div className="mb-4">
                <label className="block mb-2 font-medium text-gray-700" htmlFor="message">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  placeholder="Your Message"
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="text-center">
                <button
                  type="submit"
                  className="px-6 py-3 mt-4 font-semibold text-white bg-blue-500 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
