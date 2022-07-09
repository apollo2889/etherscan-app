import React from 'react'
import { View } from '../View'

export const Loading = () => {
  return (
    <View className='fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black backdrop-blur bg-opacity-20'>
			<span className='mr-3 text-2xl'>Fetching Data</span>
      <View className='w-10 h-10 border-b-4 border-blue-500 rounded-full animate-spin border-primary text-primary'></View>
    </View>
  )
}
