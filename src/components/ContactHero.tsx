
const ContactHero = () => {
  return (
    <section className="relative py-32 md:py-44 px-4">
      {/* Hero Image Background */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{
          backgroundImage: `url('/lovable-uploads/781ea40e-866e-4ee8-9bf7-862a42bb8716.png')`
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      
      <div className="container mx-auto relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Contact<span className="text-red-500">Us</span>
          </h1>
          <p className="text-xl text-gray-300 leading-relaxed">
            We're here to help! Reach out to our team for support, inquiries, or collaboration opportunities.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;
