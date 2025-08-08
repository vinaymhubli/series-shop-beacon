
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ProfileHeader from '@/components/ProfileHeader';
import ProfileTabs from '@/components/ProfileTabs';
import ProfileActivity from '@/components/ProfileActivity';
import ProfileWishlist from '@/components/ProfileWishlist';
import ProfileOrders from '@/components/ProfileOrders';
import ProfileLastViewed from '@/components/ProfileLastViewed';
import ProfileRecommended from '@/components/ProfileRecommended';

const Profile = () => {
  return (
    <div className="min-h-screen bg-gray-950">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        {/* Profile content starts here */}

        <ProfileHeader />
        <ProfileTabs />
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-8">
          <div className="lg:col-span-2">
            <ProfileActivity />
            <ProfileLastViewed />
          </div>
          <div className="space-y-8">
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
