
import './Scrollbar.css'

const Scrollbar = ({ category, setCategory }) => {


  return (
    <section className='scroll'>
    <div className='scroll-bar'>
        <button className="one" onClick={() => setCategory(0)}>All</button>
        <button className="one"onClick={() => setCategory(24)}>Entertainment</button>
        <button className="one"onClick={() => setCategory(22)}>Blogs</button>
        <button className="one"/* onClick={() => setCategory()} */>Sports</button>
        <button className="one"/* onClick={() => setCategory()} */>Technology</button>
        <button className="one"/* onClick={() => setCategory()} */>Gaming</button>
        <button className="one"/* onClick={() => setCategory()} */>Music</button>
        <button className="one"/* onClick={() => setCategory()} */>Flim/Animation</button>
        <button className="one"/* onClick={() => setCategory()} */>Pets</button>
        <button className="one"/* onClick={() => setCategory()} */>Shorts</button>
        <button className="one"/* onClick={() => setCategory()} */>News</button>
        <button className="one"/* onClick={() => setCategory()} */>Science/Technology</button>
        <button className="one"/* onClick={() => setCategory()} */>Vehicles</button>
        <button className="one"/* onClick={() => setCategory()} */>NewToYou</button>
    </div>
    </section>
  )
}

export default Scrollbar