import { Icon } from '../../components/ui/Icon'
import { profile } from '../../data/profile'

export function ProfileHero() {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-8">
      <div className="lg:col-span-8 bg-surface-container-low h-[400px] relative overflow-hidden flex flex-col justify-end p-8 border-b-8 border-primary-container">
        <img
          className="absolute inset-0 w-full h-full object-cover opacity-60"
          src={profile.heroImageUrl}
          alt="Profile hero"
          loading="lazy"
        />
        <div className="absolute inset-0 scrim-gradient" />

        <div className="relative z-10">
          <div className="inline-block bg-primary-container text-on-primary-container px-3 py-1 font-black text-xs uppercase mb-4 tracking-tighter">
            {profile.levelLabel}
          </div>
          <h1 className="text-7xl md:text-9xl font-black uppercase italic tracking-tighter leading-none mb-4">
            {profile.displayNameFirst}{' '}
            <span className="text-primary-container">{profile.displayNameLast}</span>
          </h1>
          <div className="flex flex-wrap gap-4">
            <button className="kinetic-gradient px-8 py-4 text-white font-black uppercase text-sm flex items-center gap-2 hover:scale-[1.02] active:scale-100">
              <Icon name="upload" /> Upload New Run
            </button>
            <button className="bg-transparent border border-white/20 px-8 py-4 text-white font-black uppercase text-sm flex items-center gap-2 hover:bg-white/10">
              <Icon name="edit" /> Edit Profile
            </button>
          </div>
        </div>
      </div>

      <div className="lg:col-span-4 flex flex-col gap-6">
        <div className="bg-surface-container-high p-6 flex flex-col justify-between flex-1">
          <div className="flex justify-between items-start">
            <span className="text-white/40 font-bold uppercase text-[10px] tracking-widest">
              Global Rank
            </span>
            <Icon name="trophy" className="text-secondary-container" />
          </div>
          <div>
            <div className="text-6xl font-black italic text-secondary-container">
              {profile.globalRank}
            </div>
            <div className="text-white/60 text-xs font-medium uppercase mt-2">
              {profile.globalRankSubtitle}
            </div>
          </div>
        </div>

        <div className="bg-surface-container-highest p-6 flex flex-col justify-between flex-1">
          <div className="flex justify-between items-start">
            <span className="text-white/40 font-bold uppercase text-[10px] tracking-widest">
              Total Tricks
            </span>
            <Icon name="bolt" className="text-primary-container" />
          </div>
          <div>
            <div className="text-6xl font-black italic text-white">
              {profile.totalTricks}
            </div>
            <div className="text-white/60 text-xs font-medium uppercase mt-2">
              {profile.landingRate}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

