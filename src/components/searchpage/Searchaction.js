import React, { useState } from 'react';
import PlayVideo from '../playvideo/PlayVideo';
import axios from 'axios';
import { API_KEY } from '../../data';
import './Searchaction.css'
import Menu from'../menu/Menu'
import { Link } from 'react-router-dom';


const Searchaction = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);

  const handleChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: searchTerm,
          part: 'snippet',
          maxResults: 10,
          type: 'video',
          key: `${API_KEY}`,
        },
      });
      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleVideoClick = (videoId) => {
    setSelectedVideoId(videoId);
  };

  return (
<div>
<div className='Main'>
  <Menu />
        <Link to='/' className='search-logo'><img  src='https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg' alt='logo' /></Link>
        <div className='search-box-pro'>
        <form  onSubmit={handleSubmit}>
          <input  
          type="text"  
          placeholder='Search' 
          autoFocus value={searchTerm} 
          onChange={handleChange} />
      </form>
      </div>
        <div className='micro-img'> 
        <img   className='micro' src='Image/micro.png' alt='micro' />
        <div className='create-img'> 
        <img   className='create' src='Image/upload.png' alt='micro' />
        </div>
        <div className='bell-img'>
        <img  className='bell' src='Image/bell.png' alt='Bell'/>
        </div>
        <div className='log-txt'> 
        <h2><Link to='/SignUp' style={{textDecoration: 'none'}} >Sign In</Link></h2>
        </div>
    </div>
    </div> 
<br></br>

<div>
{selectedVideoId && <PlayVideo videoId={selectedVideoId} />}
  {videos.map((item) => (
    <div className='vid-main' key={item.id.videoId} onClick={() => handleVideoClick(item.id.videoId)}>
      <img src={item.snippet.thumbnails.default.url} width={450} height={250} alt='thumbnail' />
      <p>{item.snippet.title}</p>
      <br></br>
    </div>
  ))}
   </div>
   </div>
 
);
}

export default Searchaction  






/*------ This is the Suggetion Code it consist of 20% your quata per request  so use this code when you neaded-----*/

/*
import React, { useState } from 'react';
import PlayVideo from '../playvideo/PlayVideo';
import axios from 'axios';
import { API_KEY } from '../../data';
import './Searchaction.css'
import Menu from'../menu/Menu'
import { Link } from 'react-router-dom';

const Searchaction = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [videos, setVideos] = useState([]);
  const [selectedVideoId, setSelectedVideoId] = useState(null);
  const [suggestions, setSuggestions] = useState([]);

  const handleChange = async (event) => {
    setSearchTerm(event.target.value);
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: event.target.value,
          part: 'snippet',
          maxResults: 10, 
          type: 'video',
          key: `${API_KEY}`,
        },
      });
      setSuggestions(response.data.items.map(item => ({
        videoId: item.id.videoId,
        title: item.snippet.title
      })));
    } catch (error) {
      console.error('Error fetching suggestions:', error);
    }
  };

  const handleSuggestionClick = (videoId) => {
    setSelectedVideoId(videoId);
    setSearchTerm(''); 
    setSuggestions([]); 
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
        params: {
          q: searchTerm,
          part: 'snippet',
          maxResults: 10,
          type: 'video',
          key: `${API_KEY}`,
        },
      });
      setVideos(response.data.items);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleVideoClick = (videoId) => {
    setSelectedVideoId(videoId);
  };

  return (
 <div>
<div className='Main'>
    <Menu />
        <Link to='/'><img  className='search-logo' src='https://t3.ftcdn.net/jpg/04/03/98/64/360_F_403986499_hB7zfgOXezReA0sKkxl34RoT9TbNkbpH.jpg' alt='logo' /></Link>
        <div className='search-box-action'>
        <form  onSubmit={handleSubmit}>
          <input  
          type="text"  
          placeholder='Search Here' 
          autoFocus value={searchTerm} 
          onChange={handleChange} />
      </form>
      </div>
        <div className='micro-img'> 
        <img   className='micro' src='Image/micro.png' alt='micro' />
        <div className='create-img'> 
        <img   className='create' src='Image/upload.png' alt='micro' />
        </div>
        <div className='bell-img'>
        <img  className='bell' src='Image/bell.png' alt='Bell'/>
        </div>
        </div> 
        <div className='log-txt'> 
        <h2><Link to='/SignUp' style={{textDecoration: 'none'}} >Sign In</Link></h2>
        </div>
    </div>
<br></br>

      <div>
        {suggestions.map((item) => (
          <div key={item.videoId} onClick={() => handleSuggestionClick(item.videoId)}>
            <p>{item.title}</p>
          </div>
        ))}
         {selectedVideoId && <PlayVideo videoId={selectedVideoId} />}
        {videos.map((item) => (
          <div className='vid-main' key={item.id.videoId} onClick={() => handleVideoClick(item.id.videoId)}>
            <img src={item.snippet.thumbnails.default.url} alt="Video Thumbnail" width={500} height={250} />
            <p>{item.snippet.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

 export default Searchaction; */
