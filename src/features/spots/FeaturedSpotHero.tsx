import { featuredSpot } from '../../data/spots'
import { Icon } from '../../components/ui/Icon'

export function FeaturedSpotHero() {
  return (
    <section className="px-6 mb-12">
      <div className="relative group aspect-[16/9] md:aspect-[21/9] overflow-hidden bg-surface-container-low">
        <img
          className="w-full h-full object-cover"
          src={featuredSpot.imageUrl}
          alt={featuredSpot.name}
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-90" />

        <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="bg-primary-container text-black px-2 py-1 font-headline font-black text-[10px] uppercase">
                Featured Location
              </span>
              <span className="text-secondary-fixed-dim flex items-center gap-1 font-headline text-xs font-bold uppercase tracking-wider">
                <Icon name="stars" filled className="text-sm" /> Pro Rated
              </span>
            </div>

            <h2 className="font-headline text-5xl md:text-7xl font-black uppercase tracking-tighter leading-none">
              {featuredSpot.name}
            </h2>

            <div className="flex items-center gap-6 mt-4">
              <div className="flex flex-col">
                <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  Live Load
                </span>
                <span className="font-headline text-xl font-bold text-secondary-container">
                  {featuredSpot.liveLoad}
                </span>
              </div>
              <div className="flex flex-col border-l border-white/10 pl-6">
                <span className="text-white/40 text-[10px] uppercase font-bold tracking-widest">
                  Security Level
                </span>
                <span className="font-headline text-xl font-bold text-primary-container">
                  {featuredSpot.safety}
                </span>
              </div>
            </div>
          </div>

          <div className="bg-surface-container-highest/80 backdrop-blur-md p-6 flex flex-col gap-4 border-l-4 border-primary-container min-w-[280px]">
            <h4 className="font-headline font-bold text-xs uppercase tracking-widest text-white/50">
              Nearby Crews
            </h4>
            <div className="flex -space-x-2">
              {featuredSpot.crewAvatars.map((url, idx) => (
                <div
                  key={idx}
                  className="w-10 h-10 border-2 border-surface bg-surface-container overflow-hidden"
                >
                  <img
                    className="w-full h-full object-cover"
                    src={url}
                    alt=""
                    loading="lazy"
                  />
                </div>
              ))}
              <div className="w-10 h-10 border-2 border-surface bg-surface-container flex items-center justify-center text-[10px] font-bold">
                {featuredSpot.crewExtra}
              </div>
            </div>
            <button
              className="w-full bg-secondary-container text-black font-headline font-black py-2 text-xs uppercase"
              type="button"
            >
              GO TO SPOT
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

