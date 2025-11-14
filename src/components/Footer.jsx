import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="bg-blue-600 text-white text-center py-3 mt-auto">
      <p className="text-sm">
        © {new Date().getFullYear()} Currency Converter | Built with 💙 using React.js
      </p>
      <div className="mt-1 space-x-4">
        <Link to="/" className="hover:underline">Home</Link>
        <Link to="/about" className="hover:underline">About</Link>
      </div>
    </footer>
  );
}

export default Footer;
