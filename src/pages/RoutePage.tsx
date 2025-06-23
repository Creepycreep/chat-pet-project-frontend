import { Routes, Route, Navigate } from 'react-router'
import { ROUTES } from '@shared/constants/routes.ts'
import { ProfilePage } from '@pages/Profile/ProfilePage.tsx'

export const RoutePage = () => {
  return (
    <Routes>
      <Route path={ROUTES.PROFILE.PATH} element={<ProfilePage />} />

      <Route path="/" element={<Navigate to={ROUTES.PROFILE.PATH} />} />
    </Routes>
  )
}
