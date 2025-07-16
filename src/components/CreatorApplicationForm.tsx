
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { X } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface CreatorApplicationFormProps {
  onClose: () => void;
}

const CreatorApplicationForm = ({ onClose }: CreatorApplicationFormProps) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    country: '',
    socialMedia: '',
    portfolio: '',
    experience: '',
    genre: '',
    projectDescription: '',
    timeline: '',
    additionalInfo: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    
    toast({
      title: "Application Submitted!",
      description: "Thank you for wanting to debut with Crossed Hearts. One of our representative will reach out to you shortly.",
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      country: '',
      socialMedia: '',
      portfolio: '',
      experience: '',
      genre: '',
      projectDescription: '',
      timeline: '',
      additionalInfo: ''
    });
  };

  if (isSubmitted) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
        <div className="bg-gray-800 rounded-lg p-8 max-w-md w-full relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-white"
          >
            <X className="w-6 h-6" />
          </button>
          
          <div className="text-center">
            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">Application Submitted!</h3>
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              Thank you for wanting to debut with Crossed Hearts. One of our representative will reach out to you shortly.
            </p>
            <Button
              onClick={resetForm}
              className="bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-6 rounded-md transition-colors mr-4"
            >
              Submit Another Application
            </Button>
            <Button
              onClick={onClose}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:text-white"
            >
              Close
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-lg p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="mb-6">
          <h2 className="text-3xl font-bold text-white mb-2">
            Creator <span className="text-red-500">Application</span>
          </h2>
          <p className="text-gray-300">Join the Crossed Hearts family of creators</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="fullName" className="text-gray-300 mb-2 block">
                Full Name *
              </Label>
              <Input
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleInputChange}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                placeholder="Enter your full name"
                required
              />
            </div>
            <div>
              <Label htmlFor="email" className="text-gray-300 mb-2 block">
                Email Address *
              </Label>
              <Input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                placeholder="Enter your email"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <Label htmlFor="phone" className="text-gray-300 mb-2 block">
                Phone Number
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                placeholder="Enter your phone number"
              />
            </div>
            <div>
              <Label htmlFor="country" className="text-gray-300 mb-2 block">
                Country *
              </Label>
              <Input
                id="country"
                name="country"
                value={formData.country}
                onChange={handleInputChange}
                className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
                placeholder="Enter your country"
                required
              />
            </div>
          </div>

          <div>
            <Label htmlFor="socialMedia" className="text-gray-300 mb-2 block">
              Social Media Links
            </Label>
            <Input
              id="socialMedia"
              name="socialMedia"
              value={formData.socialMedia}
              onChange={handleInputChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              placeholder="Instagram, Twitter, etc."
            />
          </div>

          <div>
            <Label htmlFor="portfolio" className="text-gray-300 mb-2 block">
              Portfolio/Website URL
            </Label>
            <Input
              id="portfolio"
              name="portfolio"
              value={formData.portfolio}
              onChange={handleInputChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              placeholder="Link to your portfolio or website"
            />
          </div>

          <div>
            <Label htmlFor="experience" className="text-gray-300 mb-2 block">
              Experience Level *
            </Label>
            <Textarea
              id="experience"
              name="experience"
              value={formData.experience}
              onChange={handleInputChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 min-h-[80px]"
              placeholder="Describe your experience in creating content..."
              required
            />
          </div>

          <div>
            <Label htmlFor="genre" className="text-gray-300 mb-2 block">
              Preferred Genre/Style *
            </Label>
            <Input
              id="genre"
              name="genre"
              value={formData.genre}
              onChange={handleInputChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              placeholder="Romance, Action, Fantasy, etc."
              required
            />
          </div>

          <div>
            <Label htmlFor="projectDescription" className="text-gray-300 mb-2 block">
              Project Description *
            </Label>
            <Textarea
              id="projectDescription"
              name="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 min-h-[120px]"
              placeholder="Tell us about your project idea..."
              required
            />
          </div>

          <div>
            <Label htmlFor="timeline" className="text-gray-300 mb-2 block">
              Expected Timeline
            </Label>
            <Input
              id="timeline"
              name="timeline"
              value={formData.timeline}
              onChange={handleInputChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              placeholder="When do you plan to complete your project?"
            />
          </div>

          <div>
            <Label htmlFor="additionalInfo" className="text-gray-300 mb-2 block">
              Additional Information
            </Label>
            <Textarea
              id="additionalInfo"
              name="additionalInfo"
              value={formData.additionalInfo}
              onChange={handleInputChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 min-h-[80px]"
              placeholder="Anything else you'd like us to know..."
            />
          </div>

          <div className="flex gap-4">
            <Button
              type="submit"
              className="flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md transition-colors"
            >
              Submit Application
            </Button>
            <Button
              type="button"
              onClick={onClose}
              variant="outline"
              className="border-gray-600 text-gray-300 hover:text-white"
            >
              Cancel
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreatorApplicationForm;
