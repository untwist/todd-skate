import { NavLink } from 'react-router-dom'
import { Icon } from '../components/ui/Icon'

const linkBase =
  "font-headline font-bold uppercase tracking-tighter transition-colors duration-0"

function TopNavLink({ to, label }: { to: string; label: string }) {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        [
          linkBase,
          isActive
            ? 'text-primary-container border-b-2 border-primary-container'
            : 'text-white/70 hover:text-primary-container',
        ].join(' ')
      }
    >
      {label}
    </NavLink>
  )
}

export function TopNav() {
  return (
    <nav className="bg-background border-b-4 border-surface-container-highest fixed top-0 z-50 w-full">
      <div className="flex justify-between items-center w-full px-6 py-4">
        <NavLink
          to="/"
          className="text-3xl font-black text-primary-container italic font-headline uppercase tracking-tighter"
          aria-label="Home"
        >
          KINETIC
        </NavLink>

        <div className="hidden md:flex gap-8 items-center">
          <TopNavLink to="/feed" label="Feed" />
          <TopNavLink to="/spots" label="Spots" />
          <TopNavLink to="/upload" label="Upload" />
          <TopNavLink to="/profile" label="Profile" />
        </div>

        <div className="flex items-center gap-4">
          <button
            className="text-white/70 hover:text-primary-container"
            type="button"
            aria-label="Search"
          >
            <Icon name="search" />
          </button>
          <button
            className="text-white/70 hover:text-primary-container"
            type="button"
            aria-label="Notifications"
          >
            <Icon name="notifications" />
          </button>
          <div className="w-8 h-8 bg-surface-container-highest flex items-center justify-center">
            <Icon name="person" className="text-xs" />
          </div>
        </div>
      </div>
    </nav>
  )
}

