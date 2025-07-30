import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const FOOTER_LINKS = {
  discover: [
    { label: 'Featured Hotels', href: '/' },
    { label: 'Popular Destinations', href: '/' },
    { label: 'Last Minute Deals', href: '/' },
    { label: 'Business Travel', href: '/' }
  ],
  support: [
    { label: 'Customer Service', href: '/' },
    { label: 'Booking Help', href: '/' },
    { label: 'Cancellation Policy', href: '/' },
    { label: 'FAQ', href: '/' }
  ],
  company: [
    { label: 'About Us', href: '/' },
    { label: 'Careers', href: '/' },
    { label: 'Partner Hotels', href: '/' },
    { label: 'Press', href: '/' }
  ],
  legal: [
    { label: 'Privacy Policy', href: '/' },
    { label: 'Terms of Service', href: '/' },
    { label: 'Cookie Policy', href: '/' },
    { label: 'Sitemap', href: '/' }
  ]
};


const Logo = () => (
  <div className="flex items-center gap-3">
    <div>
      <h3 className="text-xl font-bold text-gray-800">StayIN</h3>
      <p className="text-xs text-gray-500">Your Perfect Stay Awaits</p>
    </div>
  </div>
);

const ContactInfo = () => (
  <div className="space-y-3">
    <div className="flex items-center gap-3 text-gray-600">
      <MapPin className="w-4 h-4 flex-shrink-0" />
      <span className="text-sm">123 Travel Street, Suite 100, NY 10001</span>
    </div>
    <div className="flex items-center gap-3 text-gray-600">
      <Phone className="w-4 h-4 flex-shrink-0" />
      <span className="text-sm">+1 (555) 123-4567</span>
    </div>
    <div className="flex items-center gap-3 text-gray-600">
      <Mail className="w-4 h-4 flex-shrink-0" />
      <span className="text-sm">support@hotelbooking.com</span>
    </div>
  </div>
);

const FooterSection = ({ title, links }) => (
  <div>
    <h4 className="font-semibold text-gray-800 mb-4">{title}</h4>
    <ul className="space-y-2">
      {links.map((link, index) => (
        <li key={index}>
          <Link
            to={link.href}
            className="text-sm text-gray-600 hover:text-gray-800 transition-colors duration-200"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-slate-50 text-gray-600">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2 space-y-6">
            <Logo />
            <p className="text-sm text-gray-600 max-w-sm">
              Your trusted partner for unforgettable hotel experiences worldwide. 
              Book with confidence and create memories that last a lifetime.
            </p>
            <ContactInfo />
          </div>

          {/* Links Sections */}
          <FooterSection title="Discover" links={FOOTER_LINKS.discover} />
          <FooterSection title="Support" links={FOOTER_LINKS.support} />
          <FooterSection title="Company" links={FOOTER_LINKS.company} />   
        </div>


        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-gray-200 gap-4">
          <p className="text-sm text-gray-500">
            © 2025 HotelBooking. All rights reserved.
          </p>
          
          <div className="flex items-center gap-6 text-sm">
            {FOOTER_LINKS.legal.slice(0, 2).map((link, index) => (
              <React.Fragment key={index}>
                <Link
                  to={link.href}
                  className="text-gray-500 hover:text-gray-700 transition-colors"
                >
                  {link.label}
                </Link>
                {index === 0 && <div className="h-4 w-px bg-gray-300"></div>}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;