
import './App.css';
import Home from './components/home/Home';
import Video from './components/video/Video';
import { Route, Routes } from 'react-router-dom'
import Searchaction from './components/searchpage/Searchaction';
import SignUp from './SignUp'

function App({sidebar}) {


  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home sidebar={sidebar}/>}/>
        <Route path='Video/:categoryId/:VideoId' element={<Video />} />
        <Route path='Searchaction' element={<Searchaction />} />
        <Route path='/SignUp' element={<SignUp />} />
      </Routes>
    </div>
  );
}

export default App;