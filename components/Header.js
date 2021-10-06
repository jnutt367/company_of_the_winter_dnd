import React, { useState } from 'react';
import Image from "next/image";
import Link from "next/link";
import {
    UserGroupIcon,
    MenuIcon,
    SearchIcon,
} from '@heroicons/react/outline';
import Group from "./Group";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isGroupOpen, setIsGroupOpen] = useState(false);

    return (
        <>
       <header>
        <div className="container mx-auto px-6 py-3">
          <div className="flex text-green items-center justify-between">
            <Link href="/">
              <div className="font-serif w-full text-green text-2xl font-semibold cursor-pointer">
                Company of the Winter
              </div>
            </Link>
            <div className="flex items-center justify-end w-full">
              <button className="text-green focus:outline-none mx-4 sm:mx-0">
                <UserGroupIcon
                  onClick={() => setIsGroupOpen(!isGroupOpen)}
                  className="h-5 w-5"
                />
              </button>

              <div className="flex sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  type="button"
                  className="text-aqua hover:text-indigo-500 focus:outline-none focus:text-gray-500"
                  aria-label="toggle menu"
                >
                  <MenuIcon className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          <nav
            className={`${
              isMenuOpen ? "" : "hidden"
            }  sm:flex sm:justify-center sm:items-center mt-4`}
          >
            <div className="font-mono	 flex flex-col sm:flex-row">
              <div className="mt-3 text-white hover:underline sm:mx-3 sm:mt-0">
                <Link href="/">Home</Link>
              </div>
              <div className="mt-3 text-indigo hover:underline sm:mx-3 sm:mt-0">
                <Link href="/characters">NPCs & PCs</Link>
              </div>
              <a
                className="mt-3 text-indigo hover:underline sm:mx-3 sm:mt-0"
                href="#"
              >
                Story Line
              </a>
              <a
                className="mt-3 text-indigo hover:underline sm:mx-3 sm:mt-0"
                href="https://inkarnate.com/m/kO2Xr6--angelica-overview-landscape-map/"
              >
                Maps
              </a>
              <a
                className="mt-3 text-green hover:underline sm:mx-3 sm:mt-0"
                href="https://inkarnate.com/m/kO2Xr6--angelica-overview-landscape-map/"
              >
                Angelica
              </a>
            </div>
          </nav>

          <div className="relative mt-6 max-w-lg mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon className="h-5 w-5" />
            </span>

            <input
              className="w-full border rounded-md pl-10 pr-4 py-2 focus:border-indigo-500 focus:outline-none focus:shadow-outline"
              type="text"
              placeholder="Search"
            />
          </div>
        </div>
      </header>
      <Group isGroupOpen={isGroupOpen} setIsGroupOpen={setIsGroupOpen} />
    </>
  );
};

export default Header;
