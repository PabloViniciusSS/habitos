import React from 'react'
import { Week } from '../arrays/Week'
import generateDatesFromYearBennings from '../util/generate-dates-from-year-benning'
import HabitDay from './HabitDay'

const sumaryDates = generateDatesFromYearBennings()

const minimumSumaryDatesSize = 18 * 7

const amountodDaysToFill = minimumSumaryDatesSize - sumaryDates.length

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
          {sumaryDates.map(date => {
            return <HabitDay />
          })}

          {amountodDaysToFill > 0 && Array.from({length: amountodDaysToFill}).map((_, i)=>{
            return (
              <div key={i} className="bg-zinc-900 w-10 h-10 text-white rounded m-2 flex items-center justify-center opacity-40 cursor-not-allowed">

              </div>
            )

          })}
      </div>


    </div>
  )
}
