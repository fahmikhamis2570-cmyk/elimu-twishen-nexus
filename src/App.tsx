import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Toaster } from 'sonner';
import Layout from '@/components/Layout';
import Home from '@/pages/Home';
import About from '@/pages/About';
import Courses from '@/pages/Courses';
import Gallery from '@/pages/Gallery';
import Events from '@/pages/Events';
import Contact from '@/pages/Contact';
import Register from '@/pages/Register';
import Login from '@/pages/Login';
import Results from '@/pages/Results';
import Timetable from '@/pages/Timetable';

const App = () => {
  return (
    <Router>
      <Toaster position="top-center" richColors />
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          
          {/* Portal Routes */}
          <Route path="/login/:type" element={<Login />} />
          <Route path="/results" element={<Results />} />
          <Route path="/timetable" element={<Timetable />} />
          
          {/* Fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
