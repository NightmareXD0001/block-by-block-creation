
import React from 'react';
import { MessageSquare, Mail, MessageCircle } from 'lucide-react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-minecraft-darkBg">
      <div className="container">
        <h2 className="section-title">Let's Work Together</h2>
        
        <div className="flex flex-col md:flex-row gap-10 mt-12">
          <div className="md:w-1/2">
            <h3 className="text-2xl font-bold text-white mb-4">Ready to level up your Minecraft server?</h3>
            <p className="text-gray-300 mb-6">
              Whether you're just starting out or need a professional to take your server to the next level, 
              I'm here to help. Let's discuss your project!
            </p>
            
            <div className="space-y-4 mt-8">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-minecraft-green/10 rounded-md flex items-center justify-center text-minecraft-green">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Join my Discord</h4>
                  <p className="text-gray-400 text-sm">Connect with me and the community</p>
                </div>
                <a href="#" className="ml-auto bg-[#5865F2] hover:bg-[#4a55e3] text-white px-4 py-2 rounded-md text-sm transition-colors duration-200">
                  Join Server
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-minecraft-green/10 rounded-md flex items-center justify-center text-minecraft-green">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Email Me</h4>
                  <p className="text-gray-400 text-sm">For quotes and questions</p>
                </div>
                <a href="mailto:example@email.com" className="ml-auto bg-minecraft-green hover:bg-minecraft-diamond text-black px-4 py-2 rounded-md text-sm transition-colors duration-200">
                  Send Email
                </a>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 bg-minecraft-green/10 rounded-md flex items-center justify-center text-minecraft-green">
                  <MessageSquare size={20} />
                </div>
                <div>
                  <h4 className="text-white font-medium">Commission Form</h4>
                  <p className="text-gray-400 text-sm">Start your project with details</p>
                </div>
                <a href="#" className="ml-auto bg-secondary hover:bg-secondary/80 text-white px-4 py-2 rounded-md text-sm transition-colors duration-200">
                  Fill Form
                </a>
              </div>
            </div>
            
            <div className="mt-10 p-5 border border-minecraft-green/20 rounded-md bg-minecraft-green/5">
              <h4 className="text-white font-medium mb-2">Response Time</h4>
              <p className="text-gray-300 text-sm">
                I typically respond to all inquiries within 24 hours. For urgent matters, 
                Discord is the fastest way to reach me.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="card-minecraft p-6">
              <h3 className="text-xl font-bold text-white mb-4">Quick Contact Form</h3>
              
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 bg-secondary/50 border border-minecraft-stone/30 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-minecraft-green"
                    placeholder="Your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 bg-secondary/50 border border-minecraft-stone/30 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-minecraft-green"
                    placeholder="your@email.com"
                  />
                </div>
                
                <div>
                  <label htmlFor="project" className="block text-sm font-medium text-gray-300 mb-1">Project Type</label>
                  <select
                    id="project"
                    className="w-full px-4 py-2 bg-secondary/50 border border-minecraft-stone/30 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-minecraft-green"
                  >
                    <option value="">Select project type</option>
                    <option value="plugin">Custom Plugin</option>
                    <option value="build">Minecraft Build</option>
                    <option value="server">Server Setup</option>
                    <option value="store">Tebex Store</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 bg-secondary/50 border border-minecraft-stone/30 rounded-md text-white focus:outline-none focus:ring-1 focus:ring-minecraft-green"
                    placeholder="Describe your project..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full pixel-btn py-3 font-pixel uppercase"
                >
                  Send Message
                </button>
                
                <p className="text-xs text-gray-400 text-center mt-2">
                  By submitting this form, you'll get a response within 24 hours.
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
