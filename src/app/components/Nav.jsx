"use client";
import { useState } from "react";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";
import Image from "next/image";
import { Bars3Icon, Bars3BottomLeftIcon } from "@heroicons/react/24/solid";
import JoelPicture from "/public/images/joel-picture.png";
import Tooltip from "./Tooltip";

const navItems = {
  "/": {
    name: "Home",
  },
  "/work": {
    name: "Work",
  },
  "/blog": {
    name: "Blog",
  },
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="w-full px-0 py-5 fade" id="nav">
      <div className="flex flex-row items-center justify-between space-x-0">
        <Link href="/">
          <Tooltip text="Joel Bello">
            <Image
              className="w-10 h-10 rounded-full ring-2 ring-gray-200 dark:ring-gray-500"
              src={JoelPicture}
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </Tooltip>
        </Link>
        <div className="hidden md:flex p-2 flex-row items-center rounded-full bg-gray-100 dark:bg-gray-700">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="transition-all hover:text-customBackground dark:hover:text-customDarkBackground flex align-middle relative py-1 px-2"
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleMenu} className="focus:outline-none mb-4">
            {isOpen ? (
              <Bars3BottomLeftIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
        <div>
          <ThemeSwitcher />
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden mt-2 bg-gray-100 dark:bg-gray-700 rounded-lg p-4">
          {Object.entries(navItems).map(([path, { name }]) => (
            <Link
              key={path}
              href={path}
              className="block transition-all hover:text-customDarkBackground dark:hover:text-customBackground py-1"
              onClick={toggleMenu}
            >
              {name}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
