import { profile } from '../../data/profile'

export function SetupAndSponsors() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-24 md:pb-12">
      <div className="bg-surface-container-lowest p-8 border border-white/5">
        <h3 className="text-xl font-black uppercase italic mb-6">
          Current Setup
        </h3>
        <div className="space-y-4">
          {profile.setup.map((row) => (
            <div
              key={row.label}
              className="flex justify-between items-center py-3 border-b border-white/10"
            >
              <span className="text-xs text-white/40 font-bold uppercase">
                {row.label}
              </span>
              <span
                className={[
                  'text-xs font-black',
                  row.highlight ? 'text-secondary-container' : 'text-white',
                ].join(' ')}
              >
                {row.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-surface-container-lowest p-8 border border-white/5 flex flex-col justify-between">
        <div>
          <h3 className="text-xl font-black uppercase italic mb-2">Sponsors</h3>
          <p className="text-[10px] text-white/40 uppercase font-bold tracking-widest mb-6">
            Official Partner Support
          </p>
          <div className="flex flex-wrap gap-6 items-center grayscale opacity-50">
            {profile.sponsors.map((s) => (
              <span
                key={s}
                className="text-2xl font-black italic"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-white/10">
          <button className="w-full text-center text-[10px] font-black uppercase tracking-widest py-3 hover:bg-white/5 transition-colors">
            Apply for Sponsorship
          </button>
        </div>
      </div>
    </section>
  )
}

