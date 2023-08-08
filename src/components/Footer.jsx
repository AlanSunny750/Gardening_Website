import React from 'react';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="text-center md:text-left md:w-1/2 ml-24">
          <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
          <p className="text-sm">Have questions or need assistance? Reach out to us at info@example.com.</p>
        </div>

        <div className="flex flex-col md:flex-row md:w-1/2 items-center justify-center mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-4">
          <a href="#" className="hover:text-gray-400 text-sm">Terms of Service</a>
          <a href="#" className="hover:text-gray-400 text-sm">Privacy Policy</a>
          <a href="#" className="hover:text-gray-400 text-sm">Cookie Policy</a>
        </div>
      </div>

      <hr className="border-t border-gray-600 mt-6 mx-4" />

      <div className="container mx-auto mt-6 text-center">
        <p className="text-sm">&copy; 2023 Gardening Website. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

