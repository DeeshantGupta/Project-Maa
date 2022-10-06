import React from 'react'
import Footer from '../components/jsx/Footer'
import HomeBanner1 from '../components/jsx/HomeBanner1'
import HomeBanner2 from '../components/jsx/HomeBanner2'
import HomeBanner3 from '../components/jsx/HomeBanner3'
import HomeBanner4 from '../components/jsx/HomeBanner4'
import HomeBanner5 from '../components/jsx/HomeBanner5'

const Home = () => {
  return (
    <div>
      <HomeBanner1 />
      <HomeBanner5 />
      <HomeBanner2 />
      <HomeBanner3 />
      <HomeBanner4 />
      <Footer />
    </div>
  )
}

export default Home
