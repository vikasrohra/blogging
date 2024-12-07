import React from "react";
import SignedOutHome from "./SignedOutHome";
import SignedInHome from "./SignedInHome";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box sx={{ mb: { xs: 9, sm: 2 } }}>
      <SignedInHome />
    </Box>
  );
};

export default Home;
