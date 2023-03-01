import React from "react";
import { BookOpenIcon, UserIcon } from "@heroicons/react/24/solid";

const Sidebar = () => {
  return (
    <div className="bg-secondary text-white h-full w-64 py-6">
      <h1 className="text-2xl font-bold mb-5 p-4">Groups</h1>
      <ul>
        <button className="w-64">
          <li className="p-4 text-xl flex bg-sidebarActive bg-opacity-10">
            <BookOpenIcon className="flex h-8 w-8" aria-hidden="true" />
            <a href="#" className="ml-2">
              School
            </a>
          </li>
        </button>
        <button className="w-64">
          <li className="p-4 text-xl flex text-gray-600 hover:bg-violet-500 hover:text-white">
            <UserIcon className="flex h-8 w-8" aria-hidden="true" />
            <a href="#" className="ml-2">
              Personal
            </a>
          </li>
        </button>
      </ul>
    </div>
  );
};

export default Sidebar;
