import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Box,
  Card,
  Container,
  IconButton,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import EditOutlinedIcon from "@mui/icons-material/EditOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RedditIcon from "@mui/icons-material/Reddit";
import XIcon from "@mui/icons-material/X";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import CalendarMonthOutlinedIcon from "@mui/icons-material/CalendarMonthOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ForumIcon from "@mui/icons-material/Forum";

const Profile = () => {
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
    <Container maxWidth="lg" sx={{ mb: { xs: 9, sm: 2 } }}>
      <Paper variant="outlined" sx={{ p: 4, borderRadius: "10px" }}>
        <Box
          sx={{ display: "flex", flexDirection: { xs: "column", sm: "row" } }}
        >
          <Avatar
            alt="Vikas Rohra"
            src="https://avatars.githubusercontent.com/u/13039733?v=4"
            sx={{ width: 150, height: 150, border: "1px solid #aaa" }}
          />
          <Box sx={{ ml: { xs: 0, sm: 6 }, mt: { xs: 2, sm: 0 } }}>
            <Typography variant="h4" sx={{ fontWeight: "bold" }}>
              Vikas Rohra
            </Typography>
            <Typography variant="body2" sx={{ color: "#aaa" }}>
              vikasrohra {bull} he/him {bull} Senior Software Engineer
            </Typography>
            <Typography variant="h6" sx={{ color: "#aaa", mt: 2 }}>
              Senior Software Engineer | JavaScript | React | Node.js |
              Express.js | MongoDB | CSS Libraries
            </Typography>
          </Box>
          <Stack direction="row-reverse" spacing={2}>
            <Avatar sx={{ cursor: "pointer" }}>
              <EditOutlinedIcon />
            </Avatar>
            <Avatar sx={{ cursor: "pointer" }}>
              <ShareOutlinedIcon />
            </Avatar>
          </Stack>
        </Box>

        <Paper variant="outlined" sx={{ mt: 2, p: 2, borderRadius: "10px" }}>
          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 6 }}
            sx={{ justifyContent: "center" }}
          >
            <Stack direction="row">
              <IconButton>
                <LinkedInIcon fontSize="medium" />
              </IconButton>
              <IconButton>
                <InstagramIcon fontSize="medium" />
              </IconButton>
              <IconButton>
                <XIcon fontSize="medium" />
              </IconButton>
              <IconButton>
                <YouTubeIcon fontSize="medium" />
              </IconButton>
              <IconButton fontSize="medium">
                <RedditIcon />
              </IconButton>
            </Stack>

            <Stack direction={"row"} sx={{ alignItems: "center", mt: 1 }}>
              <Typography
                component={"span"}
                variant="body2"
                sx={{ color: "#aaa" }}
              >
                <LocationOnOutlinedIcon />
              </Typography>
              <Typography variant="body2" sx={{ color: "#aaa", ml: 1 }}>
                Mumbai, India
              </Typography>
            </Stack>

            <Stack direction={"row"} sx={{ alignItems: "center", mt: 1 }}>
              <Typography
                component={"span"}
                variant="body2"
                sx={{ color: "#aaa" }}
              >
                <CalendarMonthOutlinedIcon />
              </Typography>
              <Typography variant="body2" sx={{ color: "#aaa", ml: 1 }}>
                Member Since Dec, 2021
              </Typography>
            </Stack>
          </Stack>
        </Paper>

        <Paper variant="outlined" sx={{ mt: 2, p: 2, borderRadius: "10px" }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: "bold" }}>
              About
            </Typography>
          </Box>
          <Box sx={{ mt: 2 }}>
            <Typography variant="body2" sx={{ color: "#ddd" }}>
              Expert in developing Responsive & Interactive websites - React
              Specialist | Working with React, JavaScript, Node.js, Express.js,
              MongoDB, HTML, CSS, Material UI, Tailwind CSS, Rest API,
              Bootstrap, GitHub, Agile methodology.
            </Typography>
          </Box>

          <Paper variant="outlined" sx={{ mt: 2, p: 2, borderRadius: "10px" }}>
            <Box>
              <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                Skills
              </Typography>
            </Box>
            <Box sx={{ mt: 1 }}>
              <Typography variant="body2" sx={{ color: "#aaa" }}>
                JavaScript {bull} React.js {bull} Node.js
              </Typography>
            </Box>
          </Paper>
        </Paper>

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
          <AccordionDetails>
            {/* <Box
            sx={{ display: "flex", flexDirection: { xs: "column", md: "row" } }}
          > */}
            <Stack
              spacing={2}
              direction={{ xs: "column", md: "row" }}
              useFlexGap
              sx={{ flexWrap: "wrap" }}
            >
              {[1, 2, 3].map((blog, index) => {
                return (
                  <Card
                    key={index}
                    variant="outlined"
                    sx={{
                      display: { xs: "flex", flexDirection: "column" },
                      p: 2,
                      borderRadius: "10px",
                    }}
                  >
                    <Box sx={{ display: "flex", flexDirection: "column" }}>
                      <Typography variant="h6">
                        Introduction to Node.js
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#aaa" }}>
                        What is Node.js? Node.js is a JavaScript runtime that
                        allows...
                      </Typography>
                    </Box>
                    {/* Discuss, likes and reads */}
                    <Stack
                      direction="row"
                      divider={bull}
                      spacing={1}
                      sx={{ mt: 2, display: { xs: "none", sm: "flex" } }}
                    >
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
                  </Card>
                );
              })}
            </Stack>
            {/* </Box> */}
          </AccordionDetails>
        </Accordion>
      </Paper>
    </Container>
  );
};

export default Profile;
