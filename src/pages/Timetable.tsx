import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const Timetable = () => {
  const schedule = {
    mon: [
      { time: '08:00 - 09:30', sub: 'Mathematics', teacher: 'Mr. Kamau' },
      { time: '09:30 - 11:00', sub: 'English', teacher: 'Ms. Atieno' },
      { time: '11:00 - 11:30', sub: 'Break', teacher: '-' },
      { time: '11:30 - 13:00', sub: 'Physics', teacher: 'Mr. Otieno' },
    ],
    tue: [
      { time: '08:00 - 09:30', sub: 'Chemistry', teacher: 'Mrs. Wanjiru' },
      { time: '09:30 - 11:00', sub: 'Biology', teacher: 'Mr. Musyoka' },
      { time: '11:00 - 11:30', sub: 'Break', teacher: '-' },
      { time: '11:30 - 13:00', sub: 'History', teacher: 'Ms. Fatuma' },
    ],
    wed: [
      { time: '08:00 - 09:30', sub: 'Geography', teacher: 'Mr. Kiprop' },
      { time: '09:30 - 11:00', sub: 'Computer', teacher: 'Ms. Moraa' },
      { time: '11:00 - 11:30', sub: 'Break', teacher: '-' },
      { time: '11:30 - 13:00', sub: 'Swahili', teacher: 'Mr. Juma' },
    ],
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Class Timetable</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            View your weekly lesson schedule and stay organized with your learning activities.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-10">
        <Card className="border-none shadow-xl rounded-3xl overflow-hidden bg-white">
          <CardContent className="p-8">
            <Tabs defaultValue="mon" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="bg-blue-50 p-1">
                  <TabsTrigger value="mon" className="px-8 rounded-lg">Monday</TabsTrigger>
                  <TabsTrigger value="tue" className="px-8 rounded-lg">Tuesday</TabsTrigger>
                  <TabsTrigger value="wed" className="px-8 rounded-lg">Wednesday</TabsTrigger>
                  <TabsTrigger value="thu" className="px-8 rounded-lg">Thursday</TabsTrigger>
                  <TabsTrigger value="fri" className="px-8 rounded-lg">Friday</TabsTrigger>
                </TabsList>
              </div>

              {['mon', 'tue', 'wed', 'thu', 'fri'].map((day) => (
                <TabsContent key={day} value={day}>
                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                  >
                    <Table>
                      <TableHeader className="bg-gray-50">
                        <TableRow>
                          <TableHead className="w-[150px]">Time</TableHead>
                          <TableHead>Subject</TableHead>
                          <TableHead>Instructor</TableHead>
                          <TableHead>Status</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {(schedule[day as keyof typeof schedule] || schedule.mon).map((row, i) => (
                          <TableRow key={i} className={row.sub === 'Break' ? 'bg-gray-50/50' : ''}>
                            <TableCell className="font-bold text-primary">{row.time}</TableCell>
                            <TableCell className="font-medium">{row.sub}</TableCell>
                            <TableCell>{row.teacher}</TableCell>
                            <TableCell>
                              {row.sub === 'Break' ? (
                                <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">Recess</span>
                              ) : (
                                <span className="text-xs bg-green-100 text-green-600 px-2 py-1 rounded-full">Scheduled</span>
                              )}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </motion.div>
                </TabsContent>
              ))}
            </Tabs>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Timetable;
