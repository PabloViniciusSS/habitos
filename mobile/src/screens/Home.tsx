import { Text, View, ScrollView, TouchableOpacity, Alert } from "react-native";
import { useState, useEffect, useCallback } from 'react';
import HabitDay from "../components/HabitDay";
import Header from "../components/Header";
import { DAY_SIZE } from '../components/HabitDay';
import{ Week } from "../arrays/Week"

import {api} from '../lib/axios'
import { generateRangeDatesFromYearStart } from "../utils/generate-range-between-dates";


import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { SummaryTable } from '../../../../frontend/habits/src/components/SummaryTable';
import { Loading } from "../components/Loading";
import dayjs from "dayjs";

const datesFromYearStart = generateRangeDatesFromYearStart()
const minimumSummaryDatesSizes = 18 * 5
const amountOFDaysToFill = minimumSummaryDatesSizes - datesFromYearStart.length


type SummaryProps = Array<{
  id: string;
  date: string;
  amount: number;
  completed: number;
}>

export function Home(){
  const [loading, setLoading] = useState(true)
  const [summary, setSummary] = useState<SummaryProps | null>(null)


  const { navigate } = useNavigation()

  async function fetchData() {
    try {
      setLoading(true)
      const response = await api.get("/summary");
      setSummary(response.data)
    } catch (error) {
      Alert.alert('Ops', 'Não foi possível carregar o sumário de hábitos.')
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  useFocusEffect(useCallback(() => {
      fetchData()
    }, []))

  if (loading) {
    return (
      <Loading />
    )
  }

  return(
    <View className="flex-1 bg-background px-8 pt-16">
      <Header/>
      <View className="flex-row mt-6 mb-2">
      {
      Week.map((week, i) => (
           <Text key={`${week}-${i}`}
           className='text-zinc-400 text-xl font-bold text-center mx-1'
           style={{width: DAY_SIZE}}
           >
            {week.day}
            </Text>
          ))
        }
      </View>
      <ScrollView
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{paddingBottom:100}}
      >
{
      summary && 
      <View className="flex-row flex-wrap">
      {
        datesFromYearStart.map(date => {
          const dayWithHabits = summary.find(day => {
          return dayjs(date).isSame(day.date, 'day')
          })


          return(
          <HabitDay 
            key={date.toISOString()}
            date={date}
            amountOfHabit={dayWithHabits?.amount}
            amountCompleted={dayWithHabits?.completed}
            onPress={() => navigate('Habit', {date: date.toISOString() })}
          />
        )})
      }


      {
        amountOFDaysToFill > 0 && Array
        .from({ length: amountOFDaysToFill})
        .map((_, index) => (
          <View  key={index}
          className='bg-zinc-900 rounded-lg border-2 m-1 border-zinc-800 opacity-40' 
           style={{width: DAY_SIZE, height: DAY_SIZE}} 
          />
        ))
      }
    </View>
} 
    </ScrollView>
    </View>
  )
}