import { Box, Button, Container, Fab, Typography } from "@mui/material";
import React from "react";
import AddCardIcon from "@mui/icons-material/AddCard";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";

const SignedInHome = () => {
  return (
    <Container maxWidth="lg">
      <Box>
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          Create a new blog
        </Typography>
      </Box>
      <Box
        sx={{
          mt: 1,
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
        }}
      >
        <Button
          variant="outlined"
          startIcon={
            <Fab color="primary" size="small" aria-label="add">
              <AddCardIcon />
            </Fab>
          }
          size="large"
          sx={{ justifyContent: "flex-start", borderRadius: "15px", py: 2 }}
        >
          Add blog
        </Button>
        <Button
          color="secondary"
          variant="outlined"
          startIcon={
            <Fab color="secondary" size="small" aria-label="add">
              <AddPhotoAlternateIcon />
            </Fab>
          }
          size="large"
          sx={{
            justifyContent: "flex-start",
            borderRadius: "15px",
            mt: { xs: 3, sm: 0 },
            ml: { sm: 3 },
            py: 2,
          }}
        >
          Add memory
        </Button>
      </Box>
    </Container>
  );
};

export default SignedInHome;
