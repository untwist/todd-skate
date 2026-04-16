import { Icon } from '../../components/ui/Icon'
import { profile } from '../../data/profile'

export function TrickTapeGrid() {
  return (
    <section className="mb-12">
      <div className="flex justify-between items-end mb-6 border-b border-white/10 pb-4">
        <h2 className="text-3xl font-black uppercase italic tracking-tighter">
          Trick Tape
        </h2>
        <a
          className="text-primary-container text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:underline"
          href="#"
        >
          View All Reels <Icon name="arrow_forward" className="text-sm" />
        </a>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {profile.trickTape.map((item) => (
          <div
            key={item.title}
            className="group relative aspect-[3/4] bg-surface-container-low overflow-hidden cursor-pointer"
          >
            <img
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-80"
              src={item.imageUrl}
              alt={item.title}
              loading="lazy"
            />
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
            <div className="absolute inset-0 scrim-gradient" />
            {item.featured ? (
              <div className="absolute top-4 left-4">
                <span className="bg-primary-container text-on-primary-container text-[10px] font-black px-2 py-0.5 uppercase">
                  Featured
                </span>
              </div>
            ) : null}
            <div className="absolute bottom-4 left-4 right-4">
              <p className="text-white font-black uppercase italic text-lg leading-none">
                {item.title}
              </p>
              <div className="flex items-center gap-4 mt-2">
                <span className="flex items-center gap-1 text-[10px] text-white/60 font-bold uppercase">
                  <Icon name="visibility" className="text-[14px]" /> {item.views}
                </span>
                <span className="flex items-center gap-1 text-[10px] text-white/60 font-bold uppercase">
                  <Icon name="favorite" className="text-[14px]" /> {item.likes}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

