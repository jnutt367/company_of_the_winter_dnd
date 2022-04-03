import React from "react";

const Pagination = () => {
  return (
    <div className="flex justify-center">
      <div className="flex rounded-md mt-8">
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-gray-600 border border-green-200 text-white-700 border-r-0 ml-0 rounded-l hover:bg-green-500 hover:text-white"
        >
          <span>Previous</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-gray-600 border border-green-200 text-white-700 border-r-0 ml-0 rounded-l hover:bg-green-500 hover:text-white"
        >
          <span>1</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-gray-600 border border-green-200 text-white-700 border-r-0 ml-0 rounded-l hover:bg-green-500 hover:text-white"
        >
          <span>2</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-gray-600 border border-green-200 text-white-700 border-r-0 ml-0 rounded-l hover:bg-green-500 hover:text-white"
        >
          <span>3</span>
        </a>
        <a
          href="#"
          className="py-2 px-4 leading-tight bg-gray-600 border border-green-200 text-white-700 border-r-0 ml-0 rounded-l hover:bg-green-500 hover:text-white"
        >
          <span>Next</span>
        </a>
      </div>
    </div>
  );
};

export default Pagination;