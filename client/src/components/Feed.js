import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import { Avatar, Chip, Divider, Stack, Typography } from "@mui/material";
import ForumIcon from "@mui/icons-material/Forum";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import InfiniteScroll from "react-infinite-scroll-component";
import { useState } from "react";
import FeedCardSkeleton from "./FeedCardSkeleton";

const FeedCards = () => {
  const [recordsLength, setRecordsLength] = useState(Array.from({ length: 5 }));

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

  const fetchMoreData = () => {
    setTimeout(() => {
      setRecordsLength((prevRecordsLength) =>
        prevRecordsLength.concat(Array.from({ length: 5 }))
      );
    }, 4000);
  };

  return (
    <InfiniteScroll
      dataLength={recordsLength}
      next={fetchMoreData}
      hasMore={true}
      loader={<FeedCardSkeleton />}
    >
      {recordsLength.map((feed, index) => {
        return (
          <>
            {/* Tablet & desktop devices  */}
            <Card
              key={`${feed}-${index}`}
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                p: 3,
                width: { md: "60%" },
                borderRadius: "10px",
                mb: 2
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                {/* Icon & name */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Avatar {...stringAvatar("Vikas Rohra")} />
                  <Box sx={{ display: "flex", flexDirection: "column", ml: 1 }}>
                    <Typography variant="subtitle2">Vikas Rohra</Typography>
                    <Typography variant="body2" sx={{ color: "#aaa" }}>
                      blog.vikas.dev {bull} Nov 13, 2024
                    </Typography>
                  </Box>
                </Box>
                {/* Blog title & description */}
                <Box sx={{ display: "flex", mt: 2 }}>
                  <Box sx={{ display: "flex", flexDirection: "column" }}>
                    <Box>
                      <Typography variant="h6">
                        Introduction to Node.js
                      </Typography>
                    </Box>
                    <Box>
                      <Typography variant="body2" sx={{ color: "#aaa" }}>
                        What is Node.js? Node.js is a JavaScript runtime that
                        allows developers to run JavaScript outside of the web
                        browser. It is built on top of the V8 JavaScript engine,
                        which is the same engine used by the Google Chrome web
                        browser to execute JavaScript...
                      </Typography>
                    </Box>
                  </Box>
                  {/* Blog image */}
                  <Box>
                    <img
                      srcSet={`https://cdn.hashnode.com/res/hashnode/image/upload/v1731435640892/39346b4a-c6c5-472e-b1b9-cc4a5871fc5c.jpeg?w=200&h=105&fit=crop&auto=format&dpr=2 2x`}
                      src={`https://cdn.hashnode.com/res/hashnode/image/upload/v1731435640892/39346b4a-c6c5-472e-b1b9-cc4a5871fc5c.jpeg?w=200&h=105&fit=crop&auto=format&dpr=2 2x`}
                      alt={"Blog"}
                      // sx={{ objectFit: "cover", borderRadius: "10px" }}
                      loading="lazy"
                    />
                  </Box>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    mt: 2,
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
                  {/* Tag, bookmark */}
                  <Stack
                    direction="row"
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={1}
                    sx={{alignItems: "center" }}
                  >
                    <Box>
                      <Chip
                        label="MERN Stack"
                        component="a"
                        href="/"
                        clickable
                        size="small"
                      />
                    </Box>
                    <Box>
                      <BookmarkBorderIcon sx={{ fontSize: "medium" }} />
                    </Box>
                  </Stack>
                </Box>
              </Box>
            </Card>

            {/* Mobile devices */}
            <Card
              key={`${feed}-${index}`}
              sx={{
                display: { xs: "flex", flexDirection: "column", sm: "none" },
                p: 3,
                borderRadius: "10px",
                mb: 2
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
              {/* Blog title & description */}
              <Box
                sx={{
                  display: "flex",
                  flexDirection: { xs: "column", sm: "none" },
                  mt: 1,
                }}
              >
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
          </>
        );
      })}
    </InfiniteScroll>
  );
};

const Feed = () => {
  return (
    <div>
      <FeedCards />
    </div>
  );
};

export default Feed;
