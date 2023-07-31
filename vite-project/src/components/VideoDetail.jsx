import { Box, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player/youtube";
import { Link, useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import Loader from "./Loader";
import { CheckCircle } from "@mui/icons-material";
const VideoDetail = () => {
  const [videoDetail, setVideoDetail] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`).then((data) =>
      setVideoDetail(data.items[0])
    );
  }, [id]);

  if (!videoDetail?.snippet) return <Loader />;
  const {
    snippet: { channelId, channelTitle, title },
    statistics: { viewCount, likeCount },
  } = videoDetail;
  console.log(videoDetail);
  return (
    <Box minHeight="95vh">
      <Stack sx={{ flexDirection: { xs: "row", md: "column" } }}>
        <Box sx={{ width: "100%", backgroundColor: "black", flex: 1 }}>
          <ReactPlayer
            url={`https://www.youtube.com/watch?v=${id}`}
            controls
            playing
            width="100%"
            height="77vh"
          />
          <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
            {title}
          </Typography>
          <Stack
            direction="row"
            justifyContent="space-between"
            sx={{
              color: "#fff",
            }}
            py={1}
            px={2}
          >
            <Link to={`channel/${channelId}`}>
              <Typography variant="subtitle1" color="#fff">
                {channelTitle}{" "}
                <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
              </Typography>
            </Link>
            <Stack direction="row" gap="20px" alignItems="center">
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(viewCount).toLocaleString()} views
              </Typography>
              <Typography variant="body1" sx={{ opacity: 0.7 }}>
                {parseInt(likeCount).toLocaleString()} likes
              </Typography>
            </Stack>
          </Stack>
        </Box>
        <Box></Box>
      </Stack>
    </Box>
  );
};

export default VideoDetail;
