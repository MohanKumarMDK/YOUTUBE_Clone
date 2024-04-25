import  { useEffect, useState } from 'react'
import './Recommended.css'
import { API_KEY } from '../../data'
import { value_converter } from '../../data'
import { Link } from 'react-router-dom'


const Recommended = ({categoryId}) => {
    console.log(categoryId);
    const [recom, setRecom] = useState([]);
    const fetData = async() =>{
        const relatedVideos_url=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&videoCategoryId=0&key=${API_KEY}`;
        await fetch(relatedVideos_url).then(res => res.json().then(data=>setRecom(data.items)));
    }
    useEffect(()=>{
        fetData();
    },[])
  return (
    <div className='recomend'>
        {recom?.map((item,index)=>{
            return(
            <Link to={`/video/${item.snippet.categoryId}/${item.id}`} key={index}className='side-video-list' style={{textDecoration: 'none'}}>
            <img src={item.snippet.thumbnails.medium.url} alt=''/>
            <div className='video-info'>
                <h4>{item.snippet.title}</h4>
                <p className='channel-name'>{item.snippet.channelTitle}</p>
                <p className='vid-views'>{ value_converter(item.statistics.viewCount)}Views</p>
            </div>
        </Link>
            )
        })}
        
    </div>
  )
}

export default Recommended