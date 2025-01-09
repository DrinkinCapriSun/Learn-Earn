import MobileMenu from '../../components/MobileMenu';

<nav className="fixed top-0 left-0 right-0 bg-white py-4 z-50 border-b border-gray-200">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <Link href="/" className="text-2xl font-bold text-black">Learn & Earn</Link>
      </div>
      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden md:flex items-center space-x-8">
        <Link href="/learning-hub" className="text-black hover:text-gray-900">Learning Hub</Link>
        <Link href="/career-center" className="text-black hover:text-gray-900">Career Center</Link>
        <Link href="/startup-hub" className="text-black hover:text-gray-900">Startup Hub</Link>
        <Link href="/community" className="text-black hover:text-gray-900">Community</Link>
        <Link href="/profile" className="text-black hover:text-gray-900">Profile</Link>
      </div>
      {/* Mobile Menu Component */}
      <MobileMenu />
    </div>
  </div>
</nav> 