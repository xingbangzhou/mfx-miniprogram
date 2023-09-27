import { useEffect } from 'react'
import { View } from '@tarojs/components'
import { useDidHide, useDidShow, useReady } from '@tarojs/taro'
import { observer } from '@tarojs/mobx'

import './index.scss'

function Index() {
  // React Hooks
  useEffect(() => {}, [])

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {})

  // 对应 onHide
  useDidHide(() => {})


  return (
    <View>
    </View>
  )
}

export default observer(Index)

definePageConfig({
  navigationBarTitleText: "mfx",
  enablePullDownRefresh: true,
  enableShareAppMessage: true,
  enableShareTimeline: true,
});
