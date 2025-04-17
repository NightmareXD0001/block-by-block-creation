
import React from 'react';
import { ArrowUp, Discord, Github, Twitter } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-black/60 py-12">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-pixel font-bold text-white mb-2">
              <span className="text-minecraft-green">Pikz</span>Dev
            </h2>
            <p className="text-gray-400 max-w-xs">
              Professional Minecraft development services for servers of all sizes.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 text-center">
            <div>
              <h3 className="text-white font-medium mb-3">Links</h3>
              <ul className="space-y-2">
                <li><button onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-minecraft-green transition-colors duration-200">Services</button></li>
                <li><button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-minecraft-green transition-colors duration-200">Portfolio</button></li>
                <li><button onClick={() => document.getElementById('testimonials')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-minecraft-green transition-colors duration-200">Testimonials</button></li>
                <li><button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="text-gray-400 hover:text-minecraft-green transition-colors duration-200">Contact</button></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-3">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-minecraft-green transition-colors duration-200">Custom Plugins</a></li>
                <li><a href="#" className="text-gray-400 hover:text-minecraft-green transition-colors duration-200">Minecraft Builds</a></li>
                <li><a href="#" className="text-gray-400 hover:text-minecraft-green transition-colors duration-200">Server Setups</a></li>
                <li><a href="#" className="text-gray-400 hover:text-minecraft-green transition-colors duration-200">Tebex Stores</a></li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-white font-medium mb-3">Connect</h3>
              <div className="flex space-x-3 justify-center">
                <a href="#" className="w-8 h-8 rounded-md bg-minecraft-darkBg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#5865F2] transition-colors duration-200">
                  <Discord size={18} />
                </a>
                <a href="#" className="w-8 h-8 rounded-md bg-minecraft-darkBg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#1DA1F2] transition-colors duration-200">
                  <Twitter size={18} />
                </a>
                <a href="#" className="w-8 h-8 rounded-md bg-minecraft-darkBg flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#333] transition-colors duration-200">
                  <Github size={18} />
                </a>
              </div>
              <p className="text-gray-500 text-xs mt-3">Join my Discord community</p>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">© 2025 PikzDev. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-minecraft-green/10 hover:bg-minecraft-green/20 text-minecraft-green p-2 rounded-md transition-colors duration-200"
          >
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
