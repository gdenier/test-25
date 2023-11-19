import { Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import { useCurrentUser } from "shared";
import { UserAvatar } from "./UserAvatar";

export const UserDetail = (): ReactElement | null => {
  const { data: user } = useCurrentUser();

  if (!user) return null;

  return (
    <Stack direction="row" alignItems="center" gap={2}>
      <UserAvatar name={user.name} />
      <Typography component="p">{user.name}</Typography>
    </Stack>
  );
};
