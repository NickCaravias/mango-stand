import { useEffect, useState } from 'react';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen w-full bg-white overflow-x-hidden">
      <nav className="sticky top-0 left-0 right-0 w-screen 
                    bg-gradient-to-r from-orange-400 to-orange-500 
                    rounded-b-xl shadow-lg z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-center items-center h-14">
            <div className="flex space-x-8">
              {['home', 'products', 'about', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 ease-in-out
                    ${activeSection === section 
                      ? 'bg-white text-orange-500' 
                      : 'text-white hover:bg-white/10'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <main className="w-full">
        <section id="home" className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Home Section</h1>
        </section>

        <section id="products" className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Products Section</h1>
        </section>

        <section id="about" className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">About Section</h1>
        </section>

        <section id="contact" className="min-h-screen flex items-center justify-center">
          <h1 className="text-4xl font-bold">Contact Section</h1>
        </section>
      </main>
    </div>
  );
}

export default App;