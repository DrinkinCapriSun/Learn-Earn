import React from 'react';
import Link from 'next/link';

const Home: React.FC = () => {
  return (
    <div className="font-['Inter'] bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white py-4 z-50 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center">
              <Link href="/" className="text-2xl font-semibold text-black">Learn & Earn</Link>
            </div>
            <div className="flex items-center space-x-8">
              <Link href="/learning-hub" className="text-gray-600 hover:text-gray-900">Learning Hub</Link>
              <Link href="/career-center" className="text-gray-600 hover:text-gray-900">Career Center</Link>
              <Link href="/startup-hub" className="text-gray-600 hover:text-gray-900">Startup Hub</Link>
              <Link href="/community" className="text-gray-600 hover:text-gray-900">Community</Link>
              <Link href="/profile" className="text-gray-600 hover:text-gray-900">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto py-12 px-4 pt-24">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 text-black">Welcome to Learn & Earn</h1>
          <p className="text-xl text-gray-600">Let's get you started on your learning journey</p>
          <div className="mt-8">
            <Link 
              href="/home/get-started" 
              className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800"
            >
              Get Started →
            </Link>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Sign Up Option */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-black">New to Learn & Earn?</h2>
            <p className="text-gray-600 mb-6">Create an account to start your learning journey, track your progress, and earn while you learn.</p>
            <Link href="/home/register" 
              className="block w-full bg-black text-white text-center px-6 py-3 rounded-full hover:bg-gray-800">
              Create Account
            </Link>
          </div>

          {/* Sign In Option */}
          <div className="bg-white p-8 rounded-lg border border-gray-200">
            <h2 className="text-2xl font-semibold mb-4 text-black">Already have an account?</h2>
            <p className="text-gray-600 mb-6">Sign in to continue your learning journey and access your personalized dashboard.</p>
            <Link href="/home/login" 
              className="block w-full border border-black text-black text-center px-6 py-3 rounded-full hover:bg-gray-100">
              Sign In
            </Link>
          </div>
        </div>

        {/* Features Preview */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Feature sections... */}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white pt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-4 gap-8 pb-12">
            {/* Footer content... */}
          </div>
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

export default Home; 