import { Avatar } from '@mui/material'
import { StringToColorService } from '@features/user/UserAvatar/service/StringToColorService.ts'

export const UserAvatar = ({ name = 'No name' }: { name?: string }) => {
  const color = StringToColorService(name)

  return (
    <Avatar
      sx={{
        bgcolor: color,
        width: 50,
        height: 50,
        fontSize: '2rem',
      }}
    >
      {name[0]}
    </Avatar>
  )
}
