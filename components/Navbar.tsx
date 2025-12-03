'use client';

import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';
import { isAuthenticated, getUser, logout } from '@/lib/auth';
import { useCart } from '@/context/CartContext';
import Cart from './Cart';

export default function Navbar() {
  const pathname = usePathname();
  const router = useRouter();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState<any>(null);
  const [showExploreMenu, setShowExploreMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showBanner, setShowBanner] = useState(true);
  const [timeLeft, setTimeLeft] = useState({ hours: 14, minutes: 20, seconds: 36 });
  const { cartCount } = useCart();
  let exploreMenuTimeout: NodeJS.Timeout;

  useEffect(() => {
    setIsLoggedIn(isAuthenticated());
    setUser(getUser());
  }, [pathname]);

  // Load banner state from localStorage
  useEffect(() => {
    const bannerDismissed = localStorage.getItem('bannerDismissed');
    if (bannerDismissed === 'true') {
      setShowBanner(false);
    }
  }, []);

  // Countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        let { hours, minutes, seconds } = prev;
        
        if (seconds > 0) {
          seconds--;
        } else if (minutes > 0) {
          minutes--;
          seconds = 59;
        } else if (hours > 0) {
          hours--;
          minutes = 59;
          seconds = 59;
        } else {
          // Timer reached 0
          clearInterval(timer);
          return { hours: 0, minutes: 0, seconds: 0 };
        }
        
        return { hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleCloseBanner = () => {
    setShowBanner(false);
    localStorage.setItem('bannerDismissed', 'true');
  };

  const handleExploreMouseEnter = () => {
    clearTimeout(exploreMenuTimeout);
    setShowExploreMenu(true);
  };

  const handleExploreMouseLeave = () => {
    exploreMenuTimeout = setTimeout(() => {
      setShowExploreMenu(false);
    }, 200);
  };

  const handleLogout = () => {
    logout();
    setIsLoggedIn(false);
    setUser(null);
    router.push('/');
  };

  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50">
      {/* Promo Banner */}
      {showBanner && (
        <div className="bg-cyan-100 text-center py-3 px-4 relative">
          <button 
            onClick={handleCloseBanner}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-900 transition"
            aria-label="Close banner"
          >
            ✕
          </button>
          <p className="text-sm">
            <span className="font-semibold">Another chance to save</span> | Our Cyber Sale is over, but you can still get courses from $12.99.
            <span className="ml-2">
              Ends in {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s.
            </span>
          </p>
        </div>
      )}

      {/* Main Navbar */}
      <div className="max-w-[1340px] mx-auto px-4 md:px-6 py-3">
        <div className="flex items-center justify-between gap-4">
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 text-gray-700 hover:text-purple-700"
            onClick={() => setShowMobileMenu(!showMobileMenu)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {showMobileMenu ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <svg
              className="w-20 h-7 md:w-24 md:h-8"
              viewBox="0 0 91 34"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14.05 8.112L7.024 4.056 7.024 4.056C6.71644 3.89948 6.37094 3.81679 6.02 3.817 6.02 3.817 6.02 3.817 6.02 3.817 5.67 3.817 5.32 3.9 5.012 4.056L5.012 4.056-0.063 7.135V27.87L5.012 30.948 5.012 30.948C5.32 31.105 5.67 31.188 6.02 31.188 6.37 31.188 6.72 31.105 7.027 30.948L7.027 30.948 14.05 26.892V8.112zM5.5 26.867L2 25.146V8.118L5.5 9.867V26.867zM12.55 25.145L8.062 27.435V8.118L12.55 5.828V25.145z"
                fill="#A435F0"
              />
              <text
                x="20"
                y="24"
                fill="#000"
                fontSize="20"
                fontWeight="bold"
                fontFamily="Arial, sans-serif"
              >
                udemy
              </text>
            </svg>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-4 flex-1 ml-6">
            <div 
              className="relative"
              onMouseEnter={handleExploreMouseEnter}
              onMouseLeave={handleExploreMouseLeave}
            >
              <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-700 transition">
                Explore
              </button>
              
              {/* Explore Dropdown Menu */}
              {showExploreMenu && (
                <div className="absolute left-0 top-full pt-2 w-64 z-50">
                  <div className="bg-white border border-gray-200 rounded-lg shadow-xl py-2">
                  <div className="px-4 py-3">
                    <h3 className="text-xs font-semibold text-gray-500 uppercase mb-3">
                      Explore Udemy
                    </h3>
                    <div className="space-y-1">
                      <Link
                        href="/categories/development"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded transition"
                      >
                        Development
                      </Link>
                      <Link
                        href="/categories/business"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded transition"
                      >
                        Business
                      </Link>
                      <Link
                        href="/categories/finance"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded transition"
                      >
                        Finance & Accounting
                      </Link>
                      <Link
                        href="/categories/it-software"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded transition"
                      >
                        IT & Software
                      </Link>
                      <Link
                        href="/categories/office-productivity"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded transition"
                      >
                        Office Productivity
                      </Link>
                      <Link
                        href="/categories/personal-development"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded transition"
                      >
                        Personal Development
                      </Link>
                      <Link
                        href="/categories/design"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded transition"
                      >
                        Design
                      </Link>
                      <Link
                        href="/categories/marketing"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded transition"
                      >
                        Marketing
                      </Link>
                      <Link
                        href="/categories/lifestyle"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded transition"
                      >
                        Lifestyle
                      </Link>
                      <Link
                        href="/categories/photography"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded transition"
                      >
                        Photography & Video
                      </Link>
                      <Link
                        href="/categories/health-fitness"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded transition"
                      >
                        Health & Fitness
                      </Link>
                      <Link
                        href="/categories/music"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded transition"
                      >
                        Music
                      </Link>
                      <Link
                        href="/categories/teaching-academics"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-purple-50 hover:text-purple-700 rounded transition"
                      >
                        Teaching & Academics
                      </Link>
                    </div>
                  </div>
                </div>
                </div>
              )}
            </div>

            {/* Search Bar - Desktop */}
            <div className="hidden lg:flex flex-1 max-w-xl relative">
              <div className="relative w-full">
                <input
                  type="text"
                  placeholder="Search for anything"
                  className="w-full px-12 py-2.5 text-sm border border-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <svg
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            <Link
              href="/pricing"
              className="hidden xl:block px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-700 transition whitespace-nowrap"
            >
              Plans & Pricing
            </Link>
            <Link
              href="/business"
              className="hidden xl:block px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-700 transition whitespace-nowrap"
            >
              Udemy Business
            </Link>
            <Link
              href="/teach"
              className="hidden xl:block px-3 py-2 text-sm font-medium text-gray-700 hover:text-purple-700 transition whitespace-nowrap"
            >
              Teach on Udemy
            </Link>
          </div>

          {/* Mobile Search Icon/Expanded Search */}
          {!showMobileSearch ? (
            <button 
              onClick={() => setShowMobileSearch(true)}
              className="lg:hidden p-2 text-gray-700 hover:text-purple-700 transition"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </button>
          ) : (
            <div className="lg:hidden flex-1 flex items-center gap-2 ml-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search for anything"
                  autoFocus
                  className="w-full px-10 py-2 text-sm border border-gray-900 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
              <button 
                onClick={() => setShowMobileSearch(false)}
                className="p-2 text-gray-700 hover:text-purple-700"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          )}

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 md:gap-3">
            {/* Shopping Cart - Desktop & Mobile */}
            <button 
              onClick={() => setShowCart(true)}
              className="p-2 text-gray-700 hover:text-purple-700 transition relative"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>

            {!isLoggedIn ? (
              <>
                <Link
                  href="/login"
                  className="hidden md:block px-3 md:px-4 py-2 text-sm font-semibold text-gray-900 border border-gray-900 hover:bg-gray-50 transition"
                >
                  Log in
                </Link>
                <Link
                  href="/signup"
                  className="hidden md:block px-3 md:px-4 py-2 text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 transition"
                >
                  Sign up
                </Link>
              </>
            ) : (
              <div className="flex items-center gap-2 relative group">
                <Link href="/courses" className="p-2 text-gray-700 hover:text-purple-700 transition">
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>
                </Link>
                <div className="relative">
                  <div className="w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-semibold cursor-pointer">
                    {user?.name?.charAt(0).toUpperCase() || 'U'}
                  </div>
                  <div className="hidden group-hover:block absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg py-2 z-50">
                    <div className="px-4 py-2 border-b border-gray-200">
                      <p className="font-semibold text-sm text-gray-900">{user?.name}</p>
                      <p className="text-xs text-gray-500">{user?.email}</p>
                    </div>
                    <Link
                      href="/my-courses"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      My Courses
                    </Link>
                    <button
                      onClick={handleLogout}
                      className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      Logout
                    </button>
                  </div>
                </div>
              </div>
            )}

            {/* Globe Icon */}
            <button className="hidden lg:block p-2 text-gray-700 hover:text-purple-700 transition">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {showMobileMenu && (
          <div className="md:hidden border-t border-gray-200 mt-3 pt-3">
            {/* Mobile Search */}
            <div className="mb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for anything"
                  className="w-full px-10 py-2.5 text-sm border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <svg
                  className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </div>
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-2">
              {!isLoggedIn && (
                <>
                  <Link
                    href="/login"
                    className="block w-full px-4 py-2.5 text-center text-sm font-semibold text-gray-900 border border-gray-900 hover:bg-gray-50 transition rounded"
                  >
                    Log in
                  </Link>
                  <Link
                    href="/signup"
                    className="block w-full px-4 py-2.5 text-center text-sm font-semibold text-white bg-gray-900 hover:bg-gray-800 transition rounded"
                  >
                    Sign up
                  </Link>
                  <div className="border-t border-gray-200 my-2"></div>
                </>
              )}

              <button
                onClick={() => {
                  setShowCart(true);
                  setShowMobileMenu(false);
                }}
                className="flex items-center justify-between w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
              >
                <span>Shopping Cart</span>
                {cartCount > 0 && (
                  <span className="bg-purple-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                    {cartCount}
                  </span>
                )}
              </button>

              <Link
                href="/courses"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
              >
                Browse Courses
              </Link>
              <Link
                href="/pricing"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
              >
                Plans & Pricing
              </Link>
              <Link
                href="/business"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
              >
                Udemy Business
              </Link>
              <Link
                href="/teach"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
              >
                Teach on Udemy
              </Link>

              {isLoggedIn && (
                <>
                  <div className="border-t border-gray-200 my-2"></div>
                  <Link
                    href="/my-courses"
                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                  >
                    My Courses
                  </Link>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                  >
                    Logout
                  </button>
                </>
              )}
            </div>

            {/* Mobile Categories */}
            <div className="mt-4 pt-4 border-t border-gray-200">
              <h3 className="px-4 text-xs font-semibold text-gray-500 uppercase mb-2">
                Categories
              </h3>
              <div className="space-y-1">
                <Link
                  href="/courses?category=Software Engineering"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                >
                  Development
                </Link>
                <Link
                  href="/courses?category=Entrepreneurship"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                >
                  Business
                </Link>
                <Link
                  href="/courses?category=Graphic Design"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                >
                  Design
                </Link>
                <Link
                  href="/courses?category=Entrepreneurship"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded"
                >
                  Marketing
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Cart Component */}
      <Cart isOpen={showCart} onClose={() => setShowCart(false)} />
    </nav>
  );
}

