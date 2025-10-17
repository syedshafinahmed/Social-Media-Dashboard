import './App.css'
import Eight from './Layouts/Eight'
import One from './Layouts/one'
import Six from './Layouts/Six'
import Two from './Layouts/Two'

function App() {

  return (
    <>
      <div className='max-w-7xl mx-auto flex justify-center items-center h-screen poppins'>
        <div class="grid grid-cols-8 grid-rows-9 gap-4 h-[600px] w-[800px] relative">
          <div class="col-span-2 row-span-5 h-[90%]">
            <One></One>
          </div>
          <div class="col-span-2 row-span-4 col-start-1 row-start-6 h-[111%] absolute w-full -top-7">
            <Two></Two>
          </div>
          <div class="col-span-2 row-span-3 col-start-3 row-start-4 rounded-md bg-red-950">3</div>
          <div class="col-span-2 row-span-3 col-start-5 row-start-4 rounded-md bg-green-900">4</div>
          <div class="col-span-2 row-span-6 col-start-7 row-start-1 rounded-md bg-green-700">5</div>
          <div class="col-span-4 row-span-3 col-start-5 row-start-7">
            <Six></Six>
          </div>
          <div class="col-span-2 row-span-3 col-start-3 row-start-7 rounded-md bg-gray-800">7</div>
          <div class="col-span-4 row-span-3 col-start-3 row-start-1">
            <Eight></Eight>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
