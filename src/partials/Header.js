import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const MenuItems = ['hiring', 'interviewing', 'benefits', 'openings']

function Header() {
  const { t } = useTranslation()

  const [top, setTop] = useState(true)
  const [active, setActive] = useState('home')
  const [hidden, setHidden] = useState(true)

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <nav
      className={`mx-auto mt-s fixed w-full z-30 flex items-center justify-between flex-wrap p-6 ${
        !top && 'bg-white blur shadow-lg'
      }`}
    >
      <div className="flex-grow items-center flex-shrink-0 ">
        <Link
          to="home"
          onClick={() => setHidden(true)}
          className="cursor-pointer max-w-6xl mx-auto px-1 sm:px-1 text-green-500 font-black"
        >
          {t('header.logo')}
        </Link>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-4  py-2 border rounded mr-4 border-green-500  hover:border-green-900 text-green-600 hover:text-green-900"
          onClick={() => setHidden(!hidden)}
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        className={`w-full lg:flex lg:w-auto  font-bold text-right ${
          hidden && 'hidden'
        }`}
      >
        <div>
          {MenuItems.map((item, key) => (
            <Link
              to={item}
              key={key}
              onClick={() => {
                setActive(item)
                setHidden(true)
              }}
              className={`lg:mx-5 block mt-0 lg:inline-block lg:mt-0 text-green-600 hover:text-green-900 mr-4 cursor-pointer ${
                active === item && 'lg:border-b-4 lg:border-green-500'
              }`}
            >
              {t(`header.${item}`)}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}

export default Header
