import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logo.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import ThemeSwitch from './ThemeSwitch'

const LayoutWrapper = ({ children }) => {
  return (
    <SectionContainer>
      <div className="flex h-screen flex-col justify-between">
        <header className="flex items-center justify-between py-20">
          <div>
            <Link href="/" aria-label={siteMetadata.headerTitle}>
              <div className="flex items-center justify-between">
                <div className="mr-10">
                  <svg
                    width="78.6"
                    height="75.3"
                    viewBox="0 0 486 453"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="242.856" cy="121.298" r="98.7497" fill="#830000" />
                    <circle cx="121.774" cy="330.91" r="121.082" fill="url(#paint0_radial_8_26)" />
                    <circle cx="364.116" cy="330.91" r="121.259" fill="url(#paint1_radial_8_26)" />
                    <circle cx="242.856" cy="121.298" r="121.082" fill="url(#paint2_radial_8_26)" />
                    <g filter="url(#filter0_b_8_26)" className="backdrop-circle-filter">
                      <circle
                        cx="363.827"
                        cy="153.851"
                        r="88.5296"
                        transform="rotate(-180 363.827 153.851)"
                        fill="#FFF615"
                        fillOpacity="0.8"
                      />
                      <circle
                        cx="363.827"
                        cy="153.851"
                        r="88.5296"
                        transform="rotate(-180 363.827 153.851)"
                        fill="url(#paint3_radial_8_26)"
                        fillOpacity="0.8"
                      />
                    </g>
                    <g filter="url(#filter1_b_8_26)" className="backdrop-circle-filter">
                      <circle
                        cx="121.774"
                        cy="153.851"
                        r="88.5296"
                        transform="rotate(-180 121.774 153.851)"
                        fill="#FFF615"
                        fillOpacity="0.8"
                      />
                    </g>
                    <g filter="url(#filter2_b_8_26)" className="backdrop-circle-filter">
                      <circle
                        cx="242.768"
                        cy="363.91"
                        r="88.5296"
                        transform="rotate(-180 242.768 363.91)"
                        fill="#FFF615"
                        fillOpacity="0.8"
                      />
                      <circle
                        cx="242.768"
                        cy="363.91"
                        r="88.5296"
                        transform="rotate(-180 242.768 363.91)"
                        fill="url(#paint4_radial_8_26)"
                        fillOpacity="0.8"
                      />
                    </g>
                    <g filter="url(#filter3_b_8_26)" className="backdrop-circle-filter">
                      <circle
                        cx="243.034"
                        cy="229.193"
                        r="139.713"
                        transform="rotate(-180 243.034 229.193)"
                        fill="url(#paint5_radial_8_26)"
                        fillOpacity="0.95"
                      />
                      <circle
                        cx="243.034"
                        cy="229.193"
                        r="138.713"
                        transform="rotate(-180 243.034 229.193)"
                        stroke="black"
                        strokeOpacity="0.1"
                        strokeWidth="2"
                      />
                    </g>
                    <circle
                      cx="243.034"
                      cy="229.193"
                      r="139.713"
                      transform="rotate(-180 243.034 229.193)"
                      fill="url(#paint6_radial_8_26)"
                      fillOpacity="0.8"
                      className="backdrop-circle-filter"
                    />
                    <g filter="url(#filter4_b_8_26)">
                      <path
                        d="M242.979 288.287C227.04 288.287 188.168 231.09 188.168 204.179C188.168 177.269 297.789 177.248 297.789 204.179C297.789 231.111 258.917 288.287 242.979 288.287Z"
                        fill="url(#paint7_radial_8_26)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_b_8_26"
                        x="245.297"
                        y="35.3213"
                        width="237.059"
                        height="237.059"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        {/* <!-- <feGaussianBlur in="BackgroundImage" stdDeviation="15" /> --> */}
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_8_26"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_8_26"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter1_b_8_26"
                        x="3.24463"
                        y="35.3212"
                        width="237.059"
                        height="237.059"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        {/* <!-- <feGaussianBlur in="BackgroundImage" stdDeviation="15" /> --> */}
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_8_26"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_8_26"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter2_b_8_26"
                        x="124.238"
                        y="245.381"
                        width="237.059"
                        height="237.059"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        {/* <!-- <feGaussianBlur in="BackgroundImage" stdDeviation="15" /> --> */}
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_8_26"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_8_26"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter3_b_8_26"
                        x="73.3207"
                        y="59.48"
                        width="339.426"
                        height="339.426"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        {/* <!-- <feGaussianBlur in="BackgroundImage" stdDeviation="15" /> --> */}
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_8_26"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_8_26"
                          result="shape"
                        />
                      </filter>
                      <filter
                        id="filter4_b_8_26"
                        x="184.168"
                        y="179.989"
                        width="117.621"
                        height="112.299"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        {/* <!-- <feGaussianBlur in="BackgroundImage" stdDeviation="2" /> --> */}
                        <feComposite
                          in2="SourceAlpha"
                          operator="in"
                          result="effect1_backgroundBlur_8_26"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_backgroundBlur_8_26"
                          result="shape"
                        />
                      </filter>
                      <radialGradient
                        id="paint0_radial_8_26"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(121.774 330.91) rotate(90) scale(121.082)"
                      >
                        <stop stopColor="#F0AD00" />
                        <stop offset="1" stopColor="#D50000" />
                      </radialGradient>
                      <radialGradient
                        id="paint1_radial_8_26"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(364.116 330.91) rotate(90) scale(121.259)"
                      >
                        <stop stopColor="#F0AD00" />
                        <stop offset="1" stopColor="#D50000" />
                      </radialGradient>
                      <radialGradient
                        id="paint2_radial_8_26"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(242.856 121.298) rotate(90) scale(121.082)"
                      >
                        <stop stopColor="#F0AD00" />
                        <stop offset="1" stopColor="#D50000" />
                      </radialGradient>
                      <radialGradient
                        id="paint3_radial_8_26"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(408.33 292.533) rotate(-129.514) scale(128.956)"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient
                        id="paint4_radial_8_26"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(109.576 396.749) rotate(7.36958) scale(287.773)"
                      >
                        <stop stopColor="white" />
                        <stop offset="0.553205" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient
                        id="paint5_radial_8_26"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(243.034 229.193) rotate(90) scale(139.713)"
                      >
                        <stop stopColor="#00FF38" stopOpacity="0.84" />
                        <stop offset="1" stopColor="#28FF58" />
                      </radialGradient>
                      <radialGradient
                        id="paint6_radial_8_26"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(164.395 317.592) rotate(33.1257) scale(93.8995)"
                      >
                        <stop stopColor="white" />
                        <stop offset="1" stopColor="white" stopOpacity="0" />
                      </radialGradient>
                      <radialGradient
                        id="paint7_radial_8_26"
                        cx="0"
                        cy="0"
                        r="1"
                        gradientUnits="userSpaceOnUse"
                        gradientTransform="translate(242.979 236.138) rotate(-90) scale(52.1493 54.8103)"
                      >
                        <stop stopColor="white" stopOpacity="0.78" />
                        <stop offset="1" stopColor="white" />
                      </radialGradient>
                    </defs>
                  </svg>
                </div>
                {typeof siteMetadata.headerTitle === 'string' ? (
                  <div className="hidden h-6 text-4xl font-semibold sm:block">
                    {siteMetadata.headerTitle}
                  </div>
                ) : (
                  siteMetadata.headerTitle
                )}
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => (
                <Link
                  key={link.title}
                  href={link.href}
                  className="p-1 text-4xl font-medium text-gray-900 dark:text-gray-100 sm:p-4"
                >
                  {link.title}
                </Link>
              ))}
            </div>
            <ThemeSwitch />
            <MobileNav />
          </div>
        </header>
        <main className="mb-auto">{children}</main>
        <Footer />
      </div>
    </SectionContainer>
  )
}

export default LayoutWrapper
