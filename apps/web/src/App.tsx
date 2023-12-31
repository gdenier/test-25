import { AuthProvider, QueryProvider, useAuth } from "shared";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { HomePage } from "./pages/home/HomePage";
import { SignInPage } from "./pages/auth/SignInPage";
import { ThemeProvider } from "@emotion/react";
import { CssBaseline, createTheme, useMediaQuery } from "@mui/material";
import { useMemo } from "react";

function App() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: prefersDarkMode ? "dark" : "light",
        },
      }),
    [prefersDarkMode]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <QueryProvider>
          <Pages />
        </QueryProvider>
      </AuthProvider>
    </ThemeProvider>
  );
}

const Pages = () => {
  const { user } = useAuth();

  if (user === null) return <SignInPage />;

  if (user) return <HomePage />;

  return null;
};

export default App;
