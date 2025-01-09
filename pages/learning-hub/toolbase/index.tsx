'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import MobileMenu from '@/components/MobileMenu';

interface Tool {
  id: string;
  name: string;
  description: string;
  image: string;
  tags: string[];
  provider: string;
  pricing: string;
  link: string;
}

const availableTags = [
  'AI Writing',
  'Image Generation',
  'Video Editing',
  'Code Generation',
  'Data Analysis',
  'Productivity',
  'Marketing',
  'Design',
  'Research',
  'Audio',
  'Translation',
  'Business',
  'Social Media',
  'SEO',
  'Automation'
];

const Tools: React.FC = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');

  const tools: Tool[] = [
    {
      id: '1',
      name: 'ChatGPT',
      description: 'Advanced AI language model for writing, coding, and analysis.',
      image: '/tools/chatgpt.png',
      tags: ['AI Writing', 'Code Generation'],
      provider: 'OpenAI',
      pricing: 'Free/Premium',
      link: 'https://chat.openai.com'
    },
    {
      id: '2',
      name: 'Midjourney',
      description: 'AI-powered image generation tool for creating stunning artwork.',
      image: '/tools/midjourney.png',
      tags: ['Image Generation', 'Design'],
      provider: 'Midjourney',
      pricing: 'Subscription',
      link: 'https://midjourney.com'
    },
    {
      id: '3',
      name: 'Jasper',
      description: 'AI content generation platform for marketing and business content.',
      image: '/tools/jasper.png',
      tags: ['AI Writing', 'Marketing'],
      provider: 'Jasper AI',
      pricing: 'Paid',
      link: 'https://jasper.ai'
    },
    {
      id: '4',
      name: 'Descript',
      description: 'All-in-one video and audio editing platform with AI features.',
      image: '/tools/descript.png',
      tags: ['Video Editing', 'Audio'],
      provider: 'Descript',
      pricing: 'Freemium',
      link: 'https://descript.com'
    },
    {
      id: '5',
      name: 'GitHub Copilot',
      description: 'AI pair programmer that helps you write better code faster.',
      image: '/tools/copilot.png',
      tags: ['Code Generation', 'Productivity'],
      provider: 'GitHub',
      pricing: 'Subscription',
      link: 'https://github.com/features/copilot'
    },
    {
      id: '6',
      name: 'Tableau',
      description: 'Data visualization and business intelligence software.',
      image: '/tools/tableau.png',
      tags: ['Data Analysis', 'Business'],
      provider: 'Salesforce',
      pricing: 'Paid',
      link: 'https://tableau.com'
    },
    {
      id: '7',
      name: 'Canva',
      description: 'Online design and publishing tool with AI features.',
      image: '/tools/canva.png',
      tags: ['Design', 'Social Media'],
      provider: 'Canva',
      pricing: 'Freemium',
      link: 'https://canva.com'
    },
    {
      id: '8',
      name: 'Grammarly',
      description: 'AI-powered writing assistant for grammar and style.',
      image: '/tools/grammarly.png',
      tags: ['AI Writing', 'Productivity'],
      provider: 'Grammarly',
      pricing: 'Freemium',
      link: 'https://grammarly.com'
    },
    {
      id: '9',
      name: 'DeepL',
      description: 'AI translation tool supporting multiple languages.',
      image: '/tools/deepl.png',
      tags: ['Translation', 'AI Writing'],
      provider: 'DeepL',
      pricing: 'Freemium',
      link: 'https://deepl.com'
    },
    {
      id: '10',
      name: 'Notion AI',
      description: 'AI-powered workspace for notes, docs, and project management.',
      image: '/tools/notion.png',
      tags: ['Productivity', 'AI Writing'],
      provider: 'Notion',
      pricing: 'Freemium',
      link: 'https://notion.so'
    },
    {
      id: '11',
      name: 'SEMrush',
      description: 'All-in-one digital marketing and SEO toolkit.',
      image: '/tools/semrush.png',
      tags: ['SEO', 'Marketing'],
      provider: 'SEMrush',
      pricing: 'Paid',
      link: 'https://semrush.com'
    },
    {
      id: '12',
      name: 'Zapier',
      description: 'Automation platform connecting apps and workflows.',
      image: '/tools/zapier.png',
      tags: ['Automation', 'Productivity'],
      provider: 'Zapier',
      pricing: 'Freemium',
      link: 'https://zapier.com'
    },
    {
      id: '13',
      name: 'Stable Diffusion',
      description: 'Open-source AI image generation model.',
      image: '/tools/stable-diffusion.png',
      tags: ['Image Generation', 'Design'],
      provider: 'Stability AI',
      pricing: 'Free/Self-hosted',
      link: 'https://stability.ai'
    },
    {
      id: '14',
      name: 'Synthesia',
      description: 'AI video generation platform for creating video content.',
      image: '/tools/synthesia.png',
      tags: ['Video Editing', 'AI Writing'],
      provider: 'Synthesia',
      pricing: 'Paid',
      link: 'https://synthesia.io'
    },
    {
      id: '15',
      name: 'Otter.ai',
      description: 'AI-powered meeting notes and transcription service.',
      image: '/tools/otter.png',
      tags: ['Audio', 'Productivity'],
      provider: 'Otter.ai',
      pricing: 'Freemium',
      link: 'https://otter.ai'
    }
  ];

  const handleTagChange = (tag: string) => {
    setSelectedTags(prev => 
      prev.includes(tag) 
        ? prev.filter(t => t !== tag)
        : [...prev, tag]
    );
  };

  const filteredTools = tools.filter(tool => {
    const matchesSearch = searchQuery === '' || 
      tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.provider.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

    const matchesTags = selectedTags.length === 0 || 
      selectedTags.some(tag => tool.tags.includes(tag));

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
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <Link href="/learning-hub" className="text-black hover:text-gray-900">Learning Hub</Link>
              <Link href="/career-center" className="text-black hover:text-gray-900">Career Center</Link>
              <Link href="/startup-hub" className="text-black hover:text-gray-900">Startup Hub</Link>
              <Link href="/community" className="text-black hover:text-gray-900">Community</Link>
              <Link href="/profile" className="text-black hover:text-gray-900">Profile</Link>
            </div>
            <MobileMenu />
          </div>
        </div>
      </nav>

      {/* Hero Section with Search */}
      <main className="bg-white pt-20">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-6xl font-bold text-black mb-8">Toolbase</h1>
          <p className="text-xl text-black mb-4">Discover and access the tools you need for success</p>
          
          {/* Search Section */}
          <div className="mt-8 max-w-2xl mx-auto">
            <input 
              type="search" 
              placeholder="Search tools..." 
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

      {/* Tools Grid */}
      <main className="max-w-7xl mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map(tool => (
            <div key={tool.id} className="bg-white rounded-lg shadow-sm p-4 flex">
              <div className="w-1/5 mr-4">
                <img 
                  src={tool.image} 
                  alt={tool.name}
                  className="w-full h-full object-cover rounded-lg"
                />
              </div>
              
              <div className="w-4/5 flex flex-col">
                <h3 className="text-lg font-semibold mb-2">
                  <a 
                    href={tool.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:underline inline-flex items-center gap-1 text-black"
                  >
                    {tool.name}
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
                  </a>
                </h3>
                <p className="text-gray-600 text-sm mb-3">{tool.description}</p>
                
                <div className="flex flex-wrap gap-1.5 mb-3">
                  {tool.tags.map(tag => (
                    <span key={tag} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto space-y-1">
                  <div className="text-sm text-gray-500">Provider: {tool.provider}</div>
                  <div className="text-sm text-gray-500">Pricing: {tool.pricing}</div>
                </div>
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

export default Tools;