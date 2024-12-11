import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-white font-bold text-lg">Donny</h1>
        <div className="space-x-4">
          <Link href="/" className="text-white hover:text-gray-300">
            Home
          </Link>
          <Link href="/about" className="text-white hover:text-gray-300">
            About
          </Link>
          <Link href="/courses" className="text-white hover:text-gray-300">
            Courses
          </Link>
          <Link href="/contact" className="text-white hover:text-gray-300">
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
}
