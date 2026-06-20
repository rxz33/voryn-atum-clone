import { siteData } from "../data/siteData"

export default function Navbar() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-x-8 gap-y-4 lg:px-20 py-6 lg:py-4 relative">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-aw-gray-light animate-fade-in-right-to-left"></div>
      
      <div className="flex-1 text-center lg:text-left">
        <div className="text-[14px] lg:text-[14px] leading-[1] tracking-[-0.01em] text-pretty uppercase font-mono font-medium text-white">
          {siteData.industry}
        </div>
      </div>
      
      <div className="flex-1 text-center lg:text-center">
        <div className="text-[14px] lg:text-[14px] leading-[1] tracking-[-0.01em] text-pretty uppercase font-mono font-medium text-white">
          {siteData.location}
        </div>
      </div>
      
      <div className="flex-1 text-center lg:text-right">
        <a href="mailto:founders@voryn.works">
          <div className="text-[14px] lg:text-[14px] leading-[1] tracking-[-0.01em] text-pretty uppercase hover:underline underline-offset-4 font-mono font-medium text-white">
            Get In Touch
          </div>
        </a>
      </div>
    </div>
  )
}