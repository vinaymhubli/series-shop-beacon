import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Calendar, ExternalLink, Star, Heart, Diamond, Club, Spade, X } from 'lucide-react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

const AnnouncementsSection = () => {
  const { elementRef, isVisible } = useScrollAnimation(0.1);

  const announcements = [
    {
      title: "Jujutsu Kaisen: Shibuya Incident Arc",
      description: "We're excited to announce the licensing of the complete Shibuya Incident arc with exclusive artwork and bonus content.",
      date: "Coming March 2024",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      isHot: true,
      fullDescription: "Get ready for the most intense arc in Jujutsu Kaisen history! The Shibuya Incident arc brings unprecedented action, emotional depth, and character development. This exclusive release includes never-before-seen artwork from MAPPA studios, commentary from Gege Akutami, and special behind-the-scenes content from the anime production.",
      features: ["Exclusive MAPPA artwork", "Author commentary", "Behind-the-scenes content", "Limited edition covers"],
      status: "Pre-order starting soon"
    },
    {
      title: "Chainsaw Man Part 2: School Arc",
      description: "The highly anticipated continuation of Chainsaw Man is now available with same-day translation releases.",
      date: "Available Now",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      isNew: true,
      fullDescription: "Denji returns in an all-new adventure! Part 2 introduces new devils, new characters, and even more chaos. Follow Denji as he navigates high school life while dealing with his devil powers. This release features high-quality translations available the same day as the Japanese release.",
      features: ["Same-day translations", "High-resolution pages", "Mobile-optimized reading", "Exclusive translator notes"],
      status: "Reading available now"
    },
    {
      title: "Attack on Titan: Final Exhibition",
      description: "Limited edition box sets with exclusive artwork from the final exhibition, including never-before-seen concept art.",
      date: "Pre-Order Open",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      isLimited: true,
      fullDescription: "Commemorate the epic conclusion of Attack on Titan with this special exhibition collection. Features rare concept art, character design sheets, and exclusive interviews with Hajime Isayama. This limited edition release includes physical and digital content celebrating the series' incredible journey.",
      features: ["Rare concept art collection", "Character design sheets", "Creator interviews", "Physical collectors box"],
      status: "Limited quantity - Pre-order now"
    }
  ];

  return (
    <section 
      ref={elementRef}
      className={`relative bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 py-16 overflow-hidden transition-all duration-1000 transform ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gradient-to-r from-red-500 to-orange-500 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className={`text-center mb-12 transition-all duration-1000 delay-200 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <h2 className="text-4xl font-bold text-white mb-4">
            <span className="bg-gradient-to-r from-red-600 via-red-500 to-red-400 bg-clip-text text-transparent">
              Latest Announcements
            </span>
          </h2>
          <p className="text-gray-400 text-lg">Newly licensed series and exclusive releases</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {announcements.map((announcement, index) => (
            <div 
              key={index}
              className={`group bg-gradient-to-br from-gray-800 to-gray-900 rounded-xl overflow-hidden hover:from-gray-750 hover:to-gray-850 transition-all duration-700 transform hover:scale-105 hover:-translate-y-4 hover:shadow-2xl hover:shadow-orange-500/20 border border-gray-700/50 hover:border-orange-500/30 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              }`}
              style={{ transitionDelay: `${400 + index * 200}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={announcement.imageUrl} 
                  alt={announcement.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Card suit symbol */}
                <div className="absolute top-3 right-3">
                  <div className="bg-white rounded-full p-2 shadow-lg">
                    {index === 0 && <Heart className="w-4 h-4 text-red-500" />}
                    {index === 1 && <Diamond className="w-4 h-4 text-red-500" />}
                    {index === 2 && <Club className="w-4 h-4 text-red-500" />}
                    {index > 2 && <Spade className="w-4 h-4 text-red-500" />}
                  </div>
                </div>
                
                {/* Badges */}
                <div className="absolute top-3 left-3 space-y-2">
                  {announcement.isHot && (
                    <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                      🔥 HOT
                    </span>
                  )}
                  {announcement.isNew && (
                    <span className="bg-gradient-to-r from-green-600 to-green-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                      ✨ NEW
                    </span>
                  )}
                  {announcement.isLimited && (
                    <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg animate-pulse">
                      ⚡ LIMITED
                    </span>
                  )}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors duration-300 line-clamp-2">
                  {announcement.title}
                </h3>
                <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors duration-300 line-clamp-3">
                  {announcement.description}
                </p>
                
                <div className="flex items-center space-x-2 text-orange-400">
                  <Calendar className="w-4 h-4" />
                  <span className="text-sm font-semibold">{announcement.date}</span>
                </div>
                
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      size="sm" 
                      className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-orange-500/25"
                    >
                      <ExternalLink className="w-4 h-4 mr-2" />
                      Learn More
                    </Button>
                  </DialogTrigger>
                  <DialogContent className="max-w-2xl bg-gray-900 border-gray-700 text-white">
                    <DialogHeader>
                      <DialogTitle className="text-2xl font-bold text-white flex items-center gap-2">
                        {index === 0 && <Heart className="w-6 h-6 text-red-500" />}
                        {index === 1 && <Diamond className="w-6 h-6 text-red-500" />}
                        {index === 2 && <Club className="w-6 h-6 text-red-500" />}
                        {announcement.title}
                      </DialogTitle>
                    </DialogHeader>
                    
                    <div className="space-y-6">
                      {/* Image */}
                      <div className="relative rounded-lg overflow-hidden">
                        <img 
                          src={announcement.imageUrl} 
                          alt={announcement.title}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute top-3 left-3">
                          {announcement.isHot && (
                            <span className="bg-gradient-to-r from-red-600 to-red-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                              🔥 HOT
                            </span>
                          )}
                          {announcement.isNew && (
                            <span className="bg-gradient-to-r from-green-600 to-green-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                              ✨ NEW
                            </span>
                          )}
                          {announcement.isLimited && (
                            <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                              ⚡ LIMITED
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Date and Status */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-orange-400">
                          <Calendar className="w-5 h-5" />
                          <span className="font-semibold">{announcement.date}</span>
                        </div>
                        <span className="bg-gradient-to-r from-orange-600 to-red-600 text-white text-sm font-semibold px-4 py-2 rounded-full">
                          {announcement.status}
                        </span>
                      </div>

                      {/* Full Description */}
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-orange-300">About This Release</h4>
                        <p className="text-gray-300 leading-relaxed">
                          {announcement.fullDescription}
                        </p>
                      </div>

                      {/* Features */}
                      <div>
                        <h4 className="font-semibold text-lg mb-3 text-orange-300">What's Included</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                          {announcement.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center space-x-2 text-gray-300">
                              <Star className="w-4 h-4 text-orange-400 flex-shrink-0" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Action Button */}
                      <div className="pt-4">
                        <Button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-semibold py-3">
                          {announcement.isLimited ? 'Pre-Order Now' : announcement.isNew ? 'Start Reading' : 'Get Notified'}
                        </Button>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnnouncementsSection;
