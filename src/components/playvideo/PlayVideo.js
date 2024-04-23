import React,{useEffect, useState} from 'react'
import './PlayVideo.css'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import user_profile from '../../assets/user_profile.jpg'
import { API_KEY, value_converter } from '../../data'
import moment from 'moment'


const PlayVideo = ({videoId} ) => {
  const url = window.location.href;
 const parts = url.split("/");
 const recommendId = parts[parts.length - 1];
 console.log(recommendId);


 const [apiData, setApiData] = useState(null);


const fetchVideoData= async() => {
  //fetching video data
  const videoDetails_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${videoId}&key=${API_KEY}`;
  await fetch(videoDetails_url).then(res => res.json()).then(data => setApiData(data.items[0]));
}


useEffect (() =>{
  fetchVideoData();
},[recommendId])

  return (
    <div className='play-video'>
        <iframe src={`https://www.youtube.com/embed/${videoId}?autoplay=1`} title="Madara AMV  /  See me fall" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

        <h2>{apiData?apiData.snippet.title:"Title Here"}</h2>
        <div className='play-video-info'>
          <p>{apiData?value_converter(apiData.statistics.viewCount): "15K"} Views &bull; {apiData?moment(apiData.snippet.publishedAt).fromNow():""} </p>
          <div>
            <span><img src={like} alt=''/>{apiData?value_converter(apiData.statistics.likeCount):155}</span>
            <span><img src={dislike} alt=''/></span>
            <span><img src={share} alt=''/>share</span>
            <span><img src={save} alt=''/>save</span>
          </div>
        </div>
        <hr/>
        <div className='channel-name'>
          <img src={apiData?apiData.snippet.thumbnails.default.url:""} alt='' />
          <div>
            <p>{apiData?apiData.snippet.channelTitle:"Balachander.in"}</p>
          </div>
          <button>Subscribe</button>
          
        </div>
        <div className='video-dis'>
          <p>{apiData?apiData.snippet.description.slice(0,350):"Description"}</p>
          <hr />
          <h4>{apiData?apiData.statistics.commentCount:102}Comments</h4>
          <div className='comment'>
            <img src={user_profile} alt=''/>
          </div>
          <h3> Saro <span>1 day ago</span></h3>
          <p>Share More Videos</p>
          <div className='commet-action'>
            <img src={like} alt='' />
            <span>505</span>
            <img src={dislike} alt='' />
            <span>3</span>
          </div>
          <div className='comment'>
            <img src={user_profile} alt=''/>
          </div>
          <h3> Vel <span>1 day ago</span></h3>
          <p>Good</p>
          <div className='commet-action'>
            <img src={like} alt='' />
            <span>105</span>
            <img src={dislike} alt='' />
            <span>5</span>
          </div>
        </div>
    </div>
  )
}

export default PlayVideo