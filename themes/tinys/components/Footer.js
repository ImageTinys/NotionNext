import AnalyticsBusuanzi from '@/components/AnalyticsBusuanzi'
import { BeiAnGongAn } from '@/components/BeiAnGongAn'
import BeiAnSite from '@/components/BeiAnSite'
// 移除 CopyRightDate 的 import
import DarkModeButton from '@/components/DarkModeButton'
import LazyImage from '@/components/LazyImage'
import PoweredBy from '@/components/PoweredBy'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import Link from 'next/link'
import CONFIG from '../config'
import SocialButton from './SocialButton'

/**
 * 网页底脚
 */
export const Footer = ({ title }) => {
  const { siteInfo } = useGlobal()
  const PROXIO_FOOTER_LINKS = siteConfig('PROXIO_FOOTER_LINKS', [], CONFIG)

  return (
    <footer
      id='footer-bottom'
      className='z-10 justify-center m-auto w-full p-6 relative'>
      <div className='w-full mx-auto'>
        {/* 信息与链接区块 */}
        {/* 已移除红框内容 */}
        {/* 页脚 */}
        <div className='dark:text-gray-200 py-4 flex flex-col lg:flex-row  justify-between items-center border-t border-gray-600'>
          <div className='flex gap-x-2 flex-wrap justify-between items-center' style={{ fontFamily: 'MiSans, sans-serif' }}>
            <PoweredBy />
          </div>
          {/* 移除亮暗色模式切换按钮 */}
          <div className='flex justify-between items-center gap-x-2'>
            <div className='flex items-center gap-x-4'>
              <AnalyticsBusuanzi />
              <SocialButton />
            </div>
          </div>
        </div>

        {/* 备案 */}
        <div className='dark:text-gray-200 w-full text-center flex flex-wrap items-center justify-center gap-x-2'>
          <BeiAnSite />
          <BeiAnGongAn />
        </div>
      </div>
    </footer>
  )
}