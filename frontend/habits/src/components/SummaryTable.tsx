import React from 'react'
import { Week } from '../arrays/Week'
import HabitDay from './HabitDay'

export default function () {
  return (
    <div className="w-full flex">
      <div className="grid grid-flow-row-7 grid-flow-row gap-3">
        {Week.map((week, i) => {
          return(

            <div key={`${week}-${i}`} className="text-zinc-400 text-xl h-10 w-10 font-bold flex items-center justify-center">
              {week.day}
            </div>
          )
        })}
      </div>

      <div className="grid grid-rows-7 grid-flow-col gap-3">
       <HabitDay />
      </div>


    </div>
  )
}
