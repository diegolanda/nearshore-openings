import React, { useState, useEffect } from 'react'
import { Link } from 'react-scroll'
import { useTranslation } from 'react-i18next'

const MenuItems = ['hiring', 'interviewing', 'benefits', 'opening']

function Header() {
  const { t } = useTranslation()

  const [top, setTop] = useState(true)
  const [active, setActive] = useState('home')

  // detect whether user has scrolled the page down by 10px
  useEffect(() => {
    const scrollHandler = () => {
      window.pageYOffset > 10 ? setTop(false) : setTop(true)
    }
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [top])

  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out ${
        !top && 'bg-white blur shadow-lg'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="flex-shrink-0 mr-4">
            {/* Logo */}
            <Link
              to="home"
              className="max-w-6xl mx-auto px-1 sm:px-1 text-green-500 font-black"
            >
              {t('header.logo')}
            </Link>
          </div>
          {/* Site navigation */}
          <nav className="flex flex-grow">
            <ul className="flex flex-grow justify-end flex-wrap items-center">
              {MenuItems.map((item) => (
                <li
                  className={`cursor-pointer ${active === item && 'border-b-4 border-green-500'}`}
                >
                  <Link
                    to={item}
                    onClick={() => setActive(item)}
                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    {t(`header.${item}`)}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header
