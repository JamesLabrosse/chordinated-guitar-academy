export default function Home() {
  return (
    <main style={{fontFamily: 'system-ui, sans-serif', backgroundColor: '#ffffff', margin: 0, padding: 0}}>

      {/* ANNOUNCEMENT BAR */}
      <div style={{backgroundColor: '#D4A017', color: 'white', textAlign: 'center', padding: '10px', fontSize: '13px', fontWeight: '600', letterSpacing: '1px'}}>
        Only 5 spots available this month — First come, first serve
      </div>

      {/* NAV */}
      <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px', borderBottom: '1px solid #f0f0f0', maxWidth: '900px', margin: '0 auto'}}>
        <div style={{fontSize: '14px', fontWeight: '700', color: '#1a1a2e', letterSpacing: '2px', textTransform: 'uppercase'}}>
          Chordinated Guitar Academy
        </div>
        <a href="#book" style={{fontSize: '13px', fontWeight: '600', color: '#D4A017', textDecoration: 'none'}}>
          Book Free Strategy Session →
        </a>
      </div>

      {/* HERO */}
      <div id="book" style={{maxWidth: '700px', margin: '0 auto', padding: '60px 40px 40px', textAlign: 'center'}}>
        <p style={{fontSize: '11px', fontWeight: '700', color: '#D4A017', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '20px'}}>
          Online Guitar Coaching for Adults
        </p>
        <h1 style={{fontSize: '48px', fontWeight: '800', color: '#1a1a2e', lineHeight: '1.15', marginBottom: '20px'}}>
          Finally Make Real Progress on Guitar
        </h1>
        <p style={{fontSize: '19px', fontWeight: '700', color: '#999', lineHeight: '1.7', marginBottom: '12px'}}>
          I help adult guitarists who feel like something is &ldquo;off&rdquo; in their playing — finally identify what it is, fix it, and play with real confidence and feel.
        </p>
        <p style={{fontSize: '14px', color: '#bbb', lineHeight: '1.6', marginBottom: '32px'}}>
          Private coaching, 100% online.
        </p>
        <a href="#book" style={{display: 'inline-block', backgroundColor: '#D4A017', color: 'white', padding: '16px 36px', borderRadius: '100px', fontSize: '14px', fontWeight: '700', textDecoration: 'none', marginBottom: '40px'}}>
          Book Your Free Strategy Session
        </a>
      </div>

      {/* CALENDLY */}
      <div style={{maxWidth: '900px', margin: '0 auto', padding: '0 40px 20px'}}>
        <div style={{borderRadius: '16px', overflow: 'hidden', border: '1px solid #f0f0f0', boxShadow: '0 4px 24px rgba(0,0,0,0.06)'}}>
          <iframe
            src="https://calendly.com/chordinated/30min?embed_domain=chordinatedguitaracademy.com&embed_type=Inline&hide_event_type_details=1&hide_gdpr_banner=1"
            width="100%"
            height="700"
            frameBorder="0"
            title="Book a Free Strategy Session"
          ></iframe>
        </div>
        <p style={{textAlign: 'center', fontSize: '12px', color: '#bbb', marginTop: '16px'}}>
          30 minutes · Free · No commitment required
        </p>
      </div>

      {/* SOCIAL PROOF */}
      <div style={{maxWidth: '700px', margin: '60px auto', padding: '0 40px', display: 'flex', justifyContent: 'center', gap: '60px', flexWrap: 'wrap', textAlign: 'center'}}>
        {[['10+', 'Years Teaching'], ['100%', 'Online'], ['Berklee', 'Graduate'], ['5', 'Spots Left']].map(([num, label]) => (
          <div key={label}>
            <div style={{fontSize: '28px', fontWeight: '800', color: '#1a1a2e'}}>{num}</div>
            <div style={{fontSize: '11px', color: '#aaa', letterSpacing: '2px', textTransform: 'uppercase', marginTop: '4px'}}>{label}</div>
          </div>
        ))}
      </div>

      <hr style={{maxWidth: '700px', margin: '0 auto', border: 'none', borderTop: '1px solid #f0f0f0'}} />

      {/* THIS IS FOR YOU */}
      <div style={{maxWidth: '700px', margin: '0 auto', padding: '80px 40px', textAlign: 'center'}}>
        <p style={{fontSize: '11px', fontWeight: '700', color: '#D4A017', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px'}}>Who This Is For</p>
        <h2 style={{fontSize: '32px', fontWeight: '800', color: '#1a1a2e', marginBottom: '48px'}}>You are in the right place if...</h2>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', textAlign: 'left'}}>
          {[
            'You have always wanted to play guitar but never made real progress',
            'You have tried YouTube or apps and still feel stuck',
            'You want a structured plan, not random exercises',
            'You want to play songs you actually love',
            'You are ready to commit and finally make it happen',
            'You want a coach who meets you exactly where you are'
          ].map((item) => (
            <div key={item} style={{background: '#f9f9f9', borderRadius: '12px', padding: '14px 16px', display: 'flex', gap: '10px', alignItems: 'flex-start'}}>
              <span style={{color: '#D4A017', fontWeight: '700', fontSize: '14px', marginTop: '1px'}}>✓</span>
              <p style={{fontSize: '14px', color: '#555', lineHeight: '1.6', margin: 0}}>{item}</p>
            </div>
          ))}
        </div>
      </div>

      <hr style={{maxWidth: '700px', margin: '0 auto', border: 'none', borderTop: '1px solid #f0f0f0'}} />

      {/* HOW IT WORKS */}
      <div style={{maxWidth: '700px', margin: '0 auto', padding: '80px 40px', textAlign: 'center'}}>
        <p style={{fontSize: '11px', fontWeight: '700', color: '#D4A017', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px'}}>The Process</p>
        <h2 style={{fontSize: '32px', fontWeight: '800', color: '#1a1a2e', marginBottom: '48px'}}>Simple. Structured. Effective.</h2>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '40px'}}>
          {[
            ['1', 'Free Strategy Session', 'We talk about your goals and see if we are a good fit.'],
            ['2', 'Your Custom Plan', 'Built around your goals and the music you actually want to play.'],
            ['3', 'Real Progress', 'Start playing real songs from day one. No fluff, no wasted time.']
          ].map(([num, title, desc]) => (
            <div key={num} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
              <div style={{width: '48px', height: '48px', borderRadius: '50%', backgroundColor: '#1a1a2e', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', marginBottom: '16px'}}>{num}</div>
              <h3 style={{fontSize: '15px', fontWeight: '700', color: '#1a1a2e', marginBottom: '8px'}}>{title}</h3>
              <p style={{fontSize: '13px', color: '#999', lineHeight: '1.6', margin: 0}}>{desc}</p>
            </div>
          ))}
        </div>
      </div>

      <hr style={{maxWidth: '700px', margin: '0 auto', border: 'none', borderTop: '1px solid #f0f0f0'}} />

      {/* TESTIMONIALS */}
      <div style={{maxWidth: '700px', margin: '0 auto', padding: '80px 40px', textAlign: 'center'}}>
        <p style={{fontSize: '11px', fontWeight: '700', color: '#D4A017', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px'}}>Student Results</p>
        <h2 style={{fontSize: '32px', fontWeight: '800', color: '#1a1a2e', marginBottom: '48px'}}>What Students Are Saying</h2>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', textAlign: 'left'}}>
          {[
            ['Tomas', 'James is a fantastic teacher. Easy going but knows exactly what material to give. He is a Berklee grad with plenty of experience — the real deal. Can play any style or genre. Very reliable and flexible.'],
            ['Ryan N.', 'I am a self-taught beginner and still a bit insecure about my playing. I never feel like James thinks he is too good to teach me. His lessons have been really encouraging and I have already seen loads of improvement.'],
            ['Nicolas A.', 'Very knowledgeable and meets his students at their current skill level. He will constantly challenge you to stimulate growth. Highly recommend.'],
            ['Laura F.', 'James has the music theory knowledge to back it up — rare for guitar teachers. Very willing to structure lessons around what I am looking for. Highly recommended.']
          ].map(([name, quote]) => (
            <div key={name} style={{background: '#f9f9f9', borderRadius: '16px', padding: '28px'}}>
              <p style={{fontSize: '14px', color: '#555', lineHeight: '1.7', marginBottom: '20px'}}>{quote}</p>
              <p style={{fontSize: '11px', fontWeight: '700', color: '#1a1a2e', letterSpacing: '2px', textTransform: 'uppercase', margin: 0}}>— {name}</p>
            </div>
          ))}
        </div>
      </div>

      <hr style={{maxWidth: '700px', margin: '0 auto', border: 'none', borderTop: '1px solid #f0f0f0'}} />

      {/* ABOUT */}
      <div style={{maxWidth: '700px', margin: '0 auto', padding: '80px 40px'}}>
        <div style={{display: 'flex', gap: '48px', alignItems: 'center', flexWrap: 'wrap'}}>
          <img src="/james-headshot.jpg" alt="James Labrosse" style={{width: '260px', height: '260px', objectFit: 'cover', objectPosition: '30% 15%', borderRadius: '16px', flexShrink: 0}} />
          <div style={{flex: 1, minWidth: '220px'}}>
            <p style={{fontSize: '11px', fontWeight: '700', color: '#D4A017', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px'}}>Your Coach</p>
            <h2 style={{fontSize: '32px', fontWeight: '800', color: '#1a1a2e', marginBottom: '24px'}}>About James</h2>
            <p style={{fontSize: '16px', color: '#999', lineHeight: '1.8'}}>
              James Labrosse is a professional guitarist and Berklee College of Music graduate. With over 10 years of teaching experience, he has helped adult beginners go from zero to playing real music — without the frustration of figuring it out alone. His approach is practical, personalized, and built around the music you actually want to play.
            </p>
          </div>
        </div>
      </div>

      {/* FINAL CTA */}
      <div style={{backgroundColor: '#1a1a2e', padding: '80px 40px', textAlign: 'center'}}>
        <p style={{fontSize: '11px', fontWeight: '700', color: '#D4A017', letterSpacing: '3px', textTransform: 'uppercase', marginBottom: '16px'}}>Limited Spots Available</p>
        <h2 style={{fontSize: '36px', fontWeight: '800', color: 'white', marginBottom: '16px'}}>Ready to Finally Start Playing?</h2>
        <p style={{fontSize: '16px', color: '#888', lineHeight: '1.7', maxWidth: '480px', margin: '0 auto 40px'}}>
          Book a free 30-minute strategy session. We will build your personalized plan and see if we are a good fit.
        </p>
        <a href="#book" style={{display: 'inline-block', backgroundColor: '#D4A017', color: 'white', padding: '16px 36px', borderRadius: '100px', fontSize: '14px', fontWeight: '700', textDecoration: 'none'}}>
          Book Your Free Strategy Session
        </a>
        <p style={{fontSize: '12px', color: '#555', marginTop: '16px'}}>Only 5 spots available this month.</p>
      </div>

      {/* FOOTER */}
      <div style={{backgroundColor: '#1a1a2e', borderTop: '1px solid #ffffff15', padding: '24px 40px', textAlign: 'center'}}>
        <p style={{fontSize: '12px', color: '#444', margin: 0}}>© 2026 Chordinated Guitar Academy · James Labrosse · Berklee College of Music Graduate</p>
      </div>

    </main>
  );
}