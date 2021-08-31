import React, { useState, useRef, useEffect } from 'react'
import Transition from '../utils/Transition.js'
import { useTranslation } from 'react-i18next'
import CareerOppornutity from './CareerOppornutity'
import axios from 'axios'

const URL = 'https://internal-api.unosquare.com/elp/public/career'

function Features() {
  const { t } = useTranslation()

  const [tab, setTab] = useState(1)
  const [oportunities, setOpportunities] = useState([])
  const [filteredOportunities, setFilteredOportunities] = useState([])
  const [search, setSearch] = useState('')
  const [total, setTotal] = useState(0)

  const tabs = useRef(null)

  const getData = async () => {
    try {
      const { data } = await axios.get(URL)
      return data
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getData().then((res) => {
      setOpportunities(res)
      setTotal(res.length)
    })
  }, [])

  let filter = oportunities
  if (search.length > 0) {
    filter = oportunities.filter((item) => {
      return (
        item.MainSkill.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        item.Seniority.toLowerCase().indexOf(search.toLowerCase()) !== -1 ||
        item.JobTitle.toLowerCase().indexOf(search.toLowerCase()) !== -1
      )
    })
  }

  const careerOpportunities = filter.map((oportunity) => (
    <CareerOppornutity data={oportunity} />
  ))

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="absolute left-0 right-0 m-auto w-px p-px h-20 bg-gray-200 transform -translate-y-1/2"></div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-12 md:pt-20">
          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="h3 mb-3 text-green-500">
                  {t('openings.title')}
                </h3>
                <h1 className="h1 mb-6 ">{t('openings.short_description')}</h1>
                <p className="text-xl text-gray-600">{`${t(
                  'openings.descriptionFirstPart',
                )} ${total} ${t('openings.descriptionSecondPart')}`}</p>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none  md:w-full mx-auto md:col-span-7 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                <Transition
                  show={tab === 1}
                  appear={true}
                  className="w-full"
                  enter="transition ease-in-out duration-700 transform order-first"
                  enterStart="opacity-0 translate-y-16"
                  enterEnd="opacity-100 translate-y-0"
                  leave="transition ease-in-out duration-300 transform absolute"
                  leaveStart="opacity-100 translate-y-0"
                  leaveEnd="opacity-0 -translate-y-16"
                >
                  <div className="relative inline-flex flex-col">
                    <img
                      className="md:max-w-none mx-auto rounded"
                      src={require('../imagesSvg/openings.svg').default}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                  </div>
                </Transition>
              </div>
            </div>
          </div>
          <div>
            <input
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              value={search}
              placeholder="Search..."
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="relative flex flex-col mx-auto grid gap-4 lg:grid-cols-3 m-1.5 ">
            {oportunities.length && careerOpportunities}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
