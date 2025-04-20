import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-emerald-950 text-white py-8 ">
      <div className="max-w-7xl mx-auto px-4">
        {/* Footer top - Contact and Social Media */}
        <div className="flex flex-col md:flex-row justify-between mb-6">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Veg Cart</h3>
            <p className="text-lg">Fresh Veggies Delivered To Your Doorstep</p>
          </div>

          <div className="flex space-x-6">
            {/* Social Media Links */}
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-200">
              <i className="fab fa-facebook"></i> {/* You can add FontAwesome icon here */}
              Facebook
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-200">
              <i className="fab fa-twitter"></i> {/* Add FontAwesome for Twitter */}
              Twitter
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-xl hover:text-green-200">
              <i className="fab fa-instagram"></i> {/* Add FontAwesome for Instagram */}
              Instagram
            </a>
          </div>
        </div>

        {/* Footer bottom - Quick Links */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-sm">
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul>
              <li><a href="#" className="hover:text-green-200">About Us</a></li>
              <li><a href="#" className="hover:text-green-200">Careers</a></li>
              <li><a href="#" className="hover:text-green-200">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-green-200">Terms of Service</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Customer Service</h4>
            <ul>
              <li><a href="#" className="hover:text-green-200">Contact Us</a></li>
              <li><a href="#" className="hover:text-green-200">Returns</a></li>
              <li><a href="#" className="hover:text-green-200">Shipping Information</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Quick Links</h4>
            <ul>
              <li><a href="#" className="hover:text-green-200">Shop</a></li>
              <li><a href="#" className="hover:text-green-200">Our Products</a></li>
              <li><a href="#" className="hover:text-green-200">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-2">Newsletter</h4>
            <p>Stay updated with our latest offers</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full p-2 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button className="mt-2 w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-green-500">
              Subscribe
            </button>
          </div>
        </div>
      </div>

      {/* Footer bottom bar */}
      <div className="text-center py-4 text-sm bg-emerald-950">
        <p>&copy; {new Date().getFullYear()} Veg Cart. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
