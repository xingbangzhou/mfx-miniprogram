import { memo, useContext, useEffect } from 'react'
import { CoverView, View } from "@tarojs/components"
import { useDidHide, useDidShow, useReady } from '@tarojs/taro'

import { TabIndexContext } from 'src/stores/tabBar'

import "./index.scss"

const NavBar = memo(function NavBar() {
  return (
    <CoverView className="nav-bar">
    </CoverView>
  )
})

const Manage: React.FC<unknown> = () => {
  const { dispatch } = useContext(TabIndexContext);
  // React Hooks
  useEffect(() => {}, [])

  // 对应 onReady
  useReady(() => {})

  // 对应 onShow
  useDidShow(() => {
    dispatch({
      type: "change",
      payload: "manage",
    });
  })

  // 对应 onHide
  useDidHide(() => {})

  return (
    <View className="manage-page">
      <NavBar />
      <View className="content">
        Manage
      </View>
    </View>
  );
};

export default Manage;

definePageConfig({
  navigationStyle: "custom"
});
