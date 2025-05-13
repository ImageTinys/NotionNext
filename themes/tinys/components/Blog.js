/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { getImageTopBrightness } from '../utils/imageBrightness'

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

  // 单独的作品项组件，处理亮度和动画
  const BlogItem = ({ item }) => {
    const [titleColor, setTitleColor] = useState('text-white')
    // 检测图片亮度
    useEffect(() => {
      if (item.pageCoverThumbnail) {
        getImageTopBrightness(item.pageCoverThumbnail, 0.15).then(color => {
          setTitleColor(color === 'white' ? 'text-white' : 'text-black')
        })
      } else {
        setTitleColor('text-white')
      }
    }, [item.pageCoverThumbnail])
    return (
      <div className='break-inside-avoid mb-1'>
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
                  {/* 标题左上角绝对定位，初始透明上移，悬停时可见回原位，动画500ms */}
                  <div className={`absolute left-0 top-0 p-2 transition-all duration-500 ease-out opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 pointer-events-none select-none`}>
                    <h3 className={`text-lg font-thin px-3 py-1 rounded inline-block ${titleColor}`}>{item.title}</h3>
                  </div>
                </div>
              )}
            </Link>
          </div>
        </div>
      </div>
    )
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
            {posts?.map((item, index) => (
              <BlogItem key={index} item={item} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ====== Blog Section End --> */}
    </>
  )
}