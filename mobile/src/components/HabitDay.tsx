import clsx from 'clsx';
import dayjs from 'dayjs';
import { Dimensions, TouchableOpacity, TouchableOpacityProps } from 'react-native';

import generateProgressPercentage from '../utils/generate-progress-percentage'

const WEEK_DAYS = 7
const SCREEN_HORIZONTAL_PADDING = (32 * 2) / 5

export const DAY_MARGIN_BETWEEN = 8
export const DAY_SIZE = (Dimensions.get('screen').width / WEEK_DAYS) - (SCREEN_HORIZONTAL_PADDING + 5)

interface Props extends TouchableOpacityProps {
  amountOfHabit?: number;
  amountCompleted?: number;
  date: Date;
}

export default function HabitDay({amountOfHabit = 0, amountCompleted = 0, date,  ...rest }: Props) {

  const amounAccomplishePercent = amountOfHabit > 0 ? generateProgressPercentage(amountOfHabit, amountCompleted) : 0
  const today = dayjs().startOf('day').toDate();
  const isCurrentDay = dayjs(date).isSame(today);

  return (
    <TouchableOpacity 
    className={clsx("rounded-lg border-2 m-1",{
      ["bg-zinc-900 border-zinc-800"] : amounAccomplishePercent === 0,
      ["bg-violet-900 border-violet-700"] : amounAccomplishePercent > 0 && amounAccomplishePercent < 20,
      ["bg-violet-800 border-violet-600"] : amounAccomplishePercent >= 20 && amounAccomplishePercent < 40,
      ["bg-violet-700 border-violet-500"] : amounAccomplishePercent >= 40 && amounAccomplishePercent < 60,
      ["bg-violet-600 border-violet-500"] : amounAccomplishePercent >= 60 && amounAccomplishePercent < 80,
      ["bg-violet-500 border-violet-400"] : amounAccomplishePercent >= 80,
      ["border-white border-4"] : isCurrentDay,
    })} 
     style={{width: DAY_SIZE, height: DAY_SIZE}}
     activeOpacity={0.7} 
     {...rest}

    >

    </TouchableOpacity>
  )
}
