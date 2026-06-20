import heroImage from "../assets/hero.png"
import { siteData } from "../data/siteData"

export default function Hero() {
  return (
    <div className="w-full flex-1 min-h-0 flex flex-col lg:flex-row items-stretch justify-center gap-8 py-6 lg:p-20">

      {/* Left Column */}
      <div className="flex-1 cursor-pointer min-h-0 flex items-center justify-center">
        <div className="relative overflow-hidden group w-full h-full flex items-center justify-center border border-white/10 aspect-video max-h-[45vh] lg:max-h-[55vh]">
          <img
            alt="Voryn Works Video Poster"
            loading="lazy"
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            src={heroImage}
          />
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <button className="group transition-all duration-300 inline-flex items-center justify-center gap-2 whitespace-nowrap decoration-transparent md:text-[16px] font-mono disabled:pointer-events-none disabled:opacity-50 relative overflow-hidden rounded-sm uppercase font-medium w-auto h-[32px] lg:h-[40px] text-[14px] bg-white/65 backdrop-blur-sm py-2 px-3 text-black pointer-events-auto group-hover:bg-black/65 group-hover:text-white cursor-pointer active:scale-95" type="button">
              <span className="relative z-10" style={{ color: 'inherit' }}>
                <div className="flex items-center justify-center gap-2">
                  <div className="text-[14px] lg:text-[14px] leading-[1] tracking-[-0.01em] text-pretty uppercase font-medium">Watch Video</div>
                  <svg width="17" height="24" viewBox="0 0 17 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3"><path d="M0 22.0489V1.00192C0 0.182232 0.93201 -0.289308 1.59239 0.196266L15.9043 10.7197C16.4478 11.1194 16.4478 11.9314 15.9043 12.331L1.59239 22.8545C0.93201 23.3401 0 22.8685 0 22.0489Z"></path></svg>
                </div>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Right Column */}
      <div className="flex-1 lg:max-w-[500px] flex flex-col gap-16 justify-between py-4 max-h-[45vh] lg:max-h-[55vh]">
        <div className="space-y-4 font-mono">
          <div className="text-[14px] lg:text-[14px] tracking-[-0.01em] text-balance leading-[1.3] text-white">
            {siteData.description[0]}
          </div>
          <div className="text-[14px] lg:text-[14px] tracking-[-0.01em] text-balance leading-[1.3] text-white">
            {siteData.description[1]}
          </div>
        </div>
        <a className="group w-fit flex items-center justify-center gap-2 mt-6 cursor-pointer" href="https://www.linkedin.com/company/voryn-works/jobs" target="_blank" rel="noopener noreferrer">
          <div className="text-[14px] lg:text-[14px] tracking-[-0.01em] text-pretty leading-[1] uppercase hover:underline underline-offset-4 font-mono font-medium">Open Roles</div>
          <svg width="9" height="7" viewBox="0 0 9 7" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 group-hover:translate-x-[2px] transition-transform duration-300"><path d="M5.51989 6.624L4.75189 5.856L6.12789 4.48L6.92789 3.808L6.91189 3.76L5.37589 3.856H-0.000111312V2.768H5.37589L6.91189 2.864L6.92789 2.816L6.12789 2.144L4.75189 0.767996L5.51989 -4.76837e-06L8.83189 3.312L5.51989 6.624Z"></path></svg>
        </a>
      </div>

    </div>
  )
}