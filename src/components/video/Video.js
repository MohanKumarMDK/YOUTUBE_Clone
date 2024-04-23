import React from 'react'
import './Video.css'
import PlayVideo from '../playvideo/PlayVideo'
import Recommended from '../Recommended/Recommended'
import { useParams } from "react-router-dom"
import Search from '../search/Search'


const Video = () => {
  const { categoryId } = useParams(); 
 const url = window.location.href;
 const parts = url.split("/");
 const videoId = parts[parts.length - 1];
 console.log(videoId);
  return (
    <div>
      <Search />
    <div className='play-container'>
      <PlayVideo videoId={videoId}/>
      <Recommended categoryId={categoryId}/>
    </div>
    </div>
  )
}

export default Video
