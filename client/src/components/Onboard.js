import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { Box } from "@mui/material";

const Onboard = () => {
  const [isSignin, setIsSignin] = useState(true);
  return (
    <Box sx={{ mb: { xs: 9, sm: 2 } }}>
      {(isSignin && <Signin setIsSignin={setIsSignin} />) || null}
      {(!isSignin && <Signup setIsSignin={setIsSignin} />) || null}
    </Box>
  );
};

export default Onboard;
