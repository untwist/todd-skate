import { Outlet, useLocation } from 'react-router-dom'
import { BottomNav } from './BottomNav'
import { RightRail } from './RightRail'
import { SideRadarNav } from './SideRadarNav'
import { TopNav } from './TopNav'

export function AppShell() {
  const location = useLocation()
  const showRightRail = location.pathname === '/feed'

  return (
    <div className="min-h-screen bg-background text-on-background">
      <TopNav />
      <SideRadarNav />

      <div className="pt-24 flex min-h-screen">
        <main
          className={[
            'flex-1 lg:ml-64 p-6',
            showRightRail ? 'xl:mr-80 flex flex-col items-center' : undefined,
          ]
            .filter(Boolean)
            .join(' ')}
        >
          <Outlet />
        </main>

        {showRightRail ? <RightRail /> : null}
      </div>

      <BottomNav />
    </div>
  )
}

