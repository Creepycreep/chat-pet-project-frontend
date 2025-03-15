import { Avatar } from "@mui/material";

export const UserAvatar = ({ name = "Mary" }: { name?: string }) => {
  const stringToColor = (string: string) => {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  };

  return (
    <Avatar
      sx={{
        bgcolor: stringToColor(name),
        width: 100,
        height: 100,
        fontSize: "3rem",
      }}
    >
      {name[0]}
    </Avatar>
  );
};
