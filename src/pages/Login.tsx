import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { GraduationCap, UserCog, Users } from 'lucide-react';
import { toast } from 'sonner';

const Login = () => {
  const { type } = useParams<{ type: string }>();
  
  const getInfo = () => {
    switch(type) {
      case 'student': return { title: 'Student Login', icon: GraduationCap, desc: 'Access your courses and results' };
      case 'teacher': return { title: 'Teacher Login', icon: UserCog, desc: 'Manage your classes and students' };
      case 'parent': return { title: 'Parent Login', icon: Users, desc: "Monitor your child's progress" };
      default: return { title: 'Login', icon: GraduationCap, desc: 'Access your portal' };
    }
  };

  const info = getInfo();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success(`Successfully logged in as ${type}!`);
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-gray-50 px-4 py-12">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md"
      >
        <Card className="border-none shadow-2xl rounded-3xl overflow-hidden">
          <CardHeader className="bg-primary text-white text-center pb-12 pt-12">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
              <info.icon className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl font-bold">{info.title}</CardTitle>
            <CardDescription className="text-blue-100">{info.desc}</CardDescription>
          </CardHeader>
          <CardContent className="pt-8 px-8">
            <form onSubmit={handleLogin} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="id">User ID / Email</Label>
                <Input id="id" placeholder="Enter your ID or Email" required className="rounded-xl" />
              </div>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link to="#" className="text-xs text-primary hover:underline">Forgot password?</Link>
                </div>
                <Input id="password" type="password" placeholder="••••••••" required className="rounded-xl" />
              </div>
              <Button type="submit" className="w-full bg-primary hover:bg-primary/90 py-6 rounded-xl">
                Login
              </Button>
            </form>
          </CardContent>
          <CardFooter className="pb-8 justify-center text-sm text-gray-500">
            Don't have an account? <Link to="/register" className="text-primary font-semibold ml-1 hover:underline">Register here</Link>
          </CardFooter>
        </Card>
      </motion.div>
    </div>
  );
};

export default Login;
