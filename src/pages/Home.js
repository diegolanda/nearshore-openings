import React, { useEffect, useState } from 'react'
import { withRouter } from 'react-router-dom'
import { Element, scroller } from 'react-scroll'

import Header from '../partials/Header'
import HeroHome from '../partials/HeroHome'
import FeaturesHiring from '../partials/FeaturesHiring'
import FeaturesInterviewing from '../partials/FeaturesInterviewing'
import FeaturesOpenings from '../partials/FeaturesOpenings'
import FeaturesBlocks from '../partials/FeaturesBlocks'
import Footer from '../partials/Footer'

function Home({ location, history }) {
  const [search, setSearch] = useState('')

  useEffect(() => {
    if (location && location?.search?.includes('search')) {
      const searchValue = new URLSearchParams(location.search).get('search')
      setSearch(searchValue)
      scroller.scrollTo('search-openings', {
        smooth: true,
        offset: 150, // Scrolls to element + 50 pixels down the page
      })
    }
  },[search, location])

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      <Header />
      <main className="flex-grow">
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

        <Element name="openings">
          <FeaturesOpenings
            search={search}
            onChange={(e) => {
              setSearch(e.target.value)
              history.push(`/?search=${e.target.value}`)
            }}
          />
        </Element>
      </main>
      <Footer />
    </div>
  )
}

export default withRouter(Home)
