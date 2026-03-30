export default function Home() {
  return (
    <main className="min-h-screen">

      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-6xl mx-auto">
        <div className="text-xl font-bold tracking-tight text-[#1a1a2e]">
          Chordinated Guitar Academy
        </div>
        <div className="flex gap-8 text-sm font-medium text-[#1a1a2e]">
          <a href="/lessons" className="hover:text-[#D4A017] transition-colors">Lessons</a>
          <a href="/about" className="hover:text-[#D4A017] transition-colors">About</a>
          <a href="/contact" className="hover:text-[#D4A017] transition-colors">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section className="max-w-6xl mx-auto px-8 py-32 flex flex-col items-center text-center">
        <span className="text-[#D4A017] text-sm font-semibold uppercase tracking-widest mb-4">
          Online Guitar Lessons for Adults · Learn From Anywhere
        </span>
        <h1 className="text-5xl font-bold leading-tight text-[#1a1a2e] max-w-3xl">
          Learn Guitar the Way You Always Wished Someone Would Teach You
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-xl">
          Private and group guitar lessons for adults who are serious about finally making progress — 100% online, learn from anywhere in the world.
        </p>
        <a href="/contact" className="mt-10 bg-[#D4A017] text-white px-8 py-4 rounded-full text-base font-semibold hover:bg-[#b8891a] transition-colors">
          Book a Free Intro Lesson
        </a>
        <p className="mt-4 text-sm text-gray-400">No experience needed. No pressure.</p>
      </section>

      {/* SOCIAL PROOF BAR */}
      <section className="bg-[#1a1a2e] text-white py-5 px-8">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-center gap-8 text-center text-sm font-medium">
          <span>✦ 10+ Years Teaching Experience</span>
          <span>✦ Adults and Beginners Welcome</span>
          <span>✦ 100% Online — Learn From Anywhere</span>
          <span>✦ Real Songs from Day One</span>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-6xl mx-auto px-8 py-24 text-center">
        <h2 className="text-3xl font-bold text-[#1a1a2e]">How It Works</h2>
        <p className="mt-4 text-gray-500 max-w-xl mx-auto">A simple, structured approach that gets you playing real music fast.</p>
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-xl font-semibold text-[#1a1a2e]">1. Free Intro Call</h3>
            <p className="mt-2 text-gray-500 text-sm">We talk about your goals, experience level, and what you actually want to play.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4">🎸</div>
            <h3 className="text-xl font-semibold text-[#1a1a2e]">2. Custom Lesson Plan</h3>
            <p className="mt-2 text-gray-500 text-sm">No generic curriculum. Your lessons are built around your goals and your music.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-xl font-semibold text-[#1a1a2e]">3. Start Playing</h3>
            <p className="mt-2 text-gray-500 text-sm">Make real progress from your very first lesson. No fluff, no wasted time.</p>
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section className="bg-[#D4A017] py-16 px-8 text-center">
        <h2 className="text-3xl font-bold text-white">Ready to Finally Start Playing?</h2>
        <p className="mt-4 text-white text-base opacity-90">Book a free intro lesson today. No commitment required.</p>
        <a href="/contact" className="mt-8 inline-block bg-white text-[#D4A017] px-8 py-4 rounded-full text-base font-semibold hover:bg-gray-100 transition-colors">
          Book Your Free Lesson
        </a>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a2e] text-white py-8 px-8 text-center text-sm">
        <p>© 2026 Chordinated Guitar Academy · James Labrosse</p>
      </footer>

    </main>
  );
}