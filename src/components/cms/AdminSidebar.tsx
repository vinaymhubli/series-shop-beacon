import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  ShoppingBag, 
  Info, 
  Book, 
  Megaphone,
  Image,
  Settings
} from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarTrigger,
  useSidebar,
} from '@/components/ui/sidebar';

export interface AdminPage {
  id: string;
  title: string;
  icon: any;
  description?: string;
}

const adminPages: AdminPage[] = [
  { 
    id: 'home-page', 
    title: 'Home Page', 
    icon: Home,
    description: 'Manage homepage content and layout'
  },
  { 
    id: 'our-series', 
    title: 'Our Series', 
    icon: BookOpen,
    description: 'Manage series and collections'
  },
  { 
    id: 'shop-all', 
    title: 'Shop All', 
    icon: ShoppingBag,
    description: 'Manage shop content and products'
  },
  { 
    id: 'about-us', 
    title: 'About Us', 
    icon: Info,
    description: 'Manage about page content'
  },
  { 
    id: 'readers-mode', 
    title: "Reader's Mode", 
    icon: Book,
    description: 'Manage reading experience settings'
  },
  { 
    id: 'announcement-page', 
    title: 'Announcement Page', 
    icon: Megaphone,
    description: 'Manage announcements and news'
  },
];

interface AdminSidebarProps {
  selectedPage: string;
  onPageSelect: (pageId: string) => void;
}

export function AdminSidebar({ selectedPage, onPageSelect }: AdminSidebarProps) {
  const sidebar = useSidebar();
  const collapsed = sidebar.state === 'collapsed';

  const isActive = (pageId: string) => selectedPage === pageId;
  
  const getNavClass = (pageId: string) =>
    isActive(pageId) 
      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
      : "hover:bg-muted/80 text-muted-foreground hover:text-foreground";

  return (
    <Sidebar className={collapsed ? "w-14" : "w-64"} collapsible="icon">
      <SidebarTrigger className="m-2 self-end" />
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium text-muted-foreground px-2">
            {!collapsed && "CMS Navigation"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              {adminPages.map((page) => (
                <SidebarMenuItem key={page.id}>
                  <SidebarMenuButton 
                    asChild 
                    className={`${getNavClass(page.id)} transition-colors duration-200`}
                  >
                    <button
                      onClick={() => onPageSelect(page.id)}
                      className="w-full flex items-center gap-3 px-3 py-2 text-left"
                    >
                      <page.icon className="h-4 w-4 flex-shrink-0" />
                      {!collapsed && (
                        <div className="flex-1">
                          <div className="font-medium">{page.title}</div>
                          {page.description && (
                            <div className="text-xs text-muted-foreground mt-0.5">
                              {page.description}
                            </div>
                          )}
                        </div>
                      )}
                    </button>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Special Section for Hero Banners */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-sm font-medium text-muted-foreground px-2">
            {!collapsed && "Quick Actions"}
          </SidebarGroupLabel>
          
          <SidebarGroupContent>
            <SidebarMenu>
              <SidebarMenuItem>
                <SidebarMenuButton 
                  asChild 
                  className={`${getNavClass('hero-banners')} transition-colors duration-200`}
                >
                  <button
                    onClick={() => onPageSelect('hero-banners')}
                    className="w-full flex items-center gap-3 px-3 py-2 text-left"
                  >
                    <Image className="h-4 w-4 flex-shrink-0" />
                    {!collapsed && (
                      <div className="flex-1">
                        <div className="font-medium">Hero Banners</div>
                        <div className="text-xs text-muted-foreground mt-0.5">
                          Manage carousel banners
                        </div>
                      </div>
                    )}
                  </button>
                </SidebarMenuButton>
              </SidebarMenuItem>
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export { adminPages };