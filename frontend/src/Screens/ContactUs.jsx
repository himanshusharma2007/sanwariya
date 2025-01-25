import React from 'react';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F8F5F0] to-[#D4AF37] flex items-center justify-center">
      <div className="flex flex-col md:flex-row w-full h-full max-w-7xl shadow-lg rounded-lg">
        {/* Left Side (Form) */}
        <div className="flex-1 bg-white p-12 md:p-16 space-y-8 rounded-l-lg">
          <h2 className="text-4xl font-bold text-[#C0392B] text-center md:text-left mb-6">Contact Us</h2>
          
          <form className="space-y-6">
            <div className="mb-6">
              <label htmlFor="name" className="block text-lg font-medium text-[#6F4E37]">Full Name</label>
              <input
                type="text"
                id="name"
                className="outline-none mt-2 w-full p-4 border-2 border-[#D4AF37] rounded-lg focus:ring-2 focus:ring-[#E68A00] focus:border-[#E68A00] text-gray-700 transition duration-300"
                placeholder="Enter your name"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="email" className="block text-lg font-medium text-[#6F4E37]">Email Address</label>
              <input
                type="email"
                id="email"
                className="outline-none mt-2 w-full p-4 border-2 border-[#D4AF37] rounded-lg focus:ring-2 focus:ring-[#E68A00] focus:border-[#E68A00] text-gray-700 transition duration-300"
                placeholder="Enter your email"
                required
              />
            </div>
            
            <div className="mb-6">
              <label htmlFor="message" className="block text-lg font-medium text-[#6F4E37]">Message</label>
              <textarea
                id="message"
                rows="6"
                className="outline-none mt-2 w-full p-4 border-2 border-[#D4AF37] rounded-lg focus:ring-2 focus:ring-[#E68A00] focus:border-[#E68A00] text-gray-700 transition duration-300"
                placeholder="Your message here"
                required
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full py-3 text-lg font-semibold bg-[#E68A00] text-white rounded-md hover:bg-[#D4AF37] transition duration-300 transform hover:scale-105"
            >
              Send Message
            </button>
          </form>

          <div className="text-center text-sm text-[#6F4E37] mt-4">
            <p>We’ll get back to you as soon as possible.</p>
          </div>
        </div>

        {/* Right Side (Image) */}
        <div className="flex-1 bg-cover bg-center rounded-r-lg" 
          style={{
            backgroundImage: "url('https://media.istockphoto.com/id/516984446/photo/varanasi-burning-grounds-at-night.jpg?s=612x612&w=0&k=20&c=CbX2ZyMPKpOQMBXyth3FIDSR0yqciYmfKfSYtBJeEDs=')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="bg-black bg-opacity-50 w-full h-full flex items-center justify-center">
            <h3 className="text-white text-3xl font-semibold text-center">Reach Out to Us</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
