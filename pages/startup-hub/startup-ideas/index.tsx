import React, { useState } from 'react';
import Link from 'next/link';
import MobileMenu from '../../../components/MobileMenu';

interface StartupIdea {
  id: string;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  readTime: string;
}

const availableTags = [
  'AI & Machine Learning',
  'B2B',
  'B2C',
  'Blockchain',
  'Clean Energy',
  'E-commerce',
  'EdTech',
  'FinTech',
  'Healthcare',
  'IoT',
  'Mobile Apps',
  'SaaS',
  'Social Impact',
  'Sustainability',
  'Web3'
];

const StartupIdeas: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  
  const ideas: StartupIdea[] = [
    {
      id: '1',
      title: 'AI-Powered Personal Shopping Assistant',
      description: 'Create a smart shopping assistant that learns user preferences and provides personalized recommendations.',
      image: '/startup-ideas/ai-shopping.png',
      tags: ['AI & Machine Learning', 'E-commerce', 'B2C'],
      link: '/startup-hub/startup-ideas/ai-shopping-assistant',
      readTime: '5 min read'
    },
    {
      id: '2',
      title: 'Sustainable Fashion Marketplace',
      description: 'Platform connecting eco-friendly fashion brands with conscious consumers.',
      image: '/startup-ideas/sustainable-fashion.png',
      tags: ['E-commerce', 'Sustainability', 'B2C'],
      link: '/startup-hub/startup-ideas/sustainable-fashion',
      readTime: '7 min read'
    },
    {
      id: '3',
      title: 'Remote Team Wellness Platform',
      description: 'Digital platform for managing and improving remote team mental health and wellness.',
      image: '/startup-ideas/team-wellness.png',
      tags: ['SaaS', 'B2B', 'Healthcare'],
      link: '/startup-hub/startup-ideas/team-wellness',
      readTime: '6 min read'
    },
    {
      id: '4',
      title: 'Decentralized Education Credentials',
      description: 'Blockchain-based system for verifying and managing educational credentials.',
      image: '/startup-ideas/edu-credentials.png',
      tags: ['EdTech', 'Blockchain', 'Web3'],
      link: '/startup-hub/startup-ideas/edu-credentials',
      readTime: '8 min read'
    },
    {
      id: '5',
      title: 'Smart Home Energy Management',
      description: 'IoT solution for optimizing home energy consumption and reducing bills.',
      image: '/startup-ideas/smart-energy.png',
      tags: ['IoT', 'Clean Energy', 'B2C'],
      link: '/startup-hub/startup-ideas/smart-energy',
      readTime: '5 min read'
    },
    {
      id: '6',
      title: 'B2B Payment Solutions Platform',
      description: 'Streamlined payment processing and management for businesses.',
      image: '/startup-ideas/b2b-payments.png',
      tags: ['FinTech', 'B2B', 'SaaS'],
      link: '/startup-hub/startup-ideas/b2b-payments',
      readTime: '6 min read'
    },
    {
      id: '7',
      title: 'Community-Driven Food Waste Reduction',
      description: 'Platform connecting restaurants with local communities to reduce food waste.',
      image: '/startup-ideas/food-waste.png',
      tags: ['Social Impact', 'Sustainability', 'Mobile Apps'],
      link: '/startup-hub/startup-ideas/food-waste',
      readTime: '7 min read'
    },
    {
      id: '8',
      title: 'AI Healthcare Diagnostics',
      description: 'Machine learning platform for early disease detection and diagnosis.',
      image: '/startup-ideas/ai-health.png',
      tags: ['Healthcare', 'AI & Machine Learning', 'B2B'],
      link: '/startup-hub/startup-ideas/ai-health',
      readTime: '9 min read'
    },
    {
      id: '9',
      title: 'Decentralized Freelance Marketplace',
      description: 'Web3-based platform for connecting freelancers with clients.',
      image: '/startup-ideas/freelance.png',
      tags: ['Web3', 'Blockchain', 'B2B'],
      link: '/startup-hub/startup-ideas/freelance',
      readTime: '6 min read'
    },
    {
      id: '10',
      title: 'Smart City Transportation Solutions',
      description: 'IoT-based system for optimizing urban transportation and reducing congestion.',
      image: '/startup-ideas/smart-transport.png',
      tags: ['IoT', 'Smart Cities', 'B2B'],
      link: '/startup-hub/startup-ideas/smart-transport',
      readTime: '8 min read'
    },
    {
      id: '11',
      title: 'Personalized Learning Platform',
      description: 'AI-driven education platform adapting to individual learning styles.',
      image: '/startup-ideas/personalized-learning.png',
      tags: ['EdTech', 'AI & Machine Learning', 'B2C'],
      link: '/startup-hub/startup-ideas/personalized-learning',
      readTime: '7 min read'
    },
    {
      id: '12',
      title: 'Carbon Footprint Tracking App',
      description: 'Mobile app helping individuals and businesses track and reduce their carbon emissions.',
      image: '/startup-ideas/carbon-tracking.png',
      tags: ['Sustainability', 'Mobile Apps', 'B2C'],
      link: '/startup-hub/startup-ideas/carbon-tracking',
      readTime: '5 min read'
    },
    {
      id: '13',
      title: 'Digital Real Estate Investment Platform',
      description: 'Blockchain-based platform for fractional real estate investment.',
      image: '/startup-ideas/real-estate.png',
      tags: ['FinTech', 'Blockchain', 'B2C'],
      link: '/startup-hub/startup-ideas/real-estate',
      readTime: '8 min read'
    },
    {
      id: '14',
      title: 'Mental Health AI Companion',
      description: 'AI-powered mental health support and therapy assistance platform.',
      image: '/startup-ideas/mental-health.png',
      tags: ['Healthcare', 'AI & Machine Learning', 'B2C'],
      link: '/startup-hub/startup-ideas/mental-health',
      readTime: '6 min read'
    },
    {
      id: '15',
      title: 'Sustainable Supply Chain Platform',
      description: 'Blockchain solution for tracking and verifying sustainable supply chains.',
      image: '/startup-ideas/supply-chain.png',
      tags: ['Blockchain', 'Sustainability', 'B2B'],
      link: '/startup-hub/startup-ideas/supply-chain',
      readTime: '7 min read'
    }
  ];

  const handleTagChange = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredIdeas = ideas.filter(idea => {
    const matchesSearch = idea.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         idea.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesTags = selectedTags.length === 0 || 
                       selectedTags.some(tag => idea.tags.includes(tag));
    return matchesSearch && matchesTags;
  });

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
              <Link href="/startup-hub" className="text-black font-semibold">Startup Hub</Link>
              <Link href="/community" className="text-black hover:text-gray-900">Community</Link>
              <Link href="/profile" className="text-black hover:text-gray-900">Profile</Link>
            </div>
            {/* Mobile Menu Component */}
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section with Search */}
      <main className="bg-white pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-black mb-8">Startup Ideas</h1>
          <p className="text-xl text-black mb-4">Discover innovative startup ideas and opportunities</p>
          
          {/* Search Section */}
          <div className="mt-8 max-w-2xl mx-auto">
            <input 
              type="search" 
              placeholder="Search startup ideas..." 
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-black focus:border-black text-black placeholder-gray-500"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          {/* Tags Section */}
          <div className="mt-8 max-w-6xl mx-auto">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-3">
              {availableTags.map(tag => (
                <label key={tag} className="flex items-center p-2 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
                  <input 
                    type="checkbox" 
                    className="form-checkbox text-black h-4 w-4"
                    onChange={() => handleTagChange(tag)}
                    checked={selectedTags.includes(tag)}
                  />
                  <span className="ml-2 text-sm text-gray-700">{tag}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Ideas Grid */}
      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredIdeas.map(idea => (
            <div key={idea.id} className="bg-white rounded-lg shadow-sm p-4 flex">
              {/* Left side - Image */}
              <div className="w-1/5 mr-4">
                <img 
                  src={idea.image} 
                  alt={idea.title}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              {/* Right side - Content */}
              <div className="w-4/5 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">
                  <Link 
                    href={idea.link}
                    className="hover:underline inline-flex items-center gap-1 text-black"
                  >
                    {idea.title}
                    <svg 
                      className="w-3.5 h-3.5 text-black" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        strokeWidth="2" 
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </Link>
                </h3>
                <p className="text-gray-600 text-sm mb-3">{idea.description}</p>
                <div className="flex flex-wrap gap-1.5 mb-2">
                  {idea.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                <span className="text-xs text-gray-500">{idea.readTime}</span>
              </div>
            </div>
          ))}
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

export default StartupIdeas; 