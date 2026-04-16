import { useLocation } from 'react-router-dom'
import { Icon } from '../components/ui/Icon'

type RadarItem = {
  key: string
  label: string
  icon: string
}

const items: RadarItem[] = [
  { key: 'trending', label: 'Trending Crews', icon: 'group' },
  { key: 'hotspots', label: 'Hot Spots', icon: 'location_on' },
  { key: 'procircuit', label: 'Pro Circuit', icon: 'military_tech' },
  { key: 'shops', label: 'Local Shops', icon: 'storefront' },
  { key: 'events', label: 'Events', icon: 'event' },
]

function activeKeyFromPath(pathname: string): RadarItem['key'] {
  if (pathname.startsWith('/spots')) return 'hotspots'
  if (pathname.startsWith('/feed')) return 'procircuit'
  return 'trending'
}

export function SideRadarNav() {
  const location = useLocation()
  const activeKey = activeKeyFromPath(location.pathname)

  return (
    <aside className="hidden lg:flex bg-surface-container-lowest h-screen w-64 fixed left-0 top-0 pt-24 flex-col gap-2 p-4 z-40 border-r border-surface-container-highest">
      <div className="mb-6 px-3">
        <h2 className="text-primary-container font-black font-headline text-xl">
          KINETIC RADAR
        </h2>
        <p className="text-[10px] text-secondary tracking-[0.2em] font-bold">
          LIVE FROM THE STREETS
        </p>
      </div>

      <div className="flex flex-col gap-1">
        {items.map((item) => {
          const isActive = item.key === activeKey
          return (
            <div
              key={item.key}
              className={
                isActive
                  ? 'bg-primary-container text-black font-bold p-3 flex items-center gap-3 cursor-pointer'
                  : 'text-white p-3 hover:bg-surface-container-highest flex items-center gap-3 cursor-pointer group transition-all duration-75'
              }
            >
              <Icon
                name={item.icon}
                className={
                  isActive ? undefined : 'group-hover:text-secondary-container'
                }
              />
              <span className="font-headline text-sm uppercase">
                {item.label}
              </span>
            </div>
          )
        })}
      </div>

      <button
        className="mt-auto bg-transparent border border-secondary text-secondary font-bold font-headline p-4 uppercase tracking-widest text-xs hover:bg-secondary hover:text-black transition-all"
        type="button"
      >
        JOIN A CREW
      </button>
    </aside>
  )
}

