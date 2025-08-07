import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface HeroBanner {
  id: string;
  title: string;
  subtitle: string;
  image_url: string;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useHeroBanners = () => {
  const [banners, setBanners] = useState<HeroBanner[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadHeroBanners();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('hero_banners_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'hero_banners'
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setBanners(prev => [...prev, payload.new as HeroBanner].sort((a, b) => a.display_order - b.display_order));
          } else if (payload.eventType === 'UPDATE') {
            setBanners(prev => 
              prev.map(banner => 
                banner.id === payload.new.id ? payload.new as HeroBanner : banner
              ).sort((a, b) => a.display_order - b.display_order)
            );
          } else if (payload.eventType === 'DELETE') {
            setBanners(prev => 
              prev.filter(banner => banner.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const loadHeroBanners = async () => {
    try {
      console.log('Loading hero banners...');
      setIsLoading(true);
      const { data, error } = await (supabase as any)
        .from('hero_banners')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      console.log('Hero banners query result:', { data, error });
      
      if (error) throw error;
      setBanners(data || []);
      console.log('Hero banners loaded:', data?.length || 0);
    } catch (err) {
      console.error('Error loading hero banners:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsLoading(false);
    }
  };

  const createBanner = async (banner: Omit<HeroBanner, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { error } = await (supabase as any)
        .from('hero_banners')
        .insert(banner);

      if (error) throw error;
    } catch (err) {
      console.error('Error creating banner:', err);
      throw err;
    }
  };

  const updateBanner = async (id: string, updates: Partial<HeroBanner>) => {
    try {
      const { error } = await (supabase as any)
        .from('hero_banners')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
    } catch (err) {
      console.error('Error updating banner:', err);
      throw err;
    }
  };

  const deleteBanner = async (id: string) => {
    try {
      const { error } = await (supabase as any)
        .from('hero_banners')
        .delete()
        .eq('id', id);

      if (error) throw error;
    } catch (err) {
      console.error('Error deleting banner:', err);
      throw err;
    }
  };

  return {
    banners,
    isLoading,
    error,
    createBanner,
    updateBanner,
    deleteBanner,
    loadHeroBanners,
  };
};