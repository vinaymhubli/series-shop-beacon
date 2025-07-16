
import { Button } from '@/components/ui/button';
import { 
  Instagram, 
  Youtube, 
  Twitter, 
  Facebook,
  MessageCircle,
  BookOpen,
  UserPlus,
  ExternalLink,
  Clock
} from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const SocialsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  const socialLinks = [
    { name: 'Instagram', icon: Instagram, url: '#', color: 'from-pink-500 to-purple-500' },
    { name: 'YouTube', icon: Youtube, url: '#', color: 'from-red-500 to-red-600' },
    { name: 'Twitter/X', icon: Twitter, url: '#', color: 'from-gray-800 to-black' },
    { name: 'TikTok', icon: MessageCircle, url: '#', color: 'from-black to-gray-900' },
    { name: 'Facebook', icon: Facebook, url: '#', color: 'from-blue-600 to-blue-700' },
    { name: 'Discord', icon: MessageCircle, url: '#', color: 'from-indigo-500 to-purple-600' }
  ];

  const blogPosts = [
    {
      title: "Top 10 Manga Series to Read in 2024",
      excerpt: "Discover the most anticipated manga releases this year...",
      date: "2 days ago",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png"
    },
    {
      title: "Behind the Scenes: Translation Process",
      excerpt: "Learn how we bring your favorite Japanese manga to English...",
      date: "1 week ago", 
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png"
    },
    {
      title: "Anime Adaptation News Roundup",
      excerpt: "Latest updates on upcoming anime adaptations of popular manga...",
      date: "2 weeks ago",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 py-16 overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Social Media Section */}
        <div className={`text-center mb-16 transition-all duration-1000 delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-blue-400 bg-clip-text text-transparent">
              Stay Connected
            </span>
          </h2>
          <p className="text-gray-400 text-lg mb-8">Follow us for the latest updates and announcements</p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 max-w-4xl mx-auto">
            {socialLinks.map((social, index) => {
              const IconComponent = social.icon;
              return (
                <a
                  key={social.name}
                  href={social.url}
                  className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl p-6 hover:from-gray-750 hover:to-gray-850 transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 hover:shadow-2xl border border-gray-700/50 hover:border-white/20 ${
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{ transitionDelay: `${400 + index * 100}ms` }}
                >
                  <div className="text-center space-y-3">
                    <div className={`mx-auto w-12 h-12 rounded-full bg-gradient-to-r ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <IconComponent className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-white font-medium text-xs group-hover:text-gray-100 transition-colors duration-300">
                      {social.name}
                    </h3>
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Three Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Blog Posts */}
          <div className={`lg:col-span-2 transition-all duration-1000 delay-400 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
              <BookOpen className="w-6 h-6 mr-3 text-blue-400" />
              Latest Blog Posts
            </h3>
            <div className="space-y-4">
              {blogPosts.map((post, index) => (
                <div 
                  key={index}
                  className="group bg-gradient-to-r from-gray-800 to-gray-900 rounded-lg p-4 hover:from-gray-750 hover:to-gray-850 transition-all duration-300 border border-gray-700/50 hover:border-blue-500/30 cursor-pointer"
                >
                  <div className="flex space-x-4">
                    <img 
                      src={post.imageUrl} 
                      alt={post.title}
                      className="w-20 h-20 object-cover rounded-lg group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="flex-1 space-y-2">
                      <h4 className="text-white font-semibold group-hover:text-blue-300 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h4>
                      <p className="text-gray-400 text-sm line-clamp-2 group-hover:text-gray-300 transition-colors duration-300">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center space-x-2 text-gray-500 text-xs">
                        <Clock className="w-3 h-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <ExternalLink className="w-4 h-4 text-gray-400 group-hover:text-blue-400 transition-colors duration-300 flex-shrink-0 mt-2" />
                  </div>
                </div>
              ))}
            </div>
            <Button className="w-full mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              View All Posts
            </Button>
          </div>

          {/* Recommend Us */}
          <div className={`transition-all duration-1000 delay-600 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <div className="bg-gradient-to-br from-purple-900 to-pink-900 rounded-xl p-6 border border-purple-500/30">
              <h3 className="text-2xl font-bold text-white mb-4 flex items-center">
                <UserPlus className="w-6 h-6 mr-3 text-pink-400" />
                Recommend Us
              </h3>
              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Love Crossed Hearts? Share it with your friends! When they create an account using your referral code, you'll both earn recommendation points.
              </p>
              
              <div className="space-y-4">
                <div className="bg-black/30 rounded-lg p-4 border border-pink-500/20">
                  <p className="text-pink-300 text-xs font-semibold mb-2">Your Benefits:</p>
                  <ul className="text-gray-300 text-xs space-y-1">
                    <li>• 500 points per successful referral</li>
                    <li>• Exclusive member discounts</li>
                    <li>• Early access to new releases</li>
                  </ul>
                </div>
                
                <Button className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-700 hover:to-purple-700 text-white font-semibold">
                  <UserPlus className="w-4 h-4 mr-2" />
                  Get Referral Code
                </Button>
                
                <p className="text-gray-400 text-xs text-center">
                  Already have an account? <span className="text-pink-400 cursor-pointer hover:underline">Sign in here</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialsSection;
