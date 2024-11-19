import { ThemeProvider, createTheme } from "@mui/material/styles";

import NavBar from "./components/NavBar";
import Feed from "./components/Feed";
import { Container } from "@mui/material";
import { appRouter } from "./routes";
import { RouterProvider } from "react-router-dom";

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
      <RouterProvider router={appRouter}>
        {/* <Container maxWidth="lg">
          <Feed />
        </Container> */}
      </RouterProvider>
    </ThemeProvider>
  );
};

export default App;
