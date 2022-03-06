import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center">
      <div className="flex rounded-md mt-8">
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-black border border-red-200 text-red-700 border-r-0 ml-0 rounded-l hover:bg-red-500 hover:text-white"
        >
          <span>Previous</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-black border border-red-600 text-red-700 border-r-0 hover:bg-red-500 hover:text-white"
        >
          <span>1</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-black border border-red-600 text-red-700 border-r-0 hover:bg-red-500 hover:text-white"
        >
          <span>2</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-black border border-red-600 text-red-700 border-r-0 hover:bg-red-500 hover:text-white"
        >
          <span>3</span>
        </a>
        <a
          href="#"
          className="py-2 px-6 leading-tight bg-black border border-red-200 text-red-700 rounded-r hover:bg-red-500 hover:text-white"
        >
          <span>Next</span>
        </a>
      </div>
    </div>
  );
};

export default Pagination;