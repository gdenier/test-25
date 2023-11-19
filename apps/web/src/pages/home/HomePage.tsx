import { Button, Stack } from "@mui/material";
import { ReactElement } from "react";
import { useAuth } from "shared";
import { UserDetail } from "../../components/UserDetail";
import { Posts } from "../../components/Posts";

export const HomePage = (): ReactElement | null => {
  const { logout } = useAuth();

  return (
    <Stack height="100dvh" width="100%">
      <Stack
        direction="row"
        bgcolor="transparent"
        borderBottom="1px"
        borderColor="gray"
        width="100%"
        justifyContent="space-between"
        p={2}
      >
        <UserDetail />
        <Button onClick={logout} variant="contained">
          Log out
        </Button>
      </Stack>
      <Posts />
    </Stack>
  );
};
