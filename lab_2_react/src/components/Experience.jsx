function Experience() {
  return (
    <section className="p-4 mb-6 rounded-lg transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-[#383838] hover:translate-x-2">
      <h2 className="flex items-center text-lg font-bold text-emerald-700 dark:text-[#34d399] uppercase tracking-widest mb-4">
        Experience
        <span className="flex-grow h-0.5 bg-emerald-700 dark:bg-[#34d399] ml-4"></span>
      </h2>
      <ul className="space-y-3 text-gray-800 dark:text-[#e0e0e0]">
        <li className="border-l-2 border-emerald-700 dark:border-[#34d399] pl-3">
          Logistics & Documentation Administrator | Raben Ukraine | 2025
        </li>
        <li className="border-l-2 border-emerald-700 dark:border-[#34d399] pl-3">
          Academic Projects in Cybersecurity | Lviv Polytechnic National University | 2023 - Present
        </li>
        <li className="border-l-2 border-emerald-700 dark:border-[#34d399] pl-3">
          Specialized Courses & Certifications | Prometheus, Cisco, Genesis
        </li>
      </ul>
    </section>
  );
}

export default Experience;