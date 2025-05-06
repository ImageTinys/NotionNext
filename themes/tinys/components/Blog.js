/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useEffect, useRef } from 'react'

/**
 * 博文列表
 * @param {*} param0
 * @returns
 */
export const Blog = ({ posts }) => {
  const enable = siteConfig('PROXIO_BLOG_ENABLE')

  if (!enable) {
    return null
  }

  return (
    <>
      {/* <!-- ====== Blog Section Start --> */}
      <section className='bg-white pt-20 dark:bg-dark lg:pt-[120px]'>
        <div className='px-0'>
          {/* 区块标题文字 */}
          <div className='wow fadeInUp' data-wow-delay='.2s'>
            <div className='w-full px-4 py-4'>
              <div className='mx-auto max-w-[485px] text-center space-y-4'>
                <span className='px-3 py-0.5 rounded-2xl mb-2 dark:bg-dark-1 border border-gray-200 dark:border-[#333333] dark:text-white'>
                  {siteConfig('PROXIO_BLOG_TITLE')}
                </span>

                <h2 className='text-3xl font-bold text-dark dark:text-white sm:text-4xl md:text-[40px] md:leading-[1.2]'>
                  {siteConfig('PROXIO_BLOG_TEXT_1')}
                </h2>
              </div>
            </div>
          </div>
          {/* 博客列表 三栏布局 */}
          <div className='columns-1 md:columns-2 lg:columns-3 gap-1'>
            {posts?.map((item, index) => {
              return (
                <div key={index} className='break-inside-avoid mb-1'>
                  <div className='wow fadeInUp group relative' data-wow-delay='.1s'>
                    <div className='border-0 overflow-hidden dark:bg-gray-800'>
                      <Link href={item?.href} className='block'>
                        {item.pageCoverThumbnail && (
                          <div className='relative'>
                            <LazyImage
                              src={item.pageCoverThumbnail}
                              alt={item.title}
                              className='w-full h-auto object-cover'
                            />
                            <div className='absolute top-0 left-0 p-4 w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
                              <h3 className='text-lg font-light text-white px-3 py-1 rounded inline-block'>
                                {item.title}
                              </h3>
                            </div>
                          </div>
                        )}
                      </Link>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      {/* <!-- ====== Blog Section End --> */}
    </>
  )
}