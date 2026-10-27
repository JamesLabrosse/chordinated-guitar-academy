'use client';

import { useEffect } from 'react';

const KIT_FORM_HTML = `<form action="https://app.kit.com/forms/9795225/subscriptions" class="seva-form formkit-form" method="post" data-sv-form="9795225" data-uid="c826d67711" data-format="inline" data-version="5" data-options="{&quot;settings&quot;:{&quot;after_subscribe&quot;:{&quot;action&quot;:&quot;message&quot;,&quot;success_message&quot;:&quot;Success! I'll send your PDF to your email shortly.&quot;,&quot;redirect_url&quot;:&quot;&quot;},&quot;analytics&quot;:{&quot;google&quot;:null,&quot;fathom&quot;:null,&quot;facebook&quot;:null,&quot;segment&quot;:null,&quot;pinterest&quot;:null,&quot;sparkloop&quot;:null,&quot;googletagmanager&quot;:null},&quot;modal&quot;:{&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;powered_by&quot;:{&quot;show&quot;:true,&quot;url&quot;:&quot;https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic&quot;},&quot;recaptcha&quot;:{&quot;enabled&quot;:false},&quot;return_visitor&quot;:{&quot;action&quot;:&quot;hide&quot;,&quot;custom_content&quot;:&quot;&quot;},&quot;slide_in&quot;:{&quot;display_in&quot;:&quot;bottom_right&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15},&quot;sticky_bar&quot;:{&quot;display_in&quot;:&quot;top&quot;,&quot;trigger&quot;:&quot;timer&quot;,&quot;scroll_percentage&quot;:null,&quot;timer&quot;:5,&quot;devices&quot;:&quot;all&quot;,&quot;show_once_every&quot;:15}},&quot;version&quot;:&quot;5&quot;}" min-width="400 500 600 700 800" style="border-radius: 6px;"><div data-style="full"><div data-element="column" class="formkit-column"><div class="formkit-header" data-element="header" style="font-size: 20px; font-weight: 700;"><h2>Not ready to book? Get the free Rhythm Tree PDF</h2></div><div class="formkit-subheader" data-element="subheader" style="font-size: 15px;"><p>Drop your email and I'll send it over, plus occasional lessons on time, tone, and harmony.</p></div></div><div data-element="column" class="formkit-column"><ul class="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul><div data-element="fields" class="seva-fields formkit-fields"><div class="formkit-field"><input class="formkit-input" name="email_address" aria-label="Email Address" placeholder="Email Address" required="" type="email"></div><button data-element="submit" class="formkit-submit formkit-submit"><div class="formkit-spinner"><div></div><div></div><div></div></div><span class="">Send me the free PDF</span></button></div><div class="formkit-guarantee" data-element="guarantee" style="font-size: 13px; font-weight: 400;"><p>No spam. Just the PDF and lessons worth your time.</p></div><div class="formkit-powered-by-convertkit-container"><a href="https://kit.com/features/forms?utm_campaign=poweredby&amp;utm_content=form&amp;utm_medium=referral&amp;utm_source=dynamic" data-element="powered-by" class="formkit-powered-by-convertkit" data-variant="dark" target="_blank" rel="nofollow noopener">Built with Kit</a></div></div></div></form>`;

const CALL_URL = 'https://calendly.com/chordinated/30min';

export default function MasterclassPage() {
  useEffect(() => {
    const d = document;
    // Load Kit (ConvertKit) embed script so the form submits/validates
    const ckSrc = 'https://f.convertkit.com/ckjs/ck.5.js';
    if (d.querySelector(`script[src="${ckSrc}"]`) == null) {
      const ck = d.createElement('script');
      ck.src = ckSrc;
      ck.async = true;
      d.body.appendChild(ck);
    }
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;700&display=swap');
        .mc-body { background-color: #0e0e0e; color: #ffffff; font-family: 'DM Sans', sans-serif; font-weight: 300; line-height: 1.6; margin: 0; padding: 0; }
        @keyframes fadeDown { from { opacity: 0; transform: translateY(-16px); } to { opacity: 1; transform: translateY(0); } }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
        .mc-header { text-align: center; padding: 40px 24px 0; animation: fadeDown 0.8s ease both; }
        .mc-brand { font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 13px; letter-spacing: 0.25em; text-transform: uppercase; color: #c9a84c; margin-bottom: 8px; }
        .mc-divider { width: 48px; height: 1px; background: #c9a84c; margin: 16px auto 0; opacity: 0.5; }
        .mc-hero { max-width: 780px; margin: 0 auto; padding: 32px 24px 32px; text-align: center; animation: fadeUp 0.9s ease 0.1s both; }
        .mc-hero h1 { font-family: 'Playfair Display', serif; font-size: clamp(2rem, 5vw, 3.4rem); font-weight: 900; line-height: 1.15; color: #ffffff; margin: 0 0 20px; }
        .mc-hero h1 em { font-style: italic; color: #e8c97a; }
        .mc-hero p { font-size: 1.05rem; color: #b0b0b0; max-width: 560px; margin: 0 auto; }
        .mc-video-section { max-width: 900px; margin: 0 auto; padding: 0 24px; animation: fadeUp 1s ease 0.2s both; }
        .mc-video-wrapper { position: relative; padding-bottom: 56.25%; height: 0; border-radius: 8px; overflow: hidden; border: 1px solid rgba(201,168,76,0.15); box-shadow: 0 24px 80px rgba(0,0,0,0.6); }
        .mc-video-wrapper iframe { position: absolute; top: 0; left: 0; width: 100%; height: 100%; border: none; }

        .mc-cta { text-align: center; padding: 36px 24px 0; }
        .mc-cta-button { display: inline-block; background: #c9a84c; color: #0e0e0e; font-family: 'DM Sans', sans-serif; font-weight: 700; font-size: 16px; letter-spacing: 0.04em; text-decoration: none; padding: 18px 40px; border-radius: 4px; transition: background 0.2s ease, transform 0.2s ease; }
        .mc-cta-button:hover { background: #e8c97a; transform: translateY(-1px); }
        .mc-cta-note { font-size: 13px; color: #8a8a8a; margin-top: 12px; }

        .mc-proof-section { max-width: 760px; margin: 0 auto; padding: 72px 24px 0; text-align: center; }
        .mc-proof-label { font-family: 'DM Sans', sans-serif; font-weight: 500; font-size: 13px; letter-spacing: 0.25em; text-transform: uppercase; color: #c9a84c; margin: 0 0 12px; }
        .mc-proof-section h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 700; color: #ffffff; margin: 0 0 24px; }
        .mc-proof-caption { font-size: 13px; color: #9a9a9a; margin-top: 14px; }

        .mc-call-section { max-width: 640px; margin: 0 auto; padding: 72px 24px 0; text-align: center; }
        .mc-call-section h2 { font-family: 'Playfair Display', serif; font-size: clamp(1.4rem, 3vw, 2rem); font-weight: 700; color: #ffffff; margin: 0 0 24px; }
        .mc-call-list { list-style: none; padding: 0; margin: 0 auto; text-align: left; display: flex; flex-direction: column; gap: 14px; }
        .mc-call-list li { display: flex; gap: 12px; color: #c0c0c0; font-size: 1rem; line-height: 1.6; }
        .mc-call-list li::before { content: '✦'; color: #c9a84c; font-size: 0.75rem; margin-top: 6px; }

        .mc-optin-section { max-width: 520px; margin: 96px auto 0; padding: 0 24px; }
        /* Restyle the Kit form to match the dark theme, small version */
        .mc-optin-section .formkit-form { background-color: #141414 !important; border: 1px solid rgba(255,255,255,0.08) !important; border-radius: 8px !important; max-width: 100% !important; }
        .mc-optin-section .formkit-form [data-style="full"] { display: block !important; grid-template-columns: none !important; }
        .mc-optin-section .formkit-column { background: transparent !important; padding: 24px !important; border: none !important; width: 100% !important; }
        .mc-optin-section .formkit-column:nth-child(2) { border-top: none !important; padding-top: 0 !important; }
        .mc-optin-section .formkit-header h2 { font-family: 'Playfair Display', serif !important; color: #ffffff !important; font-size: 1.15rem !important; margin: 0 0 8px 0 !important; }
        .mc-optin-section .formkit-subheader p { color: #a0a0a0 !important; font-size: 0.88rem !important; margin: 0 !important; }
        .mc-optin-section .formkit-fields { display: block !important; margin-bottom: 8px !important; }
        .mc-optin-section .formkit-field { width: 100% !important; margin-bottom: 10px !important; }
        .mc-optin-section .formkit-input { background: #0e0e0e !important; color: #ffffff !important; border: 1px solid rgba(255,255,255,0.15) !important; border-radius: 4px !important; width: 100% !important; padding: 12px !important; font-size: 15px !important; }
        .mc-optin-section .formkit-input::placeholder { color: #888 !important; }
        .mc-optin-section .formkit-submit { background-color: #2a2a2a !important; border: 1px solid rgba(201,168,76,0.4) !important; border-radius: 4px !important; width: 100% !important; margin: 0 !important; }
        .mc-optin-section .formkit-submit span { color: #e8c97a !important; font-weight: 500 !important; padding: 12px 24px !important; }
        .mc-optin-section .formkit-guarantee { margin-top: 10px !important; }
        .mc-optin-section .formkit-guarantee p { color: #666 !important; }

        .mc-footer { text-align: center; padding: 48px 24px 48px; margin-top: 64px; border-top: 1px solid rgba(255,255,255,0.05); }
        .mc-footer p { font-size: 0.8rem; color: #444; letter-spacing: 0.05em; margin: 0; }
        .mc-footer a { color: #c9a84c; text-decoration: none; }

        @media (max-width: 600px) { .mc-cta-button { display: block; padding: 18px 20px; } }
      `}</style>
      <div className="mc-body">
        <header className="mc-header">
          <p className="mc-brand">Chordinated Guitar Academy</p>
          <div className="mc-divider" />
        </header>

        <section className="mc-hero">
          <h1>Finally Understand Why Your Guitar Playing Is Stuck, <em>and What To Do About It</em></h1>
          <p>Watch this free masterclass for a clear roadmap to real musical understanding, not just more songs to memorize.</p>
        </section>

        <section className="mc-video-section">
          <div className="mc-video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/lcc4GFhFSs4?si=qpRE9R7R810IClJE"
              title="Chordinated Guitar Academy Free Masterclass"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
        </section>

        <div className="mc-cta">
          <a className="mc-cta-button" href={CALL_URL} target="_blank" rel="noopener noreferrer">Book a Free Strategy Call</a>
          <p className="mc-cta-note">Free. 30 minutes.</p>
        </div>

        <section className="mc-proof-section">
          <p className="mc-proof-label">Student Story</p>
          <h2>Hear it from a student</h2>
          <div className="mc-video-wrapper">
            <iframe
              src="https://www.youtube.com/embed/Vaxy01iEfV8"
              title="Craig's student testimonial"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            />
          </div>
          <p className="mc-proof-caption">Craig, on his experience in the Academy</p>
        </section>

        <div className="mc-cta">
          <a className="mc-cta-button" href={CALL_URL} target="_blank" rel="noopener noreferrer">Book a Free Strategy Call</a>
        </div>

        <section className="mc-call-section">
          <h2>What happens on the call</h2>
          <ul className="mc-call-list">
            <li>We look at where you are as a player right now and what you want from the guitar.</li>
            <li>We pinpoint what is actually holding you back.</li>
            <li>You leave with a clear idea of what to work on next, whether or not we work together.</li>
            <li>If the Academy is a fit, I will walk you through how it works. If it is not, I will tell you.</li>
          </ul>
        </section>

        <div className="mc-cta">
          <a className="mc-cta-button" href={CALL_URL} target="_blank" rel="noopener noreferrer">Book a Free Strategy Call</a>
          <p className="mc-cta-note">Free. 30 minutes.</p>
        </div>

        <section className="mc-optin-section">
          <div dangerouslySetInnerHTML={{ __html: KIT_FORM_HTML }} />
        </section>

        <footer className="mc-footer">
          <p>© 2026 <a href="https://www.chordinatedguitaracademy.com">Chordinated Guitar Academy</a> &nbsp;·&nbsp; All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}
