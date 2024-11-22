import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Fab,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import AddCardIcon from "@mui/icons-material/AddCard";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ForumIcon from "@mui/icons-material/Forum";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";

const SignedInHome = () => {
  function stringToColor(string) {
    let hash = 0;
    let i;

    /* eslint-disable no-bitwise */
    for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = "#";

    for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
    }
    /* eslint-enable no-bitwise */

    return color;
  }

  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

  const bull = (
    <Box
      component="span"
      sx={{
        display: "inline-block",
        mx: "2px",
        transform: "scale(0.8)",
        color: "#aaa",
      }}
    >
      •
    </Box>
  );

  return (
    <Container maxWidth="lg">
      <Box sx={{ mb: 3 }}>
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
      </Box>
      <Accordion defaultExpanded>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              Your blogs
            </Typography>
            <Typography variant="body2" sx={{ color: "#bbb" }}>
              Create and manage your blogs
            </Typography>
          </Box>
        </AccordionSummary>
        <Divider />
        <AccordionDetails>
          <Box sx={{ display: "flex", flexDirection: {xs: 'column', md: 'row'} }}>
            {[1, 2, 3].map((blog, index) => {
              return (
                <Card
                  key={index}
                  sx={{
                    display: { xs: "flex", flexDirection: "column" },
                    p: 3,
                    borderRadius: "10px",
                    width: { md: "50%" },
                  }}
                >
                  {/* Icon & name */}
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Avatar {...stringAvatar("Vikas Rohra")} />
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="subtitle2" sx={{ ml: 1 }}>
                        Vikas Rohra
                      </Typography>
                      <Typography variant="body2" sx={{ ml: 1, color: "#aaa" }}>
                        blog.vikas.dev {bull} Nov 13, 2024
                      </Typography>
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: { xs: "column", sm: "none" },
                      mt: 1,
                    }}
                  >
                    {/* Blog title & description */}
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Box>
                        <Typography variant="h6">
                          Introduction to Node.js
                        </Typography>
                      </Box>
                    </Box>
                    {/* Blog image */}
                    <Box sx={{ mt: 1 }}>
                      <img
                        src={`https://cdn.hashnode.com/res/hashnode/image/upload/v1731435640892/39346b4a-c6c5-472e-b1b9-cc4a5871fc5c.jpeg`}
                        alt={"Blog"}
                        style={{ width: "100%" }}
                        loading="lazy"
                      />
                    </Box>
                  </Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      mt: 1,
                    }}
                  >
                    {/* Discuss, likes and reads */}
                    <Stack direction="row" divider={bull} spacing={1}>
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <ForumIcon sx={{ fontSize: "small" }} />
                        <Typography variant="body2" sx={{ ml: 1 }}>
                          Discuss
                        </Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2">10 likes</Typography>
                      </Box>
                      <Box>
                        <Typography variant="body2">27 reads</Typography>
                      </Box>
                    </Stack>
                    {/* Bookmark */}
                    <Box>
                      <BookmarkBorderIcon sx={{ fontSize: "medium" }} />
                    </Box>
                  </Box>
                </Card>
              );
            })}
          </Box>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default SignedInHome;
