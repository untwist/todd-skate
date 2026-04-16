import type { Spot } from '../../data/spots'
import { Icon } from '../../components/ui/Icon'

const activeColorClass: Record<Spot['activeColor'], string> = {
  cyan: 'bg-secondary-container text-secondary-container',
  orange: 'bg-primary-container text-primary-container',
  error: 'bg-error text-error',
}

export function SpotCard({ spot }: { spot: Spot }) {
  const activeCls = activeColorClass[spot.activeColor]

  return (
    <div className="bg-surface-container-low group">
      <div className="aspect-video relative overflow-hidden">
        <img
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          src={spot.imageUrl}
          alt={spot.name}
          loading="lazy"
        />
        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur px-3 py-1 font-headline font-bold text-[10px] uppercase text-white">
          {spot.category}
        </div>
        <div className="absolute bottom-0 right-0 bg-primary-container p-2">
          <Icon name={spot.icon} filled className="text-black" />
        </div>
      </div>

      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-headline text-2xl font-black uppercase tracking-tight">
            {spot.name}
          </h3>
          <span className="text-secondary-fixed-dim font-headline font-bold">
            {spot.distance}
          </span>
        </div>
        <p className="text-white/60 text-sm font-body mb-4">
          {spot.description}
        </p>
        <div className="flex items-center justify-between border-t border-white/5 pt-4">
          <div className="flex items-center gap-2">
            <span className={['w-2 h-2', activeCls.split(' ')[0]].join(' ')} />
            <span
              className={[
                'text-[10px] font-headline font-bold uppercase',
                activeCls.split(' ')[1],
              ].join(' ')}
            >
              {spot.activeLabel}
            </span>
          </div>
          <span className="text-[10px] font-headline font-bold uppercase text-white/40">
            {spot.safety}
          </span>
        </div>
      </div>
    </div>
  )
}

