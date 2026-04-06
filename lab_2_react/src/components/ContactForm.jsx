import { useState, useEffect } from 'react';

const ContactForm = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 60000); 

    return () => clearTimeout(timer);
  }, []);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
      <div className="bg-white dark:bg-[#2d2d2d] p-8 rounded-lg shadow-xl w-[90%] max-w-[400px] relative">
        
        <button 
          onClick={() => setIsOpen(false)}
          className="absolute top-3 right-4 text-gray-500 dark:text-gray-400 hover:text-emerald-700 dark:hover:text-[#34d399] text-2xl font-bold transition-colors"
        >
          &times;
        </button>
        
        <h2 className="text-xl font-bold text-emerald-700 dark:text-[#34d399] uppercase tracking-widest mb-4">
          Contact Me
        </h2>
        
        <form action="https://formspree.io/f/mwvwwyqv" method="POST" className="flex flex-col gap-3">          
          <input 
            type="text" 
            name="name" 
            placeholder="Your Name" 
            required 
            className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-transparent dark:text-white focus:outline-none focus:border-emerald-700 dark:focus:border-[#34d399]"
          />
          <input 
            type="email" 
            name="email" 
            placeholder="Your Email" 
            required 
            className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-transparent dark:text-white focus:outline-none focus:border-emerald-700 dark:focus:border-[#34d399]"
          />
          <input 
            type="tel" 
            name="phone" 
            placeholder="Phone Number" 
            className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-transparent dark:text-white focus:outline-none focus:border-emerald-700 dark:focus:border-[#34d399]"
          />
          <textarea 
            name="message" 
            rows="4" 
            placeholder="Your Message" 
            required
            className="p-2 border border-gray-300 dark:border-gray-600 rounded bg-transparent dark:text-white focus:outline-none focus:border-emerald-700 dark:focus:border-[#34d399]"
          ></textarea>
          
          <button 
            type="submit" 
            className="mt-2 bg-emerald-700 dark:bg-[#34d399] text-white dark:text-[#1a1a1a] font-bold py-2 px-4 rounded hover:bg-emerald-800 dark:hover:bg-[#2ea37a] transition-colors uppercase tracking-wider"
          >
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;