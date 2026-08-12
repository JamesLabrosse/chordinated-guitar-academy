'use client';

import { useEffect } from 'react';import Script from 'next/script'

export default function MasterclassPage() {
  useEffect(() => {
    // Load Tally embed script
    const tallyScript = document.createElement('script');
    tallyScript.src = 'https://tally.so/widgets/embed.js';
    tallyScript.async = true;

    const d = document;
    const w = 'https://tally.so/widgets/embed.js';
    const v = () => {
      if (typeof (window as any).Tally !== 'undefined') {
        (window as any).Tally.loadEmbeds();
      } else {
        d.querySelectorAll('iframe[data-tally-src]:not([src])').forEach((e: any) => {
          e.src = e.dataset.tallySrc;
        });
      }
    };

    if (typeof (window as any).Tally !== 'undefined') {
      v();
    } else if (d.querySelector(`script[src="${w}"]`) == null) {
      const s = d.createElement('script');
      s.src = w;
      s.onload = v;
      s.onerror = v;
      d.body.appendChild(s);
    }

    return () => {
      const existing = d.querySelector(`script[src="${w}"]`);
      if (existing) d.body.removeChild(existing);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');
        .mc-body { background-color: #0e0e0e; color: #ffffff; font-family: 'DM Sans', sans-serif; font-weight: 300; line-height: 1.6; margin: 0; padding: 0; }
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .mc-header { text-align: center; padding: 48px 24px 0; animation: fadeDown 0.8s ease both; }
        .mc-brand { font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 13px; letter-spacing: 0.25em; text-transform: uppercase; color: #c9a84c; margin-bottom: 8px; }
        .mc-divider { width: 48px; height: 1px; background: #c9a84c; margin: 16px auto; opacity: 0.5; }
        .mc-tag { font-size: 0.8rem; color: #555; letter-spacing: 0.12em; text-transform: uppercase; }
        .mc-hero { max-width: 780px; margin: 0 auto; padding: 40px 24px 48px; text-align: center; animation: fadeUp 0.9s ease 0.1s both; }
        .mc-hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 5vw, 3.4rem); font-weight: 900; line-height: 1.15; color: #ffffff; margin-bottom: 20px; }
        .mc-hero h1 em { font-style: italic; color: #e8c97a; }
        .mc-hero p { font-size: 1.05rem; color: #b0b0b0; max-width: 560px; margin: 0 auto 32px; }
        .mc-learn-list { display: flex; flex-wrap: wrap; justify-content: center; gap: 12px; margin-bottom: 12px; }
        .mc-learn-item { background: rgba(201,168,76,0.08); border: 1px solid rgba(201,168,76,0.2); border-radius: 4px; padding: 10px 18px; font-size: 0.88rem; color: #f5f0e8; display: flex; align-items: center; gap: 8px; }
        .mc-learn-item::before { content: '✦'; color: #c9a84c; font-size: 0.7rem; }
        .mc-video-section { max-width: 900px; margin: 0 auto; padding: 0 24px 16px; animation: fadeUp 1s ease 0.2s both; }
        .mc-video-label { text-align: center; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #c9a84c; margin-bottom: 16px; }
        .mc-video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 8px; overflow: hidden; border: 1px solid rgba(201,168,76,0.15); box-shadow: 0 24px 80px rgba(0,0,0,0.6); }
        .mc-video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; }
        .mc-section-divider { max-width: 640px; margin: 64px auto; display: flex; align-items: center; gap: 20px; padding: 0 24px; }
        .mc-section-divider span { flex: 1; height: 1px; background: rgba(255,255,255,0.08); }
        .mc-section-divider p { font-family: 'Playfair Display', serif; font-style: italic; color: #6b6b6b; font-size: 0.9rem; white-space: nowrap; }
        .mc-booking-section { max-width: 900px; margin: 0 auto; padding: 0 24px 80px; animation: fadeUp 1s ease 0.3s both; }
        .mc-booking-header { text-align: center; margin-bottom: 40px; }
        .mc-booking-header h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 700; color: #ffffff; margin-bottom: 12px; }
        .mc-booking-header p { color: #909090; font-size: 0.95rem; max-width: 480px; margin: 0 auto; }
        .mc-tally-wrapper { border-radius: 8px; overflow: hidden; border: 1px solid rgba(201,168,76,0.2); background: #f5f0e8; padding: 32px 24px; }
        .mc-testimonials { max-width: 900px; margin: 0 auto; padding: 0 24px 80px; animation: fadeUp 1s ease 0.4s both; }
        .mc-testimonials-header { text-align: center; margin-bottom: 40px; }
        .mc-testimonials-label { font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 13px; letter-spacing: 0.25em; text-transform: uppercase; color: #c9a84c; margin-bottom: 12px; }
        .mc-testimonials-header h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.6rem, 3.5vw, 2.4rem); font-weight: 700; color: #ffffff; }
        .mc-testimonials-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; }
        .mc-testimonial-card { background: #141414; border: 1px solid rgba(255,255,255,0.06); border-radius: 8px; padding: 28px; display: flex; flex-direction: column; justify-content: space-between; gap: 20px; }
        .mc-testimonial-text { font-size: 0.95rem; color: #c0c0c0; line-height: 1.7; }
        .mc-testimonial-author { font-size: 0.75rem; letter-spacing: 0.15em; text-transform: uppercase; color: #c9a84c; font-weight: 500; }
        .mc-footer { text-align: center; padding: 32px 24px 48px; border-top: 1px solid rgba(255,255,255,0.05); }
        .mc-footer p { font-size: 0.8rem; color: #444; letter-spacing: 0.05em; }
        .mc-footer a { color: #c9a84c; text-decoration: none; }
        @media (max-width: 600px) { .mc-learn-list { flex-direction: column; align-items: center; } .mc-learn-item { width: 100%; max-width: 340px; } .mc-testimonials-grid { grid-template-columns: 1fr; } }
      `}</style>
      <div className="mc-body">
        <header className="mc-header">
          <p className="mc-brand">Chordinated Guitar Academy</p>
          <div className="mc-divider" />
          <p className="mc-tag">Free Masterclass</p>
        </header>
        

        <section className="mc-hero">
          <h1>Finally Understand Why Your Guitar Playing Is Stuck — <em>And What To Do About It</em></h1>
          <p>Watch this free masterclass and get a clear roadmap to real musical understanding — not just more songs to memorize.</p>
          <div className="mc-learn-list">
            {[
              'Find out the 3 secrets to great musicianship',
              'The concept that unlocks soloing & improv',
              'How to actually understand music',
              'What separates players who improve fast'
            ].map((item) => (
              <div key={item} className="mc-learn-item">{item}</div>
            ))}
          </div>
        </section>

        <section className="mc-video-section">
          <p className="mc-video-label">Watch now — free</p>
          <div className="mc-video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/lcc4GFhFSs4?si=qpRE9R7R810IClJE"
              title="Chordinated Guitar Academy — Free Masterclass"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>
<section className="mc-optin-section">
  <Script
    async
    data-uid="c826d67711"
    src="https://chordinated-guitar-academy.kit.com/c826d67711/index.js"
    strategy="afterInteractive"
  />
</section>
        <div className="mc-section-divider">
          <span />
          <p>Ready to take the next step?</p>
          <span />
        </div>

        <section className="mc-booking-section">
          <div className="mc-booking-header">
            <h2>Find Out If You&apos;re a Fit</h2>
            <p>Answer a few quick questions and we&apos;ll set up a free 30-minute strategy session to map out exactly where you are and where you want to be.</p>
          </div>
          <div className="mc-tally-wrapper">
            <iframe
              data-tally-src="https://tally.so/embed/68pb9o?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
              loading="lazy"
              width="100%"
              height="1365"
              frameBorder={0}
              marginHeight={0}
              marginWidth={0}
              title="Find Out If You're A Fit"
            />
          </div>
        </section>

        <section className="mc-testimonials">
          <div className="mc-testimonials-header">
            <p className="mc-testimonials-label">Student Results</p>
            <h2>What Students Are Saying</h2>
          </div>
          <div className="mc-testimonials-grid">
            {[
              { text: "James is a fantastic teacher. Easy going but knows exactly what material to give. He is a Berklee grad with plenty of experience — the real deal. Can play any style or genre. Very reliable and flexible.", author: "Tomas" },
              { text: "I am a self-taught beginner and still a bit insecure about my playing. I never feel like James thinks he is too good to teach me. His lessons have been really encouraging and I have already seen loads of improvement.", author: "Ryan N." },
              { text: "Very knowledgeable and meets his students at their current skill level. He will constantly challenge you to stimulate growth. Highly recommend.", author: "Nicolas A." },
              { text: "James has the music theory knowledge to back it up — rare for guitar teachers. Very willing to structure lessons around what I am looking for. Highly recommended.", author: "Laura F." },
            ].map((t) => (
              <div key={t.author} className="mc-testimonial-card">
                <p className="mc-testimonial-text">&ldquo;{t.text}&rdquo;</p>
                <p className="mc-testimonial-author">— {t.author}</p>
              </div>
            ))}
          </div>
        </section>

        <footer className="mc-footer">
          <p>© 2026 <a href="https://www.chordinatedguitaracademy.com">Chordinated Guitar Academy</a> &nbsp;·&nbsp; All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
