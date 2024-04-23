import React, { useState } from 'react'
import './Home.css'
import Feed from '../feed/Feed'
import Scrollbar from '../scroll/Scrollbar'
import Search from '../search/Search'


const Home = ({sidebar}) => {

  const [category, setCategory] = useState(0);

  return (
    <>
    <Search />
    <Scrollbar sidebar={sidebar} category={category} setCategory={setCategory}/>
    <div className={`container ${sidebar}`}>
      <Feed category={category}/>
    </div>
    </>
  )
}

export default Home