function About() {
  return (
    <section className="p-4 mb-6 rounded-lg transition-all duration-300 hover:bg-emerald-50 hover:translate-x-2">
      {/* Заголовок із зеленою лінією поруч */}
      <h2 className="flex items-center text-lg font-bold text-emerald-700 uppercase tracking-widest mb-4">
        About me
        <span className="flex-grow h-0.5 bg-emerald-700 ml-4"></span>
      </h2>
      <p className="leading-relaxed">
        A highly responsible and communicative individual with a strong interest in the regulatory and legal aspects of cybersecurity. I am a fast learner, open to exploring new digital technologies, and excel at time management to ensure efficient execution of any tasks.
      </p>
    </section>
  );
}

export default About;