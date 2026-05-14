// Import motion animations from Framer Motion
import { motion, AnimatePresence } from "framer-motion"

// Import React hooks
import { useState, useEffect } from "react"

export default function App() {

  // Store mouse movement values
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  // Track smartwatch open state
  const [watchOpen, setWatchOpen] = useState(false)

  // Track current smartwatch screen
  const [currentScreen, setCurrentScreen] = useState(0)

  // Store current smartwatch time
  const [currentTime, setCurrentTime] = useState("")

  // Store current smartwatch date
  const [currentDate, setCurrentDate] = useState("")

  // Update smartwatch clock
  useEffect(() => {

    const updateClock = () => {

      const now = new Date()

      const hours = now.getHours().toString().padStart(2, "0")

      const minutes = now.getMinutes().toString().padStart(2, "0")

      setCurrentTime(`${hours}:${minutes}`)

      setCurrentDate(
        now.toLocaleDateString([], {
          weekday: "short",
          month: "short",
          day: "numeric",
        })
      )
    }

    updateClock()

    const timer = setInterval(updateClock, 1000)

    return () => clearInterval(timer)

  }, [])

  // Track mouse position
  const handleMouseMove = (event) => {

    const mouseX = event.clientX

    const mouseY = event.clientY

    const moveX = (mouseX - window.innerWidth / 2) / 40

    const moveY = (mouseY - window.innerHeight / 2) / 40

    setMousePosition({
      x: moveX,
      y: moveY,
    })
  }

  // Go to previous screen
  const previousScreen = () => {

    setCurrentScreen((prev) =>
      prev === 0 ? screens.length - 1 : prev - 1
    )
  }

  // Go to next screen
  const nextScreen = () => {

    setCurrentScreen((prev) =>
      prev === screens.length - 1 ? 0 : prev + 1
    )
  }

  // Smartwatch screens
  const screens = [

    // Screen 1
    (
      <div className="w-full h-full flex flex-col items-center justify-center px-8">

        {/* Header */}
        <div className="flex flex-col items-center mb-10">

          <h1 className="text-white text-4xl font-bold mb-4">
            Michael OS
          </h1>

          <div className="text-cyan-400 text-6xl font-bold">
            {currentTime}
          </div>

        </div>

        {/* App grid */}
        <div className="grid grid-cols-2 gap-5">

          <div className="w-28 h-28 rounded-3xl bg-cyan-500 flex items-center justify-center text-white font-bold text-lg shadow-xl">
            GitHub
          </div>

          <div className="w-28 h-28 rounded-3xl bg-neutral-700 flex items-center justify-center text-white font-bold text-lg shadow-xl">
            APIs
          </div>

          <div className="w-28 h-28 rounded-3xl bg-neutral-700 flex items-center justify-center text-white font-bold text-lg shadow-xl">
            Resume
          </div>

          <div className="w-28 h-28 rounded-3xl bg-neutral-700 flex items-center justify-center text-white font-bold text-lg shadow-xl">
            Contact
          </div>

        </div>

      </div>
    ),

    // Screen 2
    (
      <div className="w-full h-full flex flex-col items-center justify-center px-8">

        <h1 className="text-white text-4xl font-bold mb-10">
          API Systems
        </h1>

        <div className="grid grid-cols-2 gap-5">

          <div className="w-28 h-28 rounded-3xl bg-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-xl">
            n8n
          </div>

          <div className="w-28 h-28 rounded-3xl bg-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-xl">
            OAuth
          </div>

          <div className="w-28 h-28 rounded-3xl bg-green-500 flex items-center justify-center text-white font-bold text-lg shadow-xl">
            Postman
          </div>

          <div className="w-28 h-28 rounded-3xl bg-purple-500 flex items-center justify-center text-white font-bold text-lg shadow-xl">
            Logs
          </div>

        </div>

      </div>
    ),

    // Screen 3
    (
      <div className="w-full h-full flex flex-col items-center justify-center px-8">

        <h1 className="text-white text-4xl font-bold mb-10">
          Contact
        </h1>

        <div className="grid grid-cols-2 gap-5">

          <div className="w-28 h-28 rounded-3xl bg-pink-500 flex items-center justify-center text-white font-bold text-lg shadow-xl">
            LinkedIn
          </div>

          <div className="w-28 h-28 rounded-3xl bg-red-500 flex items-center justify-center text-white font-bold text-lg shadow-xl">
            Email
          </div>

          <div className="w-28 h-28 rounded-3xl bg-yellow-500 flex items-center justify-center text-black font-bold text-lg shadow-xl">
            Resume
          </div>

          <div className="w-28 h-28 rounded-3xl bg-white flex items-center justify-center text-black font-bold text-lg shadow-xl">
            Portfolio
          </div>

        </div>

      </div>
    ),
  ]

  return (

    <main
      onMouseMove={handleMouseMove}
      className="w-full h-screen bg-white overflow-hidden relative flex items-center justify-center"
    >

      {/* Floating avatar */}
      <motion.div

        animate={{
          y: mousePosition.y,
          x: mousePosition.x,
          rotate: mousePosition.x,
        }}

        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
        }}

        className="relative"
      >

        {/* Avatar circle */}
        <div className="w-64 h-64 rounded-full bg-neutral-200 flex items-center justify-center shadow-2xl">

          <div className="relative">

            {/* Body placeholder */}
            <div className="w-28 h-36 bg-neutral-800 rounded-[40px] relative">

              {/* Smartwatch */}
              <motion.div

                onClick={() => setWatchOpen(true)}

                whileHover={{
                  scale: 1.15,
                }}

                transition={{
                  type: "spring",
                  stiffness: 300,
                }}

                className="absolute -right-10 top-10 w-24 h-28 rounded-[28px] bg-black border-4 border-neutral-700 shadow-2xl flex flex-col items-center justify-center cursor-pointer overflow-hidden"
              >

                {/* Time */}
                <div className="text-white text-sm font-bold">
                  {currentTime}
                </div>

                {/* Date */}
                <div className="text-neutral-400 text-[9px] uppercase tracking-widest mt-1">
                  {currentDate}
                </div>

                {/* Blue glow */}
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse mt-3" />

              </motion.div>

            </div>

          </div>

        </div>

      </motion.div>

      {/* Smartwatch fullscreen */}
      <AnimatePresence>

        {
          watchOpen && (

            <motion.div

              initial={{
                opacity: 0,
              }}

              animate={{
                opacity: 1,
              }}

              exit={{
                opacity: 0,
              }}

              className="absolute inset-0 flex items-center justify-center z-50 bg-black/20 backdrop-blur-sm"
            >

              {/* Giant smartwatch */}
              <motion.div

                initial={{
                  scale: 0.1,
                  opacity: 0,
                  borderRadius: "100%",
                }}

                animate={{
                  scale: 1,
                  opacity: 1,
                  borderRadius: "60px",
                }}

                exit={{
                  scale: 0.1,
                  opacity: 0,
                  borderRadius: "100%",
                }}

                transition={{
                  duration: 0.45,
                  type: "spring",
                }}

                className="w-[380px] h-[760px] bg-black border-[10px] border-neutral-800 shadow-2xl overflow-hidden relative"
              >

                {/* Left arrow */}
                <button
                  onClick={previousScreen}
                  className="absolute left-3 top-1/2 -translate-y-1/2 z-50 text-white text-5xl opacity-30 hover:opacity-100 transition"
                >
                  ‹
                </button>

                {/* Right arrow */}
                <button
                  onClick={nextScreen}
                  className="absolute right-3 top-1/2 -translate-y-1/2 z-50 text-white text-5xl opacity-30 hover:opacity-100 transition"
                >
                  ›
                </button>

                {/* Animated screen */}
                <AnimatePresence mode="wait">

                  <motion.div

                    key={currentScreen}

                    initial={{
                      opacity: 0,
                      x: 120,
                    }}

                    animate={{
                      opacity: 1,
                      x: 0,
                    }}

                    exit={{
                      opacity: 0,
                      x: -120,
                    }}

                    transition={{
                      duration: 0.25,
                    }}

                    className="w-full h-full"
                  >

                    {screens[currentScreen]}

                  </motion.div>

                </AnimatePresence>

                {/* Close button */}
                <button
                  onClick={() => setWatchOpen(false)}
                  className="absolute top-5 right-5 text-white border border-white px-4 py-2 rounded-full hover:bg-white hover:text-black transition"
                >
                  Close
                </button>

              </motion.div>

            </motion.div>
          )
        }

      </AnimatePresence>

      {/* Footer */}
      <div className="absolute bottom-10 text-neutral-500 tracking-[0.3em] text-sm">
        MICHAEL SEVILLA
      </div>

    </main>
  )
}