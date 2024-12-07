import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import {
  Avatar,
  Box,
  CardActionArea,
  Divider,
  Fab,
  IconButton,
  Link,
  Paper,
  Stack,
} from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import RedditIcon from "@mui/icons-material/Reddit";
import XIcon from "@mui/icons-material/X";

const Sidebar = () => {
  function stringAvatar(name) {
    return {
      sx: {
        bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0]}${name.split(" ")[1][0]}`,
    };
  }

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
    <Box>
      <Card sx={{ height: "fit-content", borderRadius: "10px" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="170"
          image="https://cdn.hashnode.com/res/hashnode/image/upload/v1731435640892/39346b4a-c6c5-472e-b1b9-cc4a5871fc5c.jpeg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Personalize your feed
          </Typography>
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Curate your feed to your taste and find content that is relevant to
            you.
          </Typography>
        </CardContent>
        <CardActions>
          <Button sx={{ width: 1 }}>Personalize feed</Button>
        </CardActions>
      </Card>

      <Paper elevation={3} sx={{ p: 2, mt: 2, borderRadius: "10px" }}>
        <Typography variant="subtitle">Top blogs</Typography>
        {[1, 2, 3].map((topBlogs, index) => {
          return (
            <Card
              variant="outlined"
              sx={{ mt: 2, borderRadius: "10px" }}
              key={"topblog " + (index + 1)}
            >
              <CardActionArea>
                <Box sx={{ display: "flex", flexDirection: "column", p: 2 }}>
                  {/* Icon & name */}
                  <Box sx={{ display: "flex", alignItems: "flex-start" }}>
                    <Avatar {...stringAvatar("Vikas Rohra")} />
                    <Box
                      sx={{ display: "flex", flexDirection: "column", ml: 1 }}
                    >
                      <Typography variant="subtitle1">
                        Introduction to Node.js
                      </Typography>
                      <Typography variant="body2" sx={{ color: "#aaa" }}>
                        <Typography
                          component="span"
                          variant="body2"
                          sx={{ color: "text.primary", display: "inline" }}
                        >
                          Vikas Rohra
                        </Typography>
                        {
                          " - What is Node.js? Node.js is a JavaScript runtime that allows..."
                        }
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </CardActionArea>
            </Card>
          );
        })}
      </Paper>

      <Paper elevation={3} sx={{ p: 2, mt: 2, borderRadius: "10px" }}>
        <Typography variant="subtitle">Bookmarks</Typography>
        <Box sx={{ mt: 2, display: "flex", justifyContent: "center" }}>
          <Typography variant="body2">Nothing yet here</Typography>
        </Box>
      </Paper>

      <Paper elevation={3} sx={{ p: 2, mt: 2, borderRadius: "10px" }}>
        <Box>
          <Typography variant="subtitle" sx={{ fontWeight: "bold" }}>
            External links
          </Typography>
          <Box sx={{ display: "flex", mt: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "#fff", fontSize: "14px" }}
              >
                Feature requests
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "#fff", fontSize: "14px", mt: 1 }}
              >
                APIs
              </Link>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", ml: 5 }}>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "#fff", fontSize: "14px" }}
              >
                Changelog
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "#fff", fontSize: "14px", mt: 1 }}
              >
                The commit podcast
              </Link>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: 3 }}>
          <Typography variant="subtitle" sx={{ fontWeight: "bold" }}>
            Company
          </Typography>
          <Box sx={{ display: "flex", mt: 1 }}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "#fff", fontSize: "14px" }}
              >
                About
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "#fff", fontSize: "14px", mt: 1 }}
              >
                Official blog
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "#fff", fontSize: "14px", mt: 1 }}
              >
                Townhall blog
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "#fff", fontSize: "14px", mt: 1 }}
              >
                OSS ACK
              </Link>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", ml: 5 }}>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "#fff", fontSize: "14px" }}
              >
                Service status
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "#fff", fontSize: "14px", mt: 1 }}
              >
                Press kit
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "#fff", fontSize: "14px", mt: 1 }}
              >
                Carrers
              </Link>
              <Link
                href="#"
                underline="hover"
                sx={{ color: "#fff", fontSize: "14px", mt: 1 }}
              >
                Support
              </Link>
            </Box>
          </Box>
        </Box>
        <Box sx={{ mt: 3, mb: 2 }}>
          <Typography variant="subtitle" sx={{ fontWeight: "bold" }}>
            Connect with us
          </Typography>
          <Box sx={{ display: "flex", mt: 1 }}>
            <Avatar sx={{ cursor: "pointer" }}>
              <LinkedInIcon />
            </Avatar>
            <Avatar sx={{ ml: 2, cursor: "pointer" }}>
              <InstagramIcon />
            </Avatar>
            <Avatar sx={{ ml: 2, cursor: "pointer" }}>
              <XIcon />
            </Avatar>
            <Avatar sx={{ ml: 2, cursor: "pointer" }}>
              <YouTubeIcon />
            </Avatar>
            <Avatar sx={{ ml: 2, cursor: "pointer" }}>
              <RedditIcon />
            </Avatar>
          </Box>
        </Box>
        <Divider />
        <Box sx={{ mt: 2 }}>
          <Typography variant="body2" sx={{ color: "#aaa" }}>
            <Link
              href="#"
              underline="hover"
              sx={{ color: "#fff", fontSize: "14px", mr: 1 }}
            >
              Privacy
            </Link>
            {bull}
            <Link
              href="#"
              underline="hover"
              sx={{ color: "#fff", fontSize: "14px", ml: 1, mr: 1 }}
            >
              Terms
            </Link>
            {bull}
            <Typography component={"span"} variant="body2">
              {" "}
              &copy; 2024 Blogging
            </Typography>
          </Typography>
        </Box>
      </Paper>
    </Box>
  );
};

export default Sidebar;
