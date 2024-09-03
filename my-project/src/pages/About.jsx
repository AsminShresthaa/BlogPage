import React from 'react';
import Asmin from '../Pictures/Asmin.jpg';
import Suprem from '../Pictures/Suprem.jpg';
import Anurag from '../Pictures/Anurag.jpg';

const About = () => {
  return (
    <div>
      {/* Header Section */}
      <div className="px-4 py-40 text-center text-white bg-black">
        <h2 className="mb-5 text-5xl font-bold leading-snug lg:text-7xl">About Us</h2>
      </div>

      {/* Introduction Section */}
      <div className="py-12 bg-gray-50">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h3 className="text-3xl font-semibold text-gray-800">Who We Are</h3>
          <p className="mt-4 text-lg text-gray-600">
            We are a team of passionate individuals dedicated to helping bloggers and website owners achieve their goals.
            Our mission is to provide high-quality services that improve site performance, enhance user experience, and drive traffic.
          </p>
        </div>
      </div>

      {/* Mission Section */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h3 className="text-3xl font-semibold text-gray-800">Our Mission</h3>
          <p className="mt-4 text-lg text-gray-600">
            Our mission is to empower content creators to share their knowledge and creativity with the world. 
            We believe in the power of blogging to connect people, spread ideas, and foster learning. 
            By providing tools and resources, we aim to make the journey of every blogger easier and more successful.
          </p>
        </div>
      </div>

      {/* Team Section */}
      <div className="py-12 bg-gray-50">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-semibold text-gray-800">Meet Our Team</h3>
            <p className="mt-4 text-lg text-gray-600">
              Our team is made up of talented and dedicated individuals who are committed to providing the best service.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mt-10 sm:grid-cols-2 lg:grid-cols-3">
            {/* Team Member 1 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
              <img className="w-32 h-32 mx-auto rounded-full" src={Asmin} alt="Team Member" />
              <div className="mt-4 text-center">
                <h4 className="text-xl font-semibold text-gray-900">Asmin Shrestha</h4>
                <p className="text-gray-600">CEO & Founder</p>
                <p className="mt-2 text-sm text-gray-500">Asmin is the visionary behind our company, leading the team with passion and dedication.</p>
              </div>
            </div>

            {/* Team Member 2 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
              <img className="w-32 h-32 mx-auto rounded-full" src={Suprem} alt="Team Member" />
              <div className="mt-4 text-center">
                <h4 className="text-xl font-semibold text-gray-900">Suprem Subedi</h4>
                <p className="text-gray-600">Chief Technology Officer</p>
                <p className="mt-2 text-sm text-gray-500">Suprem is our tech guru, ensuring our services are top-notch and up to date with the latest technologies.</p>
              </div>
            </div>

            {/* Team Member 3 */}
            <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-lg">
              <img className="w-32 h-32 mx-auto rounded-full" src={Anurag} alt="Team Member" />
              <div className="mt-4 text-center">
                <h4 className="text-xl font-semibold text-gray-900">Anurag Rimal</h4>
                <p className="text-gray-600">Head of Marketing</p>
                <p className="mt-2 text-sm text-gray-500">Anurag is the creative force behind our marketing efforts, making sure we reach our audience effectively.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="py-12 bg-white">
        <div className="max-w-4xl px-4 mx-auto text-center sm:px-6 lg:px-8">
          <h3 className="text-3xl font-semibold text-gray-800">Our Values</h3>
          <p className="mt-4 text-lg text-gray-600">
            Integrity, innovation, and collaboration are at the heart of what we do. We strive to uphold these values in every project we undertake.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
