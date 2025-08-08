
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileTabs from '@/components/ProfileTabs';
import ProfileActivity from '@/components/ProfileActivity';
import ProfileWishlist from '@/components/ProfileWishlist';
import ProfileOrders from '@/components/ProfileOrders';
import ProfileLastViewed from '@/components/ProfileLastViewed';
import ProfileRecommended from '@/components/ProfileRecommended';
import { Button } from '@/components/ui/button';
import { Edit2 } from 'lucide-react';
import QuickActionEditProfile from '@/components/QuickActionEditProfile';
import AccountSettingsModal from '@/components/AccountSettingsModal';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Page Title */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-2">My Account</h1>
          <p className="text-gray-400">Manage your profile, preferences, and account settings</p>
        </div>

        {/* Profile Header */}
        <ProfileHeader />
        
        {/* Account Navigation & Content */}
        <div className="mt-8">
          <ProfileTabs />
        </div>
        
        {/* Dashboard Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          {/* Main Content Area */}
          <div className="lg:col-span-2">
            <div className="space-y-8">
              <ProfileActivity />
              <ProfileLastViewed />
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-gray-800 rounded-xl p-6 border border-gray-700">
              <h3 className="text-lg font-semibold text-white mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <QuickActionEditProfile />
                <AccountSettingsModal />
              </div>
            </div>
            
            <ProfileWishlist />
            <ProfileOrders />
            <ProfileRecommended />
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Profile;
