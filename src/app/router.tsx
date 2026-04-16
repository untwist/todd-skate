import { Navigate, createBrowserRouter } from 'react-router-dom'
import { AppShell } from '../layout/AppShell'
import { HomePage } from '../features/home/HomePage'
import { FeedPage } from '../features/feed/FeedPage'
import { SpotsPage } from '../features/spots/SpotsPage'
import { UploadPage } from '../features/upload/UploadPage'
import { ProfilePage } from '../features/profile/ProfilePage'

export const router = createBrowserRouter(
  [
    {
      element: <AppShell />,
      children: [
        { path: '/', element: <HomePage /> },
        { path: '/feed', element: <FeedPage /> },
        { path: '/spots', element: <SpotsPage /> },
        { path: '/upload', element: <UploadPage /> },
        { path: '/profile', element: <ProfilePage /> },
        { path: '*', element: <Navigate to="/" replace /> },
      ],
    },
  ],
  { basename: import.meta.env.BASE_URL },
)

