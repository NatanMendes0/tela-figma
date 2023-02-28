import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-secondary text-white h-screen w-64 px-4 py-8">
      <h1 className="text-l font-bold mb-4 ml-2">Groups</h1>
      <ul>
        <li className="mb-5 text-xl inline-flex items-center rounded-sm border-b-2 border-complement px-1 pt-1 font-medium text-white hover:bg-gray-700 hover:text-white ">
          <a href="#" className="hover:text-gray-300">
            Link 1
          </a>
        </li>
        <li className="mb-5 text-xl text-gray-600 hover:bg-gray-50 hover:text-gray-900 group flex items-center rounded-md px-2 py-2">
          <a href="#" className="hover:text-gray-300">
            Link 2
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;