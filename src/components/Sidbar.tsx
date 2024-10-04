import Link from "next/link";
import React from "react";

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <div
      className={`fixed top-0 left-0 h-full bg-gray-50 text-black shadow-2xl transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } w-64`}
    >
      <div className="p-4">
        <h2 className="text-1xl text-black  font-bold px-10 ">Blogee Admin</h2>
        <hr/>
        <ul className="mt-3 text-black font-bold">
          <li className="mb-3 rounded hover:shadow hover:bg-blue-950  hover:text-white py-2 ">
            <Link href="#" className="px-10">Dashboard</Link>
          </li>
          <li className="mb-3 rounded hover:shadow hover:bg-blue-950  hover:text-white py-2">
            <Link href="#" className="px-10">User list</Link>
          </li>
          <li className="mb-3 rounded hover:shadow hover:bg-blue-950  hover:text-white py-2">
            <Link href="#" className="px-10">feedback list</Link>
          </li>
          <li className="mb-3 rounded hover:shadow hover:bg-blue-950 hover:text-white py-2">
            <Link href="#" className="px-10">reposrt users list</Link>
          </li>
          <li className="mb-3 rounded hover:shadow hover:bg-blue-950 hover:text-white py-2">
            <Link href="#" className="px-10">send notification</Link>
          </li>
          <li className="mb-3 rounded hover:shadow hover:bg-blue-950 hover:text-white py-2">
            <Link href="#" className="px-10">ban/unbban user</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
