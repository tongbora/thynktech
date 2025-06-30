"use client";
import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function NavbarPro() {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
  };

  return (
    <div className="flex flex-col backdrop-blur-md bg-white/0 sticky pb-3.5 top-0 z-50 border-b-1 font-bold border-gray-500 dark:border-gray-400 w-full">
      {/* Main navbar */}
      <div className="flex flex-row justify-between items-center px-4 sm:px-6 lg:px-10 py-3 w-full">
        {/* Desktop Search - Hidden on mobile */}
        <div className="hidden md:flex items-center gap-4 max-w-sm w-full">
          <label htmlFor="Search" className="w-full">
            <div className="relative">
              <input
                type="text"
                id="Search"
                placeholder="Search..."
                aria-label="Search"
                className="w-full py-2 px-4 rounded-full border-1 border-gray-900 dark:border-gray-200 pe-10 shadow-sm text-sm bg-white dark:bg-black text-gray-900 dark:text-white"
              />
              <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                <button
                  type="button"
                  aria-label="Submit"
                  className="rounded-full p-1.5 text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </button>
              </span>
            </div>
          </label>
        </div>

        {/* Mobile Search Button - Visible only on mobile */}
        <div className="flex md:hidden">
          <button
            onClick={toggleSearch}
            className="rounded-full p-2 text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle search"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
              />
            </svg>
          </button>
        </div>

        {/* Spacer for mobile to push avatar to right */}
        <div className="flex-1 md:hidden"></div>

        {/* Avatar - Always visible */}
        <div className="flex items-center">
          <Avatar className="h-8 w-8 sm:h-10 sm:w-10">
            <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
            <AvatarFallback className="text-xs sm:text-sm">CN</AvatarFallback>
          </Avatar>
        </div>
      </div>

      {/* Mobile Search Bar - Collapsible */}
      {isSearchOpen && (
        <div className="md:hidden px-4 pb-3 border-t border-gray-200 dark:border-gray-700">
          <div className="pt-3">
            <label htmlFor="MobileSearch" className="w-full">
              <div className="relative">
                <input
                  type="text"
                  id="MobileSearch"
                  placeholder="Search..."
                  aria-label="Search"
                  className="w-full py-2 px-4 rounded-full border-1 border-gray-900 dark:border-gray-200 pe-10 shadow-sm text-sm bg-white dark:bg-black text-gray-900 dark:text-white"
                  autoFocus
                />
                <span className="absolute inset-y-0 right-2 grid w-8 place-content-center">
                  <button
                    type="button"
                    aria-label="Submit"
                    className="rounded-full p-1.5 text-gray-700 dark:text-gray-300 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="size-4"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                      />
                    </svg>
                  </button>
                </span>
              </div>
            </label>
          </div>
        </div>
      )}
    </div>
  );
}
