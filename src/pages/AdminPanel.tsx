import { AdminDashboard } from '@/components/cms/AdminDashboard';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AdminPanel = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <AdminDashboard />
      <Footer />
    </div>
  );
};

export default AdminPanel;