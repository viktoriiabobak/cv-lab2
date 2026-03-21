import Header from './components/Header';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-gray-50 text-gray-800 min-h-screen py-10 px-4 font-sans">
      
      {/* Шапка тепер НАД білою карткою, просто на сірому фоні */}
      <div className="max-w-4xl mx-auto">
        <Header />
      </div>

      {/* Біла картка тільки для основного контенту */}
      <main className="max-w-4xl mx-auto bg-white p-8 md:p-12 shadow-lg rounded-xl">
        <About />
        <Education />
        <Skills />
        <Experience />
      </main>

      <Footer />
    </div>
  );
}

export default App;