import React from 'react'

const Header = () => {
  return (
    <div className="p-4 flex flex-row w-full justify-between items-center">
      <div className="text-2xl font-bold tracking-tight">
          Commit2Post <span className="text-amber-300">.</span>
      </div>
      <button className=" cursor-pointer border-2 border-amber-300 text-amber-300 px-6 py-2 rounded-full hover:bg-amber-300 hover:text-black transition-all duration-300 font-semibold">
        Viralizar
      </button>
    </div>

  )
}

export default Header