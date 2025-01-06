import React from 'react';
import Link from 'next/link';

const Community: React.FC = () => {
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
              <Link href="/community" className="text-black font-semibold">Community</Link>
              <Link href="/profile" className="text-black hover:text-gray-900">Profile</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="bg-white pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-black mb-4">Connect, Share, and Grow Together</p>
          <h1 className="text-6xl font-bold text-black mb-8">Community Hub</h1>
          <p className="text-xl text-black mb-4">Join discussions, share your knowledge, and collaborate with peers</p>
          <p className="text-xl text-black mb-8">Upload content, get feedback, and build connections</p>
          <div className="flex justify-center space-x-4">
            <a href="#upload" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">Share Content →</a>
            <a href="#discussions" className="border border-gray-300 px-6 py-3 rounded-full hover:bg-gray-100 text-black">Join Discussions</a>
          </div>
        </div>
      </main>

      {/* Content Upload Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Upload Form */}
        <div className="bg-white p-6 rounded-lg shadow-sm mb-12">
          <h2 className="text-2xl font-bold mb-6 text-black">Share with the Community</h2>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-black mb-2">Title</label>
              <input 
                type="text" 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-black placeholder-gray-500" 
                placeholder="Give your post a title"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Content</label>
              <textarea 
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-black focus:border-black text-black placeholder-gray-500 h-32" 
                placeholder="Share your thoughts, questions, or ideas..."
              ></textarea>
            </div>
            <div>
              <label className="block text-sm font-medium text-black mb-2">Upload Files (Optional)</label>
              <input type="file" className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black" />
            </div>
            <button type="submit" className="bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800">
              Post to Community
            </button>
          </form>
        </div>

        {/* Community Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Discussion Boards */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-black">Discussion Boards</h2>
            <p className="text-black mb-4">Engage in topic-based discussions with fellow learners and professionals.</p>
            <Link href="#" className="text-black font-medium hover:underline">Browse Discussions →</Link>
          </div>

          {/* Study Groups */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-black">Study Groups</h2>
            <p className="text-black mb-4">Join or create study groups to learn together and share resources.</p>
            <Link href="#" className="text-black font-medium hover:underline">Find Groups →</Link>
          </div>

          {/* Project Collaboration */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-black">Project Collaboration</h2>
            <p className="text-black mb-4">Find partners and collaborate on projects to build your portfolio.</p>
            <Link href="#" className="text-black font-medium hover:underline">Start Project →</Link>
          </div>

          {/* Events & Meetups */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
              <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-xl font-semibold mb-2 text-black">Events & Meetups</h2>
            <p className="text-black mb-4">Discover and join community events, workshops, and meetups.</p>
            <Link href="#" className="text-black font-medium hover:underline">View Events →</Link>
          </div>
        </div>

        {/* Recent Community Posts */}
        <section className="mt-16">
          <h2 className="text-2xl font-bold mb-8 text-black">Recent Community Posts</h2>
          <div className="space-y-6">
            {/* Example Post */}
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="flex items-center mb-4">
                <img src="https://via.placeholder.com/40" alt="User Avatar" className="rounded-full mr-3" />
                <div>
                  <h3 className="font-semibold text-black">John Doe</h3>
                  <p className="text-sm text-black">Posted 2 hours ago</p>
                </div>
              </div>
              <h4 className="text-lg font-semibold mb-2 text-black">Looking for study partners - Web Development</h4>
              <p className="text-black mb-4">Hi everyone! I'm currently learning React and looking for study partners. Anyone interested in collaborating?</p>
              <div className="flex items-center space-x-4">
                <button className="text-black hover:text-gray-700">
                  <span>💬 12 comments</span>
                </button>
                <button className="text-black hover:text-gray-700">
                  <span>❤️ 24 likes</span>
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>

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

export default Community; 