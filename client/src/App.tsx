import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Audio from './pages/ArtilleryAudio';
import Shirts from './pages/Shirts';
import Mangos from './pages/Mangos';


function Navigation() {
  const location = useLocation();
  const [activeSection] = useState(location.pathname.slice(1) || 'home');

  return (
    <nav className="sticky top-0 left-0 right-0 w-full bg-gradient-to-r from-orange-400 to-orange-500 px-4 py-3">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-center items-center">
          <div className="flex space-x-8">
            {['mangos', 'shirts', 'audio'].map((section) => (
              <Link
                key={section}
                to={section === 'home' ? '/' : `/${section}`}
                className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 ease-in-out
                  ${activeSection === section 
                    ? 'bg-white text-orange-500' 
                    : 'text-white hover:bg-white/10'}`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <h1 className="text-4xl font-bold">Home Page</h1>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="min-h-screen w-screen overflow-x-hidden bg-gradient-to-b from-orange-50 via-orange-100 to-orange-50">
        <Navigation />
        <main className="w-full">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/mangos" element={<Mangos />} />
            <Route path="/shirts" element={<Shirts />} />
            <Route path="/audio" element={<Audio />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;