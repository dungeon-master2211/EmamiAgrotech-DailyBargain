import React from 'react'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <section className='home'>
            <Link to="/haldia" className='haldiaLink'>Haldia</Link>
            <Link to="/kandla" className='kandlaLink'>Kandla</Link>
            <Link to="/partywise" className='partywiseLink'>Partywise</Link>
            <Link to="/newparty" className='newpartyLink'>New Party</Link>
        </section>
        
    </div>
  )
}

export default Home