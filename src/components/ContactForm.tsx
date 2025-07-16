
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: '',
    agreeToPolicy: false
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.agreeToPolicy) {
      toast({
        title: "Privacy Policy Agreement Required",
        description: "Please agree to the Privacy Policy before sending your message.",
        variant: "destructive"
      });
      return;
    }
    
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
    
    // Reset form
    setFormData({
      firstName: '',
      lastName: '',
      email: '',
      subject: '',
      message: '',
      agreeToPolicy: false
    });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-gray-800 p-8 lg:p-12">
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-white mb-2">
          Send us a <span className="text-red-500">Message</span>
        </h2>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-gray-300 mb-2 block">
              First Name
            </Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              placeholder="Enter your first name"
              required
            />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-gray-300 mb-2 block">
              Last Name
            </Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
              placeholder="Enter your last name"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="email" className="text-gray-300 mb-2 block">
            Email Address
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
            placeholder="Enter your email address"
            required
          />
        </div>

        <div>
          <Label htmlFor="subject" className="text-gray-300 mb-2 block">
            Select a subject
          </Label>
          <Input
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500"
            placeholder="What is this about?"
            required
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-gray-300 mb-2 block">
            Message
          </Label>
          <Textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            className="bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-red-500 min-h-[120px]"
            placeholder="Tell us more about your inquiry..."
            required
          />
        </div>

        <div className="flex items-center space-x-2">
          <Checkbox
            id="agreeToPolicy"
            checked={formData.agreeToPolicy}
            onCheckedChange={(checked) => 
              setFormData(prev => ({ ...prev, agreeToPolicy: checked as boolean }))
            }
            className="border-gray-600 data-[state=checked]:bg-red-500 data-[state=checked]:border-red-500"
          />
          <Label htmlFor="agreeToPolicy" className="text-gray-300 text-sm">
            I agree to the{' '}
            <a href="#" className="text-red-400 hover:text-red-300 underline">
              Privacy Policy
            </a>
          </Label>
        </div>

        <Button
          type="submit"
          className="w-full bg-red-500 hover:bg-red-600 text-white font-semibold py-3 rounded-md transition-colors"
        >
          Send Message
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
