function Header() {
  return (
    <header className="flex flex-col items-center mb-10 text-center">
      <h1 className="text-4xl font-bold text-emerald-700 tracking-widest uppercase mb-2">
        Viktoriia Bobak
      </h1>
      <h2 className="text-xl font-medium tracking-wide text-gray-600 mb-4">
        Cybersecurity Student
      </h2>
      
      <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-semibold">
        <strong>Email:</strong> <a href="mailto:viktoriia.bobak.kb.2023@lpnu.ua" className="hover:text-emerald-700 transition-colors">
          viktoriia.bobak.kb.2023@lpnu.ua
        </a>
        <span className="text-gray-300">|</span>
        <strong>Phone:</strong> <a href="tel:+380667845234" className="hover:text-emerald-700 transition-colors">
          +380667845234
        </a>
        <span className="text-gray-300">|</span>
        <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/viktoriia-bobak-70981a355" target="_blank" rel="noreferrer" className="hover:text-emerald-700 transition-colors">
          Viktoriia Bobak
        </a>
      </div>
    </header>
  );
}

export default Header;