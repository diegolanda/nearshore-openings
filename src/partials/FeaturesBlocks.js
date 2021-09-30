import React from 'react'
import { useTranslation } from 'react-i18next'

function FeaturesBlocks() {
  const { t } = useTranslation()
  return (
    <section className="relative">
      {/* Section background (needs .relative class on parent and next sibling elements) */}
      <div
        className="absolute inset-0 top-1/2 md:mt-24 lg:mt-0 bg-gray-900 pointer-events-none"
        aria-hidden="true"
      ></div>
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
        <div className="py-12 md:py-20">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h3 className="lg:text-3xl md:text-2xl sm:text-xl font-bold text mb-3 text-green-500">{t('benefits.title')}</h3> 
            </div>
          {/* Items */}
          <div className="max-w-sm mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3 items-start md:max-w-2xl lg:max-w-none">
            {/* 1st item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded-xl h-72">
              <img
                class="w-40 h-40 md:rou rounded-full mx-auto"
                src={require('../imagesSvg/payment.svg').default}
                alt=""
                width="384"
                height="512"
              ></img>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {t('benefits.payroll.title')}
              </h4>
              <p className="text-gray-600 text-center">
                {t('benefits.payroll.description')}.
              </p>
            </div>

            {/* 2nd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded-xl h-72">
              <img
                class="w-40 h-40 md:rou rounded-full mx-auto"
                src={require('../imagesSvg/remote.svg').default}
                alt=""
                width="384"
                height="512"
              ></img>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {t('benefits.remoteFriendly.title')}
              </h4>
              <p className="text-gray-600 text-center">
                {t('benefits.remoteFriendly.description')}
              </p>
            </div>

            {/* 3rd item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded-xl h-72 ">
              <img
                class="w-40 h-40 md:rou rounded-full mx-auto"
                src={require('../imagesSvg/learning.svg').default}
                alt=""
                width="384"
                height="512"
              ></img>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {t('benefits.training.title')}
              </h4>
              <p className="text-gray-600 text-center">
                {t('benefits.training.description')}
              </p>
            </div>

            {/* 4th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded-xl h-72">
              <img
                class="w-40 h-40 md:rou rounded-full mx-auto"
                src={require('../imagesSvg/medical.svg').default}
                alt=""
                width="384"
                height="512"
              ></img>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {t('benefits.medicalInsurance.title')}
              </h4>
              <p className="text-gray-600 text-center">
                {t('benefits.medicalInsurance.description')}
              </p>
            </div>

            {/* 5th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded-xl h-72">
              <img
                class="w-40 h-40 md:rou rounded-full mx-auto"
                src={require('../imagesSvg/meditation.svg').default}
                alt=""
                width="500"
                height="512"
              ></img>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {t('benefits.flexibleHours.title')}
              </h4>
              <p className="text-gray-600 text-center">
                {t('benefits.flexibleHours.description')}
              </p>
            </div>

            {/* 6th item */}
            <div className="relative flex flex-col items-center p-6 bg-white rounded-xl h-72">
              <img
                class="w-40 h-40 md:rou rounded-full mx-auto"
                src={require('../imagesSvg/travel.svg').default}
                alt=""
                width="384"
                height="512"
              ></img>
              <h4 className="text-xl font-bold leading-snug tracking-tight mb-1">
                {t('benefits.events.title')}
              </h4>
              <p className="text-gray-600 text-center">
                {t('benefits.events.description')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturesBlocks
