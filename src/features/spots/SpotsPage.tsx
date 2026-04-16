import { useMemo, useState } from 'react'
import { Icon } from '../../components/ui/Icon'
import { spots } from '../../data/spots'
import type { SpotCategory, Spot } from '../../data/spots'
import { FeaturedSpotHero } from './FeaturedSpotHero'
import { SpotCard } from './SpotCard'
import { SpotFilters } from './SpotFilters'

export function SpotsPage() {
  const [active, setActive] = useState<SpotCategory>('All Terrain')

  const visible: Spot[] = useMemo(() => {
    if (active === 'All Terrain') return spots
    return spots.filter((s) => s.category === active)
  }, [active])

  return (
    <div className="-mx-6 -mt-6">
      <header className="px-6 mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
        <div>
          <h1 className="font-headline text-6xl md:text-8xl font-black uppercase tracking-tighter leading-none mb-2">
            SPOTS
          </h1>
          <p className="font-body text-secondary-fixed-dim uppercase tracking-widest text-xs">
            LOCAL GEOGRAPHY OF THE GRIND
          </p>
        </div>
        <SpotFilters active={active} onChange={setActive} />
      </header>

      <FeaturedSpotHero />

      <section className="px-6 pb-28 md:pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {visible.slice(0, 2).map((spot) => (
            <SpotCard key={spot.name} spot={spot} />
          ))}

          <div className="bg-surface-container-low border-2 border-dashed border-surface-container-highest flex flex-col items-center justify-center p-8 text-center min-h-[300px]">
            <Icon name="map" className="text-6xl text-surface-container-highest mb-4" />
            <h3 className="font-headline text-xl font-bold uppercase mb-2">
              Toggle Radar Map
            </h3>
            <p className="text-white/40 text-xs font-body max-w-[200px] mb-6">
              See real-time skater densities across the city metro area.
            </p>
            <button
              className="bg-surface-container-highest hover:bg-white hover:text-black transition-colors px-8 py-3 font-headline font-black text-xs uppercase tracking-widest"
              type="button"
            >
              Initialize Radar
            </button>
          </div>

          {visible.slice(2).map((spot) => (
            <SpotCard key={spot.name} spot={spot} />
          ))}

          <div className="bg-primary-container p-8 flex flex-col justify-end min-h-[300px]">
            <h3 className="font-headline text-4xl font-black text-black uppercase leading-none mb-4">
              Found a New Ledge?
            </h3>
            <p className="text-black font-body text-sm font-semibold mb-6">
              Drop a pin, upload the clips, and let the community know if it's hot
              or not.
            </p>
            <button
              className="bg-black text-primary-container font-headline font-black py-4 text-xs uppercase tracking-widest hover:bg-white hover:text-black transition-colors"
              type="button"
            >
              SUBMIT NEW SPOT
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}

