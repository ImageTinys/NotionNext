'use client'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'
import { useGlobal } from '@/lib/global'

const NotionPage = dynamic(() => import('@/components/NotionPage'))

/**
 * 公告组件
 * @param {object} post - 公告内容，来自Notion
 * @param {string} className - 自定义样式类
 */
const Announcement = ({ post, className }) => {
  // 控制公告显示/隐藏的状态
  const [isVisible, setIsVisible] = useState(false)
  const { loadingCoverDone } = useGlobal()

  useEffect(() => {
    // 等待加载封面完成后再显示公告
    if (!loadingCoverDone) return

    // 可调整延迟显示时间
    const showTimer = setTimeout(() => {
      setIsVisible(true)
    }, 500)

    // 可调整公告显示持续时间
    const hideTimer = setTimeout(() => {
      setIsVisible(false)
    }, 3500)

    return () => {
      clearTimeout(showTimer)
      clearTimeout(hideTimer)
    }
  }, [loadingCoverDone])

  if (!post?.blockMap) return null

  return (
    <div 
      // 可调整transform动画效果
      style={{ transform: isVisible ? 'translateY(0)' : 'translateY(-100%)' }}
      // 可调整固定高度h-[60px]和背景样式
      className='fixed top-0 left-0 right-0 z-50 transition-transform duration-500 h-[30px] bg-white dark:bg-dark shadow-lg'
    >
      {/* 可调整内容容器的内边距和对齐方式 */}
      <div className='container mx-auto px-4 h-full flex items-center justify-center text-center'>
        <NotionPage post={post}/>
      </div>
    </div>
  )
}

export default Announcement
