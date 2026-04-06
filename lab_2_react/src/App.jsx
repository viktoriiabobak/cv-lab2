import { useState, useEffect } from 'react';
import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Reviews from './components/Reviews';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    const hours = new Date().getHours();
    if (hours < 7 || hours >= 21) {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  }, []); 

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark'); 
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]); 

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 dark:bg-[#1a1a1a] dark:text-[#e0e0e0] transition-colors duration-300 py-10">
      
      <button 
        onClick={toggleTheme}
        className="absolute top-4 left-4 sm:top-8 sm:left-8 bg-[#333333] text-white dark:bg-[#e0e0e0] dark:text-[#333333] px-4 py-2 rounded-md font-bold transition-all hover:scale-105 z-10 shadow-md"
      >
        {theme === 'light' ? 'Dark Mode' : 'Light Mode'}
      </button>

      <div className="max-w-4xl mx-auto px-4 relative">
        <Header />
        <main className="bg-white dark:bg-[#2d2d2d] rounded-xl shadow-lg p-6 sm:p-10 transition-colors duration-300">
          <About />
          <Education />
          <Skills />
          <Experience />
          <Reviews />
        </main>
        <Footer />
        <ContactForm />
      </div>
    </div>
  );
}

export default App;