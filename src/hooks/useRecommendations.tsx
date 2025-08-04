import { useState, useEffect } from 'react';
import { useAuth } from './useAuth';

interface RecommendedProduct {
  id: string;
  title: string;
  author: string;
  price: string;
  coins: string;
  imageUrl: string;
  genre: string[];
  rating: number;
  type: string;
  isPersonalized?: boolean;
}

export const useRecommendations = () => {
  const { user, isLoggedIn } = useAuth();
  const [recommendations, setRecommendations] = useState<RecommendedProduct[]>([]);
  const [loading, setLoading] = useState(true);

  // Default recommendations for non-logged-in users
  const defaultRecommendations: RecommendedProduct[] = [
    {
      id: "1",
      title: "Tokyo Ghoul Vol. 14",
      author: "Sui Ishida",
      price: "$12.99",
      coins: "1299 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      genre: ["horror", "action"],
      rating: 5,
      type: "Digital"
    },
    {
      id: "2",
      title: "Demon Slayer Tanjiro Figure",
      author: "Koyoharu Gotouge",
      price: "$49.99",
      coins: "4999 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      genre: ["action", "supernatural"],
      rating: 5,
      type: "Merchandise"
    },
    {
      id: "3",
      title: "Naruto Vol. 72",
      author: "Masashi Kishimoto",
      price: "$9.99",
      coins: "999 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      genre: ["action", "adventure"],
      rating: 4,
      type: "Digital"
    },
    {
      id: "4",
      title: "My Hero Academia Vol. 35",
      author: "Kohei Horikoshi",
      price: "$11.99",
      coins: "1199 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      genre: ["action", "superhero"],
      rating: 5,
      type: "Digital"
    },
    {
      id: "5",
      title: "Attack on Titan Complete Set",
      author: "Hajime Isayama",
      price: "$199.99",
      coins: "19999 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      genre: ["action", "drama"],
      rating: 5,
      type: "Bundle"
    },
    {
      id: "6",
      title: "One Piece Vol. 105",
      author: "Eiichiro Oda",
      price: "$13.99",
      coins: "1399 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      genre: ["adventure", "comedy"],
      rating: 5,
      type: "Digital"
    },
    {
      id: "7",
      title: "Jujutsu Kaisen Vol. 20",
      author: "Gege Akutami",
      price: "$10.99",
      coins: "1099 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      genre: ["supernatural", "action"],
      rating: 5,
      type: "Digital"
    },
    {
      id: "8",
      title: "Chainsaw Man Vol. 12",
      author: "Tatsuki Fujimoto",
      price: "$12.99",
      coins: "1299 coins",
      imageUrl: "/lovable-uploads/cf6711d2-4c1f-4104-a0a1-1b856886e610.png",
      genre: ["horror", "action"],
      rating: 4,
      type: "Digital"
    }
  ];

  // Generate personalized recommendations based on user data
  const generatePersonalizedRecommendations = (): RecommendedProduct[] => {
    if (!user) return defaultRecommendations;

    const personalizedItems = defaultRecommendations.map(item => ({
      ...item,
      isPersonalized: true
    }));

    // Score items based on user preferences
    const scoredItems = personalizedItems.map(item => {
      let score = 0;
      
      // Genre preference matching
      const genreMatches = item.genre.filter(genre => 
        user.preferences.genres.some(userGenre => 
          genre.toLowerCase().includes(userGenre.toLowerCase())
        )
      ).length;
      score += genreMatches * 3;

      // Author preference matching
      if (user.preferences.authors.some(author => 
        item.author.toLowerCase().includes(author.toLowerCase())
      )) {
        score += 5;
      }

      // Search history relevance
      const searchRelevance = user.searchHistory.some(search =>
        item.title.toLowerCase().includes(search.toLowerCase()) ||
        item.author.toLowerCase().includes(search.toLowerCase())
      );
      if (searchRelevance) score += 4;

      // Not in wishlist (avoid recommending already wishlisted items)
      if (!user.wishlist.includes(item.id)) {
        score += 1;
      }

      // Recently browsed similar items
      if (user.browsingHistory.includes(item.id)) {
        score += 2;
      }

      return { ...item, score };
    });

    // Sort by score and return top items
    return scoredItems
      .sort((a, b) => b.score - a.score)
      .slice(0, 8);
  };

  useEffect(() => {
    setLoading(true);
    
    // Simulate API call delay
    const timer = setTimeout(() => {
      if (isLoggedIn && user) {
        setRecommendations(generatePersonalizedRecommendations());
      } else {
        setRecommendations(defaultRecommendations);
      }
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [isLoggedIn, user]);

  return {
    recommendations,
    loading,
    isPersonalized: isLoggedIn && !!user
  };
};