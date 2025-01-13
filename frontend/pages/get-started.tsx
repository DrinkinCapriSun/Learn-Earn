import React from 'react';
import Link from 'next/link';

const GetStarted: React.FC = () => {
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
              <Link href="/startup-hub" className="text-black hover:text-gray-900">Startup Hub</Link>
              <Link href="/community" className="text-black hover:text-gray-900">Community</Link>
              <Link href="/profile" className="text-black hover:text-gray-900">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="pt-20">
        <div className="max-w-7xl mx-auto py-12 px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 text-black">Welcome to Learn & Earn</h1>
            <p className="text-xl text-black">Let's get you started on your learning journey</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Sign Up Option */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-black">New to Learn & Earn?</h2>
              <p className="text-black mb-6">Create an account to start your learning journey, track your progress, and earn while you learn.</p>
              <Link href="/register" 
                className="block w-full bg-black text-white text-center px-6 py-3 rounded-full hover:bg-gray-800">
                Create Account
              </Link>
            </div>

            {/* Sign In Option */}
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h2 className="text-2xl font-semibold mb-4 text-black">Already have an account?</h2>
              <p className="text-black mb-6">Sign in to continue your learning journey and access your personalized dashboard.</p>
              <Link href="/login" 
                className="block w-full border border-black text-black text-center px-6 py-3 rounded-full hover:bg-gray-100">
                Sign In
              </Link>
            </div>
          </div>

          {/* Features Preview */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-black">Learn</h3>
              <p className="text-black">Access SCORM-compliant courses and earn certificates</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-black">Earn</h3>
              <p className="text-black">Get rewarded for your learning achievements</p>
            </div>
            <div className="text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"></path>
                </svg>
              </div>
              <h3 className="font-semibold mb-2 text-black">Grow</h3>
              <p className="text-black">Build your portfolio and advance your career</p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white mt-20 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold text-black">Learn & Earn</h3>
              <p className="text-black">The future of learning is here. Join our platform to learn, earn, and grow.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* Platform Links */}
            <div>
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">Platform</h3>
              <ul className="space-y-3">
                <li><Link href="/learning-hub" className="text-black hover:text-gray-900">Learning Hub</Link></li>
                <li><Link href="/career-center" className="text-black hover:text-gray-900">Career Center</Link></li>
                <li><Link href="/startup-hub" className="text-black hover:text-gray-900">Startup Hub</Link></li>
                <li><Link href="/community" className="text-black hover:text-gray-900">Community</Link></li>
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link href="#" className="text-black hover:text-gray-900">Documentation</Link></li>
                <li><Link href="#" className="text-black hover:text-gray-900">Help Center</Link></li>
                <li><Link href="#" className="text-black hover:text-gray-900">Privacy Policy</Link></li>
                <li><Link href="#" className="text-black hover:text-gray-900">Terms of Service</Link></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold text-black uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="text-black">Email: info@learnandearn.com</li>
                <li className="text-black">Phone: +1 (555) 123-4567</li>
                <li className="text-black">Address: Amsterdam, Netherlands</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-gray-200">
            <p className="text-black text-sm text-center">&copy; 2025 Learn & Earn. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default GetStarted; 