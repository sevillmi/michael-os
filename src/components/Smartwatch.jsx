import { motion } from "framer-motion"
import { useState, useEffect } from "react"

import HomeScreen from "../screens/HomeScreen"
import ApiScreen from "../screens/ApiScreen"
import ContactScreen from "../screens/ContactScreen"

export default function Smartwatch({
  watchOpen,
  setWatchOpen,
}) {

  const [currentScreen, setCurrentScreen] = useState(0)

  const [currentTime, setCurrentTime] = useState("")

  useEffect(() => {

    const updateClock = () => {

      const now = new Date()

      const hours = now.getHours().toString().padStart(2, "0")

      const minutes = now.getMinutes().toString().padStart(2, "0")

      setCurrentTime(`${hours}:${minutes}`)
    }

    updateClock()

    const timer = setInterval(updateClock, 1000)

    return () => clearInterval(timer)

  }, [])

  if (!watchOpen) return null

  return (

    <motion.div

      initial={{
        opacity: 0,
      }}

      animate={{
        opacity: 1,
      }}

      className="absolute inset-0 flex items-center justify-center z-50 backdrop-blur-sm"
    >

      <motion.div

        initial={{
          scale: 0,
          borderRadius: "100%",
        }}

        animate={{
          scale: 1,
          borderRadius: "60px",
        }}

        transition={{
          duration: 0.5,
          type: "spring",
        }}

        className="w-[380px] h-[760px] bg-black rounded-[60px] border-[10px] border-neutral-800 shadow-2xl overflow-hidden relative"
      >

        {/* LEFT */}
        <button
          onClick={() =>
            setCurrentScreen(
              currentScreen === 0
                ? 2
                : currentScreen - 1
            )
          }
          className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white text-5xl opacity-40 hover:opacity-100 transition"
        >
          ‹
        </button>

        {/* RIGHT */}
        <button
          onClick={() =>
            setCurrentScreen(
              currentScreen === 2
                ? 0
                : currentScreen + 1
            )
          }
          className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white text-5xl opacity-40 hover:opacity-100 transition"
        >
          ›
        </button>

        {/* SCREEN */}
        <div className="w-full h-full flex items-center justify-center">

{
  currentScreen === 0 && (
    <HomeScreen currentTime={currentTime} />
  )
}

{
  currentScreen === 1 && (
    <ApiScreen />
  )
}

{
  currentScreen === 2 && (
    <ContactScreen />
  )
}

        </div>

        {/* CLOSE */}
        <button
          onClick={() => setWatchOpen(false)}
          className="absolute top-6 right-6 text-white border border-white px-5 py-2 rounded-full hover:bg-white hover:text-black transition"
        >
          Close
        </button>

      </motion.div>

    </motion.div>
  )
}