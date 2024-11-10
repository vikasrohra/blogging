import { ThemeProvider, createTheme } from "@mui/material/styles";

import NavBar from "./components/NavBar";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#1976d2",
    },
  },
});

const App = () => {
  return (
    <ThemeProvider theme={darkTheme}>
      <NavBar />
    </ThemeProvider>
  );
};

export default App;
