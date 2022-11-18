import { NextPage } from "next";
import Link from "next/link";
import React from "react";

import { HiBars3, HiOutlineHomeModern } from "react-icons/hi2";

type Props = {
  children?: React.ReactNode;
};

const Navbar = (props: Props) => {
  return (
    <nav className="flex justify-between items-center text-lg font-semibold shadow-md p-4 md:px-8">
      <div className="flex space-x-2">
        <HiBars3 className="h-8 w-8 md:hidden" />
        <label className="flex items-center">
          <span className="bg-indigo-500 flex items-center py-1  text-white p-2">
            <HiOutlineHomeModern className="h-6 w-6" />
          </span>
          Bayt Estate
        </label>
      </div>

      <div className="hidden md:block text-slate-600">
        <ul className="flex space-x-2 items-center">
          <li className="hover:bg-slate-200 hover:text-black rounded-md p-2">
            <Link href="/">Buy</Link>
          </li>
          <li className="hover:bg-slate-200 hover:text-black rounded-md p-2">
            <Link href="/">Rent</Link>
          </li>
          <li className="hover:bg-slate-200 hover:text-black rounded-md p-2">
            <Link href="/">Find Agents</Link>
          </li>
          <li className="hover:bg-slate-200 hover:text-black rounded-md p-2">
            <Link href="/">Contact</Link>
          </li>
        </ul>
      </div>

      <div className="space-x-3">
        <button className="btn-primary">Sign In</button>
        <button className="text-slate-600 hover:bg-slate-200 rounded-md p-2">Join</button>
      </div>
    </nav>
  );
};

export default Navbar;
