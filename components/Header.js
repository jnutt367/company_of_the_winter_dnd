import React, { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import {useRouter} from 'next/router';
import * as Realm from "realm-web";
import {
    UserGroupIcon,
    MenuIcon,
    SearchIcon,
} from '@heroicons/react/outline';
import Group from "./Group";

const Header = () => {
    const router = useRouter();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isGroupOpen, setIsGroupOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");
    const [autoComplete, setAutoComplete] = useState([]);

    useEffect(async () => {
      if (searchTerm.length) {
        // add your Realm App Id to the .env.local file
        const REALM_APP_ID = "characters-eymql";
      const app = new Realm.App({ id: REALM_APP_ID });
      const credentials = Realm.Credentials.anonymous();
        try {
          const user = await app.logIn(credentials);
          const searchAutoComplete = await user.functions.searchAutoComplete(
            searchTerm
          );
          setAutoComplete(() => searchAutoComplete);
        } catch (error) {
          console.error(error);
        }
      } else {
        setAutoComplete([]);
      }
    }, [searchTerm]);
  


    const handleSubmit = (e) => {
      e.preventDefault();
  
      setSearchTerm("");
      router.push({
        pathname: `/search/${searchTerm}`,
      });
    };
  
    const handleSelect = (id) => {
      setSearchTerm("");
      router.push({
        pathname: `/products/${id}`,
      });
    };

    return (
        <>
       <header>
        <div className="container font-mono mx-auto px-6 py-3">
          <div className="flex text-green items-center justify-between">
            <Link href="">
              <div className="font-mono w-full text-green-300 text-2xl font-semibold cursor-pointer">
               D&D Character Examples
              </div>
            </Link>
            <div className="flex items-center justify-end w-full">
              <button className="text-green-600 hover: text-green-300 focus:outline-none mx-4 sm:mx-0">
                <UserGroupIcon
                  onClick={() => setIsGroupOpen(!isGroupOpen)}
                  className="h-5 w-5"
                />
              </button>

              <div className="flex sm:hidden">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  type="button"
                  className="text-aqua hover:text-green-500 focus:outline-none focus:text-gray-500"
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
                <Link href="/characters">Choose Character</Link>
              </div>
              <a
                className="mt-3 text-indigo hover:underline sm:mx-3 sm:mt-0"
                href="https://roll-a-rama-random-encounters.vercel.app/"
              >
                Create Character
              </a>
             
              <a
                className="mt-3 text-green hover:underline sm:mx-3 sm:mt-0"
                href="https://www.lightheartadventures.com/dungeon-master-tips/ten-random-dd-encounter-ideas/"
              >
                Choose Adventure
              </a>
              <a
                className="mt-3 text-indigo hover:underline sm:mx-3 sm:mt-0"
                href="https://inkarnate.com/m/kO2Xr6--angelica-overview-landscape-map/"
              >
                Maps
              </a>
              
            </div>
          </nav>

          <div className="relative mt-6 max-w-lg mx-auto">
            <span className="absolute inset-y-0 left-0 pl-3 flex items-center">
              <SearchIcon className="h-5 w-5" />
            </span>
            <form onSubmit={handleSubmit}>
            <input
              className="w-full border rounded-md pl-10 pr-4 py-4 text-green-500 focus:border-green-500 focus:outline-green-500 focus:shadow-outline"
              type="text"
              placeholder="Search"
              onChange={(e) => setSearchTerm(e.target.value)}      
              value={searchTerm}       
            />
            </form>
          </div>
        </div>
      </header>
      <Group isGroupOpen={isGroupOpen} setIsGroupOpen={setIsGroupOpen} />
    </>
  );
};

export default Header;
