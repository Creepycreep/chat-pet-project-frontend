import { Typography } from '@mui/material'
import { NavLink } from 'react-router'
import { ROUTES } from '@shared/constants/routes.ts'
import ChatIcon from '@mui/icons-material/Chat'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt'

export const Navbar = () => {
  return (
    <>
      <NavLink
        to={ROUTES.FRIENDS.PATH}
        style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
      >
        <ChatIcon />
        <Typography
          sx={{
            textTransform: 'capitalize',
          }}
        >
          {ROUTES.FRIENDS.TITLE}
        </Typography>
      </NavLink>
      <NavLink
        to={ROUTES.CHATS.PATH}
        style={{ display: 'flex', alignItems: 'center', gap: '5px' }}
      >
        <PeopleAltIcon />
        <Typography
          sx={{
            textTransform: 'capitalize',
          }}
        >
          {ROUTES.CHATS.TITLE}
        </Typography>
      </NavLink>
    </>
  )
}
