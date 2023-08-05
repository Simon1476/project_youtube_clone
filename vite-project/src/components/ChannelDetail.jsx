import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "./../utils/fetchFromAPI";
import ChannelCard from "./ChannelCard";
import Videos from "./Videos";

const ChannelDetail = () => {
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  console.log(videos);

  return (
    <Box
      minHeight="95vh"
      sx={{
        backgroundColor: "black",
      }}
    >
      <Box>
        <div
          style={{
            background:
              "linear-gradient(90deg, rgba(2, 0, 36, 1) 0%, rgba(2, 1, 41, 1) 0%, rgba(9, 9, 121, 1) 35%, rgba(0, 212, 255, 1) 100%)",
            height: "300px",
            zIndex: 10,
          }}
        ></div>
        <ChannelCard channelDetail={channelDetail} marginTop={"-100px"} />
      </Box>
      <Box display="flex" p="2">
        <Box sx={{ mr: { sm: "125px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
