import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import {
  Skeleton,
} from "@mui/material";

const FeedCardSkeleton = () => {
  const recordsLength = Array.from({ length: 5 });
  return (
    <>
      {recordsLength.map((feed, index) => {
        return (
          <div>
            {/* Tablet & desktop devices  */}
            <Card
              key={`${feed}-${index}-Skeleton`}
              sx={{
                display: { xs: "none", sm: "flex" },
                alignItems: "center",
                p: 3,
                width: { md: "60%" },
                borderRadius: "10px",
                mb: 2,
              }}
            >
              <Box sx={{ display: "flex", flexDirection: "column", width: '100%' }}>
                {/* Icon & name */}
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <Skeleton variant="circular" width={40} height={40} />
                  <Box sx={{ display: "flex", flexDirection: "column", ml: 1 }}>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      width={150}
                    />
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "0.8rem" }}
                      width={210}
                    />
                  </Box>
                </Box>
                {/* Blog title, description & image */}
                <Box sx={{ display: "flex", mt: 2 }}>
                  {/* Blog title, description */}
                  <Box
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      mr: 2,
                      width: '75%'
                    }}
                  >
                    <Box>
                      <Skeleton />
                    </Box>
                    <Box>
                      <Skeleton height={10} />
                      <Skeleton height={10} />
                      <Skeleton height={10} />
                      <Skeleton height={10} />
                      <Skeleton height={10} />
                      <Skeleton height={10} />
                      <Skeleton height={10} />
                    </Box>
                  </Box>
                  {/* Blog image */}
                  <Box>
                    <Skeleton variant="rectangular" width={200} height={105} />
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
                  <Box>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      width={200}
                    />
                  </Box>
                  {/* Tag, bookmark */}
                  <Box>
                    <Skeleton
                      variant="text"
                      sx={{ fontSize: "1rem" }}
                      width={150}
                    />
                  </Box>
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
                mb: 2,
              }}
            >
              {/* Icon & name */}
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Skeleton variant="circular" width={40} height={40} />
                <Box sx={{ display: "flex", flexDirection: "column", ml: 1 }}>
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "1rem" }}
                    width={150}
                  />
                  <Skeleton
                    variant="text"
                    sx={{ fontSize: "0.8rem" }}
                    width={210}
                  />
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
                    <Skeleton />
                  </Box>
                </Box>
                {/* Blog image */}
                <Box sx={{ mt: 1 }}>
                  <Skeleton
                    variant="rectangular"
                    sx={{ width: "100%", height: "200px" }}
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
                <Box sx={{width: 1/2}}>
                  <Skeleton />
                </Box>
                {/* Bookmark */}
                <Box sx={{width: 1/4}}>
                  <Skeleton />
                </Box>
              </Box>
            </Card>
          </div>
        );
      })}
    </>
  );
};

export default FeedCardSkeleton;
