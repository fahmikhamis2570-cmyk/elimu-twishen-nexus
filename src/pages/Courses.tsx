import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { BookOpen, User, Calendar, CheckCircle } from 'lucide-react';

const courses = [
  {
    title: "KCPE Excellence Program",
    category: "Primary School",
    duration: "1 Year",
    students: "150+ Enrolled",
    desc: "A comprehensive program focused on core subjects for Grade 8 students preparing for national exams.",
    features: ["Daily Mock Tests", "Personalized Feedback", "Past Paper Revision"]
  },
  {
    title: "KCSE Intensive Revision",
    category: "High School",
    duration: "2 Terms",
    students: "200+ Enrolled",
    desc: "Fast-track revision for secondary students focusing on STEM subjects and Humanities.",
    features: ["Lab Practicals", "Weekend Bootcamps", "Career Guidance"]
  },
  {
    title: "Digital Literacy & Coding",
    category: "Skills Development",
    duration: "3 Months",
    students: "80+ Enrolled",
    desc: "Equipping young learners with essential computer skills and basic programming knowledge.",
    features: ["Python Basics", "Web Design", "Digital Citizenship"]
  },
  {
    title: "Language Mastery (English/Swahili)",
    category: "Language",
    duration: "6 Months",
    students: "60+ Enrolled",
    desc: "Improving communication skills through creative writing, public speaking, and reading programs.",
    features: ["Debate Sessions", "Creative Writing", "Poetry & Drama"]
  },
  {
    title: "Mathematics Clinic",
    category: "Specialized",
    duration: "Ongoing",
    students: "100+ Enrolled",
    desc: "Targeted help for students struggling with complex mathematical concepts across all levels.",
    features: ["Problem Solving Techniques", "Mental Math", "Visual Aids"]
  },
  {
    title: "Science Discovery Club",
    category: "Extra-curricular",
    duration: "Weekend",
    students: "50+ Enrolled",
    desc: "Hands-on experiments and science projects to ignite curiosity in young minds.",
    features: ["Field Trips", "Experiment Kits", "Science Fair Prep"]
  }
];

const Courses = () => {
  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Header */}
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Explore Our Courses
          </motion.h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Choose from a wide variety of academic and skill-based programs tailored to help you succeed.
          </p>
        </div>
      </section>

      {/* Course Grid */}
      <section className="container mx-auto px-4 -mt-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
            >
              <Card className="h-full hover:shadow-xl transition-shadow border-none shadow-sm overflow-hidden flex flex-col">
                <CardHeader className="pb-4">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary" className="bg-blue-100 text-primary hover:bg-blue-100 border-none">
                      {course.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl">{course.title}</CardTitle>
                  <CardDescription className="text-gray-500 flex items-center gap-4 mt-2">
                    <span className="flex items-center gap-1 text-xs">
                      <Calendar className="w-3 h-3" /> {course.duration}
                    </span>
                    <span className="flex items-center gap-1 text-xs">
                      <User className="w-3 h-3" /> {course.students}
                    </span>
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {course.desc}
                  </p>
                  <div className="space-y-2 mb-8 flex-grow">
                    {course.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm text-gray-700">
                        <CheckCircle className="w-4 h-4 text-green-500 shrink-0" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">
                    Enroll Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Courses;
