import { useEffect, PropsWithChildren } from 'react'
// Taro 额外添加的 hooks 要从 '@tarojs/taro' 中引入
import { useDidShow, useDidHide } from '@tarojs/taro'

import './app.scss'

function App(props: PropsWithChildren) {
  // React Hooks
  useEffect(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})

  return (
    <>{props.children}</>
  )
}

export default App
