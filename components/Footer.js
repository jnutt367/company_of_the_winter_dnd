import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-200">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="text-xl font-bold text-black hover:text-indigo-400 cursor-pointer">
          <Link href="/">Choose A Character</Link>
        </div>
        <p className="py-2 text-gray-500 sm:py-0">@Jason Nutt All rights reserved 2022</p>
      </div>
    </footer>
  );
};

export default Footer;