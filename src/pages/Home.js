import React from 'react'

import Header from '../partials/Header'
import HeroHome from '../partials/HeroHome'
import FeaturesHiring from '../partials/FeaturesHiring'
import FeaturesInterviewing from '../partials/FeaturesInterviewing'
import FeaturesOpenings from '../partials/FeaturesOpenings'
import FeaturesBlocks from '../partials/FeaturesBlocks'
import Footer from '../partials/Footer'
import { Element } from 'react-scroll'

function Home() {
  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/*  Site header */}
      <Header />

      {/*  Page content */}
      <main className="flex-grow">
        {/*  Page sections */}
       
        <Element name="home">
        <HeroHome />
        </Element>
        <Element name="hiring">
          <FeaturesHiring />
        </Element>
        <Element name="interviewing">
          <FeaturesInterviewing />
        </Element>
        <Element name="benefits">
          <FeaturesBlocks />
        </Element>
        <Element name="opening">
          <FeaturesOpenings />
        </Element>
      </main>

      {/*  Site footer */}
      <Footer />
    </div>
  )
}

export default Home
