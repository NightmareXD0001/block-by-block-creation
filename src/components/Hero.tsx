
import React from 'react';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center py-20 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/5 w-24 h-24 bg-minecraft-green/10 rounded-lg animate-float" style={{ animationDelay: '0s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-16 h-16 bg-minecraft-diamond/10 rounded-lg animate-float" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-minecraft-redstone/10 rounded-lg animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-1/3 right-1/5 w-12 h-12 bg-minecraft-gold/10 rounded-lg animate-float" style={{ animationDelay: '3s' }}></div>
      </div>

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 text-center md:text-left mb-12 md:mb-0">
            <h1 className="text-4xl md:text-6xl font-pixel font-bold mb-4">
              <span className="block clip-text">Minecraft</span>
              <span className="block text-minecraft-green animate-pulse">Development</span>
              <span className="block clip-text">Expert</span>
            </h1>
            <p className="text-gray-300 my-6 text-lg md:max-w-md mx-auto md:mx-0">
              From custom plugins to stunning builds, Pikz delivers professional Minecraft solutions that elevate your server experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="pixel-btn">
                Start a Project
              </button>
              <button onClick={() => document.getElementById('portfolio')?.scrollIntoView({ behavior: 'smooth' })} className="px-6 py-3 border border-minecraft-green/50 text-white hover:bg-minecraft-green/10 transition-all duration-300">
                View Portfolio
              </button>
            </div>
            <div className="flex items-center gap-3 mt-8 justify-center md:justify-start">
              <div className="h-1 w-1 rounded-full bg-minecraft-green animate-pulse"></div>
              <p className="text-sm text-gray-400">300+ satisfied clients</p>
              <div className="h-1 w-1 rounded-full bg-minecraft-green animate-pulse"></div>
              <p className="text-sm text-gray-400">5+ years of experience</p>
            </div>
          </div>

          <div className="md:w-1/2 relative flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-lg overflow-hidden minecraft-shader">
              <div className="absolute inset-0 bg-gradient-to-br from-minecraft-darkBg/70 to-black/30 z-10"></div>
              <div className="absolute inset-0 grid grid-cols-8 grid-rows-8 z-0">
                {Array.from({ length: 64 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="transition-colors duration-300 ease-in-out"
                    style={{
                      backgroundColor: `rgba(${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, ${Math.floor(Math.random() * 100)}, 0.3)`,
                      backdropFilter: 'blur(2px)'
                    }}
                  ></div>
                ))}
              </div>
              <div className="absolute inset-0 flex items-center justify-center z-20">
                <div className="text-center px-3 py-2">
                  <h3 className="text-3xl font-pixel font-bold text-white mb-2">Pikz</h3>
                  <p className="text-minecraft-green text-sm font-medium">Minecraft Developer</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-center animate-bounce">
          <button onClick={scrollToServices} className="text-gray-400 hover:text-minecraft-green transition-colors duration-300">
            <ChevronDown size={32} />
          </button>
          <p className="text-xs text-gray-500 mt-2">Scroll to explore</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
