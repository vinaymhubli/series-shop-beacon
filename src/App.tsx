
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ComicsHome from "./pages/ComicsHome";
import ComicDetail from "./pages/ComicDetail";
import EpisodePreview from "./pages/EpisodePreview";
import { EpisodeReader } from "./pages/EpisodeReader";
import BuyCoins from "./pages/BuyCoins";
import OurSeries from "./pages/OurSeries";
import ShopAll from "./pages/ShopAll";
import Announcements from "./pages/Announcements";
import PreOrder from "./pages/PreOrder";
import SeriesPage from "./pages/SeriesPage";
import Checkout from "./pages/Checkout";
import DirectCheckout from "./pages/DirectCheckout";
import CoinUnlock from "./pages/CoinUnlock";
import UnlockSuccess from "./pages/UnlockSuccess";
import PaymentSuccess from "./pages/PaymentSuccess";
import AboutUs from "./pages/AboutUs";
import ContactUs from "./pages/ContactUs";
import Profile from "./pages/Profile";
import AffiliationPrograms from "./pages/AffiliationPrograms";
import ReadersMode from "./pages/ReadersMode";
import MerchandiseDetail from "./pages/MerchandiseDetail";
import AdminPanel from "./pages/AdminPanel";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Auth from "./pages/Auth";
import ChatBot from "./components/ChatBot";
import { AuthProvider } from "./hooks/useSupabaseAuth";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <AuthProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/comics" element={<ComicsHome />} />
            <Route path="/comic/:id" element={<ComicDetail />} />
            <Route path="/episode/:id/preview" element={<EpisodePreview />} />
            <Route path="/episode/:id/read" element={<EpisodeReader />} />
            <Route path="/buy-coins" element={<BuyCoins />} />
            <Route path="/our-series" element={<OurSeries />} />
            <Route path="/shop-all" element={<ShopAll />} />
            <Route path="/announcements" element={<Announcements />} />
            <Route path="/pre-order/:productId" element={<PreOrder />} />
            <Route path="/series/:seriesId" element={<SeriesPage />} />
            <Route path="/product/:productId" element={<MerchandiseDetail />} />
            <Route path="/checkout/:productId" element={<Checkout />} />
            <Route path="/direct-checkout/:productId" element={<DirectCheckout />} />
            <Route path="/coin-unlock/:productId" element={<CoinUnlock />} />
            <Route path="/unlock-success" element={<UnlockSuccess />} />
            <Route path="/payment-success" element={<PaymentSuccess />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/contact-us" element={<ContactUs />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/affiliation-programs" element={<AffiliationPrograms />} />
            <Route path="/readers/:seriesTitle" element={<ReadersMode />} />
            <Route path="/readers-mode/:seriesTitle" element={<ReadersMode />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/auth" element={<Auth />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <ChatBot />
        </BrowserRouter>
      </AuthProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
