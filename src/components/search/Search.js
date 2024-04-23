import React from 'react'
import './Search.css'
import Menu from '../menu/Menu'
import { useState } from 'react'
import { Link } from 'react-router-dom'



const Search = () => {
  const [sidebar, setSidebar] = useState(true);

  return (
    <div className='Main'>
    <Menu setSidebar={setSidebar}/>
        <Link to='/'><img  className='search-logo' src='https://t3.ftcdn.net/jpg/05/07/46/84/360_F_507468479_HfrpT7CIoYTBZSGRQi7RcWgo98wo3vb7.jpg' alt='logo' /></Link>
        <Link to='/Searchaction' className='search-box-pro'>
          <input type='text' 
          placeholder='Search'
          />
        </Link>
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
        <h2><Link to='/SignUp' style={{textDecoration: 'none'}} >SignIn</Link></h2>
        </div>
    </div>
  )
}

export default Search
