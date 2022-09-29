// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import { Box } from '@mui/material';
// import Navbar from './components/Navbar';
// import Feed from './components/Feed';
// import VideoDetail from './components/VideoDetail';
// import ChannelDetail from './components/ChannelDetail';
// import SearchFeed from './components/SearchFeed';

// const App = () => {
//   <BrowserRouter>
//     <Box sx={{ backgroundColor: '#000' }}>
//       <Navbar />
//       <Routes>
//         <Route exact path="/" element={<Feed />} />
//         <Route path="/video/:id" element={<VideoDetail />} />
//         <Route path="/channel/:id" element={<ChannelDetail />} />
//         <Route path="/search/:searchTerm" element={<SearchFeed />} />
//       </Routes>
//     </Box>
//   </BrowserRouter>;
// };

// export default App;

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Box } from '@mui/material';

import Navbar from './components/Navbar';
import Feed from './components/Feed';
import VideoDetail from './components/VideoDetail';
import ChannelDetail from './components/ChannelDetail';
import SearchFeed from './components/SearchFeed';

const App = () => (
  <BrowserRouter>
    {/* Prop sx memungkinkan Anda bekerja dengan superset CSS yang mengemas semua fungsi gaya yang diekspos di @mui/system. */}
    <Box sx={{ backgroundColor: '#000' }}>
      <Navbar />
      <Routes>
        {/* The exact param berperan ketika Anda memiliki beberapa jalur yang memiliki nama yang mirip */}
        <Route exact path="/" element={<Feed />} />
        <Route path="/video/:id" element={<VideoDetail />} />
        <Route path="/channel/:id" element={<ChannelDetail />} />
        <Route path="/search/:searchTerm" element={<SearchFeed />} />
      </Routes>
    </Box>
  </BrowserRouter>
);

export default App;
