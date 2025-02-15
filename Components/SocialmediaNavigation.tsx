import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const SocialMediaNav = () => {
  return (
    <div className="flex space-x-4 mt-4 mb-2 ">
      {/* Facebook */}
      <a
        href="https://facebook.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
        aria-label="Facebook"
      >
        <FaFacebook size={24} />
      </a>
      {/* Twitter */}
      <a
        href="https://twitter.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-400 hover:text-blue-600 transition-colors duration-300"
        aria-label="Twitter"
      >
        <FaTwitter size={24} />
      </a>
      {/* Instagram */}
      <a
        href="https://instagram.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-500 hover:text-pink-700 transition-colors duration-300"
        aria-label="Instagram"
      >
        <FaInstagram size={24} />
      </a>
      {/* LinkedIn */}
      <a
        href="https://linkedin.com"
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-700 hover:text-blue-900 transition-colors duration-300"
        aria-label="LinkedIn"
      >
        <FaLinkedin size={24} />
      </a>
    </div>
  );
};

export default SocialMediaNav;
