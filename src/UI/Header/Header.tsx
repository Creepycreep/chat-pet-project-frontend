import { Box, Container } from '@mui/material'
import { UserAvatar } from '@features/user/UserAvatar/UserAvatar.tsx'
import { Navbar } from '../Navbar/Navbar.tsx'

export const Header = () => {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          gap: '2em',
        }}
      >
        <Navbar />
      </Box>
      <Box>
        <UserAvatar />
      </Box>
    </Container>
  )
}
