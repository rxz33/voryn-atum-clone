import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"

function App() {
  return (
    <main className="relative w-full flex flex-col items-center justify-center bg-black text-white selection:bg-white selection:text-black">
      <div className="w-full max-w-[90rem] h-screen max-h-screen overflow-hidden flex flex-col items-center justify-between px-6">
        <Navbar />
        <Hero />
        <Footer />
      </div>
    </main>
  )
}

export default App