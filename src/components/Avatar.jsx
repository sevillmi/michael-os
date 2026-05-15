import { motion } from "framer-motion"
import { useState, useEffect } from "react"

export default function Avatar({ setWatchOpen }) {

  // Mouse movement
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  // Current time
  const [currentTime, setCurrentTime] = useState("")

  // Update clock
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

  // Mouse movement
  useEffect(() => {

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

    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
    }

  }, [])

  return (

    <motion.div

      animate={{
        y: mousePosition.y,
        x: mousePosition.x,
      }}

      transition={{
        type: "spring",
        stiffness: 80,
        damping: 15,
      }}

      className="relative"
    >

      {/* Avatar background */}
      <div className="w-80 h-80 rounded-full bg-neutral-100 flex items-center justify-center shadow-2xl border border-neutral-300">

        <div className="relative flex flex-col items-center">

          {/* Hair glow */}
          <div className="absolute top-0 w-32 h-32 rounded-full bg-cyan-400 blur-3xl opacity-20" />

          {/* Head */}
          <motion.div

            animate={{
              rotate: mousePosition.x * 0.8,
            }}

            transition={{
              type: "spring",
              stiffness: 120,
            }}

            className="relative w-28 h-28 rounded-full bg-[#d6b08c] z-20 shadow-2xl border-4 border-neutral-700"
          >

            {/* Hair */}
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-28 h-14 bg-neutral-900 rounded-t-full" />

            {/* Side hair */}
            <div className="absolute top-4 -left-1 w-4 h-10 bg-neutral-900 rounded-full" />
            <div className="absolute top-4 -right-1 w-4 h-10 bg-neutral-900 rounded-full" />

            {/* Eyes */}
            <div className="absolute top-10 left-7 w-3 h-3 rounded-full bg-black" />
            <div className="absolute top-10 right-7 w-3 h-3 rounded-full bg-black" />

            {/* Eye glow */}
            <div className="absolute top-10 left-7 w-3 h-3 rounded-full bg-cyan-400 opacity-40 blur-sm" />
            <div className="absolute top-10 right-7 w-3 h-3 rounded-full bg-cyan-400 opacity-40 blur-sm" />

            {/* Eyebrows */}
            <div className="absolute top-7 left-6 w-5 h-1 bg-neutral-900 rounded-full rotate-6" />
            <div className="absolute top-7 right-6 w-5 h-1 bg-neutral-900 rounded-full -rotate-6" />

            {/* Nose */}
            <div className="absolute top-14 left-1/2 -translate-x-1/2 w-2 h-5 bg-[#c89b74] rounded-full opacity-70" />

            {/* Mouth */}
            <div className="absolute bottom-7 left-1/2 -translate-x-1/2 w-8 h-2 bg-neutral-800 rounded-full opacity-70" />

            {/* Beard */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 h-10 bg-neutral-900 rounded-b-full" />

          </motion.div>

          {/* Neck */}
          <div className="w-8 h-6 bg-[#c89b74] -mt-2 z-10 rounded-b-lg" />

          {/* Body */}
          <motion.div

            animate={{
              rotate: mousePosition.x * 0.3,
              y: mousePosition.y * 0.2,
            }}

            transition={{
              type: "spring",
              stiffness: 100,
            }}

            className="w-44 h-56 bg-neutral-900 rounded-[50px] -mt-1 relative border border-neutral-700 shadow-2xl overflow-hidden"
          >

            {/* Hoodie glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 to-transparent" />

            {/* Hoodie collar */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-16 bg-neutral-800 rounded-b-[40px]" />

            {/* Hoodie strings */}
            <div className="absolute top-12 left-[46%] w-1 h-12 bg-neutral-400 rounded-full" />
            <div className="absolute top-12 right-[46%] w-1 h-12 bg-neutral-400 rounded-full" />

            {/* Left arm */}
            <div className="absolute -left-7 top-16 w-8 h-28 bg-neutral-800 rounded-full rotate-12" />

            {/* Right arm */}
            <div className="absolute -right-7 top-16 w-8 h-28 bg-neutral-800 rounded-full -rotate-12" />

            {/* Smartwatch */}
            <motion.div

              onClick={() => setWatchOpen(true)}

              whileHover={{
                scale: 1.15,
              }}

              animate={{
                boxShadow: [
                  "0px 0px 10px rgba(34,211,238,0.3)",
                  "0px 0px 30px rgba(34,211,238,0.7)",
                  "0px 0px 10px rgba(34,211,238,0.3)",
                ],
              }}

              transition={{
                duration: 2,
                repeat: Infinity,
              }}

              className="absolute -right-12 top-24 w-24 h-24 rounded-full bg-black flex items-center justify-center cursor-pointer border-4 border-neutral-700"
            >

              <div className="flex flex-col items-center justify-center text-white">

                {/* Time */}
                <span className="text-[13px] font-bold leading-none">
                  {currentTime}
                </span>

                {/* Date */}
                <span className="text-[8px] text-neutral-400 uppercase mt-1 tracking-wider">
                  {new Date().toLocaleDateString([], {
                    month: "short",
                    day: "numeric",
                  })}
                </span>

                {/* Glow dot */}
                <div className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse mt-2" />

              </div>

            </motion.div>

          </motion.div>

        </div>

      </div>

    </motion.div>
  )
}