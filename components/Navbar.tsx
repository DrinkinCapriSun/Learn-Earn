import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="bg-white py-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-semibold text-gray-900">
              Learn & Earn
            </Link>
          </div>
          
          <div className="flex items-center space-x-8">
            <Link href="/learning-hub" className="text-gray-600 hover:text-gray-900">
              Learning Hub
            </Link>
            <Link href="/career-center" className="text-gray-600 hover:text-gray-900">
              Career Center
            </Link>
            <Link href="/startup-hub" className="text-gray-600 hover:text-gray-900">
              Startup Hub
            </Link>
            <Link href="/community" className="text-gray-600 hover:text-gray-900">
              Community
            </Link>
            <Link href="/profile" className="text-gray-600 hover:text-gray-900">
              Profile
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 