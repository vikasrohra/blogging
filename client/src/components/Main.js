import { Box, Container } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <Container maxWidth="lg">
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ width: { xs: "100%", md: "65%" } }}>
          <Outlet />
        </Box>
        <Box sx={{ display: { xs: "none", md: "flex" }, width: { md: "30%" } }}>
          <Sidebar />
        </Box>
      </Box>
    </Container>
  );
};

export default Main;
