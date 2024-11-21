import {
  Box,
  Button,
  Checkbox,
  Container,
  Divider,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  InputLabel,
  Link,
  OutlinedInput,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import React from "react";
import { GoogleIcon } from "./CustomIcons";
import AdbIcon from "@mui/icons-material/Adb";

const Signup = ({ setIsSignin }) => {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <Container maxWidth="lg">
      <Paper
        sx={{ width: { xs: "100%", sm: "45%", md: "35%" }, margin: "auto" }}
        elevation={4}
      >
        <Box
          sx={{
            p: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Box>
            <AdbIcon />
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", my: 2 }}>
            <Typography variant="h5">Sign up</Typography>
          </Box>
          <Box sx={{ width: "100%", textAlign: "center" }}>
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ my: 1 }}
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              size="small"
              fullWidth
              sx={{ my: 1 }}
            />
            <FormControl sx={{ width: "100%", my: 1 }} variant="outlined">
              <InputLabel size="small" htmlFor="outlined-adornment-password">
                Password
              </InputLabel>
              <OutlinedInput
                size="small"
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label={
                        showPassword
                          ? "hide the password"
                          : "display the password"
                      }
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      onMouseUp={handleMouseUpPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                label="Password"
              />
            </FormControl>
            <Box sx={{ textAlign: "left" }}>
              <FormControlLabel
                control={<Checkbox />}
                label="I want to receive updates via email."
              />
            </Box>
            <Button
              sx={{ width: "100%", my: 1 }}
              variant="contained"
              href="/feed"
            >
              Sign up
            </Button>
            <Divider sx={{ my: 1 }}>or</Divider>
            <Button
              sx={{ width: "100%", my: 1 }}
              variant="outlined"
              startIcon={<GoogleIcon />}
              href="/feed"
            >
              Sign up with Google
            </Button>
            <Box sx={{ mt: 1 }}>
              <Typography variant="body2">
                Already have an account?{" "}
                <Link onClick={() => setIsSignin(true)} href="#">
                  Sign in
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Paper>
    </Container>
  );
};

export default Signup;