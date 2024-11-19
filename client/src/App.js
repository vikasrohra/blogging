import { ThemeProvider, createTheme } from "@mui/material/styles";

import NavBar from "./components/NavBar";
import Feed from "./components/Feed";
import { Container } from "@mui/material";

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
      <Container maxWidth="lg">
        <Feed />
      </Container>
    </ThemeProvider>
  );
};

export default App;
