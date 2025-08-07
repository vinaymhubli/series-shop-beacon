import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ContentEditor } from './ContentEditor';
import { HeroBannerManager } from './HeroBannerManager';
import { useCMS } from '@/hooks/useCMS';
import { AdminPage } from './AdminSidebar';
import { Construction, Settings, Image } from 'lucide-react';

interface PageEditorProps {
  selectedPage: string;
}

export function PageEditor({ selectedPage }: PageEditorProps) {
  const { sections } = useCMS();

  const getPageSections = (pageId: string) => {
    // Map page IDs to actual page names in database
    const pageMapping: Record<string, string> = {
      'home-page': 'homepage',
      'our-series': 'our_series',
      'shop-all': 'shop_all',
      'about-us': 'about_us',
      'readers-mode': 'readers_mode',
      'announcement-page': 'announcements',
    };
    
    const actualPageName = pageMapping[pageId] || pageId;
    return sections.filter(section => section.page_name === actualPageName);
  };

  const renderHomePage = () => (
    <div className="space-y-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Home Page Management</h2>
        <p className="text-muted-foreground">
          Configure your homepage content, layout, and featured elements.
        </p>
      </div>

      {/* Hero Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Image className="h-5 w-5" />
            Hero Section
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Manage the main hero banner carousel that appears at the top of your homepage.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">
              This section will contain hero content management tools.
            </p>
            <div className="text-xs text-muted-foreground">
              • Configure hero images and backgrounds<br/>
              • Set hero titles and descriptions<br/>
              • Manage call-to-action buttons
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Banner Changes */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Settings className="h-5 w-5" />
            Banner Changes
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Control promotional banners and announcement strips.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">
              This section will contain banner management tools.
            </p>
            <div className="text-xs text-muted-foreground">
              • Create seasonal promotional banners<br/>
              • Set announcement messages<br/>
              • Schedule banner display periods
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Making Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Construction className="h-5 w-5" />
            Making Section
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground mb-4">
            Configure dynamic content creation and featured sections.
          </p>
          <div className="bg-muted/50 p-4 rounded-lg">
            <p className="text-sm text-muted-foreground mb-2">
              This section will contain content creation tools.
            </p>
            <div className="text-xs text-muted-foreground">
              • Manage featured content sections<br/>
              • Configure dynamic content blocks<br/>
              • Set up content recommendations
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Existing CMS Sections */}
      {getPageSections('home-page').length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>Additional Homepage Sections</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {getPageSections('home-page').map(section => (
              <ContentEditor
                key={section.id}
                pageName={section.page_name}
                sectionName={section.section_name}
                initialContent={section.content}
              />
            ))}
          </CardContent>
        </Card>
      )}
    </div>
  );

  const renderHeroBanners = () => <HeroBannerManager />;

  const renderGenericPage = (pageId: string, pageTitle: string) => {
    const pageSections = getPageSections(pageId);
    
    return (
      <div className="space-y-6">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">{pageTitle} Management</h2>
          <p className="text-muted-foreground">
            Manage content and settings for the {pageTitle.toLowerCase()} page.
          </p>
        </div>

        {pageSections.length > 0 ? (
          <Card>
            <CardHeader>
              <CardTitle>{pageTitle} Content Sections</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {pageSections.map(section => (
                <ContentEditor
                  key={section.id}
                  pageName={section.page_name}
                  sectionName={section.section_name}
                  initialContent={section.content}
                />
              ))}</CardContent>
          </Card>
        ) : (
          <Card>
            <CardHeader>
              <CardTitle>No Content Found</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                No content sections found for this page. Content sections will appear here once they are created.
              </p>
            </CardContent>
          </Card>
        )}
      </div>
    );
  };

  // Render content based on selected page
  switch (selectedPage) {
    case 'home-page':
      return renderHomePage();
    case 'hero-banners':
      return renderHeroBanners();
    case 'our-series':
      return renderGenericPage('our-series', 'Our Series');
    case 'shop-all':
      return renderGenericPage('shop-all', 'Shop All');
    case 'about-us':
      return renderGenericPage('about-us', 'About Us');
    case 'readers-mode':
      return renderGenericPage('readers-mode', "Reader's Mode");
    case 'announcement-page':
      return renderGenericPage('announcement-page', 'Announcement Page');
    default:
      return (
        <Card>
          <CardHeader>
            <CardTitle>Page Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              The selected page could not be found. Please select a valid page from the sidebar.
            </p>
          </CardContent>
        </Card>
      );
  }
}
