
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { BookOpen, Calendar, Share2, Bookmark, ChevronLeft, ChevronRight, Bell, Heart, Diamond, Clover, Spade } from 'lucide-react';
import { useState } from 'react';

const Announcements = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');

  // Function to get symbol and color based on category
  const getCategorySymbol = (category: string) => {
    switch (category.toLowerCase()) {
      case 'licensing':
        return { icon: Heart, color: 'text-red-500', bgColor: 'bg-red-100', label: 'New Series' };
      case 'reprints':
      case 'limited':
        return { icon: Diamond, color: 'text-blue-500', bgColor: 'bg-blue-100', label: 'Limited Edition' };
      case 'volume':
        return { icon: Clover, color: 'text-green-500', bgColor: 'bg-green-100', label: 'New Volume' };
      case 'events':
      case 'features':
        return { icon: Spade, color: 'text-purple-500', bgColor: 'bg-purple-100', label: 'Events' };
      default:
        return { icon: Heart, color: 'text-red-500', bgColor: 'bg-red-100', label: category };
    }
  };

  const featuredAnnouncements = [
    {
      id: 1,
      title: "Summer Manga Festival 2025",
      description: "Join us for the biggest manga event of the summer! Over 100 new series, get exclusive merchandise and meet your favorite authors.",
      image: "/lovable-uploads/0e70be33-bdfc-41db-8ae1-5c0dcf1b885c.png",
      date: "Jul 3, 2025",
      category: "Events",
      isHot: true
    },
    {
      id: 2,
      title: "New Demon Slayer Volume Release",
      description: "The highly anticipated new volume of Demon Slayer is finally available for pre-order along with exclusive character designs.",
      image: "/lovable-uploads/26efc76c-fa83-4369-8d8d-354eab1433e6.png",
      date: "Jul 5, 2025",
      category: "Licensing",
      isHot: true
    }
  ];

  const allAnnouncements = [
    {
      id: 1,
      title: "Summer Manga Festival 2025",
      description: "Join us for the biggest manga event of the summer! Over 100 new series, get exclusive merchandise and meet your favorite authors.",
      image: "/lovable-uploads/0e70be33-bdfc-41db-8ae1-5c0dcf1b885c.png",
      date: "Jul 3, 2025",
      category: "Events"
    },
    {
      id: 2,
      title: "New Demon Slayer Volume Release", 
      description: "The highly anticipated new volume of Demon Slayer is finally available for pre-order along with exclusive character designs.",
      image: "/lovable-uploads/26efc76c-fa83-4369-8d8d-354eab1433e6.png",
      date: "Jul 5, 2025",
      category: "Licensing"
    },
    {
      id: 3,
      title: "Naruto Masterpiece Reprint",
      description: "Our one-of-a-kind signature series is back! Get limited 200 ANNIVERSARY Inking featuring the best manga ever created!",
      image: "/lovable-uploads/503cc23b-a28f-4564-86f9-53896fa75f10.png",
      date: "Jul 6, 2025",
      category: "Reprints"
    },
    {
      id: 4,
      title: "New Digital Reading Features",
      description: "Introducing our brand new features for our digital manga reader, including improved zoom, auto-scrolling, and enhanced bookmarking.",
      image: "/lovable-uploads/6fb6d014-0083-4f09-95a2-0416443da769.png",
      date: "Jul 7, 2025", 
      category: "Features"
    },
    {
      id: 5,
      title: "Limited Edition Box Sets",
      description: "Exclusive box art and layout collection featuring 50 manga series. Each box includes exclusive artwork, character cards and special edition volumes.",
      image: "/lovable-uploads/781ea40e-866e-4ee8-9bf7-862a42bb8716.png",
      date: "Jul 8, 2025",
      category: "Licensing"
    },
    {
      id: 6,
      title: "Manga Creator Interview Series",
      description: "Starting next month, we'll be doing our very first interview series with top manga creators. Learn about their creative process, inspirations, and upcoming projects.",
      image: "/lovable-uploads/7b8f7dcc-b06f-4c89-b5af-906cd241ae0c.png",
      date: "Jul 9, 2025",
      category: "Features"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Page Header */}
      <div className="bg-muted py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-foreground mb-2">Announcements</h1>
          <p className="text-muted-foreground">New Announcement</p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {/* Featured Updates */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-foreground mb-6">Featured Updates</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {featuredAnnouncements.map((announcement) => (
              <Card key={announcement.id} className="overflow-hidden group hover:shadow-lg transition-shadow">
                <div className="relative">
                  <img 
                    src={announcement.image} 
                    alt={announcement.title}
                    className="w-full h-48 object-cover"
                  />
                  {announcement.isHot && (
                    <Badge className="absolute top-3 left-3 bg-destructive text-destructive-foreground">
                      HOT
                    </Badge>
                  )}
                  <div className="absolute top-3 right-3 text-muted-foreground text-sm">
                    {announcement.date}
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    {(() => {
                      const symbolData = getCategorySymbol(announcement.category);
                      const IconComponent = symbolData.icon;
                      return (
                        <div className={`w-8 h-8 ${symbolData.bgColor} rounded-full flex items-center justify-center`}>
                          <IconComponent className={`w-4 h-4 ${symbolData.color}`} />
                        </div>
                      );
                    })()}
                    <Badge variant="secondary">{getCategorySymbol(announcement.category).label}</Badge>
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{announcement.title}</h3>
                  <p className="text-muted-foreground mb-4 line-clamp-3">{announcement.description}</p>
                  <Button variant="destructive" size="sm">
                    Read More →
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* All Announcements */}
        <section className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
            <h2 className="text-2xl font-bold text-foreground">All Announcements</h2>
            <div className="flex items-center gap-4">
              <div className="relative">
                <Input
                  type="text"
                  placeholder="Search announcements..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-64"
                />
              </div>
              <Button variant="outline" size="sm">
                Sort by Date ↓
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            {allAnnouncements.map((announcement) => (
              <Card key={announcement.id} className="overflow-hidden hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex flex-col md:flex-row">
                    <div className="md:w-48 h-32 md:h-auto">
                      <img 
                        src={announcement.image} 
                        alt={announcement.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="flex-1 p-6">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                          {announcement.title}
                        </h3>
                        <div className="flex items-center gap-2">
                          <Button variant="ghost" size="sm">
                            <Share2 className="w-4 h-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Bookmark className="w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 mb-3">
                        <div className="flex items-center gap-2">
                          {(() => {
                            const symbolData = getCategorySymbol(announcement.category);
                            const IconComponent = symbolData.icon;
                            return (
                              <div className={`w-6 h-6 ${symbolData.bgColor} rounded-full flex items-center justify-center`}>
                                <IconComponent className={`w-3 h-3 ${symbolData.color}`} />
                              </div>
                            );
                          })()}
                          <Badge variant="secondary">{getCategorySymbol(announcement.category).label}</Badge>
                        </div>
                        <span className="text-sm text-muted-foreground flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {announcement.date}
                        </span>
                      </div>
                      <p className="text-muted-foreground mb-4 line-clamp-2">{announcement.description}</p>
                      <Button variant="destructive" size="sm">
                        Read More →
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex justify-center items-center gap-2 mt-8">
            <Button variant="outline" size="sm" disabled>
              <ChevronLeft className="w-4 h-4" />
            </Button>
            <Button variant="destructive" size="sm">1</Button>
            <Button variant="outline" size="sm">2</Button>
            <Button variant="outline" size="sm">3</Button>
            <span className="px-2 text-muted-foreground">...</span>
            <Button variant="outline" size="sm">15</Button>
            <Button variant="outline" size="sm">
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* Stay Updated Newsletter */}
        <section className="bg-muted rounded-lg p-8 mb-12">
          <div className="text-center max-w-2xl mx-auto">
            <div className="w-16 h-16 bg-destructive rounded-full flex items-center justify-center mx-auto mb-6">
              <Bell className="w-8 h-8 text-destructive-foreground" />
            </div>
            <h2 className="text-2xl font-bold text-foreground mb-4">Stay Updated</h2>
            <p className="text-muted-foreground mb-6">
              Download some exclusive content and get new update straight from online!
            </p>
            <div className="flex gap-3 max-w-md mx-auto">
              <Input 
                type="email" 
                placeholder="Your email address"
                className="flex-1"
              />
              <Button variant="destructive">
                Subscribe
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              By subscribing you agree to subscribe to our newsletter. Read our Privacy Policy for more info.
            </p>
          </div>
        </section>

        {/* Related Links */}
        <section>
          <h2 className="text-2xl font-bold text-foreground mb-6">Related Links</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
                  <Calendar className="w-4 h-4 text-destructive-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Event Calendar</h3>
              </div>
              <p className="text-sm text-muted-foreground">View upcoming manga events</p>
            </Card>
            
            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-destructive-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">Release Schedule</h3>
              </div>
              <p className="text-sm text-muted-foreground">Check out our latest releases</p>
            </Card>
            
            <Card className="p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-8 h-8 bg-destructive rounded-full flex items-center justify-center">
                  <Share2 className="w-4 h-4 text-destructive-foreground" />
                </div>
                <h3 className="font-semibold text-foreground">FAQ</h3>
              </div>
              <p className="text-sm text-muted-foreground">Frequently asked questions</p>
            </Card>
          </div>
        </section>
      </div>
      
      <Footer />
    </div>
  );
};

export default Announcements;
