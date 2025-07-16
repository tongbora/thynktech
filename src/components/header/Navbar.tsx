"use client";
import { ModeToggle } from "../button/ModeToggle";
import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { getUserProfile } from "@/services/auth";
import { BorderBeam } from "@/components/magicui/border-beam";
import { UserProfile } from "@/types/user";
import Profile from "../profile/Profile";

export default function Navbar() {
  const [profile, setProfile] = useState<UserProfile | null>(null);
  const router = useRouter();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      getUserProfile(token).then(setProfile).catch(console.error);
    }
  }, []);

  const handleLoginClick = () => {
    router.push("/sign-in");
  };

  const handleRegisterClick = () => {
    router.push("/register");
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="backdrop-blur-md bg-white/0 sticky w-full top-0 z-50 border-b border-black dark:border-white/100">
      <div className="mx-auto max-w-screen-7xl px-4 py-2 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <Link
              className="block"
              href={profile ? "/dashboard" : "/"}
              onClick={closeMobileMenu}
            >
              <Image src="/logo/3.png" alt="Logo" width={100} height={10} />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <Link
                    className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="/products"
                  >
                    Product
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75"
                    href="#"
                  >
                    Blog
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative rounded-full">
              <ModeToggle />
              <BorderBeam duration={6} size={30} />
            </div>

            {profile && (
              <Link href="/dashboard">
                <Profile avatar={profile?.avatar} userName={profile?.name} />
              </Link>
            )}

            {/* Desktop Login/Register Buttons - Show only if not logged in */}
            {!profile && (
              <div className="hidden md:flex sm:gap-4">
                <button
                  className="bg-[#536dff] text-white rounded-full px-4 py-1.5 font-bold hover:bg-white hover:dark:bg-black hover:text-black dark:hover:text-white hover:border-1"
                  onClick={handleLoginClick}
                >
                  Login
                </button>

                <button
                  className="text-black border-1 border-gray-800 dark:border-b-gray-200 dark:text-white rounded-full px-4 py-1.5 font-medium hover:bg-[#536dff] hover:text-white hover:dark:text-white hover:border-0"
                  onClick={handleRegisterClick}
                >
                  Register
                </button>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="block md:hidden">
            <button
              className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 dark:bg-gray-800 dark:text-white dark:hover:text-white/75"
              onClick={toggleMobileMenu}
              aria-label="Toggle mobile menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d={
                    isMobileMenuOpen
                      ? "M6 18L18 6M6 6l12 12"
                      : "M4 6h16M4 12h16M4 18h16"
                  }
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-gray-200 dark:border-gray-700">
            <nav className="flex flex-col space-y-4 pt-4">
              <Link
                className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 px-2 py-1"
                href="/products"
                onClick={closeMobileMenu}
              >
                Product
              </Link>
              <Link
                className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 px-2 py-1"
                href="#"
                onClick={closeMobileMenu}
              >
                Services
              </Link>
              <Link
                className="text-gray-900 transition hover:text-gray-500/75 dark:text-white dark:hover:text-white/75 px-2 py-1"
                href="#"
                onClick={closeMobileMenu}
              >
                Blog
              </Link>

              {/* Mobile Login/Register Buttons - Show only if not logged in */}
              {!profile && (
                <div className="flex flex-col space-y-2 pt-4">
                  <button
                    className="bg-[#536dff] text-white rounded-full px-4 py-2 font-bold hover:bg-white hover:dark:bg-black hover:text-black dark:hover:text-white hover:border-1 w-full"
                    onClick={() => {
                      handleLoginClick();
                      closeMobileMenu();
                    }}
                  >
                    Login
                  </button>
                  <button
                    className="text-black border-1 border-gray-800 dark:border-b-gray-200 dark:text-white rounded-full px-4 py-2 font-medium hover:bg-[#536dff] hover:text-white hover:dark:text-white hover:border-0 w-full"
                    onClick={() => {
                      handleRegisterClick();
                      closeMobileMenu();
                    }}
                  >
                    Register
                  </button>
                </div>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
