import { siteData } from "../data/siteData"

export default function Navbar() {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center justify-between gap-x-8 gap-y-4 lg:px-20 py-6 lg:py-4 relative">
      <div className="absolute bottom-0 left-0 right-0 h-px bg-aw-gray-light animate-fade-in-right-to-left"></div>

      <div
        style={{ willChange: "opacity", opacity: 1 }}
        className="flex-1 text-center lg:text-left"
      >
        <div className="text-[14px] lg:text-[14px] leading-[1] tracking-[-0.01em] text-pretty uppercase">
          {siteData.industry}
        </div>
      </div>

      <div
        style={{ willChange: "opacity", opacity: 1 }}
        className="flex-1 text-center lg:text-center"
      >
        <div className="text-[14px] lg:text-[14px] leading-[1] tracking-[-0.01em] text-pretty uppercase">
          {siteData.location}
        </div>
      </div>

      <div
        style={{ willChange: "opacity", opacity: 1 }}
        className="flex-1 text-center lg:text-right"
      >
        <a href="mailto:founders@vorynworks.com">
          <div className="text-[14px] lg:text-[14px] leading-[1] tracking-[-0.01em] text-pretty uppercase hover:underline underline-offset-4">
            Get In Touch
          </div>
        </a>
      </div>
    </div>
  )
}