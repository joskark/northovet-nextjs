// components/Footer.js
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa6"; // Import social media icons

export default function Footer() {
  return (
    <footer className="bg-background text-white py-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center justify-center">
        {/* Copyright Information */}
        <div className="text-center mb-4">
          &copy; {new Date().getFullYear()} NorthoVet. Developed by Iosif
          Karkanis.
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebookF className="w-6 h-6 hover:text-teal-200" />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTwitter className="w-6 h-6 hover:text-teal-200" />
          </a>
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram className="w-6 h-6 hover:text-teal-200" />
          </a>
          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="w-6 h-6 hover:text-teal-200" />
          </a>
        </div>
      </div>
    </footer>
  );
}
