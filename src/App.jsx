import { useState } from "react"

import Avatar from "./components/Avatar"
import Smartwatch from "./components/Smartwatch"

export default function App() {

  // Watch open state
  const [watchOpen, setWatchOpen] = useState(false)

  return (

    <main className="w-full h-screen bg-gradient-to-b from-white to-neutral-200 overflow-hidden relative flex items-center justify-center">

      {/* Background glow */}
      <div className="absolute w-[500px] h-[500px] rounded-full bg-cyan-400 opacity-10 blur-3xl" />

      {/* Avatar */}
      <Avatar
        setWatchOpen={setWatchOpen}
      />

      {/* Smartwatch */}
      <Smartwatch
        watchOpen={watchOpen}
        setWatchOpen={setWatchOpen}
      />

      {/* Bottom label */}
      <div className="absolute bottom-10 text-neutral-500 tracking-[0.3em] text-sm">
        MICHAEL SEVILLA
      </div>

    </main>
  )
}