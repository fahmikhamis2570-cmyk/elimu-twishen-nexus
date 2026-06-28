import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Heart, Sparkles } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-blue-900 py-20 text-white relative">
        <div className="container mx-auto px-4 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            About Elimu Plus
          </motion.h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Learn more about our mission, vision, and the values that drive our commitment to excellence.
          </p>
        </div>
      </section>

      {/* History */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Elimu Plus Twishen Centre was founded with a single mission: to provide quality, accessible, and personalized education to students of all backgrounds. What started as a small tutoring group has grown into a leading educational hub in the region.
                </p>
                <p>
                  Our journey has been defined by the success of our students. We take pride in seeing our alumni excel in top universities and professional careers, carrying with them the foundation we helped build.
                </p>
                <p>
                  Today, we continue to innovate our teaching methods, integrating modern technology with time-tested educational principles to ensure our students are prepared for the challenges of the 21st century.
                </p>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ccb7bb6-300b-4665-b202-6e32be7e39af/graduation-ceremony-62fd8fed-1782621843222.webp" 
                alt="Our History" 
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-primary text-white p-8 rounded-2xl hidden md:block">
                <p className="text-4xl font-bold mb-1">10+</p>
                <p className="text-sm uppercase tracking-wider">Years of Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission/Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Our Mission', 
                desc: 'To empower students by providing high-quality, personalized education that fosters intellectual growth and character development.',
                icon: Target,
                color: 'bg-blue-500'
              },
              { 
                title: 'Our Vision', 
                desc: 'To be the leading center of academic excellence, recognized for producing well-rounded and innovative leaders of tomorrow.',
                icon: Sparkles,
                color: 'bg-indigo-500'
              },
              { 
                title: 'Our Values', 
                desc: 'Integrity, Excellence, Inclusivity, and Innovation are the pillars that guide everything we do at Elimu Plus.',
                icon: Heart,
                color: 'bg-rose-500'
              },
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className={`w-12 h-12 ${item.color} text-white rounded-xl flex items-center justify-center mb-6`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
