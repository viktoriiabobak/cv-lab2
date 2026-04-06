function Education() {
  return (
    <section className="p-4 mb-6 rounded-lg transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-[#383838] hover:translate-x-2">
      <h2 className="flex items-center text-lg font-bold text-emerald-700 dark:text-[#34d399] uppercase tracking-widest mb-4">
        Education
        <span className="flex-grow h-0.5 bg-emerald-700 dark:bg-[#34d399] ml-4"></span>
      </h2>
      <p className="leading-relaxed text-gray-700 dark:text-[#e0e0e0]">
        <strong className="text-gray-900 dark:text-[#34d399]">Lviv Polytechnic National University</strong><br />
        Bachelor of Cybersecurity | 2023 - 2027
      </p>
    </section>
  );
}

export default Education;