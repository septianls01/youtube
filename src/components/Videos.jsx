import React from 'react';
import { Stack, Box } from '@mui/material';

import ChannelCard from './ChannelCard';
import VideoCard from './VideoCard';

const Videos = ({ videos }) => {
  // if(!videos?.length) return <Loader />;
  console.log(videos);
  return <div>fheqi</div>;
  // (
  //   <Stack direction="row" flexWrap="wrap" justifyContent="start" alignItems="start" gap={2}>
  //     {videos &&
  //       videos.map((item, idx) => (
  //         <Box key={idx}>
  //           {item.id.videoId && <VideoCard video={item} />}
  //           {item.id.channelId && <ChannelCard channelDetail={item} />}
  //         </Box>
  //       ))}
  //   </Stack>
  // );
};

export default Videos;
