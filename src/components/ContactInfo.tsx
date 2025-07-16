import { Mail, Globe, Users, Briefcase } from 'lucide-react';

const ContactInfo = () => {
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
      color: "text-green-400"
    },
    {
      region: "Australia and New Zealand customers:",
      email: "support.anz@crossedhearts.com",
      color: "text-yellow-400"
    },
    {
      region: "Indian subcontinent customers:",
      email: "support.in@crossedhearts.com",
      color: "text-orange-400"
    },
    {
      region: "Middle East customers:",
      email: "support.me@crossedhearts.com",
      color: "text-purple-400"
    }
  ];

  const businessContacts = [
    {
      type: "Licensing",
      email: "licensing@crossedhearts.com"
    },
    {
      type: "Partnership proposals",
      email: "partnerships@crossedhearts.com"
    },
    {
      type: "PR & Marketing",
      email: "marketing@crossedhearts.com"
    },
    {
      type: "Other inquiries",
      email: "general@crossedhearts.com"
    }
  ];

  return (
    <div className="bg-gray-900 p-8 lg:p-12">
      {/* Email Support Section */}
      <div className="mb-12">
        <div className="flex items-center mb-6">
          <Mail className="w-6 h-6 text-red-500 mr-3" />
          <h2 className="text-2xl font-bold text-red-500">Email Support</h2>
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
          <a href="#" className="text-red-400 hover:text-red-300 underline">
            creator application form
          </a>
          .
        </p>
      </div>

      {/* Connect With Us Section */}
      <div>
        <div className="flex items-center mb-6">
          <Globe className="w-6 h-6 text-red-500 mr-3" />
          <h2 className="text-2xl font-bold text-white">Connect With Us</h2>
        </div>
        
        <div className="flex space-x-4">
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.174-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.347-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.402.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.92-7.252 4.158 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.357-.629-2.748-1.378 0 0-.599 2.282-.744 2.840-.282 1.084-1.064 2.456-1.549 3.235C9.584 23.815 10.77 24.001 12.017 24.001c6.624 0 11.99-5.367 11.99-11.988C24.007 5.367 18.641.001 12.017.001z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12.004 0C5.383 0 0 5.383 0 12.004c0 5.299 3.438 9.8 8.207 11.387.6-.056 1.175-.125 1.793-.125s1.193.069 1.793.125C16.562 21.804 24 17.303 24 12.004 24 5.383 18.617.001 12.004.001zM8.801 8.801c.9-.9 2.1-1.5 3.4-1.5s2.5.6 3.4 1.5c.9.9 1.5 2.1 1.5 3.4s-.6 2.5-1.5 3.4c-.9.9-2.1 1.5-3.4 1.5s-2.5-.6-3.4-1.5c-.9-.9-1.5-2.1-1.5-3.4s.6-2.5 1.5-3.4z"/>
            </svg>
          </a>
          <a href="#" className="text-gray-400 hover:text-white transition-colors">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
