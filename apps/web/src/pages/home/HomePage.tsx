import { Button, Stack, Typography } from "@mui/material";
import { ReactElement } from "react";
import { useAuth } from "shared";

export const HomePage = (): ReactElement | null => {
  const { logout } = useAuth();
  return (
    <Stack>
      <Typography component="h1" variant="h1">
        Home Page
      </Typography>
      <Button onClick={logout} variant="contained">
        Log out
      </Button>
    </Stack>
  );
};
