import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Search, Download, Printer } from 'lucide-react';
import { toast } from 'sonner';

const Results = () => {
  const [searching, setSearching] = useState(false);
  const [showResult, setShowResult] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setSearching(true);
    setTimeout(() => {
      setSearching(false);
      setShowResult(true);
      toast.success("Results found for Student ID: EP-2024-001");
    }, 1500);
  };

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      <section className="bg-primary py-20 text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Online Results Portal</h1>
          <p className="text-blue-100 max-w-2xl mx-auto">
            Check your academic performance securely using your student identification number.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-4 -mt-10">
        <Card className="max-w-3xl mx-auto shadow-xl border-none rounded-3xl overflow-hidden">
          <CardHeader className="bg-white border-b border-gray-100 p-8">
            <CardTitle className="text-xl">Search Exam Results</CardTitle>
          </CardHeader>
          <CardContent className="p-8">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 mb-8">
              <div className="flex-grow">
                <Input placeholder="Enter Student ID (e.g. EP-2024-001)" className="rounded-xl h-12" required />
              </div>
              <Button type="submit" disabled={searching} className="bg-primary hover:bg-primary/90 h-12 px-8 rounded-xl">
                {searching ? "Searching..." : "View Results"}
                {!searching && <Search className="ml-2 w-4 h-4" />}
              </Button>
            </form>

            {showResult && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="space-y-8"
              >
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 border-l-4 border-primary pl-4 py-2 bg-blue-50/50 rounded-r-lg">
                  <div>
                    <h3 className="font-bold text-lg">John Doe</h3>
                    <p className="text-sm text-gray-500">Class: Form 4 - Blue | Term 2, 2024</p>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="gap-2">
                      <Printer className="w-4 h-4" /> Print
                    </Button>
                    <Button variant="outline" size="sm" className="gap-2">
                      <Download className="w-4 h-4" /> PDF
                    </Button>
                  </div>
                </div>

                <div className="rounded-xl border border-gray-100 overflow-hidden shadow-sm">
                  <Table>
                    <TableHeader className="bg-gray-50">
                      <TableRow>
                        <TableHead>Subject</TableHead>
                        <TableHead>Score</TableHead>
                        <TableHead>Grade</TableHead>
                        <TableHead>Remarks</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {[
                        { s: 'Mathematics', m: 88, g: 'A' },
                        { s: 'English', m: 76, g: 'A-' },
                        { s: 'Swahili', m: 82, g: 'A' },
                        { s: 'Physics', m: 92, g: 'A' },
                        { s: 'Chemistry', m: 85, g: 'A' },
                      ].map((row, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-medium">{row.s}</TableCell>
                          <TableCell>{row.m}</TableCell>
                          <TableCell className="font-bold text-primary">{row.g}</TableCell>
                          <TableCell className="text-gray-500 text-sm">Excellent work</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="bg-primary text-white p-6 rounded-2xl text-center">
                    <p className="text-xs uppercase tracking-wider mb-1 opacity-80">Mean Grade</p>
                    <p className="text-4xl font-bold">A</p>
                  </div>
                  <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Position</p>
                    <p className="text-4xl font-bold text-primary">3 / 45</p>
                  </div>
                  <div className="bg-white border border-gray-100 p-6 rounded-2xl text-center shadow-sm">
                    <p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Total Points</p>
                    <p className="text-4xl font-bold text-primary">82</p>
                  </div>
                </div>
              </motion.div>
            )}
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Results;
