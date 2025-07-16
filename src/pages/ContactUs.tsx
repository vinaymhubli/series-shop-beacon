
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactHero from '@/components/ContactHero';
import ContactForm from '@/components/ContactForm';
import ContactInfo from '@/components/ContactInfo';
import ContactFAQ from '@/components/ContactFAQ';
import Newsletter from '@/components/Newsletter';

const ContactUs = () => {
  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      <ContactHero />
      <div className="grid lg:grid-cols-2 gap-0">
        <ContactInfo />
        <ContactForm />
      </div>
      <ContactFAQ />
      <Newsletter />
      <Footer />
    </div>
  );
};

export default ContactUs;
