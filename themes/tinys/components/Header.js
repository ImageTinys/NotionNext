/* eslint-disable no-unreachable */
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useEffect, useState, useRef } from 'react'
import { Logo } from './Logo'
import { MenuList } from './MenuList'
import { analyzeBrightness } from '../utils/imageUtils'

/**
 * 顶部导航栏
 */
export const Header = props => {
    const router = useRouter()
    const { isDarkMode } = useGlobal()
    const [textColor, setTextColor] = useState('text-white')

    // 滚动与透明逻辑
    const [showNavbar, setShowNavbar] = useState(true)
    const [isTransparent, setIsTransparent] = useState(true)
    const lastScrollYRef = useRef(0)
    const coverAreaHeightRef = useRef(typeof window !== 'undefined' ? window.innerHeight : 0)
    const navbarRef = useRef(null)
    const navbarHeight = 60
    const scrollThreshold = 5
    const topThreshold = 10

    useEffect(() => {
        if (typeof window !== 'undefined') {
            coverAreaHeightRef.current = window.innerHeight
        }
        const initialScrollY = window.scrollY < 0 ? 0 : window.scrollY
        lastScrollYRef.current = initialScrollY
        if (initialScrollY <= topThreshold) {
            setShowNavbar(true)
        } else {
            setShowNavbar(true)
        }
        if (initialScrollY < coverAreaHeightRef.current) {
            setIsTransparent(true)
        } else {
            setIsTransparent(false)
        }
        // 检测Banner亮度
        const detectBannerBrightness = () => {
            (async () => {
                if (!navbarRef.current) return;
                let imgUrl = null;
                const imgElements = Array.from(document.querySelectorAll('img'));
                const bannerElements = imgElements.filter(img => {
                    const imgRect = img.getBoundingClientRect();
                    return imgRect.top < 100 && imgRect.width > window.innerWidth * 0.5;
                });
                if (bannerElements.length > 0) {
                    imgUrl = bannerElements[0].src;
                }
                if (!imgUrl) {
                    const bodyStyles = window.getComputedStyle(document.body);
                    const headerElements = document.querySelectorAll('header, .header, .banner, .hero');
                    for (const header of headerElements) {
                        const styles = window.getComputedStyle(header);
                        if (styles.backgroundImage && styles.backgroundImage !== 'none') {
                            imgUrl = styles.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
                            break;
                        }
                    }
                    if (!imgUrl && bodyStyles.backgroundImage && bodyStyles.backgroundImage !== 'none') {
                        imgUrl = bodyStyles.backgroundImage.replace(/url\(['"]?(.*?)['"]?\)/i, '$1');
                    }
                }
                if (imgUrl && isTransparent) {
                    const brightness = await analyzeBrightness(imgUrl, {top:0,left:0,width:1,height:navbarHeight});
                    setTextColor(brightness === 'light' ? 'text-white' : 'text-black');
                } else if (!isTransparent) {
                    setTextColor('text-black');
                }
            })();
        }
        detectBannerBrightness();
        window.addEventListener('scroll', detectBannerBrightness, { passive: true });
        window.addEventListener('resize', detectBannerBrightness, { passive: true });
        const handleScroll = () => {
            const currentScrollY = window.scrollY < 0 ? 0 : window.scrollY
            const localLastScrollY = lastScrollYRef.current
            const scrollDelta = currentScrollY - localLastScrollY
            if (currentScrollY <= topThreshold) {
                setShowNavbar(true)
            } else {
                if (Math.abs(scrollDelta) > scrollThreshold) {
                    if (scrollDelta > 0) {
                        setShowNavbar(false)
                    } else {
                        setShowNavbar(true)
                    }
                }
            }
            if (currentScrollY < coverAreaHeightRef.current) {
                setIsTransparent(true)
            } else {
                setIsTransparent(false)
            }
            lastScrollYRef.current = currentScrollY
        }
        const handleResize = () => {
            coverAreaHeightRef.current = window.innerHeight
            handleScroll()
        }
        window.addEventListener('scroll', handleScroll, { passive: true })
        window.addEventListener('resize', handleResize, { passive: true })
        handleScroll()
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
            window.removeEventListener('scroll', detectBannerBrightness);
            window.removeEventListener('resize', detectBannerBrightness);
        }
    }, [isDarkMode, router.route, isTransparent])

    // 状态动态生成 className
    const headerClassName = `w-full flex justify-between items-center px-8 h-[${navbarHeight}px] fixed top-0 left-0 z-40 transition-all duration-300 ease-in-out ${showNavbar ? 'translate-y-0' : '-translate-y-full'} ${isTransparent ? 'bg-transparent' : 'bg-white shadow-md'}`
    const dynamicTextColor = isTransparent ? textColor : 'text-black'

    return (
        <div ref={navbarRef} className={headerClassName}>
            <div className='container'>
                <div className='relative -mx-4 flex items-center justify-between'>
                    <Logo {...props} />
                    <div className={`flex items-center gap-4 justify-end pr-12 lg:pr-0`}>
                        <MenuList {...props} textColor={dynamicTextColor} />
                        {/* 右侧自定义按钮示例：
                        <button className={`ml-4 ${dynamicTextColor}`}>ABOUT</button>
                        */}
                    </div>
                </div>
            </div>
        </div>
    )
}
