import React from 'react';
import { motion } from 'framer-motion';

const IMAGES = [
  "https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ccb7bb6-300b-4665-b202-6e32be7e39af/school-exterior-b6458b24-1782621843305.webp",
  "https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ccb7bb6-300b-4665-b202-6e32be7e39af/classroom-learning-628abff4-1782621843962.webp",
  "https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ccb7bb6-300b-4665-b202-6e32be7e39af/graduation-ceremony-62fd8fed-1782621843222.webp",
  "https://storage.googleapis.com/dala-prod-public-storage/generated-images/6ccb7bb6-300b-4665-b202-6e32be7e39af/school-sports-3952e504-1782621845412.webp",
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1523050853064-803575f4625d?w=800&auto=format&fit=crop",
];

const Gallery = () => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Gallery</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            A glimpse into the vibrant life and activities at Elimu Plus Twishen Centre.
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {IMAGES.map((src, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="relative group rounded-2xl overflow-hidden shadow-lg cursor-pointer"
              >
                <img 
                  src={src} 
                  alt={`Gallery Image ${i + 1}`} 
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white font-bold border-2 border-white px-6 py-2 rounded-full">View</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
