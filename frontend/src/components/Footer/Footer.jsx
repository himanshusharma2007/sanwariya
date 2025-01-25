import {Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
      <footer className="bg-[#6F4E37] text-[#F8F5F0]">
        {/* Main Footer Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* About Section */}
            <div>
              <h3 className="text-xl font-serif text-[#D4AF37] mb-4">About Us</h3>
              <p className="text-sm opacity-80 mb-4">
                Dedicated to bringing you authentic spiritual products for your devotional journey. Every item is blessed and certified authentic.
              </p>
              <div className="flex gap-4">
                <a href="#" className="hover:text-[#E68A00] transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="#" className="hover:text-[#E68A00] transition-colors">
                  <Twitter size={20} />
                </a>
                <a href="#" className="hover:text-[#E68A00] transition-colors">
                  <Instagram size={20} />
                </a>
              </div>
            </div>
  
            {/* Quick Links */}
            <div>
              <h3 className="text-xl font-serif text-[#D4AF37] mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {['Shop', 'About', 'Blog', 'Contact', 'FAQs'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-[#E68A00] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Categories */}
            <div>
              <h3 className="text-xl font-serif text-[#D4AF37] mb-4">Categories</h3>
              <ul className="space-y-2">
                {['Rudraksha Malas', 'Crystals', 'Idols', 'Meditation', 'Accessories'].map((item) => (
                  <li key={item}>
                    <a href="#" className="text-sm hover:text-[#E68A00] transition-colors">
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
  
            {/* Contact Info */}
            <div>
              <h3 className="text-xl font-serif text-[#D4AF37] mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-center gap-2 text-sm">
                  <Phone size={16} />
                  <span>+91 98765 43210</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <Mail size={16} />
                  <span>support@yourstore.com</span>
                </li>
                <li className="flex items-center gap-2 text-sm">
                  <MapPin size={16} />
                  <span>123 Temple Street, Spiritual City, India</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
  
        {/* Bottom Bar */}
        <div className="border-t border-[#F8F5F0]/10">
          <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-80">
              © 2025 Sanwariya Handicraft. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#" className="text-sm hover:text-[#E68A00] transition-colors">Privacy Policy</a>
              <a href="#" className="text-sm hover:text-[#E68A00] transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    );
  };

  export default Footer;