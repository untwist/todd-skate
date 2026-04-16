import { useMemo, useState } from 'react'
import { profile } from '../../data/profile'

export function SkillProgression() {
  const [activeIdx, setActiveIdx] = useState<number | null>(null)

  const activePct = useMemo(() => {
    if (activeIdx === null) return null
    return profile.skillBars[activeIdx] ?? null
  }, [activeIdx])

  return (
    <div className="lg:col-span-2 bg-surface-container-low p-8 border-l-4 border-secondary-container">
      <div className="flex justify-between items-end mb-8">
        <div>
          <h2 className="text-2xl font-black uppercase italic tracking-tighter mb-1">
            Skill Progression
          </h2>
          <p className="text-white/40 text-xs uppercase font-bold tracking-widest">
            Performance Metrics / Q4
          </p>
        </div>
        <div className="text-right">
          <span className="text-secondary-container text-4xl font-black tabular-nums">
            {activePct === null ? profile.skillDelta : `${activePct}%`}
          </span>
          <p className="text-white/40 text-[10px] uppercase font-bold">
            {profile.skillDeltaSubtitle}
          </p>
        </div>
      </div>

      <div
        className="h-48 flex items-end gap-2"
        onMouseLeave={() => setActiveIdx(null)}
      >
        {profile.skillBars.map((pct, idx) => {
          const isCyan = idx === 6
          const isOrange = idx === profile.skillBars.length - 1
          const isActive = idx === activeIdx
          const cls = isCyan
            ? 'bg-secondary-container'
            : isOrange
              ? 'bg-primary-container'
              : 'bg-surface-container-highest'
          const dayLabel = profile.skillDays[idx] ?? `Day ${idx + 1}`
          return (
            <div
              key={idx}
              className={[
                'flex-1 transition-[filter,opacity] focus:outline-none',
                cls,
                isActive
                  ? 'ring-2 ring-secondary-container/60 opacity-100'
                  : 'opacity-70 hover:opacity-100 focus:opacity-100',
              ].join(' ')}
              style={{ height: `${pct}%` }}
              tabIndex={0}
              aria-label={`${dayLabel}: ${pct}%`}
              onMouseEnter={() => setActiveIdx(idx)}
              onFocus={() => setActiveIdx(idx)}
              onBlur={() => setActiveIdx(null)}
            />
          )
        })}
      </div>

      <div className="flex justify-between mt-4 text-[10px] uppercase font-bold text-white/20">
        {profile.skillDays.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>
    </div>
  )
}

