import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'

import NewsletterForm from '@/components/NewsletterForm'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="align-items-center justify-content-center relative my-40 flex flex-col justify-items-center justify-self-center md:h-80">
        <svg
          width="460"
          height="1016"
          viewBox="0 0 230 508"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="dot-1"
        >
          <g filter="url(#filter0_b_7_1527)">
            <circle
              cx="-23.599"
              cy="253.782"
              r="253.266"
              fill="url(#paint0_radial_7_1527)"
              fillOpacity="0.8"
            />
            <circle
              cx="-23.599"
              cy="253.782"
              r="253.266"
              fill="url(#paint1_radial_7_1527)"
              fillOpacity="0.2"
            />
          </g>
          <defs>
            <filter
              id="filter0_b_7_1527"
              x="-306.865"
              y="-29.4833"
              width="566.531"
              height="566.531"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feGaussianBlur in="BackgroundImage" stdDeviation="15" />
              <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_7_1527" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_backgroundBlur_7_1527"
                result="shape"
              />
            </filter>
            <radialGradient
              id="paint0_radial_7_1527"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-23.599 253.782) rotate(90) scale(253.266)"
            >
              <stop offset="0.510417" stopColor="#DBDF2A" stopOpacity="0.79" />
              <stop offset="1" stopColor="#DBDF2A" />
            </radialGradient>
            <radialGradient
              id="paint1_radial_7_1527"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(-61.3044 390.508) rotate(-58.0971) scale(307.246)"
            >
              <stop stopColor="white" stopOpacity="0" />
              <stop offset="1" stopColor="white" />
            </radialGradient>
          </defs>
        </svg>

        <h1 className="text-4xl font-bold md:text-7xl">
          Fusing the web and user for a cohesive and safer web experience.
        </h1>
        <p className="mt-4">
          Fusion is focused on user-experience and information availibiltiy at the tip of your
          finger tips. It is jam packed with features utilizing industry-leading technology designed
          to keep you and your family safe.
        </p>
      </div>
      <div className="relative my-20 md:h-80">
        <div className="dots-container-2">
          <svg
            width="249"
            height="249"
            viewBox="0 0 249 249"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dot-3"
          >
            <g filter="url(#filter0_b_7_1528)">
              <circle
                cx="124.803"
                cy="124.782"
                r="123.88"
                fill="url(#paint0_radial_7_1528)"
                fillOpacity="0.8"
              />
              <circle
                cx="124.803"
                cy="124.782"
                r="123.88"
                fill="url(#paint1_radial_7_1528)"
                fillOpacity="0.2"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_7_1528"
                x="-29.0771"
                y="-29.0978"
                width="307.76"
                height="307.761"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="15" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_7_1528"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_7_1528"
                  result="shape"
                />
              </filter>
              <radialGradient
                id="paint0_radial_7_1528"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(124.803 124.782) rotate(90) scale(123.88)"
              >
                <stop stopColor="white" stopOpacity="0.79" />
                <stop offset="1" stopColor="white" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_7_1528"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(167.918 96.4516) rotate(105.815) scale(158.2)"
              >
                <stop />
                <stop offset="1" stopOpacity="0" />
              </radialGradient>
            </defs>
          </svg>
          <svg
            width="571"
            height="571"
            viewBox="0 0 571 571"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="dot-2"
          >
            <g filter="url(#filter0_b_7_1514)">
              <circle
                cx="285.694"
                cy="285.673"
                r="284.891"
                fill="url(#paint0_radial_7_1514)"
                fillOpacity="0.8"
              />
              <circle
                cx="285.694"
                cy="285.673"
                r="284.891"
                fill="url(#paint1_radial_7_1514)"
                fillOpacity="0.35"
              />
            </g>
            <defs>
              <filter
                id="filter0_b_7_1514"
                x="-29.1973"
                y="-29.2175"
                width="629.782"
                height="629.782"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImage" stdDeviation="15" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_7_1514"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_backgroundBlur_7_1514"
                  result="shape"
                />
              </filter>
              <radialGradient
                id="paint0_radial_7_1514"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(285.694 285.673) rotate(90) scale(284.891)"
              >
                <stop stopColor="#2ADF3C" stopOpacity="0.79" />
                <stop offset="1" stopColor="#2ADF3C" />
              </radialGradient>
              <radialGradient
                id="paint1_radial_7_1514"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(416.53 170.694) rotate(108.118) scale(420.731)"
              >
                <stop stopOpacity="0" />
                <stop offset="1" />
              </radialGradient>
            </defs>
          </svg>
        </div>

        <h1 className="text-4xl font-bold md:text-7xl">Why Fusion?</h1>
        <p className="mt-4">
          In an ever increasing internet-connected world, scams are becoming more
          prevalent—especially among the elderly and poor, so we decided to develop Fusion to place
          scammers out of business before they scam us and our relatives.
        </p>
      </div>

      <div className="my-20">
        <p>
          Currently we are developing it for IOS only and will launch for Android a few weeks after
          as soon as we complete our IOS application.
        </p>
      </div>

      <div className="my-20">
        <h2 className="text-4xl font-bold md:text-7xl">
          Sign up for our prelease—up to 10000 users will be accepted.
        </h2>
        <div className="my-10">
          <p>
            Don't worry, we will never flood your inbox with marketing emails. This is a one-time
            email list.
          </p>
          <p className="mt-2">
            This is possible thanks to our technology at{' '}
            <a
              href="https://www.formflow.in?utm_source=fusionnn"
              target="_blank"
              rel="noopener noreferrer"
            >
              FormFlow
            </a>
            .
          </p>
        </div>
        <div className="flex space-x-10">
          <input
            type="email"
            className="email-input w-full rounded-2xl p-6 text-2xl md:text-4xl"
            placeholder="nazar@n87m.com"
          />
          <button
            type="button"
            value="Hit me up!"
            className="max-w-2/3 email-button w-full flex-1 rounded-2xl bg-black p-6 text-2xl text-white md:px-40 md:text-4xl"
          >
            Subscribe
          </button>
        </div>
      </div>

      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest
          </h1>
          <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </p>
        </div>
        <ul className="divide-y divide-gray-200 dark:divide-gray-700">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags } = frontMatter
            return (
              <li key={slug} className="py-12">
                <article>
                  <div className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
                    <dl>
                      <dt className="sr-only">Published on</dt>
                      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                        <time dateTime={date}>{formatDate(date)}</time>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-6">
                        <div>
                          <h2 className="text-2xl font-bold leading-8 tracking-tight">
                            <Link
                              href={`/blog/${slug}`}
                              className="text-gray-900 dark:text-gray-100"
                            >
                              {title}
                            </Link>
                          </h2>
                          <div className="flex flex-wrap">
                            {tags.map((tag) => (
                              <Tag key={tag} text={tag} />
                            ))}
                          </div>
                        </div>
                        <div className="prose max-w-none text-gray-500 dark:text-gray-400">
                          {summary}
                        </div>
                      </div>
                      <div className="text-base font-medium leading-6">
                        <Link
                          href={`/blog/${slug}`}
                          className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
                          aria-label={`Read "${title}"`}
                        >
                          Read more &rarr;
                        </Link>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            )
          })}
        </ul>
      </div>
      {posts.length > MAX_DISPLAY && (
        <div className="flex justify-end text-base font-medium leading-6">
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
            aria-label="all posts"
          >
            All Posts &rarr;
          </Link>
        </div>
      )}
      {siteMetadata.newsletter.provider !== '' && (
        <div className="flex items-center justify-center pt-4">
          <NewsletterForm />
        </div>
      )}
    </>
  )
}
