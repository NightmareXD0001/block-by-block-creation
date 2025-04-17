
import React from 'react';
import { Quote } from 'lucide-react';

interface Testimonial {
  id: number;
  content: string;
  author: string;
  role: string;
  server?: string;
}

const Testimonials = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      content: "Pikz went above and beyond. The plugin he made for my Skyblock server changed the game. Super professional and responsive!",
      author: "Alex K.",
      role: "Owner",
      server: "AetherMC"
    },
    {
      id: 2,
      content: "Everything was delivered ahead of schedule. The setup ran flawlessly from day one. Best investment I've made for my server.",
      author: "Sarah L.",
      role: "Admin",
      server: "PixelVerse"
    },
    {
      id: 3,
      content: "Best developer I've worked with. He understood my vision and turned it into reality. Our player count doubled after the update!",
      author: "Mike T.",
      role: "Solo SMP Host"
    },
    {
      id: 4,
      content: "The lobby build was absolutely stunning. Our players keep taking screenshots and sharing them online. Worth every penny.",
      author: "Jamie R.",
      role: "Co-Owner",
      server: "EmeraldCraft"
    },
    {
      id: 5,
      content: "The custom minigame plugin works perfectly. No lag, no bugs, just pure fun. My players are addicted!",
      author: "Chris M.",
      role: "Network Manager",
      server: "BlockBattle"
    },
    {
      id: 6,
      content: "Our Tebex store conversions increased by 40% after Pikz redesigned it. The animated product cards are a game-changer!",
      author: "Emma S.",
      role: "Marketing Director",
      server: "GalaxyCraft"
    }
  ];

  return (
    <section id="testimonials" className="py-20">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="card-minecraft p-6 flex flex-col h-full">
              <div className="mb-4 text-minecraft-green">
                <Quote size={24} />
              </div>
              <p className="text-gray-300 mb-6 flex-grow italic">"{testimonial.content}"</p>
              <div className="mt-auto">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-minecraft-green/20 rounded-sm flex items-center justify-center text-minecraft-green font-bold">
                    {testimonial.author.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="text-white font-medium">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">
                      {testimonial.role}
                      {testimonial.server && ` • ${testimonial.server}`}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <div className="inline-block bg-minecraft-green/10 border border-minecraft-green/30 px-6 py-4 rounded-md">
            <p className="text-gray-300">
              <span className="font-bold text-white">300+</span> satisfied clients and counting
            </p>
            <div className="flex justify-center gap-2 mt-2">
              <div className="h-2 w-2 rounded-full bg-minecraft-green animate-pulse"></div>
              <div className="h-2 w-2 rounded-full bg-minecraft-green animate-pulse" style={{ animationDelay: '0.3s' }}></div>
              <div className="h-2 w-2 rounded-full bg-minecraft-green animate-pulse" style={{ animationDelay: '0.6s' }}></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
