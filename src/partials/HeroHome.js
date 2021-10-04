import React from 'react'
import { useTranslation } from 'react-i18next'

function HeroHome() {
  const { t } = useTranslation()

  return (
    <section className="relative">
      {/* Illustration behind hero content */}
      <div
        className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none"
        aria-hidden="true"
      >
        <svg
          width="1360"
          height="578"
          viewBox="0 0 1360 578"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              x1="50%"
              y1="0%"
              x2="50%"
              y2="100%"
              id="illustration-01"
            >
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Hero content */}
        <div className=" text-center pt-32 pb-12 md:pt-30 md:pb-20">
          {/* Section header */}

          <h1
            className="lg:text-6xl md:text-5xl sm:text-4xl sm font-extrabold"
            data-aos="zoom-y-out"
          >
            {t('home.title')}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-800 to-teal-400">
              {t('home.short_description')}
            </span>
          </h1>
        </div>
      </div>
    </section>
  )
}

export default HeroHome
