import { ProfileHero } from './ProfileHero'
import { RecentUnlocks } from './RecentUnlocks'
import { SetupAndSponsors } from './SetupAndSponsors'
import { SkillProgression } from './SkillProgression'
import { TrickTapeGrid } from './TrickTapeGrid'

export function ProfilePage() {
  return (
    <div className="-mx-6 -mt-6">
      <div className="px-6">
        <ProfileHero />

        <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          <SkillProgression />
          <RecentUnlocks />
        </section>

        <TrickTapeGrid />
        <SetupAndSponsors />
      </div>
    </div>
  )
}

