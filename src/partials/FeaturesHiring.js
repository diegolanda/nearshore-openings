import React, { useState, useRef, useEffect } from 'react'
import Transition from '../utils/Transition.js'
import { useTranslation } from 'react-i18next'

function Features() {
  const { t } = useTranslation()

  const [tab] = useState(1)

  const tabs = useRef(null)

  const heightFix = () => {
    if (tabs.current.children[tab]) {
      tabs.current.style.height =
        tabs.current.children[tab - 1].offsetHeight + 'px'
    }
  }

  useEffect(() => {
    heightFix()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab])

  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 bg-gray-100 pointer-events-none mb-16"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="lg:pt-24 md:pt-24 sm:pt-24">
          {/* Section content */}
          <div className="md:grid md:grid-cols-12 md:gap-6">
            {/* Content */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-7 lg:col-span-6 md:mt-6"
              data-aos="fade-right"
            >
              <div className="md:pr-4 lg:pr-12 xl:pr-16 mb-8">
                <h3 className="lg:text-3xl md:text-2xl sm:text-xl font-bold text mb-3 text-green-500 pt-0">{t('hiring.title')}</h3>
                <h1 className="lg:text-5xl md:text-4xl sm:text-3xl font-bold mb-4 leading-none">{t('hiring.short_description')}</h1>
                <p className="text-xl md:text-lg sm:text-base text-gray-600 text-justify">
                  {t('hiring.description')}
                </p>
              </div>
            </div>

            {/* Tabs items */}
            <div
              className="max-w-xl md:max-w-none md:w-full mx-auto md:col-span-5 lg:col-span-6 mb-8 md:mb-0 md:order-1"
              data-aos="zoom-y-out"
              ref={tabs}
            >
              <div className="relative flex flex-col text-center lg:text-right">
                {/* Item 1 */}
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
                    <img
                      className="md:flex lg:pt-0 md:pt-10 mx-auto rounded"
                      src={require('../imagesSvg/hiring.svg').default}
                      width="500"
                      height="462"
                      alt="Features bg"
                    />
                  
                </Transition>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features
