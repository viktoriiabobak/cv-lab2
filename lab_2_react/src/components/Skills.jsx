function Skills() {
  const mySkills = [
    'Python', 'C (basics)', 'Networking knowledge', 
    'Databases (SQL)', 'Linux/Unix', 'Wireshark', 'Git'
  ];

  return (

    <section className="p-4 mb-6 rounded-lg transition-all duration-300 hover:bg-emerald-50 dark:hover:bg-[#383838] hover:translate-x-2">
      
      <h2 className="flex items-center text-lg font-bold text-emerald-700 dark:text-[#34d399] uppercase tracking-widest mb-4">
        Skills
        <span className="flex-grow h-0.5 bg-emerald-700 dark:bg-[#34d399] ml-4"></span>
      </h2>
      
      <div className="flex flex-wrap gap-3 mb-8">
        {mySkills.map((skill, index) => (
          <span 
            key={index}
            className="px-3 py-1 bg-white dark:bg-[#2d2d2d] border border-emerald-600 dark:border-[#34d399] text-emerald-700 dark:text-[#34d399] rounded-full text-sm font-semibold shadow-sm hover:bg-emerald-600 dark:hover:bg-[#34d399] hover:text-white dark:hover:text-[#1a1a1a] transition-colors cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>

      <h2 className="flex items-center text-lg font-bold text-emerald-700 dark:text-[#34d399] uppercase tracking-widest mb-4">
        Languages
        <span className="flex-grow h-0.5 bg-emerald-700 dark:bg-[#34d399] ml-4"></span>
      </h2>

      <div className="space-y-4 max-w-md"> 
        
        <div>
          <div className="flex justify-between text-sm font-medium mb-1 text-gray-700 dark:text-[#e0e0e0]">
            <span>Ukrainian</span>
            <span className="text-emerald-700 dark:text-[#34d399]">Native</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-emerald-600 dark:bg-[#34d399] h-2 rounded-full w-full"></div> 
          </div>
        </div>

        <div>
          <div className="flex justify-between text-sm font-medium mb-1 text-gray-700 dark:text-[#e0e0e0]">
            <span>English</span>
            <span className="text-emerald-700 dark:text-[#34d399]">B2</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div className="bg-emerald-600 dark:bg-[#34d399] h-2 rounded-full w-3/4"></div>
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;