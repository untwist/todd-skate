import { Icon } from '../../components/ui/Icon'
import { profile } from '../../data/profile'

export function RecentUnlocks() {
  return (
    <div className="bg-surface-container-high p-8">
      <h3 className="text-lg font-black uppercase italic tracking-tighter mb-6">
        Recent Unlocks
      </h3>
      <div className="space-y-6">
        {profile.unlocks.map((u) => (
          <div
            key={u.title}
            className={['flex gap-4 items-center', u.locked ? 'opacity-50' : null]
              .filter(Boolean)
              .join(' ')}
          >
            <div
              className={[
                'w-12 h-12 flex items-center justify-center shrink-0',
                u.iconBg,
              ].join(' ')}
            >
              <Icon name={u.icon} filled className={u.iconColor} />
            </div>
            <div>
              <p className="text-xs font-black uppercase leading-tight">
                {u.title}
              </p>
              <p className="text-[10px] text-white/40 uppercase">{u.subtitle}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

