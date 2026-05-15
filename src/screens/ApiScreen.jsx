export default function ApiScreen() {

  return (

    <div className="w-full h-full flex flex-col items-center justify-center px-8">

      <h1 className="text-white text-4xl font-bold mb-10">
        API Systems
      </h1>

      <div className="grid grid-cols-2 gap-5">

        <div className="w-28 h-28 rounded-3xl bg-orange-500 flex items-center justify-center text-white font-bold text-lg">
          n8n
        </div>

        <div className="w-28 h-28 rounded-3xl bg-blue-500 flex items-center justify-center text-white font-bold text-lg">
          OAuth
        </div>

        <div className="w-28 h-28 rounded-3xl bg-green-500 flex items-center justify-center text-white font-bold text-lg">
          Postman
        </div>

        <div className="w-28 h-28 rounded-3xl bg-purple-500 flex items-center justify-center text-white font-bold text-lg">
          Logs
        </div>

      </div>

    </div>
  )
}