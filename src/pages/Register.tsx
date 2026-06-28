import React from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

const Register = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Registration application submitted successfully! We will contact you soon.");
  };

  return (
    <div className="bg-gray-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          {/* Left Side - Info */}
          <div className="md:w-1/3 bg-primary p-12 text-white flex flex-col justify-center">
            <h2 className="text-3xl font-bold mb-6">Join Our Community</h2>
            <p className="text-blue-100 mb-8">
              Fill out this form to start your journey with Elimu Plus Twishen Centre.
            </p>
            <ul className="space-y-4 text-sm text-blue-50">
              <li>✓ Top-rated educators</li>
              <li>✓ Comprehensive study materials</li>
              <li>✓ Regular performance reviews</li>
              <li>✓ Holistic development</li>
            </ul>
          </div>

          {/* Right Side - Form */}
          <div className="md:w-2/3 p-12">
            <h2 className="text-2xl font-bold mb-8">Student Registration</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input id="firstName" placeholder="John" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input id="lastName" placeholder="Doe" required />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="email">Email Address</Label>
                  <Input id="email" type="email" placeholder="john@example.com" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input id="phone" type="tel" placeholder="+254..." required />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="course">Interested Course</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a course" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="primary">Primary Foundation</SelectItem>
                    <SelectItem value="highschool">High School Prep</SelectItem>
                    <SelectItem value="coding">Digital Literacy & Coding</SelectItem>
                    <SelectItem value="language">Language Mastery</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Any Additional Information</Label>
                <Textarea id="message" placeholder="Tell us more about your academic needs..." rows={4} />
              </div>

              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg rounded-xl">
                Submit Application
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
