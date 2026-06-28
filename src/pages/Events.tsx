import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';

const events = [
  {
    title: "Annual Sports Day",
    date: "June 15, 2024",
    time: "9:00 AM - 4:00 PM",
    location: "Main Campus Field",
    desc: "A day filled with athletics, team sports, and fun activities for all students and parents.",
    image: "https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ccb7bb6-300b-4665-b202-6e32be7e39af/school-sports-3952e504-1782621845412.webp"
  },
  {
    title: "Science & Innovation Fair",
    date: "July 20, 2024",
    time: "10:00 AM - 3:00 PM",
    location: "Innovation Hub",
    desc: "Showcasing student projects in science, technology, and sustainable innovations.",
    image: "https://images.unsplash.com/photo-1564066399954-065914cc33b1?w=800&auto=format&fit=crop"
  },
  {
    title: "Parents-Teachers Meeting",
    date: "August 5, 2024",
    time: "2:00 PM - 5:00 PM",
    location: "Conference Hall",
    desc: "Discussing student progress and upcoming academic goals for the next term.",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop"
  }
];

const Events = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Upcoming Events</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Stay updated with the latest happenings and activities at our centre.
          </p>
        </div>
      </section>

      <section className="py-20 container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {events.map((event, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              <Card className="overflow-hidden border-none shadow-md hover:shadow-xl transition-shadow group h-full flex flex-col">
                <div className="h-48 overflow-hidden relative">
                  <img src={event.image} alt={event.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-md text-sm font-bold">
                    Upcoming
                  </div>
                </div>
                <CardContent className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                  <div className="space-y-3 mb-6 flex-grow">
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <Clock className="w-4 h-4 text-primary" />
                      <span>{event.time}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-500 text-sm">
                      <MapPin className="w-4 h-4 text-primary" />
                      <span>{event.location}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-2">
                    {event.desc}
                  </p>
                  <Button className="w-full bg-primary hover:bg-primary/90 mt-auto">
                    Mark Calendar
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

export default Events;
