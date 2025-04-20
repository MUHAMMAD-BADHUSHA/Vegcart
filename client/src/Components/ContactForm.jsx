import React from "react";
import photo from "../assets/photo2.jpg";

function ContactForm() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-cover bg-center flex items-center justify-center pt-7 pb-7 pl-7 pr-7 rounded-t-4xl"
      style={{ backgroundImage: `url(${photo})`, zIndex: "10" }}
    >
      <div className="pt-[60px] w-full flex justify-center">
        <div className="bg-gray-600/30 backdrop-blur-md p-8 rounded-lg shadow-lg max-w-lg w-full">
          <h2 className="text-2xl font-semibold text-center text-white mb-6">
            Contact Us
          </h2>
          <form action="#" method="POST">
            <div className="mb-4">
              <label htmlFor="name" className="block text-white">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your full name"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="email" className="block text-white">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter your email address"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="message" className="block text-white">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                className="w-full p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Write your message"
                required
              ></textarea>
            </div>

            <div className="flex justify-center">
              <button
                type="submit"
                className="px-6 py-3 text-white bg-emerald-500 rounded-lg hover:bg-emerald-900 transition duration-600"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactForm;
