import React from "react";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { CheckCircle } from "@mui/icons-material";
const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
    <Card sx={{ width: { xs: "100%", sm: "358px", md: "320px" } }}>
      <Link to={videoId ? `/video/${videoId}` : `/video/${videoId}`}>
        <CardMedia
          sx={{ width: { xs: "100%", sm: "358px", md: "320px" }, height: 180 }}
          image={snippet?.thumbnails?.high?.url}
          title={snippet?.title}
        />
      </Link>
      <CardContent sx={{ backgroundColor: "#212121", height: "100px" }}>
        <Link to={videoId ? `/video/${videoId}` : `/video/${videoId}`}>
          <Typography variant="subtitle1" fontWeight="bold" color="#fff">
            {snippet?.title.slice(0, 60) || "There is no title!"}
          </Typography>
        </Link>
        <Link to={snippet?.channelId ? `/channel/${snippet.channelId}` : "/"}>
          <Typography
            variant="subtitle2"
            fontWeight="bold"
            color="gray"
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            {snippet?.channelTitle || "There is no channel Title!"}
            <CheckCircle sx={{ fontSize: 12, color: "gray", ml: "5px" }} />
          </Typography>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
