'use client';

import { useEffect } from 'react';

export default function MasterclassPage() {
  useEffect(() => {
    // Load Calendly widget script
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500&display=swap');

        .mc-body {
          background-color: #0e0e0e;
          color: #ffffff;
          font-family: 'DM Sans', sans-serif;
          font-weight: 300;
          line-height: 1.6;
          margin: 0;
          padding: 0;
          overflow-x: hidden;
        }

        @keyframes fadeDown {
          from { opacity: 0; transform: translateY(-16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .mc-header {
          text-align: center;
          padding: 48px 24px 0;
          animation: fadeDown 0.8s ease both;
        }
        .mc-brand {
          font-family: 'DM Sans', sans-serif;
          font-weight: 500;
          font-size: 13px;
          letter-spacing: 0.25em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 8px;
        }
        .mc-divider {
          width: 48px;
          height: 1px;
          background: #c9a84c;
          margin: 16px auto;
          opacity: 0.5;
        }
        .mc-tag {
          font-size: 0.8rem;
          color: #555;
          letter-spacing: 0.12em;
          text-transform: uppercase;
        }

        .mc-hero {
          max-width: 780px;
          margin: 0 auto;
          padding: 40px 24px 48px;
          text-align: center;
          animation: fadeUp 0.9s ease 0.1s both;
        }
        .mc-hero h1 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(2rem, 5vw, 3.4rem);
          font-weight: 900;
          line-height: 1.15;
          color: #ffffff;
          margin-bottom: 20px;
        }
        .mc-hero h1 em {
          font-style: italic;
          color: #e8c97a;
        }
        .mc-hero p {
          font-size: 1.05rem;
          color: #b0b0b0;
          max-width: 560px;
          margin: 0 auto 32px;
        }

        .mc-learn-list {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 12px;
          margin-bottom: 12px;
        }
        .mc-learn-item {
          background: rgba(201,168,76,0.08);
          border: 1px solid rgba(201,168,76,0.2);
          border-radius: 4px;
          padding: 10px 18px;
          font-size: 0.88rem;
          color: #f5f0e8;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .mc-learn-item::before {
          content: '✦';
          color: #c9a84c;
          font-size: 0.7rem;
        }

        .mc-video-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px 16px;
          animation: fadeUp 1s ease 0.2s both;
        }
        .mc-video-label {
          text-align: center;
          font-size: 11px;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          color: #c9a84c;
          margin-bottom: 16px;
        }
        .mc-video-wrapper {
          position: relative;
          padding-bottom: 56.25%;
          height: 0;
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(201,168,76,0.15);
          box-shadow: 0 24px 80px rgba(0,0,0,0.6);
        }
        .mc-video-wrapper iframe {
          position: absolute;
          top: 0; left: 0;
          width: 100%; height: 100%;
          border: none;
        }

        .mc-section-divider {
          max-width: 640px;
          margin: 64px auto;
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 0 24px;
        }
        .mc-section-divider span {
          flex: 1;
          height: 1px;
          background: rgba(255,255,255,0.08);
        }
        .mc-section-divider p {
          font-family: 'Playfair Display', serif;
          font-style: italic;
          color: #6b6b6b;
          font-size: 0.9rem;
          white-space: nowrap;
        }

        .mc-booking-section {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px 80px;
          animation: fadeUp 1s ease 0.3s both;
        }
        .mc-booking-header {
          text-align: center;
          margin-bottom: 40px;
        }
        .mc-booking-header h2 {
          font-family: 'Playfair Display', serif;
          font-size: clamp(1.6rem, 3.5vw, 2.4rem);
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 12px;
        }
        .mc-booking-header p {
          color: #909090;
          font-size: 0.95rem;
          max-width: 480px;
          margin: 0 auto;
        }
        .mc-calendly-wrapper {
          border-radius: 8px;
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.06);
          background: #141414;
        }

        .mc-footer {
          text-align: center;
          padding: 32px 24px 48px;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .mc-footer p {
          font-size: 0.8rem;
          color: #444;
          letter-spacing: 0.05em;
        }
        .mc-footer a {
          color: #c9a84c;
          text-decoration: none;
        }

        @media (max-width: 600px) {
          .mc-learn-list { flex-direction: column; align-items: center; }
          .mc-learn-item { width: 100%; max-width: 340px; }
        }
      `}</style>

      <div className="mc-body">

        {/* HEADER */}
        <header className="mc-header">
          <p className="mc-brand">Chordinated Guitar Academy</p>
          <div className="mc-divider" />
          <p className="mc-tag">Free Masterclass</p>
        </header>

        {/* HERO */}
        <section className="mc-hero">
          <h1>
            Finally Understand Why Your Guitar Playing Is Stuck —{' '}
            <em>And What To Do About It</em>
          </h1>
          <p>
            Watch this free masterclass and get a clear roadmap to real musical
            understanding — not just more songs to memorize.
          </p>
          <div className="mc-learn-list">
            {[
              'Why copying songs keeps you plateaued',
              'The concept that unlocks soloing & improv',
              'How to actually understand music',
              'What separates players who improve fast',
            ].map((item) => (
              <div key={item} className="mc-learn-item">{item}</div>
            ))}
          </div>
        </section>

        {/* VIDEO */}
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

        {/* DIVIDER */}
        <div className="mc-section-divider">
          <span />
          <p>Ready to take the next step?</p>
          <span />
        </div>

        {/* BOOKING */}
        <section className="mc-booking-section">
          <div className="mc-booking-header">
            <h2>Book Your Free Strategy Session</h2>
            <p>
              30 minutes on Zoom. We&apos;ll map out exactly where you are, where
              you want to be, and whether CGA is the right fit.
            </p>
          </div>
          <div className="mc-calendly-wrapper">
            <div
              className="calendly-inline-widget"
              data-url="https://calendly.com/chordinated/30min"
              style={{ minWidth: '320px', height: '700px' }}
            />
          </div>
        </section>

        {/* FOOTER */}
        <footer className="mc-footer">
          <p>
            © 2026{' '}
            <a href="https://www.chordinatedguitaracademy.com">
              Chordinated Guitar Academy
            </a>{' '}
            &nbsp;·&nbsp; All rights reserved.
          </p>
        </footer>

      </div>
    </>
  );
}
