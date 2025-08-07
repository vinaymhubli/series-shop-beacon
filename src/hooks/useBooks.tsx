import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface Book {
  id: string;
  title: string;
  author: string;
  category: string;
  price: number;
  original_price?: number;
  coins?: string;
  image_url: string;
  hover_image_url: string;
  can_unlock_with_coins: boolean;
  section_type: 'new-releases' | 'best-sellers' | 'leaving-soon';
  label?: string;
  is_new: boolean;
  is_on_sale: boolean;
  display_order: number;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useBooks = () => {
  const [books, setBooks] = useState<Book[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    loadBooks();
    
    // Set up real-time subscription
    const channel = supabase
      .channel('books_changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'books'
        },
        (payload) => {
          if (payload.eventType === 'INSERT') {
            setBooks(prev => [...prev, payload.new as Book].sort((a, b) => a.display_order - b.display_order));
          } else if (payload.eventType === 'UPDATE') {
            setBooks(prev => 
              prev.map(book => 
                book.id === payload.new.id ? payload.new as Book : book
              ).sort((a, b) => a.display_order - b.display_order)
            );
          } else if (payload.eventType === 'DELETE') {
            setBooks(prev => 
              prev.filter(book => book.id !== payload.old.id)
            );
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  const loadBooks = async () => {
    try {
      setIsLoading(true);
      console.log('Starting to load books...');
      
      const { data, error } = await supabase
        .from('books')
        .select('*')
        .eq('is_active', true)
        .order('display_order', { ascending: true });

      console.log('Books query result:', { data, error, count: data?.length });
      
      if (error) {
        console.error('Supabase books error:', error);
        throw error;
      }
      
      console.log('Setting books data:', data);
      setBooks((data || []) as Book[]);
    } catch (err) {
      console.error('Error loading books:', err);
      setError(err instanceof Error ? err.message : 'Unknown error');
    } finally {
      setIsLoading(false);
      console.log('Books loading finished');
    }
  };

  const createBook = async (book: Omit<Book, 'id' | 'created_at' | 'updated_at'>) => {
    try {
      const { error } = await supabase
        .from('books')
        .insert(book);

      if (error) throw error;
      
      // Reload data after successful creation
      setTimeout(() => loadBooks(), 100);
    } catch (err) {
      console.error('Error creating book:', err);
      throw err;
    }
  };

  const updateBook = async (id: string, updates: Partial<Book>) => {
    try {
      const { error } = await supabase
        .from('books')
        .update(updates)
        .eq('id', id);

      if (error) throw error;
      
      // Reload data after successful update  
      setTimeout(() => loadBooks(), 100);
    } catch (err) {
      console.error('Error updating book:', err);
      throw err;
    }
  };

  const deleteBook = async (id: string) => {
    try {
      const { error } = await supabase
        .from('books')
        .delete()
        .eq('id', id);

      if (error) throw error;
      
      // Reload data after successful deletion
      setTimeout(() => loadBooks(), 100);
    } catch (err) {
      console.error('Error deleting book:', err);
      throw err;
    }
  };

  const getBooksBySection = (sectionType: string) => {
    return books.filter(book => book.section_type === sectionType);
  };

  return {
    books,
    isLoading,
    error,
    createBook,
    updateBook,
    deleteBook,
    loadBooks,
    getBooksBySection,
  };
};