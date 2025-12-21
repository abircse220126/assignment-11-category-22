import React from 'react';

const ContactUs = () => {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">

      {/* Hero Section */}
      <section className="bg-blue-50 dark:bg-gray-800 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Us
          </h1>
          <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto">
            Have questions about loans or need support? Our team is here to help you every step of the way.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center">
          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Email Us
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              support@microloan.com
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Call Us
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              +880 1234 567890
            </p>
          </div>

          <div className="bg-gray-100 dark:bg-gray-800 p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="text-xl font-semibold mb-2 text-blue-600">
              Office Address
            </h3>
            <p className="text-gray-700 dark:text-gray-300">
              Dhaka, Bangladesh
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="bg-gray-100 dark:bg-gray-800 py-20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white dark:bg-gray-900 p-8 rounded shadow">
            <h2 className="text-3xl font-bold mb-6 text-center">
              Send Us a Message
            </h2>

            <form className="grid gap-6">
              <div>
                <label className="block mb-2 font-medium">Full Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-600 bg-transparent"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Email Address</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-600 bg-transparent"
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">Message</label>
                <textarea
                  rows="4"
                  placeholder="Write your message..."
                  className="w-full px-4 py-2 border rounded focus:outline-none focus:border-blue-600 bg-transparent"
                ></textarea>
              </div>

              <button
                type="submit"
                className="bg-blue-600 text-white py-3 rounded hover:bg-blue-500 transition font-semibold"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

    </div>
  );
};

export default ContactUs;
