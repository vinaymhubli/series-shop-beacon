
import { useState } from 'react';

const ProfileTabs = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview' },
    { id: 'orders', label: 'Orders' },
    { id: 'wishlist', label: 'Wishlist' },
    { id: 'settings', label: 'Settings' }
  ];

  return (
    <div className="border-b border-gray-800 mt-8">
    </div>
  );
};

export default ProfileTabs;
