import { hotSpots } from '../../data/feed'

export function HotSpotsPanel() {
  return (
    <section>
      <div className="flex justify-between items-end mb-4 px-2">
        <h5 className="font-headline font-black text-secondary-container uppercase tracking-tight">
          HOT SPOTS
        </h5>
        <span className="text-[10px] text-white/40 font-bold hover:text-white cursor-pointer transition-none">
          MAP
        </span>
      </div>

      <div className="grid grid-cols-1 gap-2">
        {hotSpots.map((spot) => (
          <div
            key={spot.name}
            className="relative h-24 overflow-hidden group cursor-pointer"
          >
            <img
              className="w-full h-full object-cover"
              src={spot.imageUrl}
              alt={spot.name}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/20 transition-all flex flex-col justify-end p-3">
              <p className="font-headline font-black text-xs uppercase text-white leading-tight">
                {spot.name}
              </p>
              <p className="text-[10px] font-bold text-secondary-container uppercase tracking-tighter">
                {spot.ridersNow}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

