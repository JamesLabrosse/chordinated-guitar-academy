'use client';

import { useEffect } from 'react';

const KIT_FORM_HTML = `<form action="https://app.kit.com/forms/9795225/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="9795225" data-uid="c826d67711" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! Now check your email to confirm your subscription.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;hide&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800" style="border-radius: 6px;"><div data-style="full"><div data-element="column" class="formkit-column"><div class="formkit-header" data-element="header" style="font-size: 20px; font-weight: 700;"><h2>Get the lessons most players never learn</h2></div><div class="formkit-subheader" data-element="subheader" style="font-size: 15px;"><p>Drop your email and I'll send you the free Rhythm Tree PDF, plus deeper breakdowns on time, tone, and harmony — the stuff that separates players who progress from players who plateau.</p></div></div><div data-element="column" class="formkit-column"><ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul><div data-element="fields" class="seva-fields formkit-fields"><div class="formkit-field"><input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required="" type="email"></div><button data-element="submit" class="formkit-submit formkit-submit"><div class="formkit-spinner"><div></div><div></div><div></div></div><span class="">Send me the free PDF</span></button></div><div class="formkit-guarantee" data-element="guarantee" style="font-size: 13px; font-weight: 400;"><p>No spam. Just the PDF and lessons worth your time.</p></div><div class="formkit-powered-by-convertkit-container"><a href="https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic" data-element="powered-by" class="formkit-powered-by-convertkit" data-variant="dark" target="_blank" rel="nofollow noopener">Built with Kit</a></div></div></div></form>`;

export default function MasterclassPage() {
  useEffect(() => {
    const d = document;

    // --- Load Tally embed script ---
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

    // --- Load Kit (ConvertKit) embed script so the form submits/validates ---
    const ckSrc = 'https://f.convertkit.com/ckjs/ck.5.js';
    if (d.querySelector(`script[src="${ckSrc}"]`) == null) {
      const ck = d.createElement('script');
      ck.src = ckSrc;
      ck.async = true;
      d.body.appendChild(ck);
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
        .mc-optin-section { max-width: 640px; margin: 48px auto 0; padding: 0 24px; animation: fadeUp 1s ease 0.25s both; }
        .mc-optin-label { text-align: center; font-size: 11px; letter-spacing: 0.2em; text-transform: uppercase; color: #c9a84c; margin-bottom: 16px; }
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

        /* --- Restyle the Kit form to match the dark theme --- */
        .mc-optin-section .formkit-form {
          background-color: #141414 !important;
          border: 1px solid rgba(201,168,76,0.25) !important;
          border-radius: 8px !important;
          box-shadow: 0 24px 80px rgba(0,0,0,0.5) !important;
          max-width: 100% !important;
        }
        /* Force single-column full-width layout regardless of Kit's grid */
        .mc-optin-section .formkit-form [data-style="full"] { display: block !important; grid-template-columns: none !important; }
        .mc-optin-section .formkit-column { background: transparent !important; padding: 32px !important; border: none !important; width: 100% !important; }
        .mc-optin-section .formkit-column:nth-child(2) { border-top: none !important; padding-top: 0 !important; }
        .mc-optin-section .formkit-header h2 {
          font-family: 'Playfair Display', serif !important;
          color: #ffffff !important;
          font-size: 1.5rem !important;
          margin: 0 0 12px 0 !important;
        }
        .mc-optin-section .formkit-subheader p { color: #b0b0b0 !important; font-size: 0.95rem !important; }
        .mc-optin-section .formkit-fields { display: block !important; margin-bottom: 12px !important; }
        .mc-optin-section .formkit-field { width: 100% !important; margin-bottom: 12px !important; }
        .mc-optin-section .formkit-input {
          background: #0e0e0e !important;
          color: #ffffff !important;
          border: 1px solid rgba(255,255,255,0.15) !important;
          border-radius: 4px !important;
          width: 100% !important;
          padding: 14px !important;
          font-size: 15px !important;
        }
        .mc-optin-section .formkit-input::placeholder { color: #888 !important; }
        .mc-optin-section .formkit-submit {
          background-color: #c9a84c !important;
          border-radius: 4px !important;
          width: 100% !important;
          margin: 0 !important;
        }
        .mc-optin-section .formkit-submit span { color: #0e0e0e !important; font-weight: 700 !important; padding: 14px 24px !important; }
        .mc-optin-section .formkit-guarantee { margin-top: 12px !important; }
        .mc-optin-section .formkit-guarantee p { color: #666 !important; }

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
          <p className="mc-optin-label">Free download</p>
          <div dangerouslySetInnerHTML={{ __html: KIT_FORM_HTML }} />
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
