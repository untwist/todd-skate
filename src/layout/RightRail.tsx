import { HotSpotsPanel } from '../features/feed/HotSpotsPanel'
import { LocalCrewsPanel } from '../features/feed/LocalCrewsPanel'

export function RightRail() {
  return (
    <aside className="hidden xl:flex flex-col gap-8 p-6 bg-surface-container-lowest w-80 fixed right-0 top-0 h-screen pt-24 border-l border-surface-container-highest">
      <LocalCrewsPanel />
      <HotSpotsPanel />

      <footer className="mt-auto p-2 border-t border-surface-container-highest">
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {['Status', 'Terms', 'API', 'Privacy'].map((label) => (
            <a
              key={label}
              className="text-[10px] text-white/30 font-bold hover:text-primary-container uppercase transition-none"
              href="#"
            >
              {label}
            </a>
          ))}
        </div>
        <p className="text-[10px] text-white/20 mt-4 font-black uppercase tracking-widest">
          ONYX KINETIC © 2024
        </p>
      </footer>
    </aside>
  )
}

