export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAFAF8]">

      {/* TOP BAR */}
      <div className="bg-[#1a1a2e] text-white text-center py-3 px-4 text-sm font-medium">
        🎸 We can currently accept only 5 new students per month — First come, first serve
      </div>

      {/* NAV */}
      <nav className="flex justify-between items-center px-8 py-5 max-w-6xl mx-auto">
        <div className="text-lg font-bold tracking-tight text-[#1a1a2e]">
          Chordinated Guitar Academy
        </div>
        
         <a href="https://calendly.com/james-labrossemusic/30min"
          target="_blank"
          className="bg-[#D4A017] text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-[#b8891a] transition-colors"
        >
          Book Free Session
        </a>
      </nav>

      {/* HERO */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <div className="inline-block bg-[#D4A017] text-white text-sm font-bold px-4 py-2 mb-8 uppercase tracking-widest">
          Private Application — Online Guitar Coaching
        </div>
        <h1 className="text-5xl font-bold leading-tight text-[#1a1a2e]">
          Finally Make Real Progress on Guitar —<br />
          Without Wasting Years Figuring It Out Alone
        </h1>
        <p className="mt-6 text-lg text-gray-500 max-w-2xl mx-auto">
          We work with a small group of dedicated adult beginners each month. Book your free strategy session to see if you're a fit.
        </p>
        
          href="https://calendly.com/chordinated/30min"
          target="_blank"
          className="mt-10 inline-block bg-[#D4A017] text-white px-10 py-5 rounded-full text-lg font-bold hover:bg-[#b8891a] transition-colors"
        >
          Book Your Free Strategy Session
        </a>
        <p className="mt-4 text-sm text-gray-400">30 minutes. Free. No pressure.</p>
      </section>

      {/* WHAT THIS IS */}
      <section className="bg-[#1a1a2e] text-white py-16 px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold">This Is For You If...</h2>
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 text-left">
            {[
              "You're an adult who has always wanted to play guitar but never made real progress",
              "You've tried learning on your own or from YouTube and feel stuck",
              "You want a structured, personalized plan — not random lessons",
              "You want to play real songs, not just exercises and scales",
              "You're serious about finally committing and making it happen",
              "You want a coach who meets you where you are, no judgment"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white/10 rounded-xl p-4">
                <span className="text-[#D4A017] text-xl mt-0.5">✓</span>
                <p className="text-white/90 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#1a1a2e]">How It Works</h2>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4">🎯</div>
            <h3 className="text-lg font-bold text-[#1a1a2e]">1. Free Strategy Session</h3>
            <p className="mt-2 text-gray-500 text-sm">We talk about your goals, your experience, and whether we're a good fit.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4">🎸</div>
            <h3 className="text-lg font-bold text-[#1a1a2e]">2. Your Custom Plan</h3>
            <p className="mt-2 text-gray-500 text-sm">No generic curriculum. Your lessons are built around your goals and the music you love.</p>
          </div>
          <div className="flex flex-col items-center">
            <div className="text-4xl mb-4">🚀</div>
            <h3 className="text-lg font-bold text-[#1a1a2e]">3. Real Progress</h3>
            <p className="mt-2 text-gray-500 text-sm">Start playing real songs from day one. No fluff, no wasted time.</p>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="bg-gray-50 py-20 px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-[#1a1a2e] text-center">What Students Are Saying</h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-gray-600 text-sm leading-relaxed">"James is a fantastic teacher. He's easy going but knows exactly what material to give. He's a Berklee grad with plenty of experience, so he's the real deal. Great guitar player, can play any style/genre. Also, very reliable and flexible which goes a long way."</p>
              <p className="mt-4 font-bold text-[#1a1a2e] text-sm">— Tomas</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-gray-600 text-sm leading-relaxed">"I'm a self-taught beginner and still feeling a bit insecure about my playing. I never feel like James thinks he's too good to be teaching me. His lessons have been really encouraging and I've already seen loads of improvement."</p>
              <p className="mt-4 font-bold text-[#1a1a2e] text-sm">— Ryan N.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-gray-600 text-sm leading-relaxed">"James is very knowledgeable and meets his students at their current skill level. He will constantly challenge you to stimulate growth. Highly recommend."</p>
              <p className="mt-4 font-bold text-[#1a1a2e] text-sm">— Nicolas A.</p>
            </div>

            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <p className="text-gray-600 text-sm leading-relaxed">"James has the music theory knowledge to back it up, which is nice considering how often that element is lacking with guitar lessons. He's very willing to structure lessons to what I'm looking for. Highly recommended!"</p>
              <p className="mt-4 font-bold text-[#1a1a2e] text-sm">— Laura F.</p>
            </div>

          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section className="max-w-4xl mx-auto px-8 py-20 text-center">
        <h2 className="text-3xl font-bold text-[#1a1a2e]">About James</h2>
        <p className="mt-6 text-gray-500 text-base max-w-2xl mx-auto leading-relaxed">
          James Labrosse is a professional guitarist and Berklee College of Music graduate based in NYC. With over 10 years of teaching experience, James has helped adult beginners go from zero to playing real music — without the frustration of figuring it out alone. His approach is practical, personalized, and built around the music you actually want to play.
        </p>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#D4A017] py-20 px-8 text-center">
        <h2 className="text-3xl font-bold text-white">Ready to Finally Start Playing?</h2>
        <p className="mt-4 text-white text-base opacity-90 max-w-xl mx-auto">
          Book your free 30-minute strategy session. We'll build your personalized plan and see if we're a good fit. No commitment required.
        </p>
        
          href="https://calendly.com/james-labrossemusic/30min"
          target="_blank"
          className="mt-8 inline-block bg-white text-[#D4A017] px-10 py-5 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors"
        >
          Book Your Free Strategy Session
        </a>
        <p className="mt-4 text-white text-sm opacity-75">We can currently accept only 5 new students per month.</p>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#1a1a2e] text-white py-8 px-8 text-center text-sm">
        <p>© 2026 Chordinated Guitar Academy · James Labrosse · Berklee College of Music Graduate</p>
      </footer>

    </main>
  );
}