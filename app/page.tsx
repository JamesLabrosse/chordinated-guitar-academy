export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* ANNOUNCEMENT BAR */}
      <div className="bg-[#D4A017] text-white text-center py-2 px-4 text-xs font-medium tracking-widest uppercase">
        Now accepting new students — Only 5 spots available this month
      </div>

      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-6 max-w-5xl mx-auto border-b border-gray-100">
        <div className="text-base font-semibold tracking-tight text-[#1a1a2e]">
          Chordinated Guitar Academy
        </div>
        <a href="https://calendly.com/chordinated/30min" target="_blank" className="text-sm font-semibold text-[#D4A017] hover:opacity-70 transition-opacity">
          Book Free Session →
        </a>
      </nav>

      {/* HERO */}
      <section className="max-w-3xl mx-auto px-8 pt-24 pb-20 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-6">
          Online Guitar Coaching for Adults
        </p>
        <h1 className="text-5xl font-bold leading-[1.15] text-[#1a1a2e] mb-6">
          Finally Make Real Progress on Guitar
        </h1>
        <p className="text-xl text-gray-400 font-light max-w-xl mx-auto mb-10 leading-relaxed">
          Without wasting years figuring it out alone. Private coaching built around you — 100% online.
        </p>
        <a href="https://calendly.com/chordinated/30min" target="_blank" className="inline-block bg-[#1a1a2e] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#D4A017] transition-colors duration-300">
          Book Your Free Strategy Session
        </a>
        <p className="mt-4 text-xs text-gray-400">30 minutes · Free · No commitment</p>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-8">
        <div className="border-t border-gray-100"></div>
      </div>

      {/* SOCIAL PROOF STRIP */}
      <section className="max-w-5xl mx-auto px-8 py-10">
        <div className="flex flex-wrap justify-center gap-10 text-center">
          <div>
            <p className="text-2xl font-bold text-[#1a1a2e]">10+</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Years Teaching</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#1a1a2e]">100%</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Online</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#1a1a2e]">Berklee</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Graduate</p>
          </div>
          <div>
            <p className="text-2xl font-bold text-[#1a1a2e]">5</p>
            <p className="text-xs text-gray-400 uppercase tracking-widest mt-1">Spots Left</p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-8">
        <div className="border-t border-gray-100"></div>
      </div>

      {/* THIS IS FOR YOU */}
      <section className="max-w-5xl mx-auto px-8 py-24">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-4">Who This Is For</p>
          <h2 className="text-3xl font-bold text-[#1a1a2e]">You are in the right place if...</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
          {[
            "You have always wanted to play guitar but never made real progress",
            "You have tried YouTube or apps and still feel stuck",
            "You want a structured plan, not random exercises",
            "You want to play songs you actually love",
            "You are ready to commit and finally make it happen",
            "You want a coach who meets you exactly where you are"
          ].map((item, i) => (
            <div key={i} className="flex items-start gap-3 p-5 rounded-2xl bg-gray-50">
              <span className="text-[#D4A017] font-bold text-sm mt-0.5">✓</span>
              <p className="text-gray-600 text-sm leading-relaxed">{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-8">
        <div className="border-t border-gray-100"></div>
      </div>

      {/* HOW IT WORKS */}
      <section className="max-w-5xl mx-auto px-8 py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-4">The Process</p>
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-16">Simple. Structured. Effective.</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#1a1a2e] text-white flex items-center justify-center text-sm font-bold mb-5">1</div>
            <h3 className="text-base font-bold text-[#1a1a2e] mb-2">Free Strategy Session</h3>
            <p className="text-gray-400 text-sm leading-relaxed">We talk about your goals and see if we are a good fit.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#1a1a2e] text-white flex items-center justify-center text-sm font-bold mb-5">2</div>
            <h3 className="text-base font-bold text-[#1a1a2e] mb-2">Your Custom Plan</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Built around your goals and the music you actually want to play.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-12 h-12 rounded-full bg-[#1a1a2e] text-white flex items-center justify-center text-sm font-bold mb-5">3</div>
            <h3 className="text-base font-bold text-[#1a1a2e] mb-2">Real Progress</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Start playing real songs from day one. No fluff, no wasted time.</p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-8">
        <div className="border-t border-gray-100"></div>
      </div>

      {/* TESTIMONIALS */}
      <section className="max-w-5xl mx-auto px-8 py-24">
        <div className="text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-4">Student Results</p>
          <h2 className="text-3xl font-bold text-[#1a1a2e]">What Students Are Saying</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-8 rounded-2xl bg-gray-50">
            <p className="text-gray-600 text-sm leading-relaxed mb-6">James is a fantastic teacher. Easy going but knows exactly what material to give. He is a Berklee grad with plenty of experience — the real deal. Can play any style or genre. Very reliable and flexible.</p>
            <p className="text-xs font-bold text-[#1a1a2e] uppercase tracking-widest">— Tomas</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50">
            <p className="text-gray-600 text-sm leading-relaxed mb-6">I am a self-taught beginner and still a bit insecure about my playing. I never feel like James thinks he is too good to teach me. His lessons have been really encouraging and I have already seen loads of improvement.</p>
            <p className="text-xs font-bold text-[#1a1a2e] uppercase tracking-widest">— Ryan N.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50">
            <p className="text-gray-600 text-sm leading-relaxed mb-6">Very knowledgeable and meets his students at their current skill level. He will constantly challenge you to stimulate growth. Highly recommend.</p>
            <p className="text-xs font-bold text-[#1a1a2e] uppercase tracking-widest">— Nicolas A.</p>
          </div>
          <div className="p-8 rounded-2xl bg-gray-50">
            <p className="text-gray-600 text-sm leading-relaxed mb-6">James has the music theory knowledge to back it up — rare for guitar teachers. Very willing to structure lessons around what I am looking for. Highly recommended.</p>
            <p className="text-xs font-bold text-[#1a1a2e] uppercase tracking-widest">— Laura F.</p>
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <div className="max-w-5xl mx-auto px-8">
        <div className="border-t border-gray-100"></div>
      </div>

      {/* ABOUT */}
      <section className="max-w-3xl mx-auto px-8 py-24 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-4">Your Coach</p>
        <h2 className="text-3xl font-bold text-[#1a1a2e] mb-6">About James</h2>
        <p className="text-gray-400 text-base leading-relaxed">
          James Labrosse is a professional guitarist and Berklee College of Music graduate. With over 10 years of teaching experience, he has helped adult beginners go from zero to playing real music — without the frustration of figuring it out alone. His approach is practical, personalized, and built around the music you actually want to play.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#1a1a2e] py-24 px-8 text-center">
        <p className="text-xs font-bold uppercase tracking-widest text-[#D4A017] mb-6">Limited Spots Available</p>
        <h2 className="text-3xl font-bold text-white mb-4">Ready to Finally Start Playing?</h2>
        <p className="text-gray-400 text-base mb-10 max-w-lg mx-auto leading-relaxed">
          Book a free 30-minute strategy session. We will build your personalized plan and see if we are a good fit.
        </p>
        <a href="https://calendly.com/chordinated/30min" target="_blank" className="inline-block bg-[#D4A017] text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-[#b8891a] transition-colors duration-300">
          Book Your Free Strategy Session
        </a>
        <p className="mt-4 text-xs text-gray-500">Only 5 spots available this month.</p>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a2e] border-t border-white/10 py-8 px-8 text-center">
        <p className="text-xs text-gray-600">© 2026 Chordinated Guitar Academy · James Labrosse · Berklee College of Music Graduate</p>
      </footer>

    </main>
  );
}