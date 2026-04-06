function Header() {
  return (
    <header className="flex flex-col items-center mb-10 text-center">
      <h1 className="text-4xl font-bold text-emerald-700 dark:text-[#34d399] tracking-widest uppercase mb-2">
        Viktoriia Bobak
      </h1>
      <h2 className="text-xl font-medium tracking-wide text-gray-600 dark:text-[#e0e0e0] mb-4">
        Cybersecurity Student
      </h2>
      
      <div className="flex flex-wrap justify-center items-center gap-4 text-sm font-semibold text-gray-800 dark:text-[#e0e0e0]">
        <strong className="dark:text-[#34d399]">Email:</strong> <a href="mailto:viktoriia.bobak.kb.2023@lpnu.ua" className="hover:text-emerald-700 dark:hover:text-[#34d399] transition-colors">
          viktoriia.bobak.kb.2023@lpnu.ua
        </a>
        <span className="text-gray-300 dark:text-gray-600">|</span>
        <strong className="dark:text-[#34d399]">Phone:</strong> <a href="tel:+380667845234" className="hover:text-emerald-700 dark:hover:text-[#34d399] transition-colors">
          +380667845234
        </a>
        <span className="text-gray-300 dark:text-gray-600">|</span>
        <strong className="dark:text-[#34d399]">LinkedIn:</strong> <a href="https://linkedin.com/in/viktoriia-bobak-70981a355" target="_blank" rel="noreferrer" className="hover:text-emerald-700 dark:hover:text-[#34d399] transition-colors">
          Viktoriia Bobak
        </a>
      </div>
    </header>
  );
}

export default Header;