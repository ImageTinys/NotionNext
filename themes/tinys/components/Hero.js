/* eslint-disable @next/next/no-img-element */
import LazyImage from '@/components/LazyImage'
import { siteConfig } from '@/lib/config'
import CONFIG from '../config'
import Link from 'next/link'

/**
 * 英雄大图区块
 */
export const Hero = props => {
    const config = props?.NOTION_CONFIG || CONFIG
    const pageCover = props?.siteInfo?.pageCover
    const bannerImage = siteConfig('PROXIO_HERO_BANNER_IMAGE', null, config) || pageCover
    const bannerIframe = siteConfig('PROXIO_HERO_BANNER_IFRAME_URL',null,config)
    return (
        <section id='hero' className='w-full relative overflow-hidden'>
            <div className='mx-auto w-full relative'>
                {/* <!-- ====== Hero Section Start --> */}
                <div
                    id='home'
                    className='h-screen relative overflow-hidden bg-primary'>
                    {/* 横幅图片 */}
                    {!bannerIframe && bannerImage && (
                        <LazyImage
                            priority
                            className='w-full object-cover absolute h-screen left-0 top-0'
                            src={bannerImage} />
                    )}
                    {bannerIframe && (
                        <iframe src={bannerIframe} className='w-full absolute h-screen left-0 top-0' />
                    )}

                </div>
                {/* 文字标题等 */}
                <div className='absolute top-32 left-12 w-full max-w-2xl text-white z-10'>
                    <div className='flex flex-wrap items-start'>
                        <div className='w-full'>
                            <div className='hero-content wow fadeInUp' data-wow-delay='0.5s'>
                                {/* 主标题 */}
                                <h1 className='mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl drop-shadow-lg'>
                                    {siteConfig('PROXIO_HERO_TITLE_1', null, config)}
                                </h1>
                                {/* 次标题 */}
                                <p className='mb-9 text-lg font-medium sm:text-xl drop-shadow-lg'>
                                    {siteConfig('PROXIO_HERO_TITLE_2', null, config)}
                                </p>
                                {/* 按钮组 */}
                                <ul className='flex flex-wrap items-start gap-5'>
                                    {siteConfig('PROXIO_HERO_BUTTON_1_TEXT', null, config) && (
                                        <li>
                                            <Link
                                                href={siteConfig('PROXIO_HERO_BUTTON_1_URL', '')}
                                                className='inline-flex items-center justify-center rounded-2xl bg-white/90 hover:bg-white px-7 py-[14px] text-center text-base font-medium text-dark shadow-lg transition duration-300 ease-in-out'>
                                                {siteConfig('PROXIO_HERO_BUTTON_1_TEXT', null, config)}
                                            </Link>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ====== Hero Section End --> */}
            </div>
        </section>
    )
}
