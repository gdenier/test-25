import {
  Alert,
  Avatar,
  Box,
  Container,
  TextField,
  Typography,
} from "@mui/material";
import { ReactElement } from "react";
import { useFormContext } from "react-hook-form";
import { SignInForm, SignInFormValues, SignInProps, useAuth } from "shared";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { LoadingButton } from "@mui/lab";

export const SignInPage = (): ReactElement | null => {
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>

        <SignInForm>
          {({ handleSubmit }) => <Form handleSubmit={handleSubmit} />}
        </SignInForm>
      </Box>
    </Container>
  );
};

const Form = ({ handleSubmit }: SignInProps) => {
  const form = useFormContext<SignInFormValues>();
  const { isLoading } = useAuth();

  return (
    <Box
      component="form"
      onSubmit={form.handleSubmit(handleSubmit)}
      sx={{ mt: 1 }}
    >
      {form.formState.errors.root ? (
        <Alert severity="error">{form.formState.errors.root?.message}</Alert>
      ) : null}
      <TextField
        {...form.register("email")}
        type="email"
        placeholder="Email"
        required
        label="Email Address"
        fullWidth
        margin="normal"
      />
      <TextField
        {...form.register("password")}
        type="password"
        placeholder="Password"
        required
        label="Password"
        fullWidth
        margin="normal"
        error={!!form.formState.errors.password}
        helperText={form.formState.errors.password?.message}
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        loading={isLoading}
      >
        Signin
      </LoadingButton>
    </Box>
  );
};
