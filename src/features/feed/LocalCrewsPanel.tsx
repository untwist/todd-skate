import { localCrews } from '../../data/feed'
import { Icon } from '../../components/ui/Icon'

export function LocalCrewsPanel() {
  return (
    <section>
      <div className="flex justify-between items-end mb-4 px-2">
        <h5 className="font-headline font-black text-primary-container uppercase tracking-tight">
          LOCAL CREWS
        </h5>
        <span className="text-[10px] text-white/40 font-bold hover:text-white cursor-pointer transition-none">
          VIEW ALL
        </span>
      </div>

      <div className="space-y-1">
        {localCrews.map((crew) => (
          <div
            key={crew.name}
            className="bg-surface-container-highest p-3 flex items-center justify-between group cursor-pointer hover:bg-primary-container hover:text-on-primary-container transition-none"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-black overflow-hidden">
                <img
                  className="w-full h-full object-cover grayscale"
                  src={crew.imageUrl}
                  alt={crew.name}
                  loading="lazy"
                />
              </div>
              <div>
                <p className="font-headline font-bold text-xs uppercase tracking-wider">
                  {crew.name}
                </p>
                <p className="text-[10px] text-white/40 group-hover:text-black/60 font-bold">
                  {crew.meta}
                </p>
              </div>
            </div>
            <Icon name="arrow_forward_ios" className="text-sm" />
          </div>
        ))}
      </div>
    </section>
  )
}

