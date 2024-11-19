import { Box } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Main = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Box>
        <Outlet />
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Sidebar />
      </Box>
    </Box>
  );
};

export default Main;
