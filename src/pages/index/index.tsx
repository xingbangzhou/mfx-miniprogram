import {  memo, useEffect } from 'react'
import { View } from '@tarojs/components'
import { useDidHide, useDidShow, useReady } from '@tarojs/taro'
import './index.scss'
import TextField from '../../components/TextField'

const App = memo(function App() {
  // React Hooks
  useEffect(() => {})

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})


  return <View className='app'>
    <View><TextField /></View>
    <View></View>
    <View></View>
  </View>
})

export default App
