import React from 'react';
import { Link } from 'react-router';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-200 py-12">
      <div className="max-w-6xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        
        {/* Logo & Description */}
        <div className="space-y-4">
          <h1 className="text-2xl font-bold text-white">MicroLoan</h1>
          <p className="text-gray-400">
            MicroLoan is your trusted platform for instant micro loans with easy approval, low interest, and flexible repayment options.
          </p>
        </div>

        {/* Useful Links */}
        <div>
          <h2 className="text-xl font-semibold mb-4 text-white">Useful Links</h2>
          <ul className="space-y-2">
            <li>
             <Link to="/home"> <a href="#" className="hover:text-blue-400 transition">Home</a></Link>
            </li>
            <li>
              <Link to="/about-us"><p className="hover:text-blue-400 transition">About Us </p></Link>
            </li>
            <li>
             <Link to="/services"> <p  className="hover:text-blue-400 transition">Services</p></Link>
            </li>
            <li>
              <Link to="/contact-us"><p className="hover:text-blue-400 transition">Contact</p></Link>
            </li>
            <li>
              <Link to="/faq"><p className="hover:text-blue-400 transition">FAQ</p></Link>
            </li>
          </ul>
        </div>

        {/* Contact / Copyright */}
        <div className="space-y-4">
          <h2 className="text-xl font-semibold mb-4 text-white">Contact</h2>
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} MicroLoan. All rights reserved.
          </p>
          <p className="text-gray-400">
            Email: support@microloan.com
          </p>
          <p className="text-gray-400">
            Phone: +880 1234 567890
          </p>
        </div>

      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm">
        Made with ❤️ by MicroLoan
      </div>
    </footer>
  );
};

export default Footer;
