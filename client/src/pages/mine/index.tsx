import { useContext, useEffect } from 'react'
import { View, Image } from '@tarojs/components'
import { useDidHide, useDidShow, useReady } from '@tarojs/taro'
import { observer } from 'mobx-react'

import { TabIndexContext } from 'src/stores/tabBar'
import { user } from 'src/stores'

import "./index.scss"

const Mine = () => {
  const { dispatch } = useContext(TabIndexContext);

  // React Hooks
  useEffect(() => {}, [])

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {
    dispatch({
      type: "change",
      payload: "mine",
    });
  })

  // 对应 onHide
  useDidHide(() => {})

  return (
    <View className="mine-page">
      <View className="mine">
        <View className="info">
          <Image src={user.avatar} className="avatar" />
          <View className="message">
            <View className="name">{user.name}</View>
          </View>
        </View>
        <View className="content">
          <View className="operation"></View>
        </View>
      </View>
    </View>
  )
}

export default observer(Mine)

definePageConfig({
  navigationStyle: "custom"
});
