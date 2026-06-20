import { siteData } from "../data/siteData"

export default function Footer() {
  return (
    <div className="w-full flex items-center justify-center text-center relative py-6">
      <div className="absolute top-0 left-0 right-0 h-px bg-aw-gray-light animate-fade-in-right-to-left"></div>
      <div>
        <div className="text-[14px] lg:text-[14px] leading-[1] tracking-[-0.01em] text-pretty uppercase font-mono font-medium text-white">
          {siteData.company}<br />© 2026
        </div>
      </div>
    </div>
  )
}