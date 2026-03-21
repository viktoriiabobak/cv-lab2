function Skills() {
  return (
    <section className="p-4 mb-6 rounded-lg transition-all duration-300 hover:bg-emerald-50 hover:translate-x-2">
      
      {/* --- БЛОК НАВИЧОК --- */}
      <h2 className="flex items-center text-lg font-bold text-emerald-700 uppercase tracking-widest mb-4">
        Skills
        <span className="flex-grow h-0.5 bg-emerald-700 ml-4"></span>
      </h2>
      
      <div className="flex flex-wrap gap-3 mb-8">
        <span className="px-3 py-1 bg-white border border-emerald-600 text-emerald-700 rounded-full text-sm font-semibold shadow-sm hover:bg-emerald-600 hover:text-white transition-colors cursor-default">Python</span>
        <span className="px-3 py-1 bg-white border border-emerald-600 text-emerald-700 rounded-full text-sm font-semibold shadow-sm hover:bg-emerald-600 hover:text-white transition-colors cursor-default">C (basics)</span>
        <span className="px-3 py-1 bg-white border border-emerald-600 text-emerald-700 rounded-full text-sm font-semibold shadow-sm hover:bg-emerald-600 hover:text-white transition-colors cursor-default">Networking knowledge</span>
        <span className="px-3 py-1 bg-white border border-emerald-600 text-emerald-700 rounded-full text-sm font-semibold shadow-sm hover:bg-emerald-600 hover:text-white transition-colors cursor-default">Databases (SQL)</span>
        <span className="px-3 py-1 bg-white border border-emerald-600 text-emerald-700 rounded-full text-sm font-semibold shadow-sm hover:bg-emerald-600 hover:text-white transition-colors cursor-default">Linux/Unix</span>
        <span className="px-3 py-1 bg-white border border-emerald-600 text-emerald-700 rounded-full text-sm font-semibold shadow-sm hover:bg-emerald-600 hover:text-white transition-colors cursor-default">Wireshark</span>
        <span className="px-3 py-1 bg-white border border-emerald-600 text-emerald-700 rounded-full text-sm font-semibold shadow-sm hover:bg-emerald-600 hover:text-white transition-colors cursor-default">Git</span>
      </div>

      {/* --- БЛОК МОВ (зі шкалою) --- */}
      <h2 className="flex items-center text-lg font-bold text-emerald-700 uppercase tracking-widest mb-4">
        Languages
        <span className="flex-grow h-0.5 bg-emerald-700 ml-4"></span>
      </h2>

      <div className="space-y-4 max-w-md"> {/* max-w-md не дає шкалі розтягнутись на весь екран, щоб було акуратно */}
        
        {/* Українська */}
        <div>
          <div className="flex justify-between text-sm font-medium mb-1 text-gray-700">
            <span>Ukrainian</span>
            <span className="text-emerald-700">Native</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-emerald-600 h-2 rounded-full w-full"></div> {/* w-full = 100% */}
          </div>
        </div>

        {/* Англійська */}
        <div>
          <div className="flex justify-between text-sm font-medium mb-1 text-gray-700">
            <span>English</span>
            <span className="text-emerald-700">B2</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-emerald-600 h-2 rounded-full w-3/4"></div> {/* w-3/4 = 75% */}
          </div>
        </div>

      </div>

    </section>
  );
}

export default Skills;