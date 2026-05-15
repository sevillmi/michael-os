export default function HomeScreen({ currentTime }) {

  return (

    <div className="w-full h-full flex flex-col items-center justify-center px-8">

      <h1 className="text-white text-4xl font-bold mb-6">
        Michael OS
      </h1>

      <div className="bg-cyan-500 text-white text-5xl font-bold p-8 rounded-3xl shadow-2xl mb-10">
        {currentTime}
      </div>

      <div className="grid grid-cols-2 gap-5">

        <div className="w-28 h-28 rounded-3xl bg-cyan-500 flex items-center justify-center text-white font-bold text-lg">
          GitHub
        </div>

        <div className="w-28 h-28 rounded-3xl bg-neutral-700 flex items-center justify-center text-white font-bold text-lg">
          APIs
        </div>

        <div className="w-28 h-28 rounded-3xl bg-neutral-700 flex items-center justify-center text-white font-bold text-lg">
          Resume
        </div>

        <div className="w-28 h-28 rounded-3xl bg-neutral-700 flex items-center justify-center text-white font-bold text-lg">
          Contact
        </div>

      </div>

    </div>
  )
}