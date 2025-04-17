
import React from 'react';
import { Code, Hammer, Server, ShoppingBag } from 'lucide-react';

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  features: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, description, features }) => {
  return (
    <div className="card-minecraft p-6 h-full flex flex-col">
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 flex items-center justify-center bg-minecraft-green/10 rounded-md text-minecraft-green">
          {icon}
        </div>
        <h3 className="ml-4 text-xl font-bold text-white">{title}</h3>
      </div>
      <p className="text-gray-300 mb-6">{description}</p>
      <ul className="space-y-3 mt-auto">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <div className="h-5 w-5 mt-0.5 flex-shrink-0">
              <div className="h-1 w-1 bg-minecraft-green rounded-full animate-pulse"></div>
            </div>
            <span className="text-sm text-gray-300">{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Code size={28} />,
      title: "Custom Plugin Development",
      description: "High-performance plugins tailored to your server's unique needs.",
      features: [
        "Clean, modular Java or Kotlin code",
        "Performance-optimized for minimal lag",
        "Support for all major server platforms",
        "Custom game modes, GUIs, economies & more"
      ]
    },
    {
      icon: <Hammer size={28} />,
      title: "Minecraft Builds",
      description: "Stunning, detailed builds to bring your server vision to life.",
      features: [
        "Detailed aesthetic builds from lobbies to worlds",
        "Custom terrain generation support",
        "Various styles: Medieval, Futuristic, Fantasy",
        "Delivered with world files & schematics"
      ]
    },
    {
      icon: <Server size={28} />,
      title: "Complete Server Setups",
      description: "Ready-to-launch server packages tailored to your game mode.",
      features: [
        "Full setup for Survival, Skyblock, Factions & more",
        "Optimized plugin configurations & permissions",
        "Economy, anti-cheat, and backup systems",
        "Beginner-friendly with documentation"
      ]
    },
    {
      icon: <ShoppingBag size={28} />,
      title: "Tebex Store Templates",
      description: "Professional store designs to maximize conversions.",
      features: [
        "Professionally designed for better UX",
        "Animated banners & custom product cards",
        "Optimized layouts for higher conversion rates",
        "Seamless integration with server branding"
      ]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="container">
        <h2 className="section-title">Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Every project is fully tailored, performance-tuned, and delivered with comprehensive documentation and ongoing support.
          </p>
          <button onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })} className="pixel-btn">
            Get a Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
