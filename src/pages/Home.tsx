import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, BookOpen, Users, Award, Clock, GraduationCap } from 'lucide-react';

const IMAGES = {
  hero: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ccb7bb6-300b-4665-b202-6e32be7e39af/school-exterior-b6458b24-1782621843305.webp",
  classroom: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ccb7bb6-300b-4665-b202-6e32be7e39af/classroom-learning-628abff4-1782621843962.webp",
  graduation: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ccb7bb6-300b-4665-b202-6e32be7e39af/graduation-ceremony-62fd8fed-1782621843222.webp",
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src={IMAGES.hero} 
            alt="School Exterior" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-blue-900/60 mix-blend-multiply" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Unlocking Potential Through Excellence in Education
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-200">
              Elimu Plus Twishen Centre provides personalized learning experiences that empower students to achieve their academic goals and beyond.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white">
                <Link to="/register">Enroll Today</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="bg-white/10 hover:bg-white/20 border-white text-white backdrop-blur-sm">
                <Link to="/courses">Explore Courses</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { label: 'Students enrolled', value: '500+', icon: Users },
              { label: 'Success Rate', value: '98%', icon: Award },
              { label: 'Courses', value: '25+', icon: BookOpen },
              { label: 'Years Experience', value: '10+', icon: Clock },
            ].map((stat, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex p-3 rounded-full bg-blue-50 text-primary mb-4">
                  <stat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">{stat.value}</h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Brief Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <img 
                src={IMAGES.classroom} 
                alt="Classroom" 
                className="rounded-2xl shadow-2xl w-full h-[400px] object-cover"
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold mb-6 text-primary">Why Choose Elimu Plus?</h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                At Elimu Plus Twishen Centre, we believe that every student has the potential to excel. Our modern facilities, experienced educators, and personalized teaching methods create an environment where curiosity thrives and success is inevitable.
              </p>
              <ul className="space-y-4 mb-8">
                {[
                  'Personalized attention for every student',
                  'Modern teaching aids and technology',
                  'Regular assessment and feedback',
                  'Safe and conducive learning environment'
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                      <div className="w-2 h-2 rounded-full bg-white" />
                    </div>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild variant="link" className="text-primary font-bold p-0 group">
                <Link to="/about" className="flex items-center gap-2">
                  Learn more about us <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Our Featured Courses</h2>
          <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
            Explore our wide range of courses designed to cater to different academic needs and age groups.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Primary Foundation', desc: 'Building strong basics for early learners in core subjects.', icon: BookOpen },
              { title: 'High School Prep', desc: 'Comprehensive coaching for secondary school success.', icon: GraduationCap },
              { title: 'Computer Science', desc: 'Modern coding and digital literacy for the new age.', icon: BookOpen },
            ].map((course, i) => (
              <Card key={i} className="group hover:shadow-xl transition-all duration-300 border-none shadow-md overflow-hidden">
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-blue-50 text-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                    <course.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold mb-4">{course.title}</h3>
                  <p className="text-gray-600 mb-6">{course.desc}</p>
                  <Button asChild variant="outline" className="w-full">
                    <Link to="/courses">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="bg-primary rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Your Journey?</h2>
              <p className="text-blue-100 mb-10 max-w-2xl mx-auto text-lg">
                Join hundreds of successful students at Elimu Plus Twishen Centre. Registration is open for the new intake!
              </p>
              <Button asChild size="lg" className="bg-white text-primary hover:bg-blue-50">
                <Link to="/register">Register Now</Link>
              </Button>
            </div>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/10 rounded-full -ml-32 -mb-32 blur-3xl" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
