import React from 'react';
import Link from 'next/link';
import MobileMenu from '../../components/MobileMenu';

const Profile: React.FC = () => {
  return (
    <div className="font-['Inter'] bg-gray-50">
      {/* Navigation */}
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
              <Link href="/profile" className="text-black font-semibold">Profile</Link>
            </div>
            {/* Mobile Menu Component */}
            <MobileMenu />
          </div>
        </div>
      </nav>

      <main className="pt-20">
        {/* Profile Header */}
        <div className="bg-white border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="flex items-center space-x-8">
              <img 
                src="https://via.placeholder.com/128" 
                alt="Profile Picture" 
                className="w-32 h-32 rounded-full"
              />
              <div>
                <h1 className="text-3xl font-bold text-black mb-2">John Doe</h1>
                <p className="text-black mb-4">Full Stack Developer | Learning Enthusiast</p>
                <div className="flex space-x-4">
                  <button className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800">
                    Edit Profile
                  </button>
                  <button className="border border-gray-300 px-6 py-2 rounded-full hover:bg-gray-100 text-black">
                    Share Profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Left Column - Personal Info */}
            <div className="space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-black">About Me</h2>
                <p className="text-black mb-4">
                  Passionate developer with 3 years of experience. Focused on web technologies and continuous learning.
                </p>
                <div className="space-y-2">
                  <p className="text-black"><span className="font-medium">Location:</span> Amsterdam, Netherlands</p>
                  <p className="text-black"><span className="font-medium">Member Since:</span> January 2024</p>
                  <p className="text-black"><span className="font-medium">Languages:</span> English, Dutch</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-black">Skills</h2>
                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-black">React</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-black">Node.js</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-black">TypeScript</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-black">Python</span>
                  <span className="px-3 py-1 bg-gray-100 rounded-full text-black">AWS</span>
                </div>
              </div>

              {/* Earned Rewards Section */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-black">Earned Rewards</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-xl">🏆</span>
                      </div>
                      <div>
                        <p className="font-medium text-black">Course Completion</p>
                        <p className="text-sm text-black">500 Points</p>
                      </div>
                    </div>
                    <span className="text-black">Mar 2024</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
                        <span className="text-xl">⭐</span>
                      </div>
                      <div>
                        <p className="font-medium text-black">Top Contributor</p>
                        <p className="text-sm text-black">300 Points</p>
                      </div>
                    </div>
                    <span className="text-black">Feb 2024</span>
                  </div>
                </div>
                <button className="mt-4 text-black hover:underline text-sm">View All Rewards →</button>
              </div>

              {/* CV & Certificates Section */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-black">CV & Certificates</h2>
                <div className="space-y-4">
                  {/* CV */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h3 className="font-medium text-black">Professional CV</h3>
                        <p className="text-sm text-black">Last updated: March 2024</p>
                      </div>
                      <div className="flex space-x-2">
                        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Download CV">
                          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                          </svg>
                        </button>
                        <button className="p-2 hover:bg-gray-100 rounded-lg" title="Edit CV">
                          <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  
                  {/* Additional Certificates */}
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-black mb-3">Additional Certificates</h3>
                    <ul className="space-y-3">
                      <li className="flex justify-between items-center">
                        <div>
                          <p className="text-black">AWS Cloud Practitioner</p>
                          <p className="text-sm text-black">Issued: December 2023</p>
                        </div>
                        <button className="text-black hover:underline text-sm">View →</button>
                      </li>
                      <li className="flex justify-between items-center">
                        <div>
                          <p className="text-black">Google Analytics Certification</p>
                          <p className="text-sm text-black">Issued: November 2023</p>
                        </div>
                        <button className="text-black hover:underline text-sm">View →</button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Center Column - Activity */}
            <div className="space-y-8 md:col-span-2">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-black">Learning Progress</h2>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-black">Web Development Path</span>
                      <span className="text-black">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-black h-2 rounded-full" style={{width: '75%'}}></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2">
                      <span className="text-black">React Mastery</span>
                      <span className="text-black">60%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-black h-2 rounded-full" style={{width: '60%'}}></div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-black">Recent Activity</h2>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-black font-medium">Completed React Basics Course</p>
                      <p className="text-sm text-black">2 days ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center">
                      <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-black font-medium">Started TypeScript Course</p>
                      <p className="text-sm text-black">1 week ago</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-black">Certificates & Achievements</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-black mb-2">Web Development Fundamentals</h3>
                    <p className="text-sm text-black mb-2">Issued: January 2024</p>
                    <Link href="#" className="text-black hover:underline text-sm">View Certificate →</Link>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-black mb-2">React Advanced Concepts</h3>
                    <p className="text-sm text-black mb-2">Issued: March 2024</p>
                    <Link href="#" className="text-black hover:underline text-sm">View Certificate →</Link>
                  </div>
                </div>
              </div>

              {/* Portfolio Section */}
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <h2 className="text-xl font-semibold mb-4 text-black">Portfolio</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-black mb-2">E-commerce Platform</h3>
                    <p className="text-sm text-black mb-2">Full-stack application built with React and Node.js</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-black">React</span>
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-black">Node.js</span>
                    </div>
                    <Link href="#" className="text-black hover:underline text-sm">View Project →</Link>
                  </div>
                  <div className="border border-gray-200 rounded-lg p-4">
                    <h3 className="font-medium text-black mb-2">Task Management App</h3>
                    <p className="text-sm text-black mb-2">Mobile-first web application with real-time updates</p>
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-black">TypeScript</span>
                      <span className="px-2 py-1 bg-gray-100 rounded-full text-xs text-black">Firebase</span>
                    </div>
                    <Link href="#" className="text-black hover:underline text-sm">View Project →</Link>
                  </div>
                </div>
                <button className="mt-4 w-full border border-gray-300 rounded-lg py-2 text-black hover:bg-gray-50">
                  View All Projects
                </button>
              </div>
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

export default Profile; 