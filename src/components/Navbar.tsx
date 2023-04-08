import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession } from "next-auth/react";
import ThemeSwitcher from "./ThemeSwitcher";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { useState, useEffect } from "react";
import {
  faBars,
  faTimes,
  faUserPlus,
  faSignInAlt,
} from "@fortawesome/free-solid-svg-icons";

const Navbar: React.FC = () => {
  const { data: session, status: loading } = useSession();
  const userInitials = session?.user?.name?.match(/\b\w/g)?.join("");

  const [showMenu, setShowMenu] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleResize);
    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleMenuToggle = () => {
    setShowMenu(!showMenu);
  };
  return (
    <header className="sticky top-0 z-50 bg-slate-700 dark:bg-gray-900 shadow-md">
      <nav
        className="px-6 py-3 flex justify-between items-center w-full"
        style={{
          minHeight: "3.5rem",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {isMobile && (
          <div className="ml-auto">
            <div className="absolute items-center right-0">
              <button
                className="block md:hidden text-white focus:outline-none"
                onClick={handleMenuToggle}
              >
                <FontAwesomeIcon
                  icon={showMenu ? faTimes : faBars}
                  className="w-6 h-6"
                />
              </button>
            </div>
          </div>
        )}
        <div
          className={`md:flex justify-between items-center  w-full ${
            showMenu && isMobile ? "block" : "hidden"
          }`}
        >
          <Link href="/">
            <div className="text-lg font-bold text-white dark:text-white">
              Web3-Ambassadors
            </div>
          </Link>
          <div className={`flex ${isMobile ? "my-3 flex-col" : ""} gap-6 pl-0`}>
            <Link href="/jobs">
              <div className="text-white dark:text-gray-300 hover:text-indigo-600 flex font-serif text-lg">
                Jobs
              </div>
            </Link>
            <Link href="/company">
              <div className="text-white dark:text-gray-300 hover:text-indigo-600 font-serif text-lg">
                Company
              </div>
            </Link>
            <Link href="/talents">
              <div className="text-white dark:text-gray-300 hover:text-indigo-600 font-serif text-lg">
                Talents
              </div>
            </Link>
            <Link href="/newsletter">
              <div className="text-white dark:text-gray-300 hover:text-indigo-600 font-serif text-lg">
                Newsletter
              </div>
            </Link>
          </div>
          <div className="flex items-center space-x-3 py-1">
            <ThemeSwitcher />
            {session && (
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 flex items-center justify-center bg-blue-500 dark:bg-gray-700 rounded-full text-gray-800 dark:text-white font-bold text-sm">
                  {userInitials}
                </div>
                <button
                  onClick={() => signOut()}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                >
                  Sign out
                </button>
              </div>
            )}
            {!session && (
              <div>
                <Link href="/login">
                  <button className="text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-3 py-2 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 mr-2">
                    <FontAwesomeIcon
                      icon={faSignInAlt}
                      className="w-4 h-4 mr-2 -ml-1"
                    />
                    Sign in
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;