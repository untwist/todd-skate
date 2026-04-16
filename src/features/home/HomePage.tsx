import { Icon } from '../../components/ui/Icon'

export function HomePage() {
  return (
    <div className="-mx-6 -mt-6">
      <section className="relative min-h-[921px] flex items-center justify-start overflow-hidden px-6 lg:px-12 bg-surface-container-lowest">
        <div className="absolute inset-0 z-0">
          <img
            className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2b3aa8PrThjnPc4rlI2_e657E5EP3RQCbS5vaxHi4qZfBvKt8cLvEghvVWgZ3BEMKzCwziP61UFkx-b0Sy9x3KJifeyZUY9lVwMOvftzRSrEZkzA_YukNUGt9Yp3ON3ld_gHuGyZMN_ptSoSdi5BGTgug7WYG9XBICzcE3gYM1YkpLj2qsm9lYqcxCQRBrL5jyLyDFzrKNsLV43ZZjb5kl6nkXnVAYy3SpuVa03-9Tjqj07PLWp_Wf7zOGtCxvgAxWlc0goW0BTQ"
            alt="Skateboarder performing a kickflip"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background via-background/40 to-transparent" />
        </div>

        <div className="relative z-10 max-w-4xl">
          <div className="inline-block bg-secondary-container text-on-secondary-container px-4 py-1 font-headline font-black text-sm uppercase tracking-tighter mb-6">
            Live Platform Alpha 2.0
          </div>
          <h1 className="text-6xl md:text-9xl font-headline font-black tracking-tighter leading-[0.85] text-white uppercase mb-8">
            RECORD.
            <br />
            RATE.
            <br />
            <span className="text-primary-container">RULE THE STREETS.</span>
          </h1>
          <div className="flex flex-wrap gap-4">
            <button className="kinetic-gradient text-white px-8 py-5 font-headline font-black text-xl uppercase flex items-center gap-3 group">
              Join the Pro Circuit
              <Icon
                name="arrow_forward"
                className="group-hover:translate-x-2 transition-transform"
              />
            </button>
            <button className="bg-surface-container-highest border border-outline-variant text-white px-8 py-5 font-headline font-black text-xl uppercase">
              Watch Reel
            </button>
          </div>
        </div>
      </section>

      <section className="p-6 lg:p-12 bg-background">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
          <div className="md:col-span-8 bg-surface-container-low p-8 border-l-8 border-primary-container relative overflow-hidden group">
            <div className="relative z-10">
              <Icon name="groups" filled className="text-primary-container text-5xl mb-4" />
              <h3 className="text-4xl font-headline font-black uppercase mb-4 tracking-tighter">
                Connect with your Crew
              </h3>
              <p className="text-on-surface-variant max-w-md text-lg leading-relaxed">
                The pavement is your stage. Record high-definition sessions with your squad,
                auto-sync multi-angle clips, and build your digital legacy together. No filters,
                just raw street footage.
              </p>
            </div>
            <div className="absolute right-0 bottom-0 opacity-10 group-hover:opacity-20 transition-opacity">
              <Icon name="video_camera_back" className="text-[15rem]" />
            </div>
          </div>

          <div className="md:col-span-4 bg-surface-container-highest p-8 flex flex-col justify-between">
            <div>
              <div className="flex justify-between items-start mb-6">
                <Icon name="verified" className="text-secondary-container text-4xl" />
                <div className="flex gap-1">
                  {Array.from({ length: 4 }).map((_, i) => (
                    <Icon key={i} name="star" filled className="text-[#FFD700] text-sm" />
                  ))}
                  <Icon name="star" className="text-[#FFD700] text-sm" />
                </div>
              </div>
              <h3 className="text-2xl font-headline font-black uppercase mb-2">
                Trick Verification
              </h3>
              <p className="text-sm text-on-surface-variant">
                AI-powered trick naming and precision skill rating. Instant validation for every
                flip, grind, and air.
              </p>
            </div>
            <div className="mt-8 bg-background p-4 font-mono text-[10px] text-secondary-container border border-secondary-container/20">
              [ANALYZING_CLIP_092]...
              <br />
              DETECTED: 360_KICKFLIP
              <br />
              ROTATION: 100% | STYLE: 4.5/5
            </div>
          </div>

          <div className="md:col-span-5 bg-surface-container-high p-8 group cursor-crosshair">
            <h3 className="text-2xl font-headline font-black uppercase mb-6 flex items-center justify-between">
              Global Rankings
              <Icon name="leaderboard" className="text-primary-container" />
            </h3>
            <div className="space-y-4">
              {[
                ['01. @JET_GRIND', '12,400 XP'],
                ['02. @STREET_MONK', '11,850 XP'],
                ['03. @OLLIE_KING', '10,200 XP'],
              ].map(([name, xp]) => (
                <div
                  key={name}
                  className="flex items-center justify-between border-b border-surface-container-highest pb-2"
                >
                  <span className="font-headline font-bold">{name}</span>
                  <span className="text-secondary-container font-mono">{xp}</span>
                </div>
              ))}
            </div>
            <p className="mt-6 text-sm text-on-surface-variant">
              Climb the leaderboard. Earn your spot in the Global Kinetic Pro Circuit.
            </p>
          </div>

          <div className="md:col-span-7 bg-primary-container p-8 text-on-primary-container flex flex-col md:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-4xl font-headline font-black uppercase mb-4 leading-none">
                Ownership &amp; Control
              </h3>
              <p className="text-sm font-semibold mb-4">
                Smooth copyright transfer for sponsorship deals. You own your clips; we help you
                monetize them.
              </p>
              <div className="inline-flex bg-on-primary-container text-primary-container px-4 py-2 font-headline font-bold text-xs uppercase">
                Smart Contract Secured
              </div>
            </div>
            <div className="w-32 h-32 bg-on-primary-container rotate-12 flex items-center justify-center">
              <Icon name="gavel" className="text-6xl text-primary-container" />
            </div>
          </div>
        </div>
      </section>

      <section className="py-32 bg-primary-container flex flex-col items-center justify-center text-center px-6 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 flex items-center justify-center pointer-events-none">
          <span className="text-[10rem] md:text-[20rem] font-black text-on-primary-container tracking-tighter select-none">
            KINETIC
          </span>
        </div>
        <div className="relative z-10">
          <h2 className="text-6xl md:text-9xl font-headline font-black text-on-primary-container uppercase tracking-tighter mb-8 leading-none">
            STOP BROWSING.
            <br />
            START RULING.
          </h2>
          <button className="bg-on-primary-container text-primary-container px-12 py-6 text-2xl font-headline font-black uppercase hover:bg-black hover:text-white transition-colors">
            Join the Pro Circuit
          </button>
        </div>
      </section>

      <footer className="bg-surface-container-lowest p-12 border-t border-surface-container-highest">
        <div className="flex flex-col md:flex-row justify-between gap-12">
          <div className="max-w-xs">
            <div className="text-2xl font-black text-primary-container italic font-headline uppercase mb-4">
              KINETIC
            </div>
            <p className="text-sm text-on-surface-variant">
              Industrial-cool digital gear for the skateboarding subculture. Engineered for
              precision, built for the street.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-12">
            {[
              { title: 'Network', links: ['Global Feed', 'Top Spots', 'Crews'] },
              { title: 'Company', links: ['Manifesto', 'Sponsors', 'Support'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Copyright'] },
            ].map((col) => (
              <div key={col.title}>
                <h4 className="font-headline font-bold uppercase text-white mb-4">
                  {col.title}
                </h4>
                <ul className="text-sm text-on-surface-variant space-y-2">
                  {col.links.map((l) => (
                    <li key={l}>
                      <a className="hover:text-primary-container" href="#">
                        {l}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-24 pt-8 border-t border-surface-container-highest flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] uppercase font-bold tracking-widest text-on-surface-variant">
          <p>© 2024 KINETIC DIGITAL SYSTEMS. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            {['Instagram', 'TikTok', 'X / Twitter'].map((x) => (
              <a key={x} href="#">
                {x}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  )
}

