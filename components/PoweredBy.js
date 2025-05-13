import { siteConfig } from '@/lib/config'

/**
 * 驱动版权
 * @returns
 */
export default function PoweredBy(props) {
  return (
    <div className={`inline text-sm ${props.className || ''}`}>
      <span>©2025 IMAGETINYS</span>
    </div>
  )
}
