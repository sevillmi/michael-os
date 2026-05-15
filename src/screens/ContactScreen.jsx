export default function ContactScreen() {

  return (

    <div className="w-full h-full flex flex-col items-center justify-center px-8">

      <h1 className="text-white text-4xl font-bold mb-10">
        Contact
      </h1>

      <div className="grid grid-cols-2 gap-5">

        <div className="w-28 h-28 rounded-3xl bg-pink-500 flex items-center justify-center text-white font-bold text-lg">
          LinkedIn
        </div>

        <div className="w-28 h-28 rounded-3xl bg-red-500 flex items-center justify-center text-white font-bold text-lg">
          Email
        </div>

        <div className="w-28 h-28 rounded-3xl bg-yellow-500 flex items-center justify-center text-black font-bold text-lg">
          Resume
        </div>

        <div className="w-28 h-28 rounded-3xl bg-white flex items-center justify-center text-black font-bold text-lg">
          Portfolio
        </div>

      </div>

    </div>
  )
}