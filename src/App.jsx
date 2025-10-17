import './App.css'

function App() {

  return (
    <>
      <div className='max-w-7xl mx-auto flex justify-center items-center h-screen'>
        <div class="grid grid-cols-8 grid-rows-9 gap-4 h-[600px] w-[800px] relative">
          <div class="col-span-2 row-span-5 h-[90%] bg-red-800">1</div>
          <div class="col-span-2 row-span-4 col-start-1 row-start-6 h-[111%] absolute w-full -top-7 bg-red-400">2</div>
          <div class="col-span-2 row-span-3 col-start-3 row-start-4 bg-red-950">3</div>
          <div class="col-span-2 row-span-3 col-start-5 row-start-4 bg-green-900">4</div>
          <div class="col-span-2 row-span-6 col-start-7 row-start-1 bg-green-700">5</div>
          <div class="col-span-4 row-span-3 col-start-5 row-start-7 bg-blue-700">6</div>
          <div class="col-span-2 row-span-3 col-start-3 row-start-7 bg-gray-800">7</div>
          <div class="col-span-4 row-span-3 col-start-3 row-start-1 bg-purple-800">8</div>
        </div>
      </div>

    </>
  )
}

export default App
