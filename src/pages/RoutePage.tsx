import { Routes, Route, Navigate } from 'react-router'
import { ROUTES } from '@shared/constants/routes.ts'
import { ProfilePage } from '@pages/Profile/ProfilePage.tsx'
import { ChatsPage } from '@pages/Chats/ChatsPage.tsx'
import { FriendsPage } from '@pages/Friends/FriendsPage.tsx'
import { NotFoundPage } from '@pages/NotFound/NotFoundPage.tsx'

export const RoutePage = () => {
  return (
    <Routes>
      <Route path={ROUTES.PROFILE.PATH} element={<ProfilePage />} />
      <Route path={ROUTES.FRIENDS.PATH} element={<FriendsPage />} />
      <Route path={ROUTES.CHATS.PATH} element={<ChatsPage />} />

      <Route path="/" element={<Navigate to={ROUTES.PROFILE.PATH} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  )
}
