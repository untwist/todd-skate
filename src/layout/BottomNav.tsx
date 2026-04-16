import { NavLink } from 'react-router-dom'
import { Icon } from '../components/ui/Icon'

function BottomNavLink({
  to,
  label,
  icon,
}: {
  to: string
  label: string
  icon: string
}) {
  return (
    <NavLink to={to}>
      {({ isActive }) => (
        <div
          className={[
            'flex flex-col items-center gap-1',
            isActive ? 'text-primary-container' : 'text-white/50',
          ].join(' ')}
        >
          <Icon name={icon} filled={isActive} />
          <span className="text-[9px] uppercase font-bold">{label}</span>
        </div>
      )}
    </NavLink>
  )
}

export function BottomNav() {
  return (
    <nav className="md:hidden fixed bottom-0 left-0 w-full bg-background border-t-4 border-surface-container-highest flex justify-around items-center py-4 z-50">
      <BottomNavLink to="/feed" label="Feed" icon="feed" />
      <BottomNavLink to="/spots" label="Spots" icon="location_on" />
      <BottomNavLink to="/upload" label="Upload" icon="add_box" />
      <BottomNavLink to="/profile" label="Profile" icon="person" />
    </nav>
  )
}

