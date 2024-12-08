import { ThemeProvider, createTheme } from "@mui/material/styles";

import NavBar from "./components/NavBar";
import { appRouter } from "./routes";
import { HashRouter } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";
import { useEffect, useMemo, useState } from "react";

const App = () => {
  const [themeMode, setThemeMode] = useState(
    localStorage.getItem("themeMode") || "dark"
  );

  useEffect(() => {
    localStorage.setItem("themeMode", themeMode);
  }, [themeMode]);

  const appTheme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: themeMode,
        },
      }),
    [themeMode]
  );

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Box>
        <NavBar setThemeMode={setThemeMode} themeMode={themeMode} />
        <HashRouter router={appRouter} />
      </Box>
    </ThemeProvider>
  );
};

export default App;
