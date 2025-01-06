import React from 'react';
import Link from 'next/link';

const StartupHub: React.FC = () => {
  return (
    <div className="font-['Inter'] bg-gray-50">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white py-4 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-bold text-black">Learn & Earn</Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/learning-hub" className="text-black hover:text-gray-900">Learning Hub</Link>
              <Link href="/career-center" className="text-black hover:text-gray-900">Career Center</Link>
              <Link href="/startup-hub" className="text-black font-semibold">Startup Hub</Link>
              <Link href="/community" className="text-black hover:text-gray-900">Community</Link>
              <Link href="/profile" className="text-black hover:text-gray-900">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="bg-white pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-black mb-4">Launch Your Startup Journey</p>
          <h1 className="text-6xl font-bold text-black mb-8">Startup Hub</h1>
          <p className="text-xl text-black mb-4">Transform your ideas into successful ventures</p>
          <p className="text-xl text-black mb-8">Connect with mentors, access resources, and find funding opportunities.</p>
          <div className="flex justify-center space-x-4">
            <a href="#ideas" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">Explore Ideas →</a>
            <a href="#mentors" className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 text-black">Find a Mentor</a>
          </div>
        </div>
      </main>

      <main className="max-w-7xl mx-auto py-12 px-4 pt-24">
        {/* Search and Filters */}
        <div className="mb-8 flex gap-4">
          <div className="flex-1">
            <input 
              type="search" 
              placeholder="Search resources and opportunities..." 
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-black text-black placeholder-gray-500"
            />
          </div>
          <button className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800">
            Search
          </button>
        </div>

        {/* Main Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Startup Ideas Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-black">Startup Ideas</h2>
            <p className="text-black mb-4">Explore trending startup ideas, market opportunities, and validation techniques.</p>
            <Link href="#" className="text-black font-medium hover:underline">Browse Ideas →</Link>
          </div>

          {/* Founder Resources Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-black">Founder Resources</h2>
            <p className="text-black mb-4">Access guides, templates, and tools for building and scaling your startup.</p>
            <Link href="#" className="text-black font-medium hover:underline">View Resources →</Link>
          </div>

          {/* Mentor Network Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-black">Mentor Network</h2>
            <p className="text-black mb-4">Connect with experienced entrepreneurs and industry experts for guidance.</p>
            <Link href="#" className="text-black font-medium hover:underline">Meet Mentors →</Link>
          </div>

          {/* Funding Opportunities Section */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-black">Funding Opportunities</h2>
            <p className="text-black mb-4">Discover investors, grants, and funding programs for your startup.</p>
            <Link href="#" className="text-black font-medium hover:underline">Find Funding →</Link>
          </div>
        </div>

        {/* Featured Section */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-black">Featured Startups</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Featured Startup */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <span className="inline-block px-2 py-1 bg-gray-100 text-black rounded-full text-sm mb-4">New</span>
              <h3 className="text-lg font-semibold mb-2 text-black">TechStart</h3>
              <p className="text-black mb-4">AI-powered startup solutions</p>
              <p className="text-black">Seed Stage</p>
            </div>

            {/* Featured Startup */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <span className="inline-block px-2 py-1 bg-gray-100 text-black rounded-full text-sm mb-4">Featured</span>
              <h3 className="text-lg font-semibold mb-2 text-black">GreenGrowth</h3>
              <p className="text-black mb-4">Sustainable agriculture tech</p>
              <p className="text-black">Series A</p>
            </div>

            {/* Featured Startup */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <span className="inline-block px-2 py-1 bg-gray-100 text-black rounded-full text-sm mb-4">Trending</span>
              <h3 className="text-lg font-semibold mb-2 text-black">HealthTech</h3>
              <p className="text-black mb-4">Digital health platform</p>
              <p className="text-black">Pre-seed</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-8 pb-12">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Learn & Earn</h3>
              <p className="text-gray-600 mb-4">
                The future of learning is here. Join our platform to learn, earn, and grow.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-600">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Platform</h3>
              <ul className="space-y-3">
                <li><Link href="/learning-hub" className="text-gray-600 hover:text-gray-900">Learning Hub</Link></li>
                <li><Link href="/career-center" className="text-gray-600 hover:text-gray-900">Career Center</Link></li>
                <li><Link href="/startup-hub" className="text-gray-600 hover:text-gray-900">Startup Hub</Link></li>
                <li><Link href="/community" className="text-gray-600 hover:text-gray-900">Community</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Documentation</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Help Center</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Privacy Policy</Link></li>
                <li><Link href="#" className="text-gray-600 hover:text-gray-900">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-gray-900 uppercase mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="text-gray-600">Email: info@learnandearn.com</li>
                <li className="text-gray-600">Phone: +1 (555) 123-4567</li>
                <li className="text-gray-600">Address: Amsterdam, Netherlands</li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-200 py-8">
            <p className="text-sm text-gray-500 text-center">
              © 2024 Learn & Earn. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default StartupHub; 