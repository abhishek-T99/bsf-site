import React from 'react'
import '../Styles/Home.css'
import Header from './Header'
import HomeContent from './HomeContent'

function Home() {
  return (
      <div className='home'>
          <div className='home__bg'>
              {/* Header Component */}
              <Header />
              {/* HomeContent Component */}
              <HomeContent />
          </div>
      </div>
  )
}

export default Home