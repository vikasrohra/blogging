import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex" }}>
        <Box sx={{ width: 1 }}>
          <Outlet />
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" } }}>
          <Sidebar />
        </Box>
      </Box>
    </Container>
  );
};

export default Main;
