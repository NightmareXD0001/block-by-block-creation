
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

type Category = 'all' | 'plugins' | 'builds' | 'servers' | 'stores';

interface PortfolioItem {
  id: number;
  title: string;
  category: Exclude<Category, 'all'>;
  imageSrc: string;
  description: string;
}

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "SkyQuest Plugin Suite",
      category: "plugins",
      imageSrc: "https://placehold.co/600x400/1E1F26/5DDB4C?text=SkyQuest+Plugin",
      description: "Custom progression system with quests and rewards for a popular Skyblock server."
    },
    {
      id: 2,
      title: "Medieval Lobby Hub",
      category: "builds",
      imageSrc: "https://placehold.co/600x400/1E1F26/5DDB4C?text=Medieval+Hub",
      description: "Detailed medieval hub with 16 portals, shops, and hidden secrets."
    },
    {
      id: 3,
      title: "Factions Warfare Server",
      category: "servers",
      imageSrc: "https://placehold.co/600x400/1E1F26/5DDB4C?text=Factions+Server",
      description: "Complete server setup with custom plugins, builds, and configuration."
    },
    {
      id: 4,
      title: "CrystalCraft Store",
      category: "stores",
      imageSrc: "https://placehold.co/600x400/1E1F26/5DDB4C?text=CrystalCraft+Store",
      description: "Premium Tebex store design with animations and custom product displays."
    },
    {
      id: 5,
      title: "Economy Management Plugin",
      category: "plugins",
      imageSrc: "https://placehold.co/600x400/1E1F26/5DDB4C?text=Economy+Plugin",
      description: "Advanced economy plugin with jobs, shops, and auction house integration."
    },
    {
      id: 6,
      title: "Futuristic Spawn City",
      category: "builds",
      imageSrc: "https://placehold.co/600x400/1E1F26/5DDB4C?text=Futuristic+City",
      description: "Cyberpunk-inspired spawn area with interactive elements and custom lighting."
    },
    {
      id: 7,
      title: "Survival Games Setup",
      category: "servers",
      imageSrc: "https://placehold.co/600x400/1E1F26/5DDB4C?text=Survival+Games",
      description: "Hunger Games inspired minigame server with custom maps and game mechanics."
    },
    {
      id: 8,
      title: "PixelMC Store",
      category: "stores",
      imageSrc: "https://placehold.co/600x400/1E1F26/5DDB4C?text=PixelMC+Store",
      description: "Clean, conversion-optimized store template with seasonal theme support."
    }
  ];

  const filteredItems = activeCategory === 'all'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'plugins', label: 'Plugins' },
    { id: 'builds', label: 'Builds' },
    { id: 'servers', label: 'Servers' },
    { id: 'stores', label: 'Stores' }
  ];

  return (
    <section id="portfolio" className="py-20 bg-black/30">
      <div className="container">
        <h2 className="section-title">Portfolio</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id as Category)}
              className={cn(
                "px-4 py-2 rounded-sm transition-all duration-300",
                activeCategory === category.id
                  ? "bg-minecraft-green text-black font-medium"
                  : "bg-secondary/50 text-gray-300 hover:bg-secondary"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="group">
              <div className="card-minecraft overflow-hidden">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.imageSrc}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-minecraft-darkBg/70 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="px-4 py-2 bg-minecraft-green text-black font-medium text-sm">
                      View Details
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-white font-bold mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm">{item.description}</p>
                  <div className="mt-3 flex justify-between items-center">
                    <span className="text-xs text-minecraft-green font-medium uppercase">
                      {item.category}
                    </span>
                    <div className="h-1.5 w-1.5 rounded-full bg-minecraft-green animate-pulse"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-gray-300 mb-6">Want to see more projects? Get in touch for a detailed portfolio review.</p>
          <button className="px-6 py-3 border border-minecraft-green/50 text-white hover:bg-minecraft-green/10 transition-all duration-300">
            More Projects
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
