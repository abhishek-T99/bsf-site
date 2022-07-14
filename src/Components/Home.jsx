import React from 'react'
import '../Styles/Home.css'
import Header from './Header'

function Home() {
  return (
      <div className='home'>
          <div className='home__bg'>
              {/* Header Component */}
              <Header />
              {/* HomeContent Component */}
              

          </div>
      </div>
  )
}

export default Home