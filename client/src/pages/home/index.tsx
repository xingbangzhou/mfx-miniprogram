import { useContext, useEffect } from 'react'
import { View } from '@tarojs/components'
import { useDidHide, useDidShow, useReady } from '@tarojs/taro'
import { observer } from 'mobx-react'

import { TabIndexContext } from 'src/store/tabIndex'

import './index.scss'

function Home() {
  const { dispatch } = useContext(TabIndexContext);

  // React Hooks
  useEffect(() => {}, [])

  // 对应 onReady
  useReady(() => {})


  // 对应 onShow
  useDidShow(() => {
    dispatch({
      type: "change",
      payload: "home",
    });
  })

  // 对应 onHide
  useDidHide(() => {})


  return (
    <View className="homePage">
      Home
    </View>
  )
}

export default observer(Home)

definePageConfig({
  navigationStyle: "custom"
});
