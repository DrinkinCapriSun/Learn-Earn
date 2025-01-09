import React, { useState } from 'react';
import Link from 'next/link';

const MobileMenu: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="text-black p-2 focus:outline-none"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          {isOpen ? (
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

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 bg-white border-b border-gray-200 p-4 shadow-lg">
          <div className="flex flex-col space-y-4">
            <Link 
              href="/learning-hub" 
              className="text-black hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Learning Hub
            </Link>
            <Link 
              href="/career-center" 
              className="text-black hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Career Center
            </Link>
            <Link 
              href="/startup-hub" 
              className="text-black hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Startup Hub
            </Link>
            <Link 
              href="/community" 
              className="text-black hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Community
            </Link>
            <Link 
              href="/profile" 
              className="text-black hover:text-gray-900"
              onClick={() => setIsOpen(false)}
            >
              Profile
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileMenu; 