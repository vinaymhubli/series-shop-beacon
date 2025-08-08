
import { Mail, Globe, Users, Briefcase } from 'lucide-react';
import { useState } from 'react';
import CreatorApplicationForm from './CreatorApplicationForm';

const ContactInfo = () => {
  const [showCreatorForm, setShowCreatorForm] = useState(false);

  const supportContacts = [
    {
      region: "US and Canada customers:",
      email: "support.na@crossedhearts.com",
      color: "text-red-400"
    },
    {
      region: "UK and Europe customers:", 
      email: "support.eu@crossedhearts.com",
      color: "text-red-400"
    },
    {
      region: "Africa customers:",
      email: "support.af@crossedhearts.com",
      color: "text-red-400"
    },
    {
      region: "Australia and New Zealand customers:",
      email: "support.anz@crossedhearts.com",
      color: "text-red-400"
    },
    {
      region: "Indian subcontinent customers:",
      email: "support.in@crossedhearts.com",
      color: "text-red-400"
    },
    {
      region: "Middle East customers:",
      email: "support.me@crossedhearts.com",
      color: "text-red-400"
    }
  ];

  const businessContacts = [
    {
      type: "For licensing any of our titles:",
      email: "licensing@crossedhearts.com"
    },
    {
      type: "For any partnership proposals:",
      email: "partnerships@crossedhearts.com"
    },
    {
      type: "For PR or marketing proposals:",
      email: "marketing@crossedhearts.com"
    },
    {
      type: "For any other reasons:",
      email: "general@crossedhearts.com"
    }
  ];

  return (
    <div className="bg-gray-900 p-8 lg:p-12">
      {/* Email Support Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <Mail className="w-6 h-6 text-red-500 mr-3" />
          <h2 className="text-2xl font-bold text-white">Email Support</h2>
        </div>
        
        <div className="space-y-4">
          {supportContacts.map((contact, index) => (
            <div key={index} className="border-l-4 border-gray-700 pl-4">
              <p className={`text-sm font-medium ${contact.color}`}>
                {contact.region}
              </p>
              <a 
                href={`mailto:${contact.email}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {contact.email}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* Business Inquiries Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <Briefcase className="w-6 h-6 text-red-500 mr-3" />
          <h2 className="text-2xl font-bold text-white">Business Inquiries</h2>
        </div>
        
        <div className="space-y-4">
          {businessContacts.map((contact, index) => (
            <div key={index} className="border-l-4 border-gray-700 pl-4">
              <p className="text-red-400 text-sm font-medium">
                {contact.type}
              </p>
              <a 
                href={`mailto:${contact.email}`}
                className="text-gray-300 hover:text-white transition-colors"
              >
                {contact.email}
              </a>
            </div>
          ))}
        </div>
      </div>

      {/* For Authors Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <Users className="w-6 h-6 text-red-500 mr-3" />
          <h2 className="text-2xl font-bold text-white">For Authors, Creators and Artists</h2>
        </div>
        
        <p className="text-gray-300 mb-4">
          If you want to debut with us, please fill out our{' '}
          <button 
            onClick={() => setShowCreatorForm(true)}
            className="text-red-400 hover:text-red-300 underline cursor-pointer"
          >
            creator application form
          </button>
          .
        </p>
      </div>

      {/* Connect With Us Section */}
      <div>
        <div className="flex items-center mb-6">
          <Globe className="w-6 h-6 text-red-500 mr-3" />
          <h2 className="text-2xl font-bold text-white">Connect With Us</h2>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-.88-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
            </svg>
            <span className="text-sm">TikTok</span>
          </a>
          
          <a href="https://www.instagram.com/crossedheartsglobal?igsh=NWt4NGFiY214d3Np" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
            <span className="text-sm">Instagram</span>
          </a>
          
          <a href="https://www.facebook.com/share/1Ao3eMJana/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
            </svg>
            <span className="text-sm">Facebook</span>
          </a>
          
          <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419-.0190 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9460 2.4189-2.1568 2.4189Z"/>
            </svg>
            <span className="text-sm">Discord</span>
          </a>
          
          <a href="https://x.com/crossedheartsus" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
            </svg>
            <span className="text-sm">X (Twitter)</span>
          </a>
          
          <a href="https://www.youtube.com/channel/UCml272d_SV3kHboiO_taiaQ" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
            <span className="text-sm">YouTube</span>
          </a>
        </div>
      </div>

      {/* Creator Application Form Modal */}
      {showCreatorForm && (
        <CreatorApplicationForm onClose={() => setShowCreatorForm(false)} />
      )}
    </div>
  );
};

export default ContactInfo;
