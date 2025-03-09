import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-center py-4 mt-auto w-full">
      <p className="text-gray-700">
        &copy; {new Date().getFullYear()} CS530 Project
      </p>
    </footer>
  );
};

export default Footer;