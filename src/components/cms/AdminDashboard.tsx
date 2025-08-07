import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useCMS } from '@/hooks/useCMS';
import { useSupabaseAuth } from '@/hooks/useSupabaseAuth';
import { ContentEditor } from './ContentEditor';
import { Settings, FileText, Layout, Users } from 'lucide-react';

export const AdminDashboard = () => {
  const { sections, isLoading } = useCMS();
  const { isAdmin, user } = useSupabaseAuth();
  const [selectedPage, setSelectedPage] = useState('homepage');

  if (!isAdmin || !user) {
    return (
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardContent className="p-8 text-center">
            <p className="text-lg text-muted-foreground">
              Access denied. Admin privileges required.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  const pages = [
    { id: 'homepage', name: 'Homepage', icon: Layout },
    { id: 'our_series', name: 'Our Series', icon: FileText },
    { id: 'shop_all', name: 'Shop All', icon: FileText },
    { id: 'about_us', name: 'About Us', icon: FileText },
    { id: 'readers_mode', name: 'Readers Mode', icon: FileText },
    { id: 'announcements', name: 'Announcements', icon: FileText },
  ];

  const getPageSections = (pageId: string) => {
    return sections.filter(section => section.page_name === pageId);
  };

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="flex items-center justify-center h-64">
          <p className="text-lg text-muted-foreground">Loading CMS...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold flex items-center gap-2">
          <Settings className="h-8 w-8" />
          CMS Admin Dashboard
        </h1>
        <p className="text-muted-foreground mt-2">
          Manage your website content across all pages
        </p>
      </div>

      <Tabs value={selectedPage} onValueChange={setSelectedPage} className="space-y-6">
        <TabsList className="grid grid-cols-3 lg:grid-cols-6 w-full">
          {pages.map(page => {
            const Icon = page.icon;
            return (
              <TabsTrigger key={page.id} value={page.id} className="flex items-center gap-2">
                <Icon className="h-4 w-4" />
                <span className="hidden sm:inline">{page.name}</span>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {pages.map(page => (
          <TabsContent key={page.id} value={page.id}>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <page.icon className="h-5 h-5" />
                  {page.name} Content
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {getPageSections(page.id).map(section => (
                    <ContentEditor
                      key={section.id}
                      pageName={section.page_name}
                      sectionName={section.section_name}
                      initialContent={section.content}
                    />
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};